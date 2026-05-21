---
title: Improve Existing Documentation
description: Use Claude to rewrite unclear or outdated docs with better structure and tone.
---

In this tutorial, you'll take a piece of real documentation and use Claude to improve its clarity, structure, and completeness.

## What you'll need

- A document you want to improve (a README, a how-to guide, an API reference section — anything works)
- Access to Claude at [claude.ai](https://claude.ai)

## Step 1: Diagnose the problems first

Before asking Claude to rewrite anything, ask it to read your document and identify issues:

```
Here is a technical document I wrote. Please read it and list:
1. Any sections that are unclear or hard to follow
2. Missing context a reader would need
3. Structural issues (bad ordering, missing headers, walls of text)
4. Tone or style inconsistencies

Do not rewrite anything yet — just give me the diagnosis.

[paste your document here]
```

Getting a diagnosis first means you're directing the rewrite, not just accepting whatever Claude produces.

## Step 2: Prioritize the fixes

Review Claude's list and decide which issues matter most. Not every suggestion will be right — you know your audience better than the AI does.

Pick the top 2–3 issues and tell Claude exactly what to fix:

```
Based on your diagnosis, please rewrite the document with these specific improvements:
1. [issue you chose]
2. [issue you chose]

Keep the technical content accurate — only change the writing.
```

## Step 3: Review the output

Read the rewrite carefully. Check:

- Did it preserve all the technical details?
- Did it introduce any inaccuracies?
- Does it still sound like something you'd write?

Make edits directly. The AI output is a draft, not a final product.

## Tips

- **Give Claude your audience.** Add a line like "This document is for developers who are new to Kubernetes" and the tone will match.
- **Ask for options.** If you don't like the rewrite, ask: "Give me two alternative versions of the opening paragraph."
- **Iterate in sections.** For long documents, work one section at a time rather than dumping the whole thing.
