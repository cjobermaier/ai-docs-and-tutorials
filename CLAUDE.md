# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project context

A tutorial and documentation website teaching users how to use AI (primarily Claude) to improve their technical documents and tutorials. Built with Mintlify. Deployed via Mintlify's platform (tutorialguides.mintlify.app).

- Format: MDX files with YAML frontmatter
- Config: `docs.json` for navigation, theme, and settings
- Refer to the [docs.json schema](https://mintlify.com/docs.json) when modifying `docs.json`

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
- `get-started.mdx` — environment setup
- `guides/` — conceptual guides
- `tutorials/` — step-by-step tutorials
- `public/examples/` — demo files referenced by tutorials

Navigation is manually configured in `docs.json` under `navigation.groups`. Adding a new page requires a matching entry there.

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
