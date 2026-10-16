// Site-wide settings. In Ghost these become @site / custom theme settings.
export const SITE = {
  name: 'Site Name',
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
