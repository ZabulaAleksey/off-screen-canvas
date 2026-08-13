# Дорожная карта OffScreenCanvas

## Выполнено

- Создана статическая демонстрация передачи canvas в Web Worker.
- Реализована анимация 10 000 частиц.
- Подключён минимальный project overlay AI Dev Team.

## Текущее

### Этап 1 — Надёжный контракт worker

- добавить feature detection и unsupported state (`FR-003`);
- типизировать сообщения canvas и `MessagePort` (`FR-004`);
- добавить обработку ошибок worker и 2D context;
- выполнить browser smoke test и проверить консоль.

## Запланировано

### Этап 2 — Управляемая демонстрация

- решить, нужны ли controls количества/скорости частиц;
- определить responsive behavior canvas;
- добавить автоматизируемый browser test, если проект продолжит развиваться.

## Optional

- сравнение производительности main-thread canvas и OffscreenCanvas;
- возвращение альтернативной wireframe-демонстрации из текущего закомментированного кода после отдельной SPEC.
