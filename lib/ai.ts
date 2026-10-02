import OpenAI from "openai"

type Provider = "ollama" | "groq" | "mistral" | "unlimitless"

export type RuntimeApiKeys = {
  groq?: string
  mistral?: string
  unlimitless?: string
}

function clientFor(provider: Provider, keys?: RuntimeApiKeys) {
  if (provider === "ollama") {
    return new OpenAI({
      apiKey: "ollama",
      baseURL: process.env.OLLAMA_BASE_URL || "http://127.0.0.1:11434/v1",
    })
  }
  if (provider === "groq") {
    const key = keys?.groq || process.env.GROQ_API_KEY
    if (!key) throw new Error("Groq API key is not configured.")
    return new OpenAI({ apiKey: key, baseURL: "https://api.groq.com/openai/v1" })
  }
  if (provider === "mistral") {
    const key = keys?.mistral || process.env.MISTRAL_API_KEY
    if (!key) throw new Error("Mistral API key is not configured.")
    return new OpenAI({ apiKey: key, baseURL: "https://api.mistral.ai/v1" })
  }

  const key = keys?.unlimitless || process.env.UNLIMITLESS_API_KEY
  if (!key) throw new Error("Unlimitless API key is not configured.")
  // Keep this endpoint configurable because the Unlimitless-compatible endpoint
  // used by the original project may differ by account/deployment.
  return new OpenAI({
    apiKey: key,
    baseURL: process.env.UNLIMITLESS_BASE_URL || "https://api.vireonix.ai/v1",
  })
}

export function providerName(p: Provider) {
  return p === "ollama"
    ? "Ollama (local)"
    : p === "groq"
        ? "Groq"
        : p === "mistral"
          ? "Mistral"
          : "Unlimitless"
}

const cloudProviders: Provider[] = ["groq", "mistral", "unlimitless"]

async function runProvider(provider: Provider, options: any, keys?: RuntimeApiKeys, opts?: { includeGroqCompound?: boolean }) {
  if (provider === "ollama") {
    const model = process.env.OLLAMA_MODEL || "llama3.2"
    const completion = await clientFor("ollama", keys).chat.completions.create({ ...options, model } as any)
    return { completion, provider: "ollama" as const }
  }
  if (provider === "groq") {
    const model = options.model === "groq/compound" && opts?.includeGroqCompound !== false
      ? "groq/compound"
      : (process.env.GROQ_WRITING_MODEL || "openai/gpt-oss-120b")
    const completion = await clientFor("groq", keys).chat.completions.create({ ...options, model } as any)
    return { completion, provider }
  }
  if (provider === "mistral") {
    const model = process.env.MISTRAL_MODEL || "mistral-small-latest"
    const completion = await clientFor("mistral", keys).chat.completions.create({ ...options, model } as any)
    return { completion, provider }
  }

  const model = process.env.UNLIMITLESS_MODEL || "auto"
  const completion = await clientFor("unlimitless", keys).chat.completions.create({ ...options, model } as any)
  return { completion, provider }
}

/**
 * Uses Ollama only by default.
 *
 * In API mode, the four user-supplied keys form an explicit fallback pool:
 * Groq -> Mistral -> Unlimitless. A later provider is only tried
 * when an earlier configured provider fails, so keys are not all consumed
 * for every successful request.
 */
export async function chatWithFallback(
  options: any,
  opts?: { includeGroqCompound?: boolean; mode?: "ollama" | "api"; apiKeys?: RuntimeApiKeys },
) {
  const mode = opts?.mode || ((process.env.AI_PROVIDER || "ollama").toLowerCase() === "ollama" ? "ollama" : "api")

  if (mode === "ollama") {
    try {
      return await runProvider("ollama", options, undefined, opts)
    } catch {
      const model = process.env.OLLAMA_MODEL || "llama3.2"
      throw new Error(
        "Local Ollama request failed. Make sure Ollama is running and the model '" +
        model +
        "' is installed (run: ollama pull " +
        model +
        "). No cloud API fallback was attempted."
      )
    }
  }

  const keys = opts?.apiKeys || {}
  const configured = cloudProviders.filter(p =>
    p === "groq" ? !!keys.groq || !!process.env.GROQ_API_KEY :
    p === "mistral" ? !!keys.mistral || !!process.env.MISTRAL_API_KEY :
    !!keys.unlimitless || !!process.env.UNLIMITLESS_API_KEY
  )

  if (!configured.length) {
    throw new Error("API mode is selected, but no API keys were provided.")
  }

  const errors: string[] = []
  for (const provider of configured) {
    try {
      return await runProvider(provider, options, keys, opts)
    } catch (error) {
      errors.push(provider + ": " + (error instanceof Error ? error.message : "request failed"))
    }
  }

  throw new Error("All configured API providers failed. " + errors.join(" | "))
}

export const defaultModel = process.env.OLLAMA_MODEL || "llama3.2"
