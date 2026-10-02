const http = require("http");
const { spawn } = require("child_process");

const HOST = "127.0.0.1";
const PORT = Number(process.env.MUN_AI_BRIDGE_PORT || 11435);
const OLLAMA = process.env.OLLAMA_BASE_URL || "http://127.0.0.1:11434";

function send(res, status, data, type = "application/json") {
  const body = typeof data === "string" ? data : JSON.stringify(data);
  res.writeHead(status, {
    "Content-Type": type,
    "Content-Length": Buffer.byteLength(body),
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Cache-Control": "no-store",
  });
  res.end(body);
}

async function proxy(path, method, body) {
  const target = new URL(path, OLLAMA.endsWith("/") ? OLLAMA : OLLAMA + "/");
  const response = await fetch(target, {
    method,
    headers: body ? { "Content-Type": "application/json" } : undefined,
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await response.text();
  return { status: response.status, text, contentType: response.headers.get("content-type") || "application/json" };
}

function startOllamaIfNeeded() {
  const child = spawn("ollama", ["serve"], {
    detached: true,
    stdio: "ignore",
    windowsHide: true,
  });
  child.unref();
}

const server = http.createServer(async (req, res) => {
  if (req.method === "OPTIONS") return send(res, 204, "");
  if (!req.url) return send(res, 400, { error: "Missing request path." });

  try {
    if (req.url === "/health") {
      try {
        const r = await proxy("/api/version", "GET");
        return send(res, r.status, { bridge: true, ollama: r.status >= 200 && r.status < 300 });
      } catch {
        try { startOllamaIfNeeded(); } catch {}
        return send(res, 503, { bridge: true, ollama: false, error: "Ollama is not reachable yet. Start Ollama and retry." });
      }
    }

    if (req.url === "/api/tags") {
      try {
        const r = await proxy("/api/tags", "GET");
        return send(res, r.status, r.text, r.contentType);
      } catch {
        try { startOllamaIfNeeded(); } catch {}
        return send(res, 503, { error: "Ollama is not running. Start Ollama and try again." });
      }
    }

    if (req.url === "/v1/chat/completions" && req.method === "POST") {
      let raw = "";
      req.on("data", chunk => { raw += chunk; if (raw.length > 2_000_000) req.destroy(); });
      req.on("end", async () => {
        let body;
        try { body = JSON.parse(raw || "{}"); } catch { return send(res, 400, { error: "Invalid JSON." }); }
        try {
          const r = await proxy("/v1/chat/completions", "POST", body);
          send(res, r.status, r.text, r.contentType);
        } catch {
          try { startOllamaIfNeeded(); } catch {}
          send(res, 503, { error: "Cannot reach Ollama at http://127.0.0.1:11434. Start Ollama and retry." });
        }
      });
      return;
    }

    send(res, 404, { error: "MUN AI Ollama bridge endpoint not found." });
  } catch (error) {
    send(res, 500, { error: error instanceof Error ? error.message : "Bridge error." });
  }
});

server.listen(PORT, HOST, () => {
  console.log("MUN AI Ollama bridge running at http://" + HOST + ":" + PORT);
  console.log("Forwarding to " + OLLAMA);
  console.log("Keep this window open while using the GitHub Pages Ollama mode.");
});
