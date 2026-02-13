import { PromptRequest } from "../../../@types/llm";
import { GenerateAnswerUseCase } from "../../../core/use-cases/generate-answer";

export class LLMController {
  constructor(private readonly generateAnswer: GenerateAnswerUseCase) {}

  async handle(body: PromptRequest) {
    return this.generateAnswer.execute(body);
  }
}
