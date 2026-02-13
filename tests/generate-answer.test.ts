import test from "node:test";
import assert from "node:assert/strict";
import { GenerateAnswerUseCase } from "../src/core/use-cases/generate-answer";
import { SemanticCache } from "../src/infra/cache/semantic-cache";
import { ConsumptionRepository } from "../src/infra/database/consumption-repository";

test("uses tiered routing and semantic cache", async () => {
  const useCase = new GenerateAnswerUseCase(new SemanticCache(), new ConsumptionRepository());

  const first = await useCase.execute({ prompt: "summarize this", complexity: "low" });
  assert.equal(first.provider, "gemini");
  assert.equal(first.cached, false);

  const second = await useCase.execute({ prompt: "summarize this", complexity: "high" });
  assert.equal(second.cached, true);
});
