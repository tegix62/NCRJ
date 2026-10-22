// Site-wide settings. In Ghost these become @site / custom theme settings.
// The name is provisional; change it here and it updates everywhere.
export const SITE = {
  name: 'National Collaborative for Reproductive Justice, Innovation, and Political Education in Social Work',
  // Used where space is tight: browser tab, footer.
  shortName: 'National Collaborative',
  // Header lockup: first line set in caps, the rest beneath it.
  lockup: ['National Collaborative', 'for Reproductive Justice, Innovation,', 'and Political Education in Social Work'],
  description:
    'The National Collaborative for Reproductive Justice, Innovation, and Political Education in Social Work unites scholars, practitioners, students, and community members to advance reproductive justice through research, education, organizing, and collective action.',
  values: ['Knowledge', 'Solidarity', 'Liberation'],
};

// Categories = Ghost tags. Slug -> display info.
export const CATEGORIES: Record<string, { name: string; description: string }> = {
  events: { name: 'Events', description: 'Gatherings, dialogues, and trainings from the Collaborative.' },
};

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/leadership/', label: 'Leadership' },
  { href: '/members/', label: 'Members' },
  { href: '/archivist/', label: 'The Archivist' },
  { href: '/resources/', label: 'Resource Bank' },
  { href: '/activist-school/', label: 'Activist School' },
  { href: '/get-involved/', label: 'Get Involved' },
  { href: '/news/', label: 'News & Events' },
];

export const CONNECT = { href: '/connect/', label: 'Connect' };

// The four programme areas. Drives the homepage pillar row, the featured cards,
// and the intro on each section's own page.
export const PILLARS = [
  {
    href: '/archivist/',
    icon: 'book-open',
    title: 'The Archivist',
    subtitle: 'Beyond the Single Story',
    description: 'Help us archive the stories that should not be forgotten.',
    cta: 'Explore',
    tagline: 'Beyond the Single Story',
    tone: 'plum',
  },
  {
    href: '/resources/',
    icon: 'library',
    title: 'Resource Bank',
    subtitle: 'Teaching. Research. Practice. Action.',
    description: 'Access and contribute to curated resources.',
    cta: 'Browse',
    tagline: 'Diverse. Accessible. Justice-Centered.',
    tone: 'green',
  },
  {
    href: '/activist-school/',
    icon: 'users',
    title: 'Activist School',
    subtitle: 'Learn. Strategize. Build.',
    description: 'Educational programs for scholars, practitioners, students, and community.',
    cta: 'Learn more',
    tagline: 'Learning for Collective Liberation.',
    tone: 'rust',
  },
  {
    href: '/get-involved/',
    icon: 'megaphone',
    title: 'Get Involved',
    subtitle: 'Co-Conspire. Contribute. Build with Us.',
    description: 'There are many ways to support and shape this work.',
    cta: 'Take action',
    tagline: 'Many Ways to Build Together.',
    tone: 'teal',
  },
] as const;

// The Collaborative's public email, shown on the Connect page and in the footer.
export const CONTACT_EMAIL = 'ncrjisw@gmail.com';

// Social channels, shown on the Connect page.
export const SOCIAL = {
  youtube: { href: 'https://www.youtube.com/@crystalmhc', handle: '@crystalmhc' },
};
