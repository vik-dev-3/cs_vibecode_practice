# ROADMAP

Каждый этап = ветка + PR + зелёный CI + деплой.

## 0. Фундамент
- [x] `git init`, `.gitignore` и `.env.example` до первого коммита
- [x] Приватный репозиторий на GitHub
- [x] `CLAUDE.md`, `README.md`, `docs/ROADMAP.md`, ADR по стеку
- [x] `.claude/settings.json` с запретом чтения `.env`
- [x] Скелет Next.js, TS strict, линтер
- [x] `.nvmrc` + `engines`
- [x] Docker Compose: Postgres+pgvector, Redis

## 1. CI и первый деплой
- [x] GitHub Actions: lint, typecheck, test
- [x] Защита `main`
- [x] «Hello world» на Railway
- [x] Окружения staging и production

## 2. База данных
- [x] Drizzle, первая миграция (pgvector), `db:generate` / `db:migrate`
- [x] Healthcheck проверяет базу
- [x] CI: миграции на чистой базе, проверка на забытую миграцию
- [x] Postgres + pgvector на Railway staging, миграции в `preDeployCommand`
- [x] Деплой staging: миграция применилась, `/api/health` → ok
- [x] Postgres + pgvector на production, деплой, `/api/health` → ok

## 3. Авторизация
- [ ] Email + пароль
- [ ] GitHub OAuth

## 4. Рабочие пространства и роли
- [ ] Workspaces, роли owner/admin/member
- [ ] Seed: тестовые пользователи и пространства (перенесён с этапа 2)
- [ ] Тесты на доступ к чужим данным

## 5. Заметки
- [ ] CRUD, валидация, пагинация

## 6. Файлы
- [ ] Загрузка в R2 через presigned URL

## 7. Воркер
- [ ] Парсинг, чанки, эмбеддинги в pgvector
- [ ] Статус обработки
- [ ] Сборка не зависит от секретов: `DATABASE_URL` проверять при первом запросе, а не при импорте `src/db`

## 8. AI-чат (RAG)
- [ ] Стриминг, ссылки на источники
- [ ] Fallback провайдера
- [ ] Учёт токенов, rate limit, квоты

## 9. Качество AI
- [ ] Evals для RAG
- [ ] Защита от prompt injection

## 10. Почта
- [ ] Приглашения в команду (Resend)

## 11. Оплата
- [ ] Stripe: подписка, вебхуки, идемпотентность

## 12. Публичный API
- [ ] Ключи с правами
- [ ] Исходящие вебхуки

## 13. Наблюдаемость
- [ ] Sentry, структурированные логи, request-id
- [ ] Uptime-мониторинг, алерты

## 14. Домен
- [ ] DNS для `lab.<домен>`, HTTPS, защитные заголовки

## 15. Безопасность
- [ ] Ревью по OWASP, `npm audit`, Dependabot
- [ ] Бэкап production + проверка восстановления (на Hobby бэкапов Railway нет: Pro или `pg_dump` по расписанию)
- [ ] Отключить публичный TCP proxy баз на Railway (сейчас включён шаблоном)
- [ ] Нагрузочный тест

## 16. E2E и учения
- [ ] Playwright
- [ ] Откат релиза, учебный инцидент

## 17. Итоги
- [ ] Разбор итогов и демонтаж
