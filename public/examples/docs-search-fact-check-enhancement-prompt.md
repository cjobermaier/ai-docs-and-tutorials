# Prompt: Enhance docs-search Skill for Fact-Checking

Use this prompt to add fact-checking citation support to a vanilla `docs-search` skill.

---

Enhance `~/.claude/skills/docs-search/SKILL.md` for fact-checking. Add a fact-checking workflow and citation block format: when fact-checking, search the index, locate the relevant passage in the `content` field, classify the finding, then emit one citation block per claim:

```
Doc path (local): <path portion of the url field — everything after the domain, e.g. /vault/docs/auth/approle>
                  For local file indexes, use the file path as-is. Label as "(local)" to make clear
                  content came from the local index, not a live fetch.
Public URL:       <full url field value so the reader can visit it>
Quote:            "<verbatim excerpt from content>"
Finding:          [DOCS SAY] / [INFERRED from <doc path>] / [NOT FOUND]
```

**Classification:**
- `[DOCS SAY]` — a direct quote from `content` supports the claim
- `[INFERRED from <doc path>]` — deduced from context; name the source
- `[NOT FOUND]` — no indexed source addresses the claim

**Rules:**
- `Quote` must be verbatim from `content` — never paraphrase
- Never use `[DOCS SAY]` without a quote to back it
- The `(local)` in `Doc path (local):` is part of the **field label only** — never append it to the path value itself (e.g. write `/vault/docs/auth/approle`, not `/vault/docs/auth/approle (local)`)

Include a concrete example citation block.
