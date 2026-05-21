# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A tutorial and documentation website teaching users how to use AI (primarily Claude) to improve their technical documents and tutorials. Built with Astro + Starlight. Deploys to Fly.io.

## Commands

Node is managed via nvm. Prefix commands with `export PATH="$HOME/.nvm/versions/node/v24.14.0/bin:$PATH" &&` if node/npm are not on PATH.

```bash
npm run dev      # start local dev server at localhost:4321
npm run build    # production build (outputs to dist/)
npm run preview  # preview the production build locally
```

## Architecture

Astro + Starlight. All content lives in `src/content/docs/` as Markdown or MDX files.

**Content structure:**
- `src/content/docs/index.mdx` — home/splash page
- `src/content/docs/guides/` — conceptual guides (manually listed in sidebar)
- `src/content/docs/tutorials/` — step-by-step tutorials (auto-generated in sidebar)

**Sidebar** is configured in `astro.config.mjs`. Guides are listed manually — adding a new guide file requires a matching entry in the sidebar config. Tutorials use `autogenerate` (wrapped in an `items` array per Starlight v0.39+ syntax) so new files appear automatically.

**Frontmatter** required on every content file: `title` and `description`. The home page uses `template: splash` for the full-width hero layout.

**Components:** Starlight's built-in components (`Card`, `CardGrid`, etc.) are available in `.mdx` files via `import { Card, CardGrid } from '@astrojs/starlight/components'`.

Deployment target: Fly.io (config to be added).
