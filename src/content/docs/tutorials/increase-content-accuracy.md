---
title: Increase content accuracy
description: Use the Docs MCP Server to verify tutorials and code examples against specific product docs and versions.
---

Asking your AI to review your content for accuracy can give mixed results. AI might use out of date information when fact-checking or looking for content inconsistencies. Give your AI a specific source to check against when reviewing your content.

You can use tools like [Grounded Docs](https://grounded.tools/) to index specific versions of documentation either locally or on a remote server. You can then have your AI access the documents using the CLI or an MCP server.

For this tutorial, you will run Grounded Docs locally, index two documentation versions, and use the CLI to fact-check a tutorial against each one.

## Pre-requisites

- AI such as Claude or Copilot. 
- CLAUDE.md or AGENTS.md. You can set one up following our [Setup guide](/guides/setup)
- [git](https://git-scm.com/install/)
- Install the [GitHub CLI](https://cli.github.com/) to install Skills
- npm


This tutorial targets Mac.

## Install Grounded Docs

Follow the [installation instruction](https://grounded.tools/#installation) or run the following NPM command: 

```shell
npm install -g @arabold/docs-mcp-server
```

## Install Grounded Docs Skills

The Grounded Docs repository includes three skills you can install so Claude knows how to index and query documentation on your behalf.

Run the following commands to create the skill directories and download each skill file:

```shell
git clone --depth 1 --filter=blob:none --sparse https://github.com/arabold/docs-mcp-server.git /tmp/docs-mcp-server
cd /tmp/docs-mcp-server && git sparse-checkout set skills

mkdir -p ~/.claude/skills/docs-manage ~/.claude/skills/docs-search ~/.claude/skills/fetch-url
cp /tmp/docs-mcp-server/skills/docs-manage/SKILL.md ~/.claude/skills/docs-manage/SKILL.md
cp /tmp/docs-mcp-server/skills/docs-search/SKILL.md ~/.claude/skills/docs-search/SKILL.md
cp /tmp/docs-mcp-server/skills/fetch-url/SKILL.md ~/.claude/skills/fetch-url/SKILL.md

rm -rf /tmp/docs-mcp-server
```

Each skill teaches Claude a different capability:

| Skill | What Claude learns |
| --- | --- |
| `docs-manage` | How to scrape, refresh, and remove documentation from the local index |
| `docs-search` | How to list indexed libraries, search content, and resolve library versions |
| `fetch-url` | How to fetch a single URL and convert it to Markdown without indexing |

## Index documentation

In this tutorial, you will index two versions of the Go `net/http` package documentation: one from Go 1.15 (before key deprecations) and the current version.

- Go `net/http` documentation for Go 1.15: `https://pkg.go.dev/net/http@go1.15`
- Go `net/http` documentation for Go 1.26.3: `https://pkg.go.dev/net/http@go1.26.3`

Use the `docs-manage` skill to index both versions. In Claude Code, type `/docs-manage` followed by your instructions:

```text
/docs-manage Index the following two versions of the Go net/http documentation:

- Go 1.15: https://pkg.go.dev/net/http@go1.15
- Current: https://pkg.go.dev/net/http@go1.26.3
```

Claude will invoke the skill, scrape each URL, and store the indexed content locally. It will prompt you for permission to run commands — allow each prompt. Once indexing finishes, Claude will confirm that both versions are in the local index.

Ask Claude to show the indexed documents and versions in Grounded Docs.

```
Give me a list of the go-net-http docs versions
```

Claude will return a table of all indexed versions. For example:

| Version | Status | Unique URLs | Source |
|---------|--------|-------------|--------|
| **1.26.3** | completed | 1 | `https://pkg.go.dev/net/http@go1.26.3` |
| **1.15** | completed | 1 | `https://pkg.go.dev/net/http@go1.15` |

The two tagged versions (1.15 and 1.26.3) are ready to use.

## Check a tutorial

For this exercise, you'll find an example tutorial with two deliberate errors at `public/examples/go-http-tutorial.md`. It covers making HTTP requests and building a simple server using Go's `net/http` package, but contains advice that was correct in Go 1.15 and is no longer accurate in 1.26.3. You will use Claude to find those errors — first checking against the 1.15 docs, then against 1.26.3.

### Check against Go 1.15

Ask Claude to review the tutorial using only the 1.15 indexed docs:

```
Using only the go-net-http version 1.15 docs, fact-check public/examples/go-http-tutorial.md. Flag any claims that are inaccurate or outdated according to those docs.
```

Because the tutorial was written for Go 1.15, Claude should find few or no issues. The use of `ioutil.ReadAll` and the manual method-check pattern were both correct and idiomatic at that version, so the 1.15 docs give Claude no reason to flag them.

### Check against Go 1.26.3

Now ask Claude to repeat the check using the 1.26.3 docs:

```
Using only the go-net-http version 1.26.3 docs, fact-check public/examples/go-http-tutorial.md. Flag any claims that are inaccurate or outdated according to those docs.
```

This time Claude should surface two issues:

| Claim in tutorial | Why it's wrong in 1.26.3 |
|---|---|
| `ioutil.ReadAll` is the standard way to read a response body | Go 1.16 deprecated `io/ioutil`. The correct function is `io.ReadAll`. |
| `ServeMux` does not support method routing | Go 1.22 added method-based patterns. `mux.HandleFunc("GET /users", handler)` is now valid and idiomatic. |

You can now update the tutorial to fix both issues before publishing.

## Fix the issues

Ask Claude to update the tutorial in place using the 1.26.3 docs as the source of truth:

```
Using the go-net-http version 1.26.3 docs, fix the two issues you found in public/examples/go-http-tutorial.md.
```

Claude will make two changes:

1. Replace `"io/ioutil"` with `"io"` in the import block and update `ioutil.ReadAll` to `io.ReadAll`
2. Replace the manual `r.Method` check with a method-prefixed route pattern: `mux.HandleFunc("GET /users", usersHandler)`

Review the diff before accepting. Once the changes look correct, the tutorial is accurate for Go 1.26.3 and ready to publish.

