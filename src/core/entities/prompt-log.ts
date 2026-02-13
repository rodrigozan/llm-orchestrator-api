import { ProviderName } from "../../@types/llm";

export interface PromptLog {
  prompt: string;
  provider: ProviderName;
  tokenUsage: number;
  cached: boolean;
  createdAt: Date;
}
