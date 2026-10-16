// Archivist data layer. Types follow docs/archivist-schema.md (public fields only).
// Pages import from here and nowhere else, so connecting Sanity means replacing
// the body of getEntries() with a GROQ query that selects these same fields.
import { PLACEHOLDER_ENTRIES } from '../data/archivist-placeholders';

// Portable Text, the rich-text format Sanity stores. Only what the site renders.
export interface PTSpan {
  _type: 'span';
  text: string;
  marks?: string[];
}
export interface PTLink {
  _key: string;
  _type: 'link';
  href: string;
}
export interface PTBlock {
  _type: 'block';
  style?: 'normal' | 'h3' | 'blockquote';
  listItem?: 'bullet' | 'number';
  children: PTSpan[];
  markDefs?: PTLink[];
}
export type PortableText = PTBlock[];

export const ENTRY_TYPES = {
  person: 'Person',
  event: 'Event',
  'movement-or-campaign': 'Movement or campaign',
  'policy-or-legal-case': 'Policy or legal case',
  'community-response': 'Community response',
  'oral-history': 'Oral history',
  'art-and-culture': 'Art and culture',
  other: 'Other',
} as const;

export const SOURCE_TYPES = {
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
} as const;

export const VERIFICATION = {
  documented: {
    label: 'Documented',
    description: 'Supported by credible sources.',
  },
  'partially-documented': {
    label: 'Partially documented',
    description: 'Some parts are sourced; others are not yet.',
  },
  unverified: {
    label: 'Unverified',
    description: 'Shared in good faith; sources not yet found.',
  },
} as const;

export type EntryType = keyof typeof ENTRY_TYPES;
export type SourceType = keyof typeof SOURCE_TYPES;
export type VerificationStatus = keyof typeof VERIFICATION;

// The six written layers, in page order. The seventh, The Record, is `sources`.
export const LAYERS = [
  { key: 'story', heading: 'The Story', prompt: 'What happened?' },
  { key: 'singleStory', heading: 'The Single Story', prompt: 'What is the dominant, simplified, or most familiar version?' },
  { key: 'whatIsMissing', heading: 'What Is Missing?', prompt: 'Whose perspective, experience, history, or context is absent?' },
  { key: 'rjLens', heading: 'The RJ Lens', prompt: 'What does reproductive justice allow us to see differently?' },
  { key: 'context', heading: 'The Context', prompt: 'What laws, policies, institutions, histories, geography, or systems of power shaped what happened?' },
  { key: 'resistance', heading: 'Resistance & Possibility', prompt: 'Where do we see resistance, organizing, care, survival, family, belonging, pleasure, healing, joy, or collective action?' },
] as const;

export const RECORD = { key: 'record', heading: 'The Record', prompt: 'What credible sources allow others to learn more, verify the story, teach it, and cite it?' };

export type LayerKey = (typeof LAYERS)[number]['key'];

export interface Source {
  sourceType: SourceType;
  citation: string;
  url?: string;
  archivedUrl?: string;
  accessNote?: string;
}

export interface Theme {
  title: string;
  slug: string;
  description?: string;
}

export interface ArchivistEntry {
  title: string;
  slug: string;
  summary: string;
  entryType: EntryType;
  themes?: Theme[];
  contentNote?: string;

  story: PortableText;
  singleStory?: PortableText;
  whatIsMissing?: PortableText;
  rjLens?: PortableText;
  context?: PortableText;
  resistance?: PortableText;
  centeredVoices?: string;
  sources: Source[];

  placeName?: string;
  region?: string;
  country?: string;
  periodLabel?: string;
  startYear?: number;
  endYear?: number;

  verificationStatus: VerificationStatus;
  verificationNote?: string;
  lastReviewed: string; // YYYY-MM-DD

  image?: { url: string; alt: string; credit: string };
  relatedSlugs?: string[];
  credit?: string;
  publishedAt: string;

  /** True for sample content; the pages show a notice when any entry is a placeholder. */
  isPlaceholder?: boolean;
}

/** All public entries, newest first. */
export async function getEntries(): Promise<ArchivistEntry[]> {
  return [...PLACEHOLDER_ENTRIES].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function formatDate(iso: string) {
  return new Date(iso + 'T12:00:00Z').toLocaleDateString('en-US', { dateStyle: 'long', timeZone: 'UTC' });
}

export function placeAndPeriod(e: ArchivistEntry) {
  return [e.placeName, e.periodLabel].filter(Boolean).join(' · ');
}
