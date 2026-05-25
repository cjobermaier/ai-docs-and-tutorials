# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A tutorial and documentation website teaching users how to use AI (primarily Claude) to improve their technical documents and tutorials. Built with Mintlify. Deployed via Mintlify's platform (tutorialguides.mintlify.app).

## Local development

Install the Mintlify CLI once:

```bash
npm install -g mintlify
```

Then run the dev server:

```bash
mintlify dev     # starts local preview at localhost:3000
```

## Architecture

Mintlify docs site. All content lives at the repo root as `.mdx` files. Navigation and theme are configured in `mint.json`.

**Content structure:**
- `introduction.mdx` — home/landing page
- `get-started.mdx` — environment setup
- `guides/` — conceptual guides
- `tutorials/` — step-by-step tutorials
- `public/examples/` — demo files referenced by tutorials

**Navigation** is manually configured in `mint.json` under the `navigation` array. Adding a new page requires a matching entry there.

**Frontmatter** required on every content file: `title` and `description`.

**Mintlify components** available in `.mdx` files without any import:
- `<Card>`, `<CardGroup>` — feature cards
- `<Steps>`, `<Step>` — numbered step sequences
- `<Note>`, `<Tip>`, `<Warning>`, `<Check>` — callout blocks
- `<Tabs>`, `<Tab>` — tabbed content
- `<Accordion>`, `<AccordionGroup>` — collapsible sections
- `<CodeGroup>` — multiple code blocks with tabs

**Deployment:** Push to the connected GitHub repo. Mintlify auto-deploys on every push to the default branch.
