# CLAUDE.md

Context for any Claude Code session working on this repo. Two people work on it; one is new to web development, so explain changes in plain language and keep them small and reviewable.

## What this is

Prototype website for the relaunch of the **National Collaborative for Reproductive Justice Innovation and Political Education in Social Work** (working short name: "National Collaborative"; the org is still settling on a name). The prototype exists to win approval from the org's leadership. The approved visual reference is a single homepage mockup; the current homepage is built from it.

Subject matter is reproductive justice, which is politically polarizing. Tone should be friendly but authoritative.

## Scope: this is a mockup

**Read this before building anything.** The site is a presentation mockup for the Collaborative's leadership, not the finished product. The organization has not committed a budget, staff, or a timeline for building the full vision, and the person maintaining this site should not end up responsible for features nobody has funded.

The goal is a site that is **presentable and coherent**: every page looks intentional, nothing is broken, and placeholders are clearly labelled as placeholders. It should show the vision clearly enough that leadership can see what a full build would involve.

**In scope:**

- Page layouts and visual design that follow the approved mockup
- Basic, credible versions of every page in the menu
- Clearly labelled placeholder content and sample entries
- Copy edits, accessibility, and phone-width fixes
- Small fixes that keep the site working and deploying

**Out of scope unless the team explicitly decides otherwise:**

- Working backends: live forms, submission handling, databases, user accounts or logins, payments, email or newsletter integrations
- Expanding content management. Sanity Studio exists (`studio/`) to show what editing could look like; connecting it to the live site or extending it further is a decision for the team, not something to do because a request mentions it
- Search, filtering, maps, analytics, or other features that need ongoing upkeep
- More depth on sections already at demo level (the Archivist pages are complete as a demonstration)

**When a request goes beyond this**, don't build it. Say plainly what it would take (for example: "a working submission form needs a place to store data securely, a privacy policy, and someone to review submissions"), and offer to add it to `docs/future-scope.md`, a running list of what a full build would need, written in plain language for the Collaborative's leadership. Build only after the person confirms the team has agreed to it.

## Stack and hosting

- Astro (static site), plain `.astro` components, plain CSS. No React/Vue/Tailwind.
- Deployed by Cloudflare (Workers with static assets, config in `wrangler.jsonc`).
- `npm install`, `npm run dev` (localhost:4321), `npm run build` (output in `dist/`).

## Links and checking changes

One collaborator is new to this. **Always give clickable links, and say plainly whether a change is live yet.**

- **Live site:** https://ncrj.rumeaudesign.workers.dev, built from `main`. This is what gets shared with others. It updates a minute or two after anything merges into `main`.
- **Branch previews are turned off.** Cloudflare's preview builds kept failing for reasons outside the repo, so they were switched off in the Cloudflare dashboard. Don't promise or construct preview links. (Revisiting this is listed in `docs/future-scope.md`.)

How to check a change before it goes live:

- Run `npm run build`; it must succeed.
- Where the session can, run the site locally (`npm run dev` or `npm run preview`) and look at the changed pages, including at phone width. Screenshots help the person see the change.
- Describe what changed in plain language, page by page, so the person can judge it without a preview link.

After merging into `main`, give the live link to the page that changed (e.g. https://ncrj.rumeaudesign.workers.dev/archivist/), mention it takes a minute or two, and link the pull request (https://github.com/tegix62/NCRJ/pulls). This environment may not be able to open `workers.dev`; if you can't load a link, say so and ask the person to click it, rather than claiming it works.

The structure deliberately mirrors a Ghost theme so the design could be ported to Ghost later (see README for the file mapping). Don't add Ghost yet. Sanity is being set up as the content backend for the Archivist; see "Sanity" below.

## Where things live

| What | Where |
|---|---|
| Brand colors, fonts, spacing | `src/styles/global.css` (`:root` tokens) |
| Org name, menu, the four program areas | `src/site.ts` |
| Page shell (header, footer) | `src/layouts/Default.astro`, `src/components/` |
| Homepage | `src/pages/index.astro` |
| Section pages | `src/pages/{about,archivist,resources,activist-school,get-involved,connect}` |
| News & Events posts | `src/content/posts/*.md` (tags = categories, authors in `src/content/authors/`) |

## Rules

- **Use the tokens.** Colors and fonts come from the variables in `global.css`. Don't hard-code new hex values or add font families without a reason.
- **Names come from `site.ts`.** Never hard-code the org name in a page; it will change.
- **Keep it portable.** Plain HTML/CSS in `.astro` files, minimal JavaScript, no client-side frameworks.
- **Mobile matters.** Check every change at phone width (~390px). No horizontal scrolling.
- **No invented facts.** Never write realistic-sounding stories, people, histories, statistics, or citations as sample content, especially for the Archivist, which is meant to be a citable archive. Use clearly labelled placeholders.
- **Privacy.** No analytics or tracking scripts, no third-party font or asset hosts (fonts are self-hosted via Fontsource). Story submissions and contact details must never be committed to this repo.
- **Photos.** Placeholders are tinted panels. Real photos must be licensed, with consent from identifiable people.

## Workflow

- Work on a branch, open a pull request into `main`, check the change with a local build (see "Links and checking changes"), then merge. Nothing goes straight to `main`, because `main` is the live site.
- Keep PRs focused on one thing. If two people are working at once, split by area (different pages/files) to avoid merge conflicts.
- Run `npm run build` before pushing; it must succeed.

## Keeping sessions in sync

Both people work mostly through separate Claude chats, which can't see each other. The repo is the only shared memory, so Claude keeps it current **without being asked**:

- **At the start of a session:** a hook prints the latest commits on `main` and the top of `docs/log.md`. Briefly tell the person, in plain language, what's changed since their last session (especially the other person's work). Ask who you're working with if it isn't clear; commits are all authored by "Claude", so names only appear in the log.
- **Before editing:** run `git fetch origin main` and make sure your branch includes the latest `main` (rebase or merge it in). If the other person's open branch touches the same files, say so before starting.
- **After each chunk of work, before pushing:** add an entry to the top of `docs/log.md` (date, who, what changed, decisions, what's unfinished). If the "Current state and next steps" section below is now out of date, update it in the same commit. If a decision is a lasting rule, add it to Rules.
- **Long sessions:** fetch `main` again before pushing; the other person may have merged something.
- **Merge conflicts in `docs/log.md` or this file:** keep both people's entries, in date order. Never drop someone else's notes.

## Current state and next steps

Done: homepage matching the mockup, header with mobile menu, footer, intro pages for every menu item, News & Events with one real event post (sample posts removed).

Placeholders: photos, logo (`src/components/Logo.astro` approximates the mockup's leaf mark), all inner page copy.

Next priority: bring every menu section up to the same basic, presentable level (see Scope above). The Archivist is the centerpiece of the relaunch and its demo pages are complete; it is planned as a public, citable archive of reproductive justice stories, seeded by the Collaborative and grown through community submissions that are reviewed before publishing. Each entry is planned to have these sections:

1. The Story: what happened
2. The Single Story: the dominant or simplified version
3. What Is Missing?: absent perspectives and context
4. The RJ Lens: what reproductive justice reveals
5. The Context: laws, policies, institutions, systems of power
6. Resistance & Possibility: organizing, care, survival, joy
7. The Record: sources (type, citation, link) so others can verify and cite

Plus: location, time period, and a public verification status (documented / partially documented / unverified, with a note on what's uncertain). Internal fields such as consent notes and contributor contact details must never be published.

The submission form will ask for the story, why it belongs, its RJ connection, missing perspectives, place and time, sources, the contributor's connection to it, ethical/consent concerns, and optional contact info. Collect only what's needed; contact info stays optional.

The full field list, the submission form fields, and the Google Sheet columns are in **`docs/archivist-schema.md`**. It is the contract between the Sanity setup and the site pages: change it there first, by pull request, before changing either side. It also explains why the Sanity dataset must be private.
