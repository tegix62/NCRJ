// Text of the "Proposed 2029 EPAS: What Changed?" infographic. It is used twice:
// to draw the image (design-sources/graphics/epas-what-changed.mjs) and as the
// text version shown under it on the website, so the two always match.
// The comparison itself is based on Suzanne Pritzker's "EPAS Competencies
// Side-by-Side (2022–Draft 2029)".
export const EPAS = {
  title: 'Proposed 2029 EPAS: What Changed?',
  strip: 'What was removed, what was weakened, and why it matters.',
  lede: 'The proposed 2029 Educational Policy and Accreditation Standards (EPAS) represent a major regression in social work education — moving away from explicit commitments to anti-racism, anti-oppression, and justice.',
  quote: 'Social work education should prepare students to challenge oppression, not erase it.',
  was: {
    heading: 'What the 2022 EPAS said explicitly',
    intro: 'The 2022 EPAS included clear and direct commitments to anti-racism, equity, and justice.',
    items: [
      { icon: 'users', text: 'Anti-racism, anti-oppression, diversity, equity, and inclusion were named directly.' },
      { icon: 'file-text', text: 'A stand-alone ADEI competency required social workers to engage anti-racism, diversity, equity, and inclusion in practice.' },
      { icon: 'scale', text: 'Justice was framed as social, racial, economic, and environmental justice.' },
      { icon: 'graduation-cap', text: 'Students were expected to critique the profession’s history through anti-racist and anti-oppressive lenses.' },
    ],
  },
  now: {
    heading: 'What the draft 2029 EPAS does instead',
    intro: 'The proposed 2029 EPAS remove, rename, and soften key language — signaling a retreat from explicit commitments to justice.',
    items: [
      { icon: 'x-circle', text: 'The stand-alone ADEI competency is removed.' },
      { icon: 'message-circle', text: '‘Advance Human Rights and Social, Racial, Economic, and Environmental Justice’ is replaced with ‘Promote Dignity, Respect, and Justice for All.’' },
      { icon: 'minus', text: 'Anti-racist and anti-oppressive language is stripped from the competencies.' },
      { icon: 'file-text', text: 'The word ‘history’ is no longer explicitly required.' },
      { icon: 'monitor', text: 'Person-in-environment and technology are emphasized more, while racism and oppression are named less.' },
    ],
  },
  arrow: 'From commitment to erasure',
  why: {
    heading: 'Why this matters',
    text: 'These changes have major implications for how future social workers are educated, how they practice, and how the profession understands its obligations to justice.',
    items: [
      { icon: 'users', text: 'Less explicit language means less accountability.' },
      { icon: 'target', text: 'Programs can claim commitment to justice without clearly naming racism or oppression.' },
      { icon: 'bar-chart', text: 'Students may be less prepared to confront structural harm in practice, policy, and research.' },
      { icon: 'alert', text: 'This is not a neutral wording change — it reshapes what social work is expected to teach and defend.' },
    ],
    note: 'A weaker foundation for a more just future.',
  },
  credit: 'Source comparison by Suzanne Pritzker: EPAS Competencies Side-by-Side (2022–Draft 2029).',
  creditFull:
    'Source comparison by Suzanne Pritzker: EPAS Competencies Side-by-Side (2022–Draft 2029). Infographic developed by the National Collaborative for Reproductive Justice, Innovation, and Political Education in Social Work.',
};
