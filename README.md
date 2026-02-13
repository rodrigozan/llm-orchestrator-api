# llm-orchestrator-api

Bootstrap inicial de um orquestrador de LLMs em TypeScript com:

- schema unificado para requests/responses
- factory de provedores (Gemini, OpenAI, Anthropic)
- roteamento em tiers (complexidade baixa/alta)
- cache semântico in-memory
- repositório simples de consumo

## Rodando

```bash
npm install
npm run check
npm run build
node --test dist/tests/**/*.test.js
```
