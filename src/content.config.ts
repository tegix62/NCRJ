// Content is modelled on Ghost's: posts with tags (used as categories) and authors.
// Keeping this shape makes a later move to Ghost or Sanity a one-to-one mapping.
import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    publishedAt: z.coerce.date(),
    tags: z.array(z.string()).min(1),
    author: reference('authors'),
    featureImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const authors = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/authors' }),
  schema: z.object({
    name: z.string(),
    bio: z.string().optional(),
    // Pen names are welcome; this is the public display name only.
  }),
});

export const collections = { posts, authors };
