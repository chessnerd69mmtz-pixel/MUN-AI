import OpenAI from "openai"
export function getGroq() {
  const key = process.env.GROQ_API_KEY
  if (!key) throw new Error("GROQ_API_KEY is not configured. Run setup.bat again and enter your key.")
  return new OpenAI({ apiKey: key, baseURL: "https://api.groq.com/openai/v1" })
}
export const defaultModel = process.env.GROQ_MODEL || "groq/compound"
