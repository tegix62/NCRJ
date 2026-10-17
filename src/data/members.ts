// Members of the Collaborative, in the order they appear on the About page.
// `role` is optional.
export interface Member {
  name: string;
  credentials?: string;
  role?: string;
}

export const MEMBERS: Member[] = [
  { name: 'Crystal M. Hayes', credentials: 'Ph.D., MSW', role: 'Founder and Co-Director' },
  { name: 'E. Goldblatt Hyatt', credentials: 'DSW, LCSW, MSW', role: 'Co-Director' },
  { name: 'Simone Snyder', credentials: 'DSW, MSW' },
  { name: 'Jessica (Danuwoa) A Pelletier', credentials: 'LCSWR' },
  { name: 'Nakita Joseph', credentials: 'LMSW' },
  { name: 'Marissa Aitken' },
];
