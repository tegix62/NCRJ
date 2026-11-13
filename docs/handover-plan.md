# Moving the website to the Collaborative's own accounts

**Goal:** the website, its code, its domain name, and every service it depends on belong to accounts the Collaborative controls, so nothing is lost if any one person (including the current developers) stops helping.

**Who this is for:** the Collaborative's leadership (the new owners), and the Claude assistant helping them. It is written to be followed one step at a time, by someone who doesn't write code.

Prices below are approximate and change; check the linked pricing pages before paying for anything.

---

## 1. Short answers to the questions leadership asked

### How does the website work, in plain terms?
The website is a set of files kept on **GitHub** (a service that stores code and every past version of it). A service called **Cloudflare** watches GitHub: whenever a change is approved, Cloudflare rebuilds the site and publishes it, usually within two minutes. **Claude Code** is the assistant that edits the files when you describe a change in plain words. A **domain name** (like `example.org`) is the address people type; it is rented yearly from a registrar.

```
You describe a change → Claude edits the files → GitHub stores them → Cloudflare publishes the site
```

There is no database and no server to look after. That's why running it is cheap and why there is very little that can break.

### Whose accounts is it in right now?
- **Cloudflare:** the developer's personal account. That's why the address ends in `.rumeaudesign.workers.dev`: that name belongs to that account.
- **GitHub:** the developer's personal account (the repository is `tegix62/NCRJ`).
- **Google Forms** (resource submissions, founding membership, open-letter signatures): whichever Google accounts created them. This needs to be confirmed.
- **Sanity** (a content editor that was started but is not connected to the live site): another team member's account.
- **The contact email** (`ncrjisw@gmail.com`): the Collaborative.

### Can it be transferred? What does that look like?
Yes, with no downtime if done in the right order.
- **The code (GitHub):** GitHub has a built-in "Transfer ownership" button. The whole history moves with it.
- **The live site (Cloudflare):** a Cloudflare site can't be moved between accounts. Instead, the Collaborative's Cloudflare account is connected to the (now transferred) repository and publishes its own copy. **The Collaborative must do this itself right after the repository transfer** (Phase 2); the transfer alone doesn't move the site. Once the new one works, the old one is switched off. Nothing about the website itself changes except its address, which becomes your own domain.
- **The domain:** bought fresh in the Collaborative's name.

### What does it cost?
I can't tell where an earlier "$20–$40 a month" figure came from, so here is the actual breakdown.

| Item | What it's for | Required? | Approximate cost |
|---|---|---|---|
| **Domain name** | Your own address | Strongly recommended | About $10–$15 **per year** (`.org` or `.com`), renewed yearly |
| **Cloudflare** (hosting) | Publishes the site | Yes | **$0**. The free plan covers a site like this |
| **GitHub** (code storage) | Stores the site and its history | Yes | **$0** for a free organization account |
| **Claude plan** | The assistant that makes changes | Only for people who edit the site | Starts around **$20 per month** per person; heavier use may need a higher tier ([claude.ai/pricing](https://claude.ai/pricing)). Can be paused or cancelled when nobody is editing |
| **Password manager** (e.g. Bitwarden) | Shared, safe place for logins | Strongly recommended | **$0** on the free plan |
| Email at your own domain (e.g. `info@yourdomain.org`) | Looks more official than Gmail | Optional | About $7 per person per month with Google Workspace; the current Gmail address works without it |
| Sanity (content editor) | Possible future way to edit the Archivist | Optional, not used today | Free tier; paid if it grows |
| Form tools (Google Forms, Zoom) | Registration and sign-ups | Already in use | Whatever those accounts cost today (Google Forms is free) |

**In practice:** the only unavoidable costs are the **domain (~$10–$15 a year)** and a **Claude plan (~$20 a month) for whoever is editing**. Hosting and code storage are free. There are **no other annual costs** to plan for, unless you later choose to add things from the optional rows or build features listed in `docs/future-scope.md` (working forms, a content system), which would add costs and need someone to maintain them.

### What if the current developers stop helping?
Nothing is lost, as long as the steps below are done:
- **Every account has at least two owners** from the Collaborative, so no single person holds the keys.
- **All logins live in a shared password manager,** and two-step sign-in recovery codes are saved there too.
- **The site's documentation is in the repository:** `START-HERE.md` (beginner's guide), `CLAUDE.md` (instructions Claude reads automatically), and `docs/log.md` (a history of every change in plain language). Any new Claude session, or any web developer, can read those and take over.
- **The code is ordinary and portable.** It isn't tied to any one company's tools; it could move to different hosting later.

### How do the developers keep helping without owning anything?
They are invited with limited roles, and can be removed in a minute. See Phase 6.

---

## 2. Before you start (30 minutes)

1. **Choose the Collaborative's "owner" email address.** The existing `ncrjisw@gmail.com` works. Every service below is created with it, so the Collaborative owns the accounts and not an individual.
2. **Choose two owners** (for example the two directors). Every account below needs both.
3. **Set up a shared password manager** (Bitwarden is free) with both owners. Store every login and every two-step recovery code here.
4. **Turn on two-step sign-in (an authenticator app, not text messages)** on the Gmail account and on every service below. Save the recovery codes in the password manager.
5. **Read section 6 (Safety) before you begin.** It explains what to expect and what to set up.

> **Never paste passwords or codes into a chat with Claude.** Claude doesn't need them; you do the sign-ins yourself.

---

## 3. The steps

> **Important: set up Cloudflare right after the repository is transferred.**
> The live site currently runs on the developer's Cloudflare account, and that account is connected to the code through the developer's own GitHub login. Once the repository moves to the Collaborative's organization, **the old site keeps showing the last version it published, but it will most likely stop picking up new changes.** Nothing breaks, but no edits go live until the Collaborative's own Cloudflare (Phase 2) is running. So do Phase 2 **the same day** as the transfer in step 1.4, and leave the old site alone until yours works.

Each step says **who** does it, **how long** it takes, and **what to tell Claude when it's done**.

### Phase 1: GitHub (the code)  ·  about 20 minutes

| # | Who | What |
|---|---|---|
| 1.1 | Owner 1 | Go to [github.com/signup](https://github.com/signup) and make a personal account (skip if you have one). |
| 1.2 | Owner 1 | Create a free **organization**: click your profile picture → *Your organizations* → *New organization* → *Free*. Name it for the Collaborative. Use `ncrjisw@gmail.com` as the contact email. |
| 1.3 | Owner 1 | In the organization: *People* → *Invite member* → invite Owner 2 → set their role to **Owner**. Two owners, always. |
| 1.4 | Developer | On the repository page: *Settings → General → Danger Zone → Transfer ownership* → type the organization's name → confirm. |
| 1.5 | Owner 1 | Accept the transfer (an email arrives, or look in the organization). Check that the repository now appears under the organization with all its history. |
| 1.6 | Owner 1 | Install the **Claude GitHub App** on the organization, with access to the `NCRJ` repository: [github.com/apps/claude](https://github.com/apps/claude) → *Install* → choose the organization → *Only select repositories* → `NCRJ`. |

Decide whether the repository should be **public** (anyone can read the code) or **private**. Nothing secret is in it, and Cloudflare works either way. *Repository → Settings → General → Danger Zone → Change visibility.*

**Next, go straight to Phase 2 (Cloudflare).** The transfer by itself does not move the live site, and until Phase 2 is finished new changes won't appear on it.

Tell Claude: *"Phase 1 is done. The repository is now at [new address]."* (Claude sessions may need to be restarted on the new address.)

### Phase 2: Cloudflare (publishes the site)  ·  about 30 minutes

*This is the step that makes the Collaborative's own copy of the site go live. It must be done after the repository transfer, and ideally the same day.*

| # | Who | What |
|---|---|---|
| 2.1 | Owner 1 | Sign up at [dash.cloudflare.com](https://dash.cloudflare.com/sign-up) with `ncrjisw@gmail.com`. Turn on two-step sign-in. |
| 2.2 | Owner 1 | *Manage Account → Members → Invite* Owner 2 with the **Super Administrator** role. |
| 2.3 | Owner 1 | *Workers & Pages → Create → Import a repository* (or *Connect to Git*). Authorize Cloudflare to read the organization's repositories and choose `NCRJ`. |
| 2.4 | Owner 1 | Use exactly these settings: **Project / Worker name:** `ncrj` (it must match the name inside the repository's `wrangler.jsonc`). **Build command:** `npm run build`. **Deploy command:** `npx wrangler deploy`. **Builds for non-production branches:** off (they were unreliable). |
| 2.5 | Owner 1 | Deploy. Cloudflare asks you to pick a free `workers.dev` name; choose something neutral like `ncrjisw`. The new address will look like `ncrj.ncrjisw.workers.dev`. Open it and click through every page. |

**Don't turn anything off yet.** The old site stays online until the new one is checked.

Tell Claude: *"Phase 2 is done. The new address is [address]."*

### Phase 3: The domain name  ·  about 20 minutes  ·  about $10–$15 a year

| # | Who | What |
|---|---|---|
| 3.1 | Owner 1 | In Cloudflare: *Domain Registration → Register Domains*. Search for a name (the organization is still choosing one; a `.org` is the usual choice). Pay with a card the Collaborative controls. |
| 3.2 | Owner 1 | **Turn on auto-renew** and add a second owner's email for renewal reminders. A domain that lapses can be lost, so this matters. Consider registering for several years. |
| 3.3 | Owner 1 | Open the `ncrj` Worker → *Settings → Domains & Routes → Add → Custom domain*. Enter the domain, then add `www.` the same way. Cloudflare sets up the rest. Wait a few minutes, then open the domain. |

Tell Claude: *"Phase 3 is done. The domain is [domain]."*

### Phase 4: Point the website at its new address  ·  Claude does this

Tell Claude to make these changes in **one batch** (one branch, one pull request):
1. In `astro.config.mjs`, change `site:` to the new domain.
2. Re-render the graphics, because the "Proposed 2029 EPAS" infographic prints the website address: `cd design-sources && npm install && npm run render`.
3. Replace the old address in `CLAUDE.md`, `START-HERE.md`, and `docs/`.
4. Add a log entry to `docs/log.md`.
5. Run `npm run build`, then publish.

Then you check the new domain on a phone and a laptop.

### Phase 5: Forms and the email account  ·  about 20 minutes

| # | Who | What |
|---|---|---|
| 5.1 | Whoever owns each Google Form | In Google Drive: right-click the form → *Share* → add `ncrjisw@gmail.com` → change that person to **Owner**, then accept from that account. Forms to move: the **resource submission** form, the **founding membership** form, the **open letter** form, and the **event registration** form. If "make owner" isn't offered, make a copy in the Collaborative's account, move the responses across, and tell Claude, because links and QR codes will then need to change. |
| 5.2 | Owner 1 | Make sure both owners can sign in to `ncrjisw@gmail.com`, and that no one's personal phone number or email is its only recovery option. |
| 5.3 | Whoever hosts the Zoom event | The registration link belongs to that Zoom account; note who it is, and use the Collaborative's account for future events. |

### Phase 6: Give the developers limited access, and clean up  ·  about 20 minutes

| # | Who | What |
|---|---|---|
| 6.1 | Owner 1 | **GitHub:** *Repository → Settings → Collaborators → Add people*, with the **Write** role (they can propose and publish changes but can't delete the repository or change ownership). Remove them whenever you like. |
| 6.2 | Owner 1 | **Cloudflare:** *Manage Account → Members → Invite*, with a role limited to Workers (not billing and not domains). Optional; they can work through GitHub alone, since publishing happens automatically from there. |
| 6.3 | Owner 1 | **Keep** the domain registration, billing, and ownership with the two owners only. |
| 6.4 | Developer | **Only after the Collaborative's own Cloudflare site (Phase 2) works, and the domain is connected (Phase 3):** delete the old Worker and its API token in the personal Cloudflare account, and remove the old GitHub app connection. The old `rumeaudesign.workers.dev` address then stops working, so tell anyone who has it. |
| 6.5 | Developer with the Sanity account | Delete the Sanity project (it is unused), or invite an owner as Administrator first. |

### Phase 7: Make sure nothing depends on one person  ·  10 minutes

Fill in this table together and keep it in the password manager. Every row should have **two** owners from the Collaborative.

| Account | Created with | Owners | 2-step sign-in recovery saved? | Renewal / billing date |
|---|---|---|---|---|
| Gmail (`ncrjisw@gmail.com`) | | | | |
| GitHub organization | | | | |
| Cloudflare | | | | |
| Domain (at Cloudflare) | | | | |
| Claude plan(s) | | | | |
| Google Forms (4) | | | | |
| Password manager | | | | |

---

## 4. How to test that you're safe

1. **Open the live site on your own domain** on a phone and a laptop.
2. **Ask Claude to make a tiny change** (for example fix a typo), publish it, and confirm it appears. That proves the whole chain (Claude → GitHub → Cloudflare → site) works from the Collaborative's own accounts.
3. **Ask Owner 2 to sign in** to GitHub, Cloudflare and the password manager. If both can, you have no single point of failure.
4. **Ask Claude to explain `START-HERE.md`** in your own words, and ask anything that's unclear. The project is documented so you don't have to take any of this on trust.

## 5. If something goes wrong

- **Don't delete anything old until the new site works.** Until then, the original site keeps running.
- **The new site shows an error after deploying:** open Cloudflare → the `ncrj` Worker → *Deployments*, copy the log from the failed one, and paste it to Claude.
- **A transfer didn't arrive:** check the spam folder of the receiving email address; GitHub transfers expire after a few days and can be started again.
- **You're locked out of an account:** use the recovery codes in the password manager. This is why they're saved there.

## 6. Safety: what to expect, and what protects you

This site is about reproductive justice. Sites on this topic attract bad-faith attention, so the new owners should expect some and be set up for it. None of this is a reason to worry; it's a reason to do the basics well.

**What you may see**
- **Abuse reports.** People file false complaints with hosting companies and domain registrars to try to get a site taken down. Notices arrive at the **email address on the Cloudflare account** (and the domain's registration email). Don't ignore them: reply promptly, and ask Claude to help you draft a calm, factual response.
- **Spam and hostile messages** to the public contact email (`ncrjisw@gmail.com`).
- **Attempts to take over your accounts** (fake "security alert" emails, password-guessing). This is the realistic risk, much more than the website itself being hacked.

**What already protects you**
- The site is **static files**: no login, no database, no form that stores anything. There is very little for anyone to break into.
- Cloudflare sits in front of the site and absorbs traffic spikes and most automated attacks, at no cost.
- Every change is recorded on GitHub, so anything can be undone.

**What you need to do**
1. **Guard the accounts.** Use an authenticator app (not text messages) on Gmail, GitHub, Cloudflare and the password manager; use a different strong password on each (the password manager does this for you); save recovery codes in the vault. Treat any email asking you to "verify" or "log in" as suspicious. Go to the website yourself instead of clicking the link.
2. **Make sure both owners get the alerts.** In Cloudflare, *Notifications* lets you send failed-deployment and security notices to more than one email. In GitHub, both owners should watch the repository. Agree who checks the Collaborative's inbox, and that it's checked at least weekly.
3. **Keep the domain's public details private.** Cloudflare normally hides the registrant's name and contact details in the public domain lookup. After registering, look the domain up at [lookup.icann.org](https://lookup.icann.org) and confirm no personal address or phone number shows. Register with the Collaborative's email, never a personal one.
4. **Decide whether the code repository should be public or private.** Public: anyone can read the code, and also the first names and history in it. Private: only people you invite can. Neither is unsafe, since nothing secret is stored there, but it's a choice for the Collaborative to make on purpose (*Repository → Settings → General → Danger Zone → Change visibility*).
5. **Never put private information in the repository:** no story submissions, no contributor contact details, no passwords or tokens. Claude is told this in `CLAUDE.md`.
6. **Keep admin access small.** Only the two owners hold owner roles. Developers get limited roles (Phase 6) and are removed when they stop helping. Review the members list on GitHub and Cloudflare every few months.
7. **Before the Archivist's story submission form is ever switched on,** read the privacy points in `docs/future-scope.md` and `docs/archivist-schema.md` first. People may share sensitive personal stories, and where those are stored and who can see them must be decided deliberately.

**If something looks wrong**
- A notice from Cloudflare, GitHub or the registrar: read it, don't panic, and ask Claude to help you reply. Keep a copy.
- You think an account was accessed by someone else: change its password, sign out all sessions, check the member list, and tell the other owner.
- The site is down or showing something unexpected: ask Claude to undo the last change (every version is kept), then look at Cloudflare → the `ncrj` Worker → *Deployments*.
