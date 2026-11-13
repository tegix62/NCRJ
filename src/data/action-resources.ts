// "Political Education, Public Statements, and Action Resources": shareable items
// shown on News & Events and featured on the Resource Bank. Add an entry to add an item.
import { EPAS } from './epas-what-changed.mjs';

export interface ActionResource {
  id: string;
  title: string;
  description: string;
  /** Shown under the image. A title wrapped in *asterisks* is italicised. */
  credit: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  /** The text of the graphic, for people who can't see it. */
  textVersion?: typeof EPAS;
}

export const ACTION_RESOURCES: ActionResource[] = [
  {
    id: 'epas-what-changed',
    title: 'Proposed 2029 EPAS: What Changed?',
    description:
      'A side-by-side overview of key differences between the 2022 EPAS and the proposed 2029 standards, including the removal, renaming, or weakening of explicit language related to anti-racism, ADEI, oppression, history, and justice.',
    credit:
      'Source comparison by Suzanne Pritzker: *EPAS Competencies Side-by-Side (2022–Draft 2029).* Infographic developed by the National Collaborative for Reproductive Justice, Innovation, and Political Education in Social Work.',
    image: '/images/graphics/epas-what-changed.webp',
    imageAlt:
      'Infographic: Proposed 2029 EPAS: What Changed? What was removed, what was weakened, and why it matters. The full text is below the image.',
    imageWidth: 2040,
    imageHeight: 3600,
    textVersion: EPAS,
  },
];
