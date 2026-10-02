import OpenAI from "openai"

type Provider = "ollama" | "openai" | "groq" | "mistral" | "vireonix"

function clientFor(provider: Provider) {
  if (provider === "ollama") {
    // Ollama exposes an OpenAI-compatible API locally.
    return new OpenAI({
      apiKey: "ollama",
      baseURL: process.env.OLLAMA_BASE_URL || "http://127.0.0.1:11434/v1",
    })
  }
  if (provider === "openai") {
    const key = process.env.OPENAI_API_KEY
    if (!key) throw new Error("OPENAI_API_KEY is not configured.")
    return new OpenAI({ apiKey: key })
  }
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
  return new OpenAI({
    apiKey: process.env.VIREONIX_API_KEY || "unused",
    baseURL: "https://api.vireonix.ai/v1",
  })
}

export function providerName(p: Provider) {
  return p === "ollama"
    ? "Ollama (local)"
    : p === "openai"
      ? "OpenAI"
      : p === "groq"
        ? "Groq"
        : p === "mistral"
          ? "Mistral"
          : "Vireonix"
}

/**
 * Local-first AI routing.
 *
 * IMPORTANT: Ollama is intentionally the default and there is NO automatic
 * fallback from Ollama to a paid/cloud provider. This prevents an Ollama
 * failure, timeout, or missing model from silently consuming API quota.
 *
 * To explicitly enable a cloud provider for a local session, set:
 * AI_PROVIDER=openai|groq|mistral|vireonix
 *
 * Cloud providers are never attempted when AI_PROVIDER=ollama (the default).
 */
export async function chatWithFallback(options: any, opts?: { includeGroqCompound?: boolean }) {
  const selected = (process.env.AI_PROVIDER || "ollama").toLowerCase() as Provider
  const provider: Provider = selected

  if (provider === "ollama") {
    const model = process.env.OLLAMA_MODEL || "llama3.2"
    try {
      const completion = await clientFor("ollama").chat.completions.create({
        ...options,
        model,
      } as any)
      return { completion, provider: "ollama" as const }
    } catch (error) {
      throw new Error(
        "Local Ollama request failed. Make sure Ollama is running and the model '" +
        model +
        "' is installed (run: ollama pull " +
        model +
        "). No cloud API fallback was attempted."
      )
    }
  }

  if (provider === "openai") {
    const model = process.env.OPENAI_MODEL || "gpt-5.6-luna"
    const completion = await clientFor("openai").chat.completions.create({ ...options, model } as any)
    return { completion, provider }
  }

  if (provider === "groq") {
    const model = options.model === "groq/compound" && opts?.includeGroqCompound !== false
      ? "groq/compound"
      : (process.env.GROQ_WRITING_MODEL || "openai/gpt-oss-120b")
    const completion = await clientFor("groq").chat.completions.create({ ...options, model } as any)
    return { completion, provider }
  }

  if (provider === "mistral") {
    const model = process.env.MISTRAL_MODEL || "mistral-small-latest"
    const completion = await clientFor("mistral").chat.completions.create({ ...options, model } as any)
    return { completion, provider }
  }

  const model = process.env.VIREONIX_MODEL || "auto"
  const completion = await clientFor("vireonix").chat.completions.create({ ...options, model } as any)
  return { completion, provider }
}

export const defaultModel = process.env.OLLAMA_MODEL || "llama3.2"
