"use client"

import { useState } from "react"

export default function Home() {
  const [prompt, setPrompt] = useState("Help me prepare a strong MUN strategy for my agenda.")
  const [answer, setAnswer] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function run() {
    setLoading(true); setError(""); setAnswer("")
    try {
      const r = await fetch("/api/chat", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({ prompt })
      })
      const data = await r.json()
      if (!r.ok) throw new Error(data?.error || `Local Ollama request failed (${r.status})`)
      setAnswer(data?.answer || "No response returned.")
    } catch (e) {
      setError(e instanceof Error ? e.message : "Request failed.")
    } finally { setLoading(false) }
  }

  return <main className="shell">
    <section className="card">
      <div className="badge">MUN AI</div>
      <h1>Delegate Intelligence</h1>
      <p>Running in local Ollama mode. AI requests stay on this computer and do not use OpenAI, Groq or Mistral API tokens.</p>
      <label>What do you need help with?</label>
      <textarea value={prompt} onChange={e=>setPrompt(e.target.value)} />
      <button onClick={run} disabled={loading}>{loading ? "Thinking locally…" : "Ask MUN AI"}</button>
      {error && <div className="error">{error}</div>}
      {answer && <article><h2>Response</h2><pre>{answer}</pre></article>}
      <p className="note">Local model: llama3.2 via Ollama. Make sure Ollama is running before using AI features.</p>
    </section>
  </main>
}
