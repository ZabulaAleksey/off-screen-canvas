# Контекст проекта

OffscreenCanvas — минимальная браузерная демонстрация из `index.html`, `index.js` и `worker.js`. Граница ответственности проходит между main thread и worker; изменения должны сохранять явный контракт сообщений и graceful fallback.
