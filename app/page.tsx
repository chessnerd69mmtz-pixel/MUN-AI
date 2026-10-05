"use client"

import { useEffect, useState } from "react"

export default function Home() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), 0)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <main style={{ minHeight: "100vh", margin: 0, padding: 0, background: "#f4f7fb" }}>
      {!ready && (
        <div style={{
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          fontFamily: "system-ui, sans-serif",
          color: "#667085"
        }}>
          Loading MUN AI…
        </div>
      )}
      <iframe
        title="MUN AI"
        src="/munai/index.html"
        style={{
          display: ready ? "block" : "none",
          width: "100%",
          height: "100vh",
          minHeight: "100vh",
          border: 0,
          background: "#f4f7fb"
        }}
      />
    </main>
  )
}
