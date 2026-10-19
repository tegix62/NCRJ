// Members of the Collaborative, shown on the Leadership page in this order.
// Members with `featured: true` (the co-directors) get the large cards at the top.
// To add a bio or headshot, fill in `bio` or `headshot` (a path under public/,
// e.g. '/images/leadership/crystal-hayes.webp'). Only add pronouns the person has given.
// In a bio, wrap a title in *asterisks* to show it in italics.
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
  {
    name: 'Crystal M. Hayes',
    credentials: 'Ph.D., MSW',
    role: 'Founder and Director',
    pronouns: 'she/her',
    featured: true,
    bio: 'Dr. Crystal M. Hayes is a Black feminist social worker, scholar, prison-based doula, and childbirth educator. Her work centers reproductive justice, carceral systems, and the liberation of Black women and communities through research, education, organizing, and collective action.',
  },
  {
    name: 'E. Goldblatt Hyatt',
    credentials: 'DSW, LCSW, MSW',
    role: 'Co-Director',
    pronouns: 'they/them',
    featured: true,
    bio: 'Dr. E. Goldblatt Hyatt is an administrator, clinician, and author whose work centers reproductive justice, grief and loss, and transformative care. They are a nationally recognized speaker and educator with nearly two decades of experience, and author of *Social Work and Reproductive Justice: A Necessary Fit* (2025).',
  },
  { name: 'Simone Snyder', credentials: 'DSW, MSW' },
  { name: 'Jessica (Danuwoa) A Pelletier', credentials: 'LCSWR' },
  { name: 'Nakita Joseph', credentials: 'LMSW' },
  { name: 'Marissa Aitken' },
];
