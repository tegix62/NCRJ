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

## 2026-10-17 · Marissa · Connect: YouTube channel
- The Connect page now links to the YouTube channel (https://www.youtube.com/@crystalmhc) with a small YouTube logo. The link lives in `SOCIAL` in `src/site.ts`.
- The logo is drawn inline (no request to YouTube until someone clicks).
- Removed the "Placeholder: contact details and a newsletter signup." line under the Connect heading.
## 2026-10-17 · Marissa · Activist School and Get Involved: "Updates coming soon"
- The Activist School and Get Involved pages' placeholder lines are replaced with a small "Updates coming soon." note.
## 2026-10-17 · Marissa · Resource Bank: first videos
- The Resource Bank page now has a "Videos" section with two videos: "Violence Against Black Women Is Structural: From Adriana Smith to Cerina Fairfax" (YouTube `lMP4TxKmoE8`) and "The 5th Principle of Reproductive Justice: A Conversation with Loretta Ross" (YouTube `Nqa3gmjMVMQ`).
- Videos are listed in `src/data/resources.ts`; add more by copying an entry. They use `src/components/VideoEmbed.astro`.
- Privacy decision: nothing loads from YouTube until a visitor presses play, and then it uses youtube-nocookie.com. Without JavaScript, the "Watch on YouTube" link still works.
- The page is organized into two categories, **Videos** and **Articles**, with buttons at the top that jump to each and show how many items it has. Articles are listed in `ARTICLES` in `src/data/resources.ts` (title, link, optional authors and publication).
- First article: "An Act of Love: Building a Collaborative for Reproductive Justice and Abolition Amidst Tumultuous Times" by Crystal M. Hayes and E. D. Goldblatt Hyatt, in *Reflections: Narratives of Professional Helping*, 2026 (details supplied by Marissa; the journal site couldn't be reached from Claude's environment to double-check).
## 2026-10-17 · Marissa · Homepage hero photo
- The homepage hero now has a real photo (hands joined together, `public/images/hero-hands.webp`) behind the "Many Stories. Collective Power." banner, with the credit "Photo by Tasha Jolley on Unsplash" in the bottom-right corner.
- Licence: Unsplash License (free to use; credit given as a courtesy). Only hands are shown, so no identifiable people. The image is stored in the repo, not loaded from Unsplash, per the privacy rule.
- Homepage intro: "education" and "organizing" are no longer bold.
- On phones the photo sits behind the text with a darker overlay so the text stays readable.
- The "Unsplash" link goes to unsplash.com; swap in the photo's own Unsplash page if we have it.

## 2026-10-17 · Marissa · Org name commas, "unites"
- Org name now reads "National Collaborative for Reproductive Justice, Innovation, and Political Education in Social Work" everywhere (header, footer, homepage, page titles), changed once in `src/site.ts`.
- Homepage intro and site description: "brings together" → "unites".
- The homepage intro had the org name typed in by hand; it now uses `SITE.name`, so future renames reach it too.
## 2026-10-17 · Marissa · News & Events: EPAS event
- Removed the four sample posts and the sample author. News & Events now lists one real event: "What Kind of Social Work Profession Are We Becoming?" (Tuesday, October 20, 2026, 2:00 PM Eastern, virtual), with its poster (`public/images/events/epas-2029-poster.webp`).
- Posts can now be events: optional `event` (start time, location, registration link), `subtitle`, and `featureImageAlt` fields in `src/content.config.ts`. Event times display in Eastern time. `author` is now optional, for posts from the Collaborative itself.
- Placeholder categories replaced with one real category, "Events" (`src/site.ts`).
- Registration: Register buttons link to the Google Form (https://forms.gle/PbZARhkuUnhETWUX6): a rounded "Register for this event" button under the poster on the News & Events card, plus one in the event page's details box and one under the poster at the bottom of the event page. Any event with a `registerUrl` gets these automatically.
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
