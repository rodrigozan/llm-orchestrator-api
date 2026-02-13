import { GenerateOptions, ILLMProvider } from "../common/illm-provider";

export class OpenAIAdapter implements ILLMProvider {
  readonly name = "openai";

  async generateResponse(prompt: string, _options?: GenerateOptions): Promise<string> {
    return `OpenAI response for: ${prompt}`;
  }

  getTokenUsage(prompt: string, response: string): number {
    return Math.ceil((prompt.length + response.length) / 4);
  }
}
