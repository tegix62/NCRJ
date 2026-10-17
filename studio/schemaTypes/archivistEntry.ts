// One entry in The Archivist. Field names, types and option values follow
// docs/archivist-schema.md, which is the contract with the site pages
// (src/lib/archivist.ts). Change that doc first, then this file.
//
// Fields in the "Internal" group are for the editorial team only. The dataset
// is private, but the site's queries must still never select them.
import { defineArrayMember, defineField, defineType } from 'sanity';

const list = (options: Record<string, string>) =>
  Object.entries(options).map(([value, title]) => ({ value, title }));

const ENTRY_TYPES = {
  person: 'Person',
  event: 'Event',
  'movement-or-campaign': 'Movement or campaign',
  'policy-or-legal-case': 'Policy or legal case',
  'community-response': 'Community response',
  'oral-history': 'Oral history',
  'art-and-culture': 'Art and culture',
  other: 'Other',
};

const SOURCE_TYPES = {
  'original-reporting': 'Original reporting',
  scholarship: 'Scholarship',
  'oral-history': 'Oral history',
  'public-testimony': 'Public testimony',
  'court-record': 'Court record',
  'policy-record': 'Policy record',
  'organizational-archive': 'Organizational archive',
  interview: 'Interview',
  video: 'Video',
  audio: 'Audio',
  other: 'Other',
};

const VERIFICATION = {
  documented: 'Documented',
  'partially-documented': 'Partially documented',
  unverified: 'Unverified',
};

const EDITORIAL_STATUS = {
  researching: 'Researching',
  'needs-sources': 'Needs sources',
  'in-review': 'In review',
  approved: 'Approved',
};

// Rich text: paragraphs, h3, quotes, lists, bold/italic and links. Matches what
// src/components/PortableText.astro renders.
const portableText = [
  defineArrayMember({
    type: 'block',
    styles: [
      { title: 'Normal', value: 'normal' },
      { title: 'Heading', value: 'h3' },
      { title: 'Quote', value: 'blockquote' },
    ],
  }),
];

const layer = (name: string, title: string, description: string, required = false) =>
  defineField({
    name,
    title,
    description,
    type: 'array',
    group: 'layers',
    of: portableText,
    validation: required ? (rule) => rule.required() : undefined,
  });

export const archivistEntry = defineType({
  name: 'archivistEntry',
  title: 'Archivist entry',
  type: 'document',
  groups: [
    { name: 'identity', title: 'Identity', default: true },
    { name: 'layers', title: 'The seven layers' },
    { name: 'record', title: 'The Record' },
    { name: 'place', title: 'Place & time' },
    { name: 'verification', title: 'Verification' },
    { name: 'media', title: 'Image & credit' },
    { name: 'internal', title: 'Internal' },
  ],
  fields: [
    // Identity
    defineField({
      name: 'title',
      title: 'Title',
      description: 'The person, event, movement, or story.',
      type: 'string',
      group: 'identity',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Web address',
      description: "Becomes /archivist/<this>/. Don't change it after publishing; people will cite these links.",
      type: 'slug',
      group: 'identity',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      description: '1–2 sentences. Used on cards and link previews.',
      type: 'text',
      rows: 3,
      group: 'identity',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'entryType',
      title: 'Entry type',
      type: 'string',
      group: 'identity',
      options: { list: list(ENTRY_TYPES) },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'themes',
      title: 'Themes',
      type: 'array',
      group: 'identity',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'theme' }] })],
    }),
    defineField({
      name: 'contentNote',
      title: 'Content note',
      description: 'Shown before the story when it involves violence, coercion, loss, etc.',
      type: 'string',
      group: 'identity',
    }),
    defineField({
      name: 'centeredVoices',
      title: 'Centered voices',
      description: 'Whose voice should be centered in telling this story? Shown near the top of the entry.',
      type: 'text',
      rows: 3,
      group: 'identity',
    }),

    // The seven layers (the seventh, The Record, is `sources`)
    layer('story', '1. The Story', 'What happened?', true),
    layer('singleStory', '2. The Single Story', 'What is the dominant, simplified, or most familiar version?'),
    layer('whatIsMissing', '3. What Is Missing?', 'Whose perspective, experience, history, or context is absent?'),
    layer('rjLens', '4. The RJ Lens', 'What does reproductive justice allow us to see differently?'),
    layer(
      'context',
      '5. The Context',
      'What laws, policies, institutions, histories, geography, or systems of power shaped what happened?',
    ),
    layer(
      'resistance',
      '6. Resistance & Possibility',
      'Where do we see resistance, organizing, care, survival, family, belonging, pleasure, healing, joy, or collective action?',
    ),
    defineField({
      name: 'sources',
      title: '7. The Record',
      description: 'What credible sources allow others to learn more, verify the story, teach it, and cite it?',
      type: 'array',
      group: 'record',
      validation: (rule) => rule.required().min(1),
      of: [
        defineArrayMember({
          type: 'object',
          name: 'source',
          fields: [
            defineField({
              name: 'sourceType',
              title: 'Type',
              type: 'string',
              options: { list: list(SOURCE_TYPES) },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'citation',
              title: 'Citation',
              description: 'Full citation as it should be displayed. Chicago style is a safe default.',
              type: 'text',
              rows: 3,
              validation: (rule) => rule.required(),
            }),
            defineField({ name: 'url', title: 'Link', type: 'url' }),
            defineField({
              name: 'archivedUrl',
              title: 'Archived link',
              description: 'A permanent copy (e.g. Internet Archive) in case the original disappears.',
              type: 'url',
            }),
            defineField({
              name: 'accessNote',
              title: 'Access note',
              description: 'e.g. "Paywalled", "Available on request".',
              type: 'string',
            }),
          ],
          preview: { select: { title: 'citation', subtitle: 'sourceType' } },
        }),
      ],
    }),

    // Place and time
    defineField({
      name: 'placeName',
      title: 'Place',
      description: 'As it should read on the page, e.g. "Rural Mississippi" or "Nationwide".',
      type: 'string',
      group: 'place',
    }),
    defineField({ name: 'region', title: 'Region', description: 'State, province, or territory.', type: 'string', group: 'place' }),
    defineField({ name: 'country', title: 'Country', type: 'string', group: 'place', initialValue: 'United States' }),
    defineField({
      name: 'geo',
      title: 'Map pin',
      description: 'Optional, for a future story map. Leave empty if a precise location could put anyone at risk.',
      type: 'geopoint',
      group: 'place',
    }),
    defineField({
      name: 'periodLabel',
      title: 'Period',
      description: 'As it should read, e.g. "1970s", "1973–present", "Spring 2022".',
      type: 'string',
      group: 'place',
    }),
    defineField({ name: 'startYear', title: 'Start year', type: 'number', group: 'place' }),
    defineField({
      name: 'endYear',
      title: 'End year',
      description: 'Leave empty for ongoing or a single moment.',
      type: 'number',
      group: 'place',
    }),

    // Verification
    defineField({
      name: 'verificationStatus',
      title: 'Verification status',
      description: 'Shown publicly on every entry.',
      type: 'string',
      group: 'verification',
      options: { list: list(VERIFICATION), layout: 'radio' },
      initialValue: 'unverified',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'verificationNote',
      title: 'Verification note',
      description: 'What is known, what remains uncertain, and why documentation may be missing. Shown publicly.',
      type: 'text',
      rows: 3,
      group: 'verification',
      validation: (rule) =>
        rule.custom((value, { document }) =>
          document?.verificationStatus !== 'documented' && !value
            ? 'Required unless the entry is fully documented.'
            : true,
        ),
    }),
    defineField({
      name: 'lastReviewed',
      title: 'Last reviewed',
      description: 'When the editorial team last checked the entry and its sources.',
      type: 'date',
      group: 'verification',
      validation: (rule) => rule.required(),
    }),

    // Image and credit
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      group: 'media',
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt text',
          description: 'Describes the image for screen readers.',
          type: 'string',
          validation: (rule) =>
            rule.custom((value, { parent }) =>
              (parent as { asset?: unknown })?.asset && !value ? 'Required when there is an image.' : true,
            ),
        }),
        defineField({
          name: 'credit',
          title: 'Credit',
          type: 'string',
          validation: (rule) =>
            rule.custom((value, { parent }) =>
              (parent as { asset?: unknown })?.asset && !value ? 'Required when there is an image.' : true,
            ),
        }),
        defineField({
          name: 'rightsNote',
          title: 'Rights note (internal)',
          description: 'Licence, permission, and consent from identifiable people. Never shown on the site.',
          type: 'text',
          rows: 3,
        }),
      ],
    }),
    defineField({
      name: 'relatedEntries',
      title: 'Related entries',
      type: 'array',
      group: 'media',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'archivistEntry' }] })],
    }),
    defineField({
      name: 'credit',
      title: 'Public credit',
      description: 'e.g. "Community submission". Only with the contributor\'s permission.',
      type: 'string',
      group: 'media',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      group: 'media',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),

    // Internal: never shown on the site
    defineField({
      name: 'editorialStatus',
      title: 'Editorial status',
      type: 'string',
      group: 'internal',
      options: { list: list(EDITORIAL_STATUS) },
      initialValue: 'researching',
    }),
    defineField({
      name: 'consentNotes',
      title: 'Consent notes',
      description: 'Consent from the people in the story or their communities; anything that must not be published.',
      type: 'text',
      rows: 4,
      group: 'internal',
    }),
    defineField({ name: 'editorNotes', title: 'Editor notes', type: 'text', rows: 4, group: 'internal' }),
  ],
  preview: {
    select: { title: 'title', place: 'placeName', period: 'periodLabel' },
    prepare: ({ title, place, period }) => ({
      title,
      subtitle: [place, period].filter(Boolean).join(' · '),
    }),
  },
});
