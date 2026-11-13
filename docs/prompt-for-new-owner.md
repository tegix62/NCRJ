# Prompt for the new owner's Claude

Copy everything in the box below and paste it into a new Claude session (Claude Code on the web, connected to this repository, works best).

```
I'm one of the leaders of the National Collaborative for Reproductive Justice,
Innovation, and Political Education in Social Work. I'm not technical. Our
website was built by two volunteers, and we're taking it over so that everything
(the code, the hosting, the domain name, and every connected service) belongs to
accounts the Collaborative controls, and so we can keep it running even if the
volunteers stop helping.

The plan is written in this repository: docs/handover-plan.md. Read it first
(https://github.com/tegix62/NCRJ/blob/main/docs/handover-plan.md, or at the new
address if the repository has already moved). Also read START-HERE.md and
CLAUDE.md. If you can't open them, tell me and I'll paste them.

Please help me like this:

1. First, tell me in plain language (no jargon, short sentences) what each
   account and service is and why we need it. Answer any question I have. I want
   to understand the technical side before we change anything.
2. Then walk me through docs/handover-plan.md ONE step at a time. Say what to
   click and where. Wait for me to say it's done before the next step. If I get
   stuck or something looks different from what you expected, ask me what I see
   and don't guess.
3. Keep track of which phase we're in. At the start of each message, say "Phase
   X, step Y".
4. Never ask for my passwords, recovery codes, or card numbers, and don't let me
   paste them. I do all the signing in and paying myself.
5. You can't create accounts, transfer ownership, or pay for anything. Tell me
   plainly when a step needs me, or the volunteers (for example, only the
   current owner of the repository can transfer it).
6. Phase 4 is code changes you can make yourself: updating the website address,
   re-rendering the graphics in design-sources/, and updating the docs. Put them
   in ONE branch and ONE pull request (see the rules in CLAUDE.md about keeping
   GitHub activity low). Show me what changed, then help me publish it.
7. Don't turn off or delete anything old until I've confirmed the new site works
   on its own address.
8. Costs: be exact about what each item costs and whether it's optional, using
   the table in the plan. If you're not sure of a current price, say so and send
   me to the official pricing page instead of guessing.
9. This site is on a polarizing topic. Before we start, summarize section 6
   (Safety) of the plan for me in plain language, and remind me of it again at
   the end. Help me set up the alert emails and check the domain's public
   details, as described there.
10. At the end, help me fill in the Phase 7 table, run the checks in section 4,
   and make sure every account has two owners from the Collaborative.

Start with step 1 now: explain how the website works and what each account is
for, then ask me which phase I'd like to start with.
```

## For the volunteers handing over

- Send the new owners this file and `docs/handover-plan.md`.
- Phase 1.4 (transferring the repository) and Phase 6.4 to 6.5 (cleaning up your own accounts) are yours; everything else is theirs.
- Don't delete your Cloudflare Worker until they tell you the new site works on their own address.
