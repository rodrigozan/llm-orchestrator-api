export type ProviderName = "gemini" | "openai" | "anthropic";

export interface PromptRequest {
  prompt: string;
  complexity?: "low" | "high";
  preferredProvider?: ProviderName;
}

export interface PromptResponse {
  content: string;
  provider: ProviderName;
  tokenUsage: number;
  cached?: boolean;
}
