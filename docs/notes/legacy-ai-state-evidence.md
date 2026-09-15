# Исторический source snapshot AI state

Уникальные факты прежних `docs/AI_PLAN.md` и `docs/AI_STATUS.md` сохранены
перед выводом этих live owners. Baseline GitHub `main` `02d544e`;
SHA-256 исходных файлов: AI_PLAN
`c0f4bcd6b817fb33d16caacc648377efc538e655588abd4520e395d6697456ee`,
AI_STATUS
`fb6d1241d314ce110292872b5458ee1a6c79cbce680bb25fad800cbb12f0d76d`.
Предыдущий Git commit позволяет восстановить исходные bytes. Эти сведения
исторические; current status, blockers, evidence и NEXT принадлежат
`docs/STAGES.md`.

## Из старого AI_PLAN

- Цель: ограниченным изменением `index.html`, `index.js`, `worker.js`
  закрыть `FR-003`, `FR-004`, `NFR-002`, `AC-002`–`AC-004`.
- Scope: feature detection и DOM fallback, typed main/worker messages,
  доказанное решение по `MessagePort`, обработка ошибок worker/context,
  browser smoke поддерживаемого и unsupported сценариев.
- Non-goals: build system/framework/dependencies, redesign, particle controls,
  responsive canvas, изменение 10 000 частиц или алгоритма анимации,
  локальные agents/Skills/hooks/MCP/config/Git workflow.
- Stop condition: если назначение `MessageChannel` не выводится из
  существующего контекста, зафиксировать вопрос и не выдумывать протокол.

## Из старого AI_STATUS

- Governance migration 2026-08-24 создала прежний overlay и
  `prompts/STAGES.md`; validator PASS, продуктовый код не менялся.
  Browser worker smoke оставался `UNVERIFIED`; на момент записи repository
  находился в `~/codex-workspace/off-screen-canvas`, push/merge не выполнялись.
- Известный продуктовый baseline: canvas 800×600, передача OffscreenCanvas,
  worker-анимация 10 000 частиц и минимальный project overlay.
- Подтверждённые пробелы: нет feature detection и fallback, второе port
  сообщение worker интерпретирует как canvas, ошибки создания worker/context
  не обработаны, автоматических browser tests нет. Назначение
  `MessageChannel` не документировано.
- Deferred debt: фиксированный canvas/particle count и большой
  закомментированный альтернативный renderer в `worker.js`.
- Исходный следующий шаг: реализовать worker contract и browser smoke
  после уточнения `MessageChannel`; completion доказательств ещё нет.
