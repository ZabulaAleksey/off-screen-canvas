# Этапы OffscreenCanvas

- Stage ID: OSC-WORKER-CONTRACT

Этот файл — единственный владелец current stage, status, blockers, evidence
и NEXT. Продуктовые решения сверяются с `specs/system.spec.md`;
исторический source snapshot старых AI-файлов находится в
`docs/notes/legacy-ai-state-evidence.md` без собственного current status.

## OSC-WORKER-CONTRACT — Этап 1: Надёжный контракт main thread ↔ worker

- Status: partial
- NEXT: OSC-WORKER-CONTRACT-IMPLEMENT
- Blockers: в `index.js` нет feature detection и typed message envelope;
  `worker.js` принимает второе сообщение с `MessagePort` как canvas;
  ошибки создания worker и 2D context не обработаны. Назначение текущего
  `MessageChannel` не подтверждено. Browser smoke и автоматический runner
  отсутствуют; completion claim недопустим.
- Evidence: `index.js`, `worker.js`, `specs/system.spec.md`, `docs/ROADMAP.md`
  и прежние AI-файлы сверены на GitHub `main`; статический demo с canvas
  и анимацией 10 000 частиц существует, но `AC-002`–`AC-004` и browser flow
  ещё не проверены. `node --check index.js` и `node --check worker.js` — PASS
  для syntax; это не browser flow evidence. Governance migration не меняла
  product code.

- Сохранить явный протокол сообщений между `index.js` и `worker.js`.
- Передавать canvas через `transferControlToOffscreen` только после проверки поддержки браузером.
- В worker инициализировать контекст, выполнять отрисовку и возвращать диагностический статус.
- При отсутствии поддержки показать понятный fallback без падения страницы.
- Обработать ошибки инициализации, передачи canvas и рендеринга; перенесено
  из старого Stage 2, поскольку `docs/ROADMAP.md` и `NFR-002` включают это
  в текущий надежный worker contract.
- Проверки/DoD: `AC-001`–`AC-004`, browser smoke main → worker → frame,
  поддерживаемый и unsupported сценарии, отсутствие console errors,
  раздельные canvas/port messages и точное evidence здесь. Без browser
  проверки status остаётся `partial`; smoke/static не считается E2E.

`OSC-WORKER-CONTRACT-IMPLEMENT`: сначала установить назначение
`MessageChannel` из существующего контекста; если намерение не доказано,
зафиксировать вопрос и не выдумывать протокол. Затем ограниченным diff
`index.html`, `index.js`, `worker.js` выполнить `FR-003`, `FR-004`, `NFR-002`
и провести браузерные проверки. Build system/framework/dependencies,
редизайн, particle controls и изменение алгоритма вне этого slice.

### Действие пользователя по миграции state owner

- `USER-OSC-STAGES-INTEGRATION` — `PENDING`, condition: isolated
  `feature/docs-stages-canonical` commit/push и canonical selector read-back
  готовы. Безопасное действие: разрешить merge этой точной ветки в `main`
  после review сохранённых AI-фактов и unchanged product code/SPEC.
  Ожидаемое evidence: clean main ancestry, GitHub default branch содержит
  `docs/STAGES.md`, старые `prompts/STAGES.md`, `docs/AI_PLAN.md` и
  `docs/AI_STATUS.md` отсутствуют, adapter PASS с `partial` и указанным NEXT.
  Это разблокирует единственный execution-state owner для Stage 1.

## OSC-CONTROLLED-DEMO — Этап 2: Управляемая демонстрация

- Status: planned
- Depends on: OSC-WORKER-CONTRACT completed
- NEXT: deferred until Stage 1 terminal gates pass
- Scope: после отдельного решения определить controls количества/скорости
  частиц, responsive canvas и необходимость автоматизируемого browser test.
- Historical reconciliation: прежний Stage 2 называл error handling и
  observability; эти обязательные reliability checks входят в Stage 1 по
  ROADMAP/SPEC, а не ждут будущих controls. Build system не добавляется
  без отдельной SPEC. Автоматический browser E2E сейчас отсутствует.
