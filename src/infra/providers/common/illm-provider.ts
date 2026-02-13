export interface GenerateOptions {
  temperature?: number;
  maxTokens?: number;
}

export interface ILLMProvider {
  readonly name: string;
  generateResponse(prompt: string, options?: GenerateOptions): Promise<string>;
  getTokenUsage(prompt: string, response: string): number;
}
