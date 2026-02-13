import { PromptResponse } from "../../@types/llm";

export class SemanticCache {
  private readonly store = new Map<string, PromptResponse>();

  get(prompt: string): PromptResponse | undefined {
    return this.store.get(this.normalize(prompt));
  }

  set(prompt: string, response: PromptResponse): void {
    this.store.set(this.normalize(prompt), { ...response, cached: true });
  }

  private normalize(prompt: string): string {
    return prompt.trim().toLowerCase();
  }
}
