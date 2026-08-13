# Архитектура OffScreenCanvas

## Состав

- `index.html` создаёт единственный `<canvas id="mainCanvas">` и загружает `index.js`.
- `index.js` создаёт Web Worker, преобразует canvas в `OffscreenCanvas` и передаёт transferable-объекты.
- `worker.js` владеет 2D-контекстом, состоянием частиц и циклом `requestAnimationFrame`.

## Поток данных

```text
index.html
   ↓ DOM canvas
index.js (main thread)
   ↓ postMessage + transferable OffscreenCanvas
worker.js
   ↓ 2D rendering loop
browser compositor
```

Дополнительно `index.js` создаёт `MessageChannel`, но текущий worker не имеет отдельного контракта для сообщения с портом. Это известное расхождение со `FR-004`.

## Границы

- Main thread отвечает за DOM, feature detection, создание worker и пользовательские ошибки.
- Worker отвечает только за сообщения своего явного контракта, состояние анимации и drawing.
- Общего backend, хранилища данных и внешних интеграций нет.
- Build-time dependencies и runtime framework отсутствуют.

## Ограничения

- Текущая реализация предполагает поддержку `transferControlToOffscreen()`.
- Размер 800×600 и число частиц 10 000 зафиксированы в коде.
- Изоляция worker требует запуска в браузерном контексте, допускающем загрузку `worker.js`; для проверки предпочтителен локальный HTTP server.
