import { NextResponse } from "next/server"
import { chatWithFallback, type RuntimeApiKeys } from "@/lib/ai"
import { buildUNContext } from "@/lib/un-knowledge"
import { buildNivSystemPrompt } from "@/lib/niv-engine"
import { buildNivIntelligenceContext } from "@/lib/mun-intelligence"

function clean(value: unknown, max = 500) {
  return typeof value === "string" ? value.trim().slice(0, max) : ""
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const prompt = clean(body?.prompt, 8000)
    const mode = body?.mode === "api" ? "api" : "ollama"
    const rawContext = body?.delegateContext && typeof body.delegateContext === "object"
      ? body.delegateContext
      : {}
    const country = clean(rawContext.country, 120)
    const committee = clean(rawContext.committee, 160)
    const rawAgendas = Array.isArray(rawContext.agendas) ? rawContext.agendas : []
    const agendas = rawAgendas.map((agenda: unknown) => clean(agenda, 500)).filter(Boolean).slice(0, 2)

    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required." }, { status: 400 })
    }

    if (!country) {
      return NextResponse.json({ error: "Set your country/delegation before asking MUN AI." }, { status: 400 })
    }

    if (!committee) {
      return NextResponse.json({ error: "Set your committee before asking MUN AI." }, { status: 400 })
    }

    if (agendas.length === 0) {
      return NextResponse.json({ error: "Set at least one committee agenda before asking MUN AI." }, { status: 400 })
    }

    const rawHistory = Array.isArray(body?.conversationHistory) ? body.conversationHistory : []
    const conversationHistory = rawHistory
      .filter((item: unknown) => item && typeof item === "object")
      .slice(-8)
      .map((item: any) => ({
        role: item.role === "assistant" ? "assistant" : "user",
        content: clean(item.content, 2500),
      }))
      .filter((item: { content: string }) => item.content)

    const rawKeys = body?.apiKeys && typeof body.apiKeys === "object" ? body.apiKeys : {}
    const apiKeys: RuntimeApiKeys = {
      openai: typeof rawKeys.openai === "string" ? rawKeys.openai.trim() : "",
      groq: typeof rawKeys.groq === "string" ? rawKeys.groq.trim() : "",
      mistral: typeof rawKeys.mistral === "string" ? rawKeys.mistral.trim() : "",
      unlimitless: typeof rawKeys.unlimitless === "string" ? rawKeys.unlimitless.trim() : "",
    }

    const delegateContext = [
      "DELEGATE CONTEXT — ALWAYS ACTIVE",
      `Country/delegation: ${country}`,
      `Committee: ${committee}`,
      `Committee agenda 1: ${agendas[0]}`,
      agendas[1] ? `Committee agenda 2: ${agendas[1]}` : "",
      "",
      "Rules:",
      "- Treat the stated country/delegation as the user's represented state for MUN purposes.",
      "- Keep both agendas in mind throughout the conversation/request, even when the user asks a broader question.",
      "- When the request concerns an agenda, tailor analysis to the country/delegation's interests, stated-policy constraints, likely diplomatic priorities, and plausible MUN negotiating position.",
      "- Do not invent a country's official position. Distinguish verified country policy from reasonable MUN strategy and say when current country-specific research is needed.",
      "- Do not silently substitute another country, agenda, or committee.",
      "- If an answer involves both agendas, clearly separate the analysis by agenda.",
      "- Current positions, recent votes, treaties, officeholders, statistics, and other time-sensitive country facts require current research rather than relying only on the hardcoded UN knowledge base.",
    ].filter(Boolean).join("\n")

    const retrievalPrompt = `${delegateContext}\n\nUSER REQUEST:\n${prompt}`
    const unContext = buildUNContext(retrievalPrompt)
    const intelligenceContext = buildNivIntelligenceContext(country, committee)

    const systemPrompt = buildNivSystemPrompt({
      prompt,
      delegateContext,
      unContext: unContext + "\n\n" + intelligenceContext,
      conversationContext: conversationHistory.length
        ? conversationHistory.map((item: { role: string; content: string }) => `${item.role.toUpperCase()}: ${item.content}`).join("\n\n")
        : "",
    })

    const { completion, provider } = await chatWithFallback({
      temperature: 0.2,
      top_p: 0.9,
      max_tokens: 1800,
      messages: [
        { role: "system", content: systemPrompt },
        ...conversationHistory,
        { role: "user", content: prompt },
      ],
    }, { mode, apiKeys })

    return NextResponse.json({
      answer: completion.choices?.[0]?.message?.content || "No response returned.",
      provider,
    })
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "AI request failed." },
      { status: 500 },
    )
  }
}
