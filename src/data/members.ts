// Members of the Collaborative, shown on the Leadership page in this order.
// Members with `featured: true` (the co-directors) get the large cards at the top.
// To add a bio or headshot, fill in `bio` or `headshot` (a path under public/,
// e.g. '/images/leadership/crystal-hayes.webp'). Only add pronouns the person has given.
export interface Member {
  name: string;
  credentials?: string;
  role?: string;
  pronouns?: string;
  bio?: string;
  headshot?: string;
  featured?: boolean;
}

export const MEMBERS: Member[] = [
  { name: 'Crystal M. Hayes', credentials: 'Ph.D., MSW', role: 'Founder and Director', featured: true },
  { name: 'E. Goldblatt Hyatt', credentials: 'DSW, LCSW, MSW', role: 'Co-Director', featured: true },
  { name: 'Simone Snyder', credentials: 'DSW, MSW' },
  { name: 'Jessica (Danuwoa) A Pelletier', credentials: 'LCSWR' },
  { name: 'Nakita Joseph', credentials: 'LMSW' },
  { name: 'Marissa Aitken' },
];
