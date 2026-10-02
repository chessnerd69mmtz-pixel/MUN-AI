import { NextResponse } from "next/server"
import { chatWithFallback, type RuntimeApiKeys } from "@/lib/ai"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const prompt = typeof body?.prompt === "string" ? body.prompt.trim() : ""
    const mode = body?.mode === "api" ? "api" : "ollama"

    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required." }, { status: 400 })
    }

    const rawKeys = body?.apiKeys && typeof body.apiKeys === "object" ? body.apiKeys : {}
    const apiKeys: RuntimeApiKeys = {
      openai: typeof rawKeys.openai === "string" ? rawKeys.openai.trim() : "",
      groq: typeof rawKeys.groq === "string" ? rawKeys.groq.trim() : "",
      mistral: typeof rawKeys.mistral === "string" ? rawKeys.mistral.trim() : "",
      unlimitless: typeof rawKeys.unlimitless === "string" ? rawKeys.unlimitless.trim() : "",
    }

    const { completion, provider } = await chatWithFallback({
      messages: [
        {
          role: "system",
          content: "You are MUN AI, a careful Model United Nations preparation assistant. Do not invent facts or citations. Give practical, structured MUN guidance.",
        },
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
