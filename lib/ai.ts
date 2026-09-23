import OpenAI from "openai"

type Provider = "groq" | "mistral" | "vireonix"

function clientFor(provider: Provider) {
  if (provider === "groq") {
    const key = process.env.GROQ_API_KEY
    if (!key) throw new Error("GROQ_API_KEY is not configured.")
    return new OpenAI({ apiKey: key, baseURL: "https://api.groq.com/openai/v1" })
  }
  if (provider === "mistral") {
    const key = process.env.MISTRAL_API_KEY
    if (!key) throw new Error("MISTRAL_API_KEY is not configured.")
    return new OpenAI({ apiKey: key, baseURL: "https://api.mistral.ai/v1" })
  }
  // Vireonix currently exposes an OpenAI-compatible endpoint without requiring a key.
  return new OpenAI({ apiKey: process.env.VIREONIX_API_KEY || "unused", baseURL: "https://api.vireonix.ai/v1" })
}

export function providerName(p: Provider) {
  return p === "groq" ? "Groq" : p === "mistral" ? "Mistral" : "Vireonix"
}

export async function chatWithFallback(options: any, opts?: { includeGroqCompound?: boolean }) {
  const providers: Provider[] = ["groq", "mistral", "vireonix"]
  let lastError: any = null
  for (const provider of providers) {
    try {
      if (provider === "groq" && options.model === "groq/compound" && opts?.includeGroqCompound !== false) {
        const c = await clientFor(provider).chat.completions.create(options as any)
        return { completion: c, provider }
      }
      const model = provider === "groq"
        ? (process.env.GROQ_WRITING_MODEL || "openai/gpt-oss-120b")
        : provider === "mistral"
          ? (process.env.MISTRAL_MODEL || "mistral-small-latest")
          : (process.env.VIREONIX_MODEL || "auto")
      const c = await clientFor(provider).chat.completions.create({ ...options, model } as any)
      return { completion: c, provider }
    } catch (e) {
      lastError = e
      // Continue immediately to the next provider on quota, timeout, network or server errors.
    }
  }
  throw lastError || new Error("All AI providers failed.")
}

export const defaultModel = process.env.GROQ_MODEL || "groq/compound"
