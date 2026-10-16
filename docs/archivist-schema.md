# The Archivist: content schema

The agreed shape of an Archivist entry. This is the contract between the Sanity setup (which stores entries) and the site pages (which display them). Both sides build against this document; change it here first, by pull request, before changing either side.

It also defines the Google Sheet columns the team uses to gather the first entries, so they can be imported without re-typing.

Field names are written the way they'd appear in Sanity (`camelCase`). Sanity type names are given in brackets.

---

## ⚠️ Read first: keeping private information private

Sanity datasets are **public by default**: anyone who knows the project ID can read every *published* document through Sanity's API, including fields the website never displays. Hiding a field on the page does not hide it from the API.

So:

1. **Make the production dataset private.** The site is static, so it can read with a token at build time; the token lives in Cloudflare's build settings, never in the repo or the browser.
2. **Keep contributor contact details and raw submissions out of entry documents.** They go in a separate `submission` document (below), which should live in a separate private dataset or outside Sanity entirely.
3. Fields marked **Internal** below are for the editorial team. Even with a private dataset, the site's queries must never select them.

---

## Document: `archivistEntry`

### Identity

| Field | Type | Required | Notes |
|---|---|---|---|
| `title` | [string] | Yes | The person, event, movement, or story. |
| `slug` | [slug] from `title` | Yes | Becomes the URL: `/archivist/<slug>/`. Don't change it after publishing; people will cite these links. |
| `summary` | [text] | Yes | 1–2 sentences. Used on cards, search results, and link previews. |
| `entryType` | [string] list | Yes | One of: `person`, `event`, `movement-or-campaign`, `policy-or-legal-case`, `community-response`, `oral-history`, `art-and-culture`, `other`. |
| `themes` | [array] of references to `theme` | No | For browsing and filtering. See `theme` below. |
| `contentNote` | [string] | No | Shown before the story when it involves violence, coercion, loss, etc. e.g. "Discusses forced sterilization." |

### The seven layers

These are the sections of an entry page, in this order. All are [Portable Text] (rich text with links, emphasis, lists) unless noted.

| # | Field | Heading on the page | Required | Prompt for writers |
|---|---|---|---|---|
| 1 | `story` | The Story | Yes | What happened? |
| 2 | `singleStory` | The Single Story | No | What is the dominant, simplified, or most familiar version? |
| 3 | `whatIsMissing` | What Is Missing? | No | Whose perspective, experience, history, or context is absent? |
| 4 | `rjLens` | The RJ Lens | No | What does reproductive justice allow us to see differently? |
| 5 | `context` | The Context | No | What laws, policies, institutions, histories, geography, or systems of power shaped what happened? |
| 6 | `resistance` | Resistance & Possibility | No | Where do we see resistance, organizing, care, survival, family, belonging, pleasure, healing, joy, or collective action? |
| 7 | `sources` | The Record | Yes (at least 1) | See Sources below. |

Only The Story and The Record are required, so an entry can be published while other layers are still being researched. Empty layers are left off the page rather than shown blank.

| Field | Type | Required | Notes |
|---|---|---|---|
| `centeredVoices` | [text] | No | Whose voice should be centered in telling this story? Shown near the top of the entry. |

### Place and time

| Field | Type | Required | Notes |
|---|---|---|---|
| `placeName` | [string] | No | As it should read on the page, e.g. "Rural Mississippi" or "Nationwide". |
| `region` | [string] | No | State, province, or territory. Used for filtering. |
| `country` | [string] | No | Defaults to "United States". |
| `geo` | [geopoint] | No | Optional map pin for a future story map. Leave empty if a precise location could put anyone at risk. |
| `periodLabel` | [string] | No | As it should read, e.g. "1970s", "1973–present", "Spring 2022". |
| `startYear` | [number] | No | For sorting and timelines. |
| `endYear` | [number] | No | Empty means ongoing or a single moment. |

### Verification

Shown publicly on every entry. Being open about what is and isn't documented is part of the archive's purpose.

| Field | Type | Required | Notes |
|---|---|---|---|
| `verificationStatus` | [string] list | Yes | `documented`: supported by credible sources. `partially-documented`: some parts are sourced, others are not yet. `unverified`: shared in good faith; sources not yet found. |
| `verificationNote` | [text] | Required unless `documented` | What is known, what remains uncertain, and, where relevant, why documentation is missing. |
| `lastReviewed` | [date] | Yes | When the editorial team last checked the entry and its sources. Shown as "Last reviewed …". |

### Sources: `sources` ([array] of `source` objects)

Each source:

| Field | Type | Required | Notes |
|---|---|---|---|
| `sourceType` | [string] list | Yes | `original-reporting`, `scholarship`, `oral-history`, `public-testimony`, `court-record`, `policy-record`, `organizational-archive`, `interview`, `video`, `audio`, `other`. |
| `citation` | [text] | Yes | Full citation as it should be displayed. Any consistent style; Chicago is a safe default. |
| `url` | [url] | No | Link to the source. |
| `archivedUrl` | [url] | No | A permanent copy (e.g. Internet Archive Wayback Machine) in case the original link disappears. |
| `accessNote` | [string] | No | e.g. "Paywalled", "Held at the Schomburg Center", "Available on request". |

### Image

| Field | Type | Required | Notes |
|---|---|---|---|
| `image` | [image] | No | |
| `image.alt` | [string] | Yes, if there's an image | Describes the image for screen readers. |
| `image.credit` | [string] | Yes, if there's an image | Shown with the image. |
| `image.rightsNote` | [text] | **Internal** | Licence, permission, and consent from identifiable people. |

### Relationships and credit

| Field | Type | Required | Notes |
|---|---|---|---|
| `relatedEntries` | [array] of references to `archivistEntry` | No | Shown as "Related stories". |
| `credit` | [string] | No | Public credit, e.g. "Recommended by Jane Doe" or "Community submission". Only with the contributor's permission. |
| `publishedAt` | [datetime] | Yes | |

### Internal (never shown on the site)

| Field | Type | Notes |
|---|---|---|
| `editorialStatus` | [string] list | `researching`, `needs-sources`, `in-review`, `approved`. Separate from Sanity's draft/published state; tracks where an entry is in the team's process. |
| `consentNotes` | [text] | Consent from the people in the story or their communities; anything that must not be published. |
| `editorNotes` | [text] | Working notes. |
| `submission` | reference to `submission` | The community submission this entry came from, if any. |

Plus `image.rightsNote` above.

### Generated on the page (not stored)

- **Suggested citation**, built from title, "The Archivist, National Collaborative", `lastReviewed`, and the page URL. Uses the org name from `src/site.ts`, so it follows any rename.

---

## Document: `theme`

The browsing categories. A separate document so the team can add and rename themes without a code change.

| Field | Type | Required |
|---|---|---|
| `title` | [string] | Yes |
| `slug` | [slug] | Yes |
| `description` | [text] | No |

The theme list itself is an editorial decision for the Collaborative; don't seed it with invented themes.

---

## Document: `submission` (private)

What the public "Submit a Story to The Archivist" form collects. Submissions never appear on the site directly; the team reviews them and, if accepted, writes an `archivistEntry`.

Store these in a private dataset or outside Sanity (see the warning at the top). Collect only what's listed here.

| Field | Form question | Required |
|---|---|---|
| `recommendation` | What person, event, history, movement, or story are you recommending? | Yes |
| `whyItBelongs` | Why does it belong in The Archivist? | Yes |
| `rjConnection` | How does it connect to reproductive justice? | Yes |
| `missingPerspective` | Whose perspective is often missing or misrepresented? | No |
| `placeAndTime` | Where and when did it happen? | No |
| `sources` | Links, citations, recordings, documents, or other sources. How do we know this story? Who has already documented it? | No, but encouraged |
| `contributorConnection` | Are you personally connected to this story? (Yes / No / Prefer not to say, plus optional detail) | No |
| `ethicalConcerns` | Are there ethical, privacy, or consent considerations we should know about? | No |
| `contactName` | Your name | No |
| `contactEmail` | Your email, if you're willing to be contacted for follow-up | No |
| `creditPreference` | If we publish an entry, may we credit you? (By name / Anonymously / Don't credit) | No |
| `submittedAt` | (automatic) | |
| `reviewStatus` | (internal) `new`, `under-review`, `accepted`, `declined` | |

Recommended policy (for the Collaborative to confirm): delete contact details once a submission is resolved and no follow-up is needed, and tell submitters this on the form.

---

## Google Sheet columns

For gathering the first entries before Sanity is set up. One row per entry. Put this as the header row; columns map one-to-one onto the fields above, so the sheet can be imported later.

```
Title | Summary | Entry type | Themes | Content note | The Story | The Single Story | What Is Missing? | The RJ Lens | The Context | Resistance & Possibility | Centered voices | Place | Region | Country | Period | Start year | End year | Verification status | Verification note | Last reviewed | Source 1 type | Source 1 citation | Source 1 link | Source 2 type | Source 2 citation | Source 2 link | Source 3 type | Source 3 citation | Source 3 link | More sources | Image link | Image credit | Credit | Consent notes (internal) | Editor notes (internal) | Editorial status (internal)
```

Tips for the sheet:

- Use dropdowns (Data → Data validation) for Entry type, Verification status, Source types, and Editorial status, with the values listed above, so the import doesn't have to clean up spellings.
- "More sources": one per line, as `type | citation | link`.
- Keep internal columns at the far right, and don't share the sheet beyond the editorial team.

---

## Open questions for the Collaborative

1. Are the public labels for verification right? ("Documented", "Partially documented", "Unverified")
2. What's the policy for stories about living private individuals, as opposed to public figures, movements, and events?
3. What are the initial themes?
4. Is Sanity storing only Archivist entries, or News & Events posts as well?
