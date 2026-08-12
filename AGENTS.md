# OffScreenCanvas - local instructions

Before working here, read `~/codex-workspace/AGENTS.md`.

## Project context

- This is a dependency-free browser demo built from `index.html`, `index.js`, and `worker.js`.
- Keep the main-thread/worker message contract explicit and synchronized on both sides.
- Preserve the OffscreenCanvas capability check and a clear unsupported-browser path.
- Avoid adding a build system or framework unless the task requires it.
- Verify changes in a browser, including worker startup, canvas transfer, rendering, and console errors.

Load only context relevant to the current change; do not preload the AI Dev Team rules tree, SPEC collection, or `LEARNING_LOG.md`.
