"use client"

import { useState } from "react"

export default function Home() {
  const [key, setKey] = useState("")
  const [prompt, setPrompt] = useState("Help me prepare a strong MUN strategy for my agenda.")
  const [answer, setAnswer] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function run() {
    setLoading(true); setError(""); setAnswer("")
    try {
      if (!key.trim()) throw new Error("Enter your OpenAI API key first.")
      const r = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {"Content-Type":"application/json","Authorization":`Bearer ${key.trim()}`},
        body: JSON.stringify({
          model: "gpt-5.6-luna",
          messages: [
            {role:"system", content:"You are MUN AI, a careful Model United Nations preparation assistant. Do not invent facts or citations. Give practical, structured MUN guidance."},
            {role:"user", content: prompt}
          ]
        })
      })
      const data = await r.json()
      if (!r.ok) throw new Error(data?.error?.message || `OpenAI request failed (${r.status})`)
      setAnswer(data?.choices?.[0]?.message?.content || "No response returned.")
    } catch (e) {
      setError(e instanceof Error ? e.message : "Request failed.")
    } finally { setLoading(false) }
  }

  return <main className="shell">
    <section className="card">
      <div className="badge">MUN AI</div>
      <h1>Delegate Intelligence</h1>
      <p>Local MUN workspace with optional OpenAI API access. Your key is used directly by your browser and is not stored by this page.</p>
      <label>OpenAI API key</label>
      <input type="password" value={key} onChange={e=>setKey(e.target.value)} placeholder="sk-..." />
      <label>What do you need help with?</label>
      <textarea value={prompt} onChange={e=>setPrompt(e.target.value)} />
      <button onClick={run} disabled={loading}>{loading ? "Thinking…" : "Ask MUN AI"}</button>
      {error && <div className="error">{error}</div>}
      {answer && <article><h2>Response</h2><pre>{answer}</pre></article>}
      <p className="note">For the full GitHub Pages interface, open the deployed Pages site from the repository README.</p>
    </section>
  </main>
}
