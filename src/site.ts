// Site-wide settings. In Ghost these become @site / custom theme settings.
// The name is provisional; change it here and it updates everywhere.
export const SITE = {
  name: 'The National Collaborative for Reproductive Justice & Social Work',
  // Used where space is tight: header, footer, browser tab.
  shortName: 'The National Collaborative',
  tagline: 'Placeholder tagline until the copy is finalised.',
};

// Categories = Ghost tags. Slug -> display info.
export const CATEGORIES: Record<string, { name: string; description: string }> = {
  'category-one': { name: 'Category One', description: 'Placeholder description.' },
  'category-two': { name: 'Category Two', description: 'Placeholder description.' },
  'category-three': { name: 'Category Three', description: 'Placeholder description.' },
};

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/blog/', label: 'Articles' },
  { href: '/about/', label: 'About' },
  { href: '/write-for-us/', label: 'Write for us' },
];
