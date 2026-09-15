# Журнал решений OffScreenCanvas

## ADR-001 — Сохранить демонстрацию без build system

- Дата: 2026-08-13
- Статус: Принято

### Решение

Сохранять проект как минимальную браузерную демонстрацию из `index.html`, `index.js` и `worker.js`. Не добавлять framework, bundler или package manager без отдельного требования.

### Причина

Главная ценность проекта — изолированно показать browser API `OffscreenCanvas` и Web Worker. Дополнительный toolchain усложнит запуск и скроет основной контракт.

### Альтернативы

- Vite или другой dev server: удобнее для development, но не нужен текущему объёму.
- Canvas на main thread: проще совместимость, но не демонстрирует целевую технологию.

### Последствия

Проверка выполняется через простой локальный HTTP server и браузер. Совместимость и сообщения worker должны обрабатываться явным JavaScript-кодом.

## ADR-002 — Наследовать общую AI Dev Team

- Дата: 2026-08-13
- Статус: Принято

### Решение

Хранить в repository только тонкий project overlay. Общие agents, Skills, hooks, MCP, config, Git workflow и review practices наследовать из `~/.codex`.

### Последствия

Локальные automation-возможности не создаются. Если появится подтверждённый проектный пробел, он сначала классифицируется в `docs/CONTEXT_COMPATIBILITY.md`.

## ADR-003 — Один execution-state owner в `docs/STAGES.md`

- Статус: Принято после read-only reconciliation 2026-09-15.

Старый stage catalog и AI pair не задавали один selector/status/NEXT.
`specs/system.spec.md`, `docs/ROADMAP.md`, `index.js` и `worker.js`
подтверждают текущий Stage 1 `OSC-WORKER-CONTRACT`, status `partial`.
Обработка worker/context errors из старого Stage 2 входит в Stage 1:
она является частью текущего reliability contract, а не prerequisite
будущего controlled demo. Текущий state владеет только `docs/STAGES.md`;
unique исторические факты AI pair сохранены в
`docs/notes/legacy-ai-state-evidence.md`.
