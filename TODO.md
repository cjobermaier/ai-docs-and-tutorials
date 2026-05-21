# To-do

## Doc health check skill (before/after)

Create a single skill that runs on a user's doc and returns a scored report across all quality metrics. The user runs it **before** starting any tutorials to get a baseline, then runs it **again after** to see measurable improvement.

### What the skill should score

Think about which metrics to include and how to weight them. Candidates:

- SEO health (title, meta, headings, keywords)
- Style guide compliance (violations per 1,000 words?)
- Link validity (% valid)
- Code example quality
- Persona fit / audience clarity
- Structural completeness (intro, steps, next steps present?)

### Open questions

- Numeric score (e.g. 0–100) or letter grade or a rubric (poor / fair / good / excellent per category)?
- Should it produce a machine-readable report (JSON) so the second run can diff against the first, or is a human-readable markdown summary enough?
- Should the before/after comparison be a second skill (`doc-health-diff`) that takes both reports as input?

### Where it lives on the site

- Add a "Start here" step on the Get started page: run this skill first, save your report
- Add a "You did it" step at the end of the course: run it again and compare
- Could also be its own page under a new **Measure** section in the sidebar

### Files to create

- [ ] `.claude/skills/doc-health-check.md` — the skill itself
- [ ] `src/content/docs/skills/doc-health-check.md` — the course page explaining it
- [ ] Add to sidebar in `astro.config.mjs`
- [ ] Update `src/content/docs/get-started.md` to reference it as step 1
