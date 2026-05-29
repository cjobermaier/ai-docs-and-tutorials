# AGENTS.md

## Project context

A tutorial and documentation website teaching users how to use AI (primarily Claude) to improve their technical documents and tutorials. Built with Mintlify. Deployed via Mintlify's platform (tutorialguides.mintlify.app). Site name: **CJ Teaches**.

- Format: MDX files with YAML frontmatter
- Config: `docs.json` for navigation, theme, and settings
- Refer to the [docs.json schema](https://mintlify.com/docs.json) when modifying `docs.json`

> **Note:** `README.md` is stale Astro/Starlight boilerplate from a previous stack. Ignore it entirely.

## Local development

Install the Mintlify CLI once:

```bash
npm install -g mintlify
```

Then run the dev server:

```bash
mintlify dev     # starts local preview at localhost:3000
```

## File structure

- `introduction.mdx` — home/landing page
- `get-started.mdx` — environment setup page (file exists but is **not in the nav**)
- `guides/` — conceptual setup guides (e.g. `setup-grounded-docs.mdx`)
- `tutorials/` — step-by-step tutorials

Demo files that tutorials reference (the raw material users fact-check or edit) live in the separate [cjobermaier/public-resources](https://github.com/cjobermaier/public-resources) GitHub repo, not in this repo. Tutorials instruct users to `curl` the relevant file into a local working directory before running commands.

Navigation is manually configured in `docs.json` under `navigation.groups`. Adding a new page requires a matching entry there.

## Content architecture

Tutorials on this site teach AI-assisted documentation workflows using two Claude skills that users install globally:

- `/docs-manage` — scrape, refresh, and remove docs from a local index (`@arabold/docs-mcp-server`)
- `/docs-search` — search indexed docs and fact-check content with citation-backed findings

These skills live in `~/.claude/skills/` (global, not in this repo). `guides/setup-grounded-docs.mdx` is the setup guide users follow before starting any tutorial.

Demo files live in the [cjobermaier/public-resources](https://github.com/cjobermaier/public-resources) GitHub repo, organized by tutorial slug (e.g. `increase-content-accuracy/react-18-forwardref-tutorial.md`). A tutorial has users `curl` the file into a local working directory, fact-check it against indexed versioned docs, then update the deprecated code in place.

## Mintlify components

Available in `.mdx` files without any import:

- `<Card>`, `<CardGroup>` — feature cards
- `<Steps>`, `<Step>` — numbered step sequences
- `<Note>`, `<Tip>`, `<Warning>`, `<Check>` — callout blocks
- `<Tabs>`, `<Tab>` — tabbed content
- `<Accordion>`, `<AccordionGroup>` — collapsible sections
- `<CodeGroup>` — multiple code blocks with tabs

## Working relationship

- Push back on ideas when warranted — cite sources and explain reasoning
- Always ask for clarification rather than making assumptions
- Never lie, guess, or make up anything

## Content strategy

- Document just enough for user success — not too much, not too little
- Prioritize accuracy and usability
- Make content evergreen when possible
- Search for existing content before adding anything new — avoid duplication
- Check existing patterns for consistency
- Start by making the smallest reasonable changes

## Writing standards

- Second-person voice ("you")
- Prerequisites at the start of procedural content
- Test all code examples before publishing
- Match the style and formatting of existing pages
- Language tags on all code blocks
- Alt text on all images
- Relative paths for internal links

## Frontmatter requirements

Every MDX file must have:

```yaml
---
title: Clear, descriptive page title
description: Concise summary for SEO and navigation
---
```

## Git workflow

- Never use `--no-verify` when committing
- Ask how to handle uncommitted changes before starting work
- Create a new branch when no clear branch exists for changes
- Commit frequently throughout development
- Never skip or disable pre-commit hooks

## Do not

- Skip frontmatter on any MDX file
- Use absolute URLs for internal links
- Include untested code examples
- Make assumptions — always ask for clarification
- Trust `README.md` — it is stale boilerplate from a previous stack