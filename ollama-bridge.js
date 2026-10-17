const http = require("http");
const { spawn } = require("child_process");
const HOST = "127.0.0.1";
const PORT = Number(process.env.MUN_AI_BRIDGE_PORT || 11435);
const configured = process.env.OLLAMA_BASE_URL || "http://127.0.0.1:11434";
const OLLAMA = configured.replace(/\/v1\/?$/, "");
const DEFAULT_MODEL = process.env.MUN_AI_OLLAMA_MODEL || "llama3.2";

function allowedOrigin(origin) {
  return !origin || origin === "https://chessnerd69mmtz-pixel.github.io" ||
    origin === "http://localhost:3000" || origin === "http://127.0.0.1:3000";
}
function send(res, status, data, type = "application/json", origin = "") {
  const body = typeof data === "string" ? data : JSON.stringify(data);
  const headers = {"Content-Type":type,"Content-Length":Buffer.byteLength(body),
    "Access-Control-Allow-Methods":"GET,POST,OPTIONS","Access-Control-Allow-Headers":"Content-Type, Authorization",
    "Access-Control-Allow-Private-Network":"true","Cache-Control":"no-store"};
  if (allowedOrigin(origin)) headers["Access-Control-Allow-Origin"] = origin || "*";
  res.writeHead(status, headers); res.end(body);
}
async function proxy(path, method, body) {
  const target = new URL(path, OLLAMA.endsWith("/") ? OLLAMA : OLLAMA + "/");
  const response = await fetch(target, {method,headers:body?{"Content-Type":"application/json"}:undefined,body:body?JSON.stringify(body):undefined});
  return {status:response.status,text:await response.text(),contentType:response.headers.get("content-type")||"application/json"};
}
function startOllamaIfNeeded() {
  const child=spawn("ollama",["serve"],{detached:true,stdio:"ignore",windowsHide:true}); child.unref();
}
function decodeHtml(value) {
  return String(value||"").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#x27;|&#39;/g,"'")
    .replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim();
}
function extractSearchResults(html) {
  const results=[];
  const blocks=String(html||"").split(/class="result(?:\s|")/i).slice(1);
  for(const block of blocks){
    const lm=block.match(/<a[^>]+class="result__a"[^>]+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/i);
    const sm=block.match(/class="result__snippet"[^>]*>([\s\S]*?)<\/(?:a|div)/i);
    if(!lm)continue;
    let url=lm[1].replace(/&amp;/g,"&");const redir=url.match(/[?&]uddg=([^&]+)/);
    if(redir){try{url=decodeURIComponent(redir[1])}catch{}}
    if(!/^https?:\/\//i.test(url)||/duckduckgo\.com/i.test(url))continue;
    results.push({title:decodeHtml(lm[2]).slice(0,240),url,snippet:decodeHtml(sm?sm[1]:"").slice(0,700)});
    if(results.length>=6)break;
  }return results;
}
function requestNeedsResearch(text) {
  return /(research|latest|current|recent|source|citation|evidence|position paper|draft resolution|working paper|statistics|voting record|treaty|resolution number|country position|official position|what has the un|united nations|find information|verify|fact.check)/i.test(text);
}
async function searchWeb(query) {
  const clean=String(query||"").replace(/\s+/g," ").trim().slice(0,350);if(!clean)return [];
  const all=[];
  for(const q of ["site:un.org "+clean,clean+" official government position"]){
    try{
      const response=await fetch("https://html.duckduckgo.com/html/?q="+encodeURIComponent(q),{
        headers:{"User-Agent":"Mozilla/5.0 (compatible; MUN-AI/1.0)","Accept":"text/html"},signal:AbortSignal.timeout(7000)});
      if(response.ok)all.push(...extractSearchResults(await response.text()));
      if(all.length>=6)break;
    }catch{}
  }
  const seen=new Set();return all.filter(x=>!seen.has(x.url)&&seen.add(x.url)).slice(0,6);
}
function getLatestUserText(messages) {
  for(let i=(messages||[]).length-1;i>=0;i--)if(messages[i]&&messages[i].role==="user")return String(messages[i].content||"");
  return "";
}
async function addResearchContext(body) {
  if(!body||!Array.isArray(body.messages))return {body,researched:false,count:0};
  const userText=getLatestUserText(body.messages);if(!requestNeedsResearch(userText))return {body,researched:false,count:0};
  const results=await searchWeb(userText);
  if(!results.length){
    body.messages.push({role:"system",content:"LIVE WEB RETRIEVAL NOTE: Search returned no usable results. Use the supplied local UN knowledge database and user-provided research. Do not claim to have verified current facts or invent citations; mark facts needing verification."});
    return {body,researched:false,count:0};
  }
  const context=results.map((r,i)=>"["+(i+1)+"] "+r.title+"\nURL: "+r.url+"\nSearch snippet: "+(r.snippet||"(no snippet)")).join("\n\n");
  body.messages.push({role:"system",content:"LIVE RESEARCH RESULTS (retrieved for this request; snippets are leads, not proof):\n"+context+
    "\n\nRESEARCH RULES: Prefer official UN/government sources. Cite only URLs supplied here or documents present in the local knowledge context. Do not claim to have opened a page when only its search snippet was retrieved. Integrate this with the local UN/MUN knowledge already provided. Preserve the assigned country's perspective and committee mandate. Separate verified facts from current leads and flag claims needing confirmation."});
  return {body,researched:true,count:results.length};
}
async function handleChat(req,res,origin) {
  let raw="";req.on("data",chunk=>{raw+=chunk;if(raw.length>2000000)req.destroy()});
  req.on("end",async()=>{
    let body;try{body=JSON.parse(raw||"{}")}catch{return send(res,400,{error:"Invalid JSON."},"application/json",origin)}
    try{
      const tr=await proxy("/api/tags","GET");
      if(tr.status<200||tr.status>=300)return send(res,503,{error:"Ollama is not responding. Open Ollama and retry."},"application/json",origin);
      let tags={};try{tags=JSON.parse(tr.text)}catch{}
      const installed=(tags.models||[]).map(m=>String(m.name||"").replace(/:latest$/,""));
      const requested=String(body.model||DEFAULT_MODEL),normalized=requested.replace(/:latest$/,"");
      const available=installed.find(m=>m===normalized)||installed.find(m=>m.split(":")[0]===normalized.split(":")[0]);
      if(!available)return send(res,400,{error:"Ollama model '"+requested+"' is not installed. Installed models: "+(installed.join(", ")||"none")+". Run 'ollama pull "+DEFAULT_MODEL+"' or set MUN_AI_OLLAMA_MODEL to an installed model.",installedModels:installed},"application/json",origin);
      body.model=available;
      const enriched=await addResearchContext(body);
      const response=await proxy("/v1/chat/completions","POST",enriched.body);
      if(response.status<200||response.status>=300)return send(res,response.status,response.text,response.contentType,origin);
      let output;try{output=JSON.parse(response.text)}catch{output=null}
      return send(res,200,output||response.text,output?"application/json":response.contentType,origin);
    }catch(error){
      try{startOllamaIfNeeded()}catch{}
      return send(res,503,{error:"Ollama request failed at "+OLLAMA+". "+(error&&error.message?error.message:"Unknown connection error.")},"application/json",origin);
    }
  });
}
const server=http.createServer(async(req,res)=>{
  const origin=req.headers.origin||"";
  if(req.method==="OPTIONS")return send(res,204,"","application/json",origin);
  if(!req.url)return send(res,400,{error:"Missing request path."},"application/json",origin);
  try{
    if(req.url==="/health"){
      try{
        const r=await proxy("/api/version","GET"),t=await proxy("/api/tags","GET");let models=[];
        try{models=(JSON.parse(t.text).models||[]).map(m=>m.name)}catch{}
        return send(res,200,{bridge:true,ollama:r.status>=200&&r.status<300,models,defaultModel:DEFAULT_MODEL},"application/json",origin);
      }catch{
        try{startOllamaIfNeeded()}catch{}
        return send(res,503,{bridge:true,ollama:false,error:"Ollama is not reachable. Start Ollama and retry."},"application/json",origin);
      }
    }
    if(req.url==="/api/tags"){
      try{const r=await proxy("/api/tags","GET");return send(res,r.status,r.text,r.contentType,origin)}
      catch{try{startOllamaIfNeeded()}catch{}return send(res,503,{error:"Ollama is not running. Start Ollama and try again."},"application/json",origin)}
    }
    if(req.url==="/v1/chat/completions"&&req.method==="POST")return handleChat(req,res,origin);
    return send(res,404,{error:"MUN AI Ollama bridge endpoint not found."},"application/json",origin);
  }catch(error){return send(res,500,{error:error instanceof Error?error.message:"Bridge error."},"application/json",origin)}
});
server.listen(PORT,HOST,()=>{console.log("MUN AI Ollama bridge running at http://"+HOST+":"+PORT);console.log("Forwarding to "+OLLAMA);console.log("Default model: "+DEFAULT_MODEL);console.log("Keep this window open while using Ollama mode.");});
