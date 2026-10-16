# CLAUDE.md

Context for any Claude Code session working on this repo. Two people work on it; one is new to web development, so explain changes in plain language and keep them small and reviewable.

## What this is

Prototype website for the relaunch of the **National Collaborative for Reproductive Justice Innovation and Political Education in Social Work** (working short name: "National Collaborative"; the org is still settling on a name). The prototype exists to win approval from the org's leadership. The approved visual reference is a single homepage mockup; the current homepage is built from it.

Subject matter is reproductive justice, which is politically polarizing. Tone should be friendly but authoritative.

## Stack and hosting

- Astro (static site), plain `.astro` components, plain CSS. No React/Vue/Tailwind.
- Deployed by Cloudflare Pages from `main` at https://ncrj.pages.dev. Every branch gets its own preview URL.
- `npm install`, `npm run dev` (localhost:4321), `npm run build` (output in `dist/`).

The structure deliberately mirrors a Ghost theme so the design could be ported to Ghost later (see README for the file mapping). Sanity CMS is the likely future content backend if the Archivist grows. Don't add either yet.

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

- Work on a branch, open a pull request into `main`, check the Cloudflare preview link, then merge. Nothing goes straight to `main`.
- Keep PRs focused on one thing. If two people are working at once, split by area (different pages/files) to avoid merge conflicts.
- Run `npm run build` before pushing; it must succeed.

## Current state and next steps

Done: homepage matching the mockup, header with mobile menu, footer, intro pages for every menu item, News & Events with sample posts.

Placeholders: photos, logo (`src/components/Logo.astro` approximates the mockup's leaf mark), all inner page copy.

Next priority is **The Archivist**, the centerpiece of the relaunch: a public, citable archive of reproductive justice stories, seeded by the Collaborative and grown through community submissions that are reviewed before publishing. Each entry is planned to have these sections:

1. The Story: what happened
2. The Single Story: the dominant or simplified version
3. What Is Missing?: absent perspectives and context
4. The RJ Lens: what reproductive justice reveals
5. The Context: laws, policies, institutions, systems of power
6. Resistance & Possibility: organizing, care, survival, joy
7. The Record: sources (type, citation, link) so others can verify and cite

Plus: location, time period, and a public verification status (documented / partially documented / unverified, with a note on what's uncertain). Internal fields such as consent notes and contributor contact details must never be published.

The submission form will ask for the story, why it belongs, its RJ connection, missing perspectives, place and time, sources, the contributor's connection to it, ethical/consent concerns, and optional contact info. Collect only what's needed; contact info stays optional.

The team is collecting initial stories in a Google Sheet. If its columns match the entry structure above, it can feed the site directly (CSV export → Astro content).
