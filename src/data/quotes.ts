// Quotes shown around the site with the <Quote> component. Pages pick one by key,
// e.g. <Quote id="adichie-stories" />. Quote text goes in without quotation marks;
// the component shows a large decorative opening mark instead. Only add quotes whose wording and source are confirmed.
export interface QuoteEntry {
  text: string;
  author: string;
  /** Short description of the author, e.g. "screenwriter". Optional. */
  role?: string;
  /** Where it's from, e.g. a talk or book title. Optional. */
  source?: string;
}

export const QUOTES = {
  'adichie-stories': {
    text: 'Many stories matter. Stories have been used to dispossess and to malign. But stories can also be used to empower, and to humanize. Stories can break the dignity of a people. But stories can also repair that broken dignity.',
    author: 'Chimamanda Ngozi Adichie',
    source: 'The Danger of a Single Story',
  },
  'hopi-stories': {
    text: 'The one who tells the stories rules the world. Stories carry the seeds of wisdom; they can nurture life or destroy it.',
    author: 'Hopi traditional proverb',
  },
  'waithe-fragments': {
    text: 'I’m writing my story so that others might see fragments of themselves.',
    author: 'Lena Waithe',
    role: 'screenwriter',
  },
} satisfies Record<string, QuoteEntry>;

export type QuoteId = keyof typeof QUOTES;
