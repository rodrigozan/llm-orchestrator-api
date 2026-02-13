import { PromptRequest, PromptResponse, ProviderName } from "../../@types/llm";
import { ConsumptionRepository } from "../../infra/database/consumption-repository";
import { SemanticCache } from "../../infra/cache/semantic-cache";
import { LLMFactory } from "../../infra/providers/factory";

export class GenerateAnswerUseCase {
  constructor(
    private readonly cache: SemanticCache,
    private readonly consumptionRepository: ConsumptionRepository
  ) {}

  async execute(request: PromptRequest): Promise<PromptResponse> {
    const cached = this.cache.get(request.prompt);
    if (cached) {
      this.consumptionRepository.insert({
        prompt: request.prompt,
        provider: cached.provider,
        tokenUsage: 0,
        cached: true,
        createdAt: new Date()
      });
      return cached;
    }

    const providerName = this.selectProvider(request);
    const provider = LLMFactory.getProvider(providerName);

    const content = await provider.generateResponse(request.prompt);
    const tokenUsage = provider.getTokenUsage(request.prompt, content);

    const response: PromptResponse = {
      content,
      provider: providerName,
      tokenUsage,
      cached: false
    };

    this.cache.set(request.prompt, response);

    this.consumptionRepository.insert({
      prompt: request.prompt,
      provider: providerName,
      tokenUsage,
      cached: false,
      createdAt: new Date()
    });

    return response;
  }

  private selectProvider(request: PromptRequest): ProviderName {
    if (request.preferredProvider) return request.preferredProvider;
    if (request.complexity === "high") return "anthropic";
    return "gemini";
  }
}
