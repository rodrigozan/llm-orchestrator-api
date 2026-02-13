import { GenerateOptions, ILLMProvider } from "../common/illm-provider";

export class AnthropicAdapter implements ILLMProvider {
  readonly name = "anthropic";

  async generateResponse(prompt: string, _options?: GenerateOptions): Promise<string> {
    return `Anthropic response for: ${prompt}`;
  }

  getTokenUsage(prompt: string, response: string): number {
    return Math.ceil((prompt.length + response.length) / 4);
  }
}
