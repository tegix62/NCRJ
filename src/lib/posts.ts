import { getCollection } from 'astro:content';

/** Published posts: pinned ones first, then newest first. */
export async function getPublishedPosts() {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  return posts.sort(
    (a, b) =>
      Number(b.data.pinned) - Number(a.data.pinned) || b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf(),
  );
}

/** True once an event has started (plus a couple of hours, so the link works while it runs). */
export function eventHasPassed(startsAt: Date, now = new Date()) {
  return now.valueOf() > startsAt.valueOf() + 2 * 60 * 60 * 1000;
}

/** "Tuesday, October 20, 2026 · 2:00 PM Eastern" */
export function formatEventTime(date: Date) {
  const day = date.toLocaleDateString('en-US', { dateStyle: 'full', timeZone: 'America/New_York' });
  const time = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', timeZone: 'America/New_York' });
  return `${day} · ${time} Eastern`;
}
