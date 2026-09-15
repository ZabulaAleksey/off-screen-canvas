# Совместимость project overlay OffScreenCanvas

Дата аудита: 2026-08-13

| Возможность | Что уже есть глобально / в workspace | Потребность проекта | Статус | Решение и канонический источник |
|---|---|---|---|---|
| Архитектура | общие правила SDLC | фактическая граница main thread/worker | `PROJECT_ONLY` | `docs/ARCHITECTURE.md` |
| QA / тестирование | общие test/review practices | browser smoke test canvas и console | `EXTEND` | `AGENTS.md`, `specs/system.spec.md` |
| Безопасность | общие правила по риску | специальных trust boundaries и чувствительных данных нет | `INHERITED` | отдельный `SECURITY.md` пока не нужен |
| Review | общие reviewer-практики | специальных правил нет | `INHERITED` | локальная копия не создаётся |
| Документация | общий КАРКАС | описание фактического проекта и состояния | `EXTEND` | `specs/` и `docs/` repository |
| Git workflow | workspace workflow | специальных правил нет | `INHERITED` | `docs/git-flow.md` не создаётся |
| Hooks | глобальные hooks | проектного пробела нет | `INHERITED` | локальные hooks не создаются |
| MCP | общая политика минимальных подключений | интеграций нет | `INHERITED` | локальный MCP не создаётся |
| Skills | глобальные workflow Skills | отдельного повторяемого процесса нет | `INHERITED` | локальные Skills не создаются |
| Agents | глобальные универсальные роли | узких специалистов не требуется | `INHERITED` | локальные agents не создаются |
| Конфигурация Codex | пользовательский config | проектных настроек нет | `INHERITED` | локальный `.codex/config.toml` не создаётся |

## Итог

Пилот хранит только project-specific контекст. Дубли глобальных agents, Skills, hooks, MCP, config и Git workflow не обнаружены и не добавлены.

## STAGES location migration — 2026-09-15

Read-only `reconcile_project_framework.py` подтвердил brownfield baseline:
`prompts/STAGES.md`, `docs/AI_PLAN.md`, `docs/AI_STATUS.md` — `MERGE`;
`index.html`, `index.js`, `worker.js`, `specs/system.spec.md`,
`docs/project-context.md` и `docs/LEARNING_LOG.md` сохранены без mutation.

| Состояние | Legacy conflict | Разрешение | Classification |
| --- | --- | --- | --- |
| Current stage | Stage catalog без selector; AI pair называет worker reliability | Code/SPEC/ROADMAP подтверждают незакрытый Stage 1 | `ADAPT`: `OSC-WORKER-CONTRACT`, `partial` |
| Stage 2 | Старый STAGES относит errors к Stage 2, ROADMAP — к Stage 1 | Reliability/errors входят в Stage 1, controlled demo остаётся future scope | `ADAPT` по ADR-003 |
| NEXT/evidence | AI_PLAN перечисляет FR/AC и остановку по `MessageChannel`; AI_STATUS хранит ограничения и past governance | В selected STAGES record — NEXT и blockers; historical facts сохранены с source hashes в `docs/notes` | `MERGE` разрешён |

Формальный DEV bridge не добавлялся: требование расположения файла исходит
из прямого указания пользователя. Browser verification и terminal status
не повышались из статического code review.
