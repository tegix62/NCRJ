import { getCollection } from 'astro:content';

/** Published posts, newest first. */
export async function getPublishedPosts() {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());
}

/** "Tuesday, October 20, 2026 · 2:00 PM Eastern" */
export function formatEventTime(date: Date) {
  const day = date.toLocaleDateString('en-US', { dateStyle: 'full', timeZone: 'America/New_York' });
  const time = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', timeZone: 'America/New_York' });
  return `${day} · ${time} Eastern`;
}
