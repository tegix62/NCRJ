// Resource Bank items. Add a video by copying an entry; `youtubeId` is the part
// after "watch?v=" in the YouTube link.
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
