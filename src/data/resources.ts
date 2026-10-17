// Resource Bank items, grouped by category. Add an item by copying an entry.
// For videos, `youtubeId` is the part after "watch?v=" in the YouTube link.
export interface VideoResource {
  title: string;
  youtubeId: string;
}

export const VIDEOS: VideoResource[] = [
  {
    title: 'Violence Against Black Women Is Structural: From Adriana Smith to Cerina Fairfax',
    youtubeId: 'lMP4TxKmoE8',
  },
  {
    title: 'The 5th Principle of Reproductive Justice: A Conversation with Loretta Ross',
    youtubeId: 'Nqa3gmjMVMQ',
  },
];

export interface ArticleResource {
  title: string;
  url: string;
  /** e.g. "Jane Doe and Sam Lee" */
  authors?: string;
  /** e.g. "Reflections: Narratives of Professional Helping, 2024" */
  publication?: string;
}

export const ARTICLES: ArticleResource[] = [];
