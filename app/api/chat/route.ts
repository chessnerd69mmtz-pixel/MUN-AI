import { NextResponse } from "next/server"
import { chatWithFallback } from "@/lib/ai"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const prompt = typeof body?.prompt === "string" ? body.prompt.trim() : ""

    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required." }, { status: 400 })
    }

    const { completion, provider } = await chatWithFallback({
      messages: [
        {
          role: "system",
          content: "You are MUN AI, a careful Model United Nations preparation assistant. Do not invent facts or citations. Give practical, structured MUN guidance.",
        },
        { role: "user", content: prompt },
      ],
    })

    return NextResponse.json({
      answer: completion.choices?.[0]?.message?.content || "No response returned.",
      provider,
    })
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Local AI request failed." },
      { status: 500 },
    )
  }
}
