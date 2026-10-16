// Sample entries that exercise every part of the entry layout.
// They are deliberately NOT realistic: the Archivist is meant to be a citable
// archive, so no invented people, events, or sources. Replace with real entries
// from the team's sheet or from Sanity.
import type { ArchivistEntry, PortableText } from '../lib/archivist';

const p = (...paragraphs: string[]): PortableText =>
  paragraphs.map((text) => ({ _type: 'block', style: 'normal', children: [{ _type: 'span', text }] }));

const PLACEHOLDER_SOURCE = (n: number, type: ArchivistEntry['sources'][number]['sourceType']) => ({
  sourceType: type,
  citation: `Placeholder citation ${n}. Author Name, “Title of the Work,” Publisher or Archive, Year.`,
});

export const PLACEHOLDER_ENTRIES: ArchivistEntry[] = [
  {
    isPlaceholder: true,
    title: 'Sample entry: a fully documented story',
    slug: 'sample-documented',
    summary: 'Placeholder summary. One or two sentences that tell a visitor what this story is and why it matters.',
    entryType: 'movement-or-campaign',
    contentNote: 'Sample content note. Real entries use this to flag difficult subject matter before the story begins.',
    centeredVoices: 'Placeholder: whose voices should be centered in telling this story.',
    story: [
      ...p(
        'Placeholder for The Story. This layer answers the question “What happened?” in plain, careful language.',
        'A second paragraph shows how longer stories flow. Real entries can include emphasis, links, and lists.',
      ),
      {
        _type: 'block',
        style: 'normal',
        children: [
          { _type: 'span', text: 'Rich text works too: ' },
          { _type: 'span', text: 'emphasis', marks: ['em'] },
          { _type: 'span', text: ', ' },
          { _type: 'span', text: 'strong text', marks: ['strong'] },
          { _type: 'span', text: ', and ' },
          { _type: 'span', text: 'a link to another page', marks: ['l1'] },
          { _type: 'span', text: '.' },
        ],
        markDefs: [{ _key: 'l1', _type: 'link', href: '/archivist/' }],
      },
    ],
    singleStory: p('Placeholder for The Single Story: the dominant, simplified, or most familiar version.'),
    whatIsMissing: p('Placeholder for What Is Missing?: the perspectives, experiences, and context left out.'),
    rjLens: p('Placeholder for The RJ Lens: what reproductive justice allows us to see differently.'),
    context: [
      ...p('Placeholder for The Context. A list shows how structured context can be presented:'),
      { _type: 'block', listItem: 'bullet', children: [{ _type: 'span', text: 'Placeholder: a relevant law or policy' }] },
      { _type: 'block', listItem: 'bullet', children: [{ _type: 'span', text: 'Placeholder: an institution involved' }] },
      { _type: 'block', listItem: 'bullet', children: [{ _type: 'span', text: 'Placeholder: the wider historical setting' }] },
    ],
    resistance: p('Placeholder for Resistance & Possibility: organizing, care, survival, joy, and collective action.'),
    sources: [
      PLACEHOLDER_SOURCE(1, 'scholarship'),
      { ...PLACEHOLDER_SOURCE(2, 'oral-history'), accessNote: 'Placeholder access note, e.g. “Held at a named archive.”' },
      PLACEHOLDER_SOURCE(3, 'original-reporting'),
    ],
    placeName: 'Sample place',
    region: 'Sample region',
    country: 'United States',
    periodLabel: 'Sample period',
    startYear: 1970,
    verificationStatus: 'documented',
    lastReviewed: '2026-10-16',
    relatedSlugs: ['sample-partial', 'sample-unverified'],
    credit: 'Sample credit: “Recommended by a community member.”',
    publishedAt: '2026-10-16',
  },
  {
    isPlaceholder: true,
    title: 'Sample entry: a partially documented story',
    slug: 'sample-partial',
    summary: 'Placeholder summary for an entry where some parts are sourced and others are still being researched.',
    entryType: 'person',
    story: p('Placeholder for The Story. This sample fills only some layers, to show that empty layers are left off the page.'),
    whatIsMissing: p('Placeholder for What Is Missing?.'),
    rjLens: p('Placeholder for The RJ Lens.'),
    sources: [PLACEHOLDER_SOURCE(1, 'interview')],
    placeName: 'Sample place',
    periodLabel: 'Sample period',
    verificationStatus: 'partially-documented',
    verificationNote:
      'Placeholder verification note: what is documented, what remains uncertain, and why some documentation may be missing.',
    lastReviewed: '2026-10-15',
    relatedSlugs: ['sample-documented'],
    publishedAt: '2026-10-15',
  },
  {
    isPlaceholder: true,
    title: 'Sample entry: an unverified story',
    slug: 'sample-unverified',
    summary: 'Placeholder summary for a story shared in good faith whose sources have not been found yet.',
    entryType: 'community-response',
    story: p('Placeholder for The Story.'),
    resistance: p('Placeholder for Resistance & Possibility.'),
    sources: [PLACEHOLDER_SOURCE(1, 'other')],
    periodLabel: 'Sample period',
    verificationStatus: 'unverified',
    verificationNote: 'Placeholder verification note explaining what has been checked so far and what the team is still looking for.',
    lastReviewed: '2026-10-14',
    publishedAt: '2026-10-14',
  },
];
