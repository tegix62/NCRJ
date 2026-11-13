# Start here

Welcome. This is the website for the **National Collaborative for Reproductive Justice, Innovation, and Political Education in Social Work**. It's now yours to look after.

You don't need to know how to code. You'll make changes by describing them in plain words to **Claude Code**, an AI assistant that edits the website for you. This page explains what you have, how to set it up, and how to make changes.

---

> **Moving the site to the Collaborative's own accounts?** Follow `docs/handover-plan.md`. It has the steps, who does each one, and what everything costs. `docs/prompt-for-new-owner.md` is a ready-made prompt for a Claude assistant to walk you through it.

---

## 1. What this website is

- **It's a mockup.** It was built to show the Collaborative's leadership what the site could be. It's not a finished product. Some pages are placeholders ("coming soon"), and some features look real but aren't connected to anything yet, like the Archivist's story submission form.
- **It's live on the internet** at a free Cloudflare address (it ends in `.workers.dev`). Once you've set things up, the address will be your own (see step 4 below).
- **The full vision needs more than one person.** `docs/future-scope.md` lists what a finished site would need (working forms, a content system, a proper web address, and so on), in plain language you can share with leadership.

---

## 2. How it fits together

```
You  →  Claude Code  →  GitHub  →  Cloudflare  →  the live website
(describe   (makes the     (stores the   (builds and       (what visitors
 a change)   change)        code)         publishes it)     see)
```

- **GitHub** is where the website's files are kept, with a full history of every change. Nothing is ever truly lost.
- **Cloudflare** watches GitHub. When a change is approved, it rebuilds the website and puts it online, usually within 1–2 minutes. It's free.
- **Claude Code** reads the files on GitHub, makes the changes you ask for, and checks them before anything goes live.

---

## 3. What you'll own

| Thing | What it's for | Cost |
|---|---|---|
| GitHub repository (`NCRJ`) | Holds the website's files | Free |
| Cloudflare account | Publishes the website | Free |
| Claude (with Claude Code) | Makes changes for you | Paid Claude plan |
| `ncrjisw@gmail.com` | The Collaborative's contact email, shown on the site | Free |
| Google Forms | "Submit a Resource" and event registration links | Free |
| Sanity project *(optional)* | A content editor that was started but never connected to the site. Safe to delete if unused. | Free |

---

## 4. One-time setup

Do these in order. Each one takes a few minutes.

### Step 1: GitHub
1. Create an account at [github.com](https://github.com) if you don't have one.
2. *(Recommended)* Create a free **organization** for the Collaborative (your profile picture → *Your organizations* → *New organization*). Then the website belongs to the Collaborative, not to one person, and the next handover is easy.
3. Tell the people handing over your GitHub username (or organization name). They'll transfer the repository to you, and you'll get an email to accept it.

### Step 2: Claude Code
1. Get a Claude plan that includes Claude Code at [claude.ai](https://claude.ai).
2. Open Claude Code on the web ([claude.ai/code](https://claude.ai/code)) and connect your GitHub account when asked.
3. When it asks, install the **Claude GitHub App** and give it access to the `NCRJ` repository. Without this, Claude can read the site but can't save changes.

### Step 3: Cloudflare
1. Create a free account at [dash.cloudflare.com](https://dash.cloudflare.com). Signing up with `ncrjisw@gmail.com` keeps it with the Collaborative.
2. Go to **Workers & Pages → Create → Import a repository**, connect GitHub, and choose `NCRJ`.
3. Use these settings:
   - **Build command:** `npm run build`
   - **Deploy command:** `npx wrangler deploy`
   - Leave **builds for preview/non-production branches off**. They were unreliable and aren't needed.
4. Deploy. Cloudflare shows your website's new address (something like `ncrj.your-name.workers.dev`). Open it to check it works.

### Step 4: Tell Claude the new address
Open Claude Code on the `NCRJ` repository and say:

> "The website's new address is [paste it here]. Please update CLAUDE.md and anywhere else the old address appears, and re-render the graphics in design-sources so the infographic shows the new address."

The last part matters: the "Proposed 2029 EPAS: What Changed?" infographic has the website address printed on it, so it needs to be redrawn (Claude knows how) whenever the address changes.

That's it. You're set up.

---

## 5. Making changes

1. Open [claude.ai/code](https://claude.ai/code) and start a session on the `NCRJ` repository.
2. Describe what you want in plain words. For example:
   - "Add this bio to Crystal M. Hayes on the Leadership page: …"
   - "Change the homepage button to say 'Learn about us'."
   - "Add an event on December 3 at 2pm Eastern called … with this registration link: …"
   - "The Members page looks cramped on my phone. Can you fix it?"
3. Claude makes the change, checks it, and shows you screenshots.
4. When you're happy, Claude opens a **pull request**, a request to publish the changes. Approve it ("merge" it) on GitHub, or ask Claude to.
5. The live site updates 1–2 minutes later.

**Group your changes.** Make several changes in one session and publish them together, rather than publishing every small tweak separately. A previous contributor's GitHub account was suspended for opening too many pull requests in a short time, because GitHub's automated checks mistook it for a bot. Claude already knows to work this way; just don't push it to publish each small edit individually.

**You can always undo.** If a change goes wrong, tell Claude: "Undo the last change to the website." Every version is kept on GitHub.

---

## 6. Rules Claude already follows

These are written in `CLAUDE.md`, a file Claude reads at the start of every session. You don't need to remember them, but it helps to know they exist:

- **Keep it a mockup.** Claude won't build working forms, databases, logins or payments without you confirming the Collaborative has decided to. Instead, it adds the idea to `docs/future-scope.md`.
- **Privacy.** No tracking or analytics, and videos don't load anything from YouTube until someone presses play. This matters for a reproductive justice site.
- **Photos.** Only licensed photos, with permission from anyone recognizable, in colors that suit the site.
- **Names and text** for the organization come from one settings file, so a future rename is easy.
- **Fewer, larger batches of changes** (see above).

If you want Claude to work differently, just tell it, and ask it to update `CLAUDE.md` so the change sticks.

---

## 7. What's real and what's placeholder

**Real:** the homepage, About (mission, vision, tenets of reproductive justice), Leadership, Members, the Resource Bank, News & Events (with the open-letter announcement pinned and event posters), Get Involved (with founding membership pinned), and Connect.

**Placeholder or demo only:**
- **The Archivist** shows sample entries that say they're samples, and a story submission form that is deliberately switched off.
- **Activist School** says "Updates coming soon", and so does the "More ways to get involved" part of Get Involved.
- **Posters and infographics** (in News & Events, Get Involved and the Resource Bank) are drawn from files in `design-sources/`, in the site's colors and logo. Ask Claude to change their text or numbers (for example the signature count on the open-letter poster), and to check the QR codes still open the right pages.

---

## 8. If something breaks

- **The site didn't update:** wait 2 minutes and refresh. Then check Cloudflare → Workers & Pages → `ncrj` → **Deployments**. A red "Failed" means the update didn't publish, and the live site keeps showing the last working version.
- **A deployment failed:** open it, copy the log, paste it to Claude, and say "This deployment failed, please fix it."
- **Something looks wrong on the live site:** describe it to Claude, with a screenshot if you can, or ask it to undo the last change.
- **Claude can't save changes:** check the Claude GitHub App still has access to the repository (GitHub → Settings → Applications).

---

## 9. Where things are (for when you're curious)

You don't need this to make changes; Claude knows where everything is.

| What | Where |
|---|---|
| Rules for Claude | `CLAUDE.md` |
| History of every change, in plain language | `docs/log.md` |
| What a full build would need | `docs/future-scope.md` |
| Plan for the Archivist's content | `docs/archivist-schema.md` |
| Organization name, menu, contact email | `src/site.ts` |
| Colors and fonts | `src/styles/global.css` |
| The pages | `src/pages/` |
| Photos | `public/images/` |
| Poster and infographic sources | `design-sources/` |
| The logo (leaf with a bumblebee) | `src/assets/logo.mjs` |

---

## For the people handing over

A checklist so nothing stays tied to your personal accounts:

- [ ] Transfer the GitHub repository to the new owner (repository *Settings → General → Danger Zone → Transfer ownership*).
- [ ] Wait until the new owner's Cloudflare deployment is working, then delete the old Cloudflare Worker and its build token.
- [ ] Transfer ownership of the Google Forms (resource submissions, event registration) to the new owner.
- [ ] Hand over the `ncrjisw@gmail.com` password, and remove your own phone number or email from its recovery options.
- [ ] Sanity: invite the new owner as Administrator and leave, or delete the project if it won't be used.
- [ ] Remove yourselves as collaborators, and remove the Claude GitHub App's access to the repository from your own accounts.
- [ ] Let anyone who has the old website address know the new one. The old address is also printed on the EPAS infographic, so the new owner should have Claude re-render the graphics (see Step 4).
- [ ] Before handing over, ask Marissa to confirm the links flagged in `docs/log.md` (the `lnkd.in` links against the `forms.gle` links and QR codes).
