---
title: Link checker
description: A skill file that validates all URLs in a docs or tutorial repository.
---

:::note[Prerequisite]
Complete [Get started: define your standards](/get-started) before using this skill. The repo context section of your standards file helps scope which links are internal vs. external and which domains are authoritative for your project.
:::

## What this skill does

<!-- Describe what the skill checks: broken external links, internal cross-references that resolve to 404s, redirects that should be updated to canonical URLs, and anchored links that target removed headings. Clarify that it reports issues — the writer decides what to fix. -->

## What you'll need

<!-- List requirements: a docs repo with markdown or MDX files; the CLAUDE.md / AGENTS.md with repo context; Claude Code pointed at the repo. Note any external link checking limitations (rate limits, auth-gated URLs). -->

## The skill file

```
<!-- Paste the skill file contents here. -->
```

## How to use it

### Written walkthrough

<!-- Step-by-step: how to invoke the skill, how to read the link report, how to distinguish a genuinely broken link from a false positive (e.g. auth-gated URLs), and how to batch-fix redirect chains. -->

### Video

<!-- Embed or link a walkthrough video. -->

## Example output

<!-- Show a sample report: broken links with file and line location, redirect chains, and a clean-pass result. -->

## Next steps

- [Fact-check with MCP](/tutorials/fact-check-mcp) — verify the content at those links is also accurate
- [Code + persona check](/tutorials/code-persona-check) — audit examples and persona fit after links are clean
