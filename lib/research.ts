export type Source = {
  title: string
  url: string
  domain: string
  type: "UN" | "Reliable"
  snippet?: string
}

const reliableDomains = [
  "un.org",
  "digitallibrary.un.org",
  "documents.un.org",
  "treaties.un.org",
  "ohchr.org",
  "who.int",
  "worldbank.org",
  "imf.org",
  "oecd.org",
  "icrc.org",
  "unhcr.org",
  "undp.org",
  "unep.org",
  "unodc.org",
  "wto.org",
  "iaea.org",
  "nato.int",
  "europa.eu",
]

function enc(value: string) {
  return encodeURIComponent(value)
}

export async function searchUN(query: string): Promise<Source[]> {
  const url = `https://digitallibrary.un.org/search?p=${enc(query)}&of=recjson&rg=20`
  const res = await fetch(url, { headers: { "User-Agent": "MUN-AI-research/1.0" }, cache: "no-store" })
  if (!res.ok) throw new Error(`UN Digital Library returned ${res.status}`)
  const data = await res.json()
  const records = Array.isArray(data) ? data : data.records ?? []
  return records.slice(0, 20).map((r: any) => {
    const title = r.title || r.titles?.[0] || r.metadata?.title || `UN record ${r.recid ?? ""}`
    const recid = r.recid ?? r.id ?? r.control_number
    return {
      title: String(title).replace(/<[^>]+>/g, ""),
      url: recid ? `https://digitallibrary.un.org/record/${recid}` : `https://digitallibrary.un.org/search?p=${enc(query)}`,
      domain: "digitallibrary.un.org",
      type: "UN",
      snippet: r.abstract || r.notes || r.series || "",
    }
  })
}

export function researchSearchLinks(query: string): Source[] {
  return [
    { title: "UN Digital Library", url: `https://digitallibrary.un.org/search?p=${enc(query)}`, domain: "digitallibrary.un.org", type: "UN" },
    { title: "UN Official Documents", url: "https://documents.un.org/", domain: "documents.un.org", type: "UN" },
    { title: "UN Treaty Collection", url: "https://treaties.un.org/", domain: "treaties.un.org", type: "UN" },
    ...reliableDomains.slice(5, 12).map(domain => ({
      title: domain,
      url: `https://${domain}/`,
      domain,
      type: "Reliable" as const,
    })),
  ]
}

export function domainIsReliable(url: string) {
  try {
    const host = new URL(url).hostname.replace(/^www./, "")
    return reliableDomains.some(d => host === d || host.endsWith(`.${d}`))
  } catch {
    return false
  }
}
