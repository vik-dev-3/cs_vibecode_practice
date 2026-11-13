# AI Knowledge Base

Командная база знаний с AI-чатом по документам: рабочие пространства с ролями, заметки, загрузка PDF/Markdown, фоновая индексация, чат с ответами по документам (RAG) и ссылками на источники.

План — в [docs/ROADMAP.md](docs/ROADMAP.md), принятые решения — в [docs/decisions/](docs/decisions/).

## Стек

Next.js + TypeScript, Postgres + pgvector (Drizzle), Redis + BullMQ, Better Auth, Cloudflare R2, Vercel AI SDK (Claude / OpenAI), Railway.

## Локальный запуск

Нужно: Node (версия в `.nvmrc`), Docker (OrbStack или Docker Desktop).

```bash
cp .env.example .env        # локальные значения по умолчанию
docker compose up -d --wait # Postgres (pgvector) и Redis
npm install
npm run dev                 # http://localhost:3000
```

## Конец рабочего дня

1. Остановить dev-сервер: `Ctrl+C` в его терминале. Не помнишь, где он? `lsof -nP -iTCP:3000 -sTCP:LISTEN` — пусто значит не запущен; иначе `kill <PID>` из вывода.
2. Остановить базы: `docker compose down` — данные остаются в volume. **Не добавлять `-v`**: он удаляет данные.
3. По желанию — закрыть OrbStack.
4. `git status` — посмотреть, что осталось незакоммиченным.

Проверить, что запущено: `docker compose ps` (базы), `lsof` выше (dev-сервер).
