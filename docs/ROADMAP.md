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
- [ ] GitHub Actions: lint, typecheck, test
- [ ] Защита `main`
- [ ] «Hello world» на Railway
- [ ] Окружения staging и production

## 2. База данных
- [ ] Схема, миграции Drizzle, seed

## 3. Авторизация
- [ ] Email + пароль
- [ ] GitHub OAuth

## 4. Рабочие пространства и роли
- [ ] Workspaces, роли owner/admin/member
- [ ] Тесты на доступ к чужим данным

## 5. Заметки
- [ ] CRUD, валидация, пагинация

## 6. Файлы
- [ ] Загрузка в R2 через presigned URL

## 7. Воркер
- [ ] Парсинг, чанки, эмбеддинги в pgvector
- [ ] Статус обработки

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
- [ ] Бэкап + проверка восстановления
- [ ] Нагрузочный тест

## 16. E2E и учения
- [ ] Playwright
- [ ] Откат релиза, учебный инцидент

## 17. Итоги
- [ ] Разбор итогов и демонтаж
