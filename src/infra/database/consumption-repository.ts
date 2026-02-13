import { PromptLog } from "../../core/entities/prompt-log";

export class ConsumptionRepository {
  private readonly logs: PromptLog[] = [];

  insert(log: PromptLog): void {
    this.logs.push(log);
  }

  list(): PromptLog[] {
    return [...this.logs];
  }
}
