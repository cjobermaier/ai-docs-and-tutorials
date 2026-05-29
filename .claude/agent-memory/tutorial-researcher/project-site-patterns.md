---
name: project-site-patterns
description: Structural and style conventions observed across CJ Teaches tutorials — useful benchmark for auditing new tutorials
metadata:
  type: project
---

## Observed structural conventions

- Tutorial flow: intro paragraph → prerequisites (Card component) → "Set up the tutorial file" section (mkdir + curl + claude launch) → main task section(s) → "Next steps" bullets
- Prerequisites always use a `<Card>` component pointing to `/guides/setup-grounded-docs` (for Grounded Docs tutorials) or an external install link
- "Set up the tutorial file" section uses 2-step pattern: (1) mkdir + curl, (2) launch `claude` from that directory
- Terminal commands use `bash` tag in `increase-content-accuracy.mdx` and `shell-session` tag in `style-guide-check.mdx` — no consistent standard yet, but `shell-session` appears to be the more recent convention
- Claude prompt commands use `plaintext` tag — consistent across all tutorials
- Completion signal: tutorials end with a 1–2 sentence "you did X" wrap-up, then a "Next steps" bullet list with relative links
- Internal links always use relative paths (e.g., `/tutorials/increase-content-accuracy`), never absolute URLs
- External links (GitHub repos, raw.githubusercontent.com curl targets) use full URLs — this is expected and correct

## Navigation

- All tutorials must be added to `docs.json` under `navigation.groups` to appear in the site nav
- `seo-your-tutorials.mdx` was NOT in docs.json as of May 2026 — a critical gap

## Known demo file locations in public-resources

- `increase-content-accuracy/react-18-forwardref-tutorial.md`
- `style-guide/test-style-guide.md`
- `seo-your-tutorials/demo-tutorial.md` (confirmed exists)

**Why:** Benchmarking against existing tutorials reveals deviations and gaps in new tutorials.
**How to apply:** Use these patterns as the baseline when auditing any new tutorial on this site.
