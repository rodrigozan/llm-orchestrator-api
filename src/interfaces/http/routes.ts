import { GenerateAnswerUseCase } from "../../core/use-cases/generate-answer";
import { SemanticCache } from "../../infra/cache/semantic-cache";
import { ConsumptionRepository } from "../../infra/database/consumption-repository";
import { LLMController } from "./controllers/llm-controller";

const cache = new SemanticCache();
const repository = new ConsumptionRepository();
const useCase = new GenerateAnswerUseCase(cache, repository);

export const llmController = new LLMController(useCase);
