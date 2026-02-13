import { ProviderName } from "../../@types/llm";
import { AnthropicAdapter } from "./anthropic/anthropic-adapter";
import { GeminiAdapter } from "./gemini/gemini-adapter";
import { ILLMProvider } from "./common/illm-provider";
import { OpenAIAdapter } from "./openai/openai-adapter";

export class LLMFactory {
  static getProvider(providerName: ProviderName): ILLMProvider {
    switch (providerName) {
      case "gemini":
        return new GeminiAdapter();
      case "openai":
        return new OpenAIAdapter();
      case "anthropic":
        return new AnthropicAdapter();
      default:
        throw new Error(`Provider not supported: ${providerName satisfies never}`);
    }
  }
}
