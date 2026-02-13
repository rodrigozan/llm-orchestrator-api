import { GenerateOptions, ILLMProvider } from "../common/illm-provider";

export class GeminiAdapter implements ILLMProvider {
  readonly name = "gemini";

  async generateResponse(prompt: string, _options?: GenerateOptions): Promise<string> {
    return `Gemini response for: ${prompt}`;
  }

  getTokenUsage(prompt: string, response: string): number {
    return Math.ceil((prompt.length + response.length) / 4);
  }
}
