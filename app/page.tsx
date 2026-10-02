"use client"

import { useEffect, useState } from "react"

type Mode = "ollama" | "api"

const DEFAULT_CONTEXT = {
  country: "",
  agenda1: "",
  agenda2: "",
}

export default function Home() {
  const [mode, setMode] = useState<Mode>("ollama")
  const [prompt, setPrompt] = useState("Help me prepare a strong MUN strategy for my agenda.")
  const [country, setCountry] = useState(DEFAULT_CONTEXT.country)
  const [agenda1, setAgenda1] = useState(DEFAULT_CONTEXT.agenda1)
  const [agenda2, setAgenda2] = useState(DEFAULT_CONTEXT.agenda2)
  const [answer, setAnswer] = useState("")
  const [provider, setProvider] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [keys, setKeys] = useState({ openai: "", groq: "", mistral: "", unlimitless: "" })

  useEffect(() => {
    try {
      const saved = localStorage.getItem("mun-ai-delegate-context")
      if (saved) {
        const parsed = JSON.parse(saved)
        setCountry(typeof parsed.country === "string" ? parsed.country : "")
        setAgenda1(typeof parsed.agenda1 === "string" ? parsed.agenda1 : "")
        setAgenda2(typeof parsed.agenda2 === "string" ? parsed.agenda2 : "")
      }
    } catch {
      // Ignore malformed local preferences.
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(
      "mun-ai-delegate-context",
      JSON.stringify({ country, agenda1, agenda2 }),
    )
  }, [country, agenda1, agenda2])

  async function run() {
    setLoading(true); setError(""); setAnswer("")
    try {
      const r = await fetch("/api/chat", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({
          prompt,
          mode,
          delegateContext: { country, agendas: [agenda1, agenda2].filter(Boolean) },
          apiKeys: mode === "api" ? keys : undefined,
        })
      })
      const data = await r.json()
      if (!r.ok) throw new Error(data?.error || "AI request failed")
      setAnswer(data?.answer || "No response returned.")
      setProvider(data?.provider || "")
    } catch (e) {
      setError(e instanceof Error ? e.message : "Request failed.")
    } finally { setLoading(false) }
  }

  return <main className="shell">
    <section className="card">
      <div className="badge">MUN AI</div>
      <h1>Delegate Intelligence</h1>
      <p>Your delegate profile stays active for every AI request. Set your country and agenda(s) once; they are saved locally in this browser.</p>

      <h2>Delegate Context</h2>
      <label>Country / Delegation</label>
      <input
        value={country}
        onChange={e => setCountry(e.target.value)}
        placeholder="e.g. India"
        autoComplete="country-name"
      />

      <label>Agenda 1</label>
      <input
        value={agenda1}
        onChange={e => setAgenda1(e.target.value)}
        placeholder="Enter your first committee agenda"
      />

      <label>Agenda 2 <span className="optional">(optional)</span></label>
      <input
        value={agenda2}
        onChange={e => setAgenda2(e.target.value)}
        placeholder="Enter your second committee agenda"
      />

      <div className="context-status">
        <strong>Always-on context:</strong>{" "}
        {country || "Country not set"} • {agenda1 || "Agenda 1 not set"}
        {agenda2 ? " • " + agenda2 : ""}
      </div>

      <h2>AI Mode</h2>
      <div className="mode-grid">
        <button className={mode === "ollama" ? "selected" : ""} onClick={() => setMode("ollama")}>
          Ollama Only
          <small>Private • Local • No API usage</small>
        </button>
        <button className={mode === "api" ? "selected" : ""} onClick={() => setMode("api")}>
          API Keys
          <small>OpenAI • Groq • Mistral • Unlimitless</small>
        </button>
      </div>

      {mode === "api" && <div className="keys-panel">
        <h2>API Keys</h2>
        <p>Keys are sent to your local Next.js server for the request and are not saved by this page.</p>
        {([
          ["openai", "OpenAI API Key"],
          ["groq", "Groq API Key"],
          ["mistral", "Mistral API Key"],
          ["unlimitless", "Unlimitless API Key"],
        ] as const).map(([name, label]) => (
          <label key={name}>
            {label}
            <input
              type="password"
              value={keys[name]}
              onChange={e => setKeys(k => ({...k, [name]: e.target.value}))}
              placeholder={"Enter " + label}
              autoComplete="off"
            />
          </label>
        ))}
        <p className="note">API routing tries configured providers in this order: OpenAI → Groq → Mistral → Unlimitless. Later keys are used only if an earlier configured provider fails.</p>
      </div>}

      <label>What do you need help with?</label>
      <textarea value={prompt} onChange={e=>setPrompt(e.target.value)} />
      <button onClick={run} disabled={loading}>
        {loading ? (mode === "ollama" ? "Thinking locally…" : "Thinking with API…") : "Ask MUN AI"}
      </button>

      {error && <div className="error">{error}</div>}
      {answer && <article><h2>Response</h2><div className="note">Provider used: {provider}</div><pre>{answer}</pre></article>}

      {mode === "ollama"
        ? <p className="note">Local model: llama3.2 via Ollama. Cloud APIs are not used in this mode.</p>
        : <p className="note">API mode is opt-in. Your keys are used only for the current request and are not written into the repository.</p>}
    </section>
  </main>
}
