# Project log

Shared memory for everyone's Claude sessions. Newest entry at the top. Claude adds an entry at the end of each chunk of work; see "Keeping sessions in sync" in CLAUDE.md.

Format:

```
## YYYY-MM-DD · <who> · <short title>
- What changed (files/pages, in plain language)
- Decisions made, and why
- Left unfinished / next up
```

---

## 2026-10-17 · Chris · Preview builds turned off
- Cloudflare's branch preview builds kept failing for reasons outside the repo (dashboard settings and a beta Cloudflare feature), so they were switched off in the Cloudflare dashboard. The live site was never affected.
- CLAUDE.md: "Links" section rewritten. No more preview links; check changes with `npm run build` and a local look, then give the live link after merging.
- Added `docs/future-scope.md`: plain-language list of what a full build would need (working submissions, connecting Sanity, preview links, own domain, moving accounts to the organization).

## 2026-10-16 · Chris · Scope guardrails
- Added a "Scope: this is a mockup" section near the top of CLAUDE.md.
- Decision: the site is a presentation mockup. The goal is a presentable, coherent site with clearly labelled placeholders, not working backends or features that need a budget and a team. Requests beyond that get written up (in `docs/future-scope.md`) instead of built, until the team agrees.
- The Archivist pages are complete as a demonstration. Next: simple, credible versions of the other menu sections.

## 2026-10-16 · Chris · Archivist pages
- New pages: the Archivist landing page (`/archivist/`), an entry page for each story (`/archivist/<slug>/`), and the story submission form (`/archivist/submit/`).
- Entries currently come from clearly labelled sample data in `src/data/archivist-placeholders.ts`. All pages get entries through `getEntries()` in `src/lib/archivist.ts`, so connecting Sanity means changing that one function to query Sanity for the fields in `docs/archivist-schema.md`.
- Rich text uses a small built-in renderer (`src/components/PortableText.astro`) that reads Sanity's Portable Text format, so no extra package was needed.
- The submission form is not connected: its button is disabled and it sends nothing. Where submissions go is still a privacy decision for the Collaborative.
- Landing page copy is a first draft adapted from the project lead's description; it needs her review.
- Also: header no longer wraps on laptop-width screens; `astro.config.mjs` now has the live URL (used for citation links).

## 2026-10-16 · Chris · Archivist schema
- Added `docs/archivist-schema.md`: the fields for an Archivist entry (the seven layers, sources, place and time, verification), the private submission record, and matching Google Sheet columns.
- Decision: the schema doc is the contract between Sanity and the site pages. Sanity work and page work both build against it; changes go through the doc first.
- Important for the Sanity setup: make the dataset private, and keep contributor contact details out of entry documents (see the warning at the top of the doc).
- CLAUDE.md updated: Sanity is now in progress, not "don't add yet".
- Next: Archivist entry and collection pages built against this schema with placeholder data.

## 2026-10-16 · Chris · Live site, previews, Cloudflare fix
- The site is live at https://ncrj.rumeaudesign.workers.dev. It updates automatically a minute or two after anything merges into `main`.
- Every branch also gets its own preview link, e.g. https://<branch>-ncrj.rumeaudesign.workers.dev. Previews are drafts for checking changes; the live site is what we share.
- Cloudflare set this up as a Worker, not a Pages site, so `wrangler.jsonc` was added to tell it to serve the built site. Also added a "page not found" page.
- CLAUDE.md now has a "Links: live site vs. previews" section; Claude should give clickable live/preview links after every push or merge.

## 2026-10-16 · Marissa · Set up session syncing
- Added "Keeping sessions in sync" to CLAUDE.md, this log, and a session-start hook (`.claude/settings.json`) that shows each new session the latest commits on `main`.
- Decision: the two of us mostly work through Claude chats, so Claude handles the catch-up and note-taking automatically instead of us doing it by hand.

## 2026-10-16 · (earlier work) · Homepage and CLAUDE.md
- Homepage, header, footer, and section intro pages built from the approved mockup.
- CLAUDE.md added with project context and rules.
