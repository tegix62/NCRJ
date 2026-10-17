// Browsing categories for the Archivist. See docs/archivist-schema.md.
// The theme list is an editorial decision for the Collaborative: don't seed it.
import { defineField, defineType } from 'sanity';

export const theme = defineType({
  name: 'theme',
  title: 'Theme',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required() }),
    defineField({
      name: 'slug',
      title: 'Web address',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
  ],
});
