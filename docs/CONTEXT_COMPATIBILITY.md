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
