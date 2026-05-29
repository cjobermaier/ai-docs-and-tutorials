---
name: mintlify-tutorial-scaffold
description: 'Create a new CJ Teaches tutorial MDX page from the project tutorial framework and add it to docs.json navigation. Use when you need a new tutorial page, repeatable structure, prerequisites, executable steps, and visible site navigation.'
argument-hint: 'Tutorial topic, audience, and outcome'
user-invocable: true
disable-model-invocation: false
---

# Mintlify Tutorial Scaffold

Create a new tutorial file for this repository using the established framework from existing tutorials, then wire the page into website navigation so it appears in local builds.

Scope: workspace only (`.claude/skills`).

## When to use

Use this skill when you need to:
- Create a brand-new tutorial in `tutorials/`
- Follow the CJ Teaches tutorial structure and writing style
- Include practical terminal and Claude Code steps
- Ensure the page is visible in nav by updating `docs.json`
- Start with a lean scaffold with placeholders, then iterate

## Inputs to collect first

Collect or confirm:
- Tutorial title and one-sentence outcome
- Target audience and assumed prerequisites
- Tutorial slug (for example `tutorials/my-new-tutorial`)
- Demo/source file URL(s) from `public-resources` or other source
- Which skills or commands the user should run (`/docs-manage`, `/docs-search`, custom skills)
- Whether this is a quick workflow or deep workflow

If any of these are missing, ask concise multiple-choice questions plus optional freeform answers.

## Procedure

1. Derive the tutorial framework from existing pages
- Use patterns from `tutorials/increase-content-accuracy.mdx` and `tutorials/style-guide-check.mdx`.
- Keep second-person voice, beginner-friendly explanations, and practical commands.
- Prefer this section flow unless the topic requires a variation:
  1. Intro + value proposition (short)
  2. Prerequisites (required)
  3. Set up tutorial file/workspace (required)
  4. Main workflow in ordered steps (required)
  5. Verification/re-run check (required)
  6. Next steps (required)

2. Create the tutorial file
- Create `tutorials/<slug>.mdx` with required frontmatter:
  - `title`
  - `description`
- Use Mintlify components already used in this repo:
  - `<Card>` for prerequisite links
  - `<Steps>` and `<Step>` for sequential tasks
  - `<Note>`, `<Tip>`, or `<Warning>` only when useful
- Every code block must include a language tag.
- Use relative internal links.

3. Build tutorial content with this framework
- Default output mode is a lean scaffold with placeholders.
- Problem framing: explain why generic AI/manual approaches fail for this case.
- Setup: create a working directory, fetch demo artifact(s), and launch Claude from that directory.
- Execution: run the key workflow and show expected output shape (not exact wording).
- Remediation/update: instruct how to apply improvements.
- Verification: re-run checks to confirm the issue is resolved.
- Write with beginner-friendly context, but keep each section concise.

4. Add the page to site navigation
- Open `docs.json`.
- Add `tutorials/<slug>` to `navigation.groups` under `Tutorials`.
- Append the new page to the end of the `Tutorials` pages list.
- Keep existing entries intact unless the user asks to reorder or rename.

5. Validate completion
- Confirm the new file exists under `tutorials/`.
- Confirm `docs.json` contains the new tutorial path in the `Tutorials` group.
- Confirm no missing frontmatter fields.
- Confirm internal links are relative and code blocks are tagged.

## Quality bar

The tutorial is complete only if all checks pass:
- The page can stand alone without hidden assumptions.
- Steps are executable as written.
- Commands and paths are consistent.
- Claims are grounded in explicit docs/check steps.
- The page appears in local navigation after running Mintlify.

## Branching logic

- If the user is unsure of scope: produce a lean tutorial skeleton first, then expand each step.
- If no demo file exists: provide a temporary placeholder command block and call out what must be replaced.
- If prerequisites are not yet done: pause tutorial drafting and link to setup guidance first.
- If the tutorial is advanced: add a brief "Who this is for" note near the top.
- If the user asks for a complete draft later: expand each placeholder with concrete commands and examples.

## Output format

Produce:
1. New tutorial file in `tutorials/`
2. `docs.json` navigation update
3. Brief summary of what was created
4. Suggested next prompts to iterate (for example: tighten SEO, add screenshots, add troubleshooting)
