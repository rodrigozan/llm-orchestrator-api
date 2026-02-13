import { env } from "../../../config/env";

export function apiKeyGuard(): void {
  if (!env.OPENAI_API_KEY && !env.GEMINI_API_KEY && !env.ANTHROPIC_API_KEY) {
    throw new Error("No provider API key configured.");
  }
}
