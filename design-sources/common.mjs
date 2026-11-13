// Shared pieces for the poster and infographic sources: brand colours and fonts
// (the same ones the website uses), the logo, icons, and QR codes.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import QRCode from 'qrcode';
import { LOGO_VIEWBOX, LOGO_INNER } from '../src/assets/logo.mjs';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (p) => fs.readFileSync(path.join(ROOT, p));
export const dataUri = (p, mime) => `data:${mime};base64,${read(p).toString('base64')}`;

/** Website address and contact email come from the site's own settings, so they stay in sync. */
export function siteConfig() {
  const astro = read('astro.config.mjs').toString();
  const ts = read('src/site.ts').toString();
  const url = /site:\s*'([^']+)'/.exec(astro)[1];
  return {
    url,
    host: url.replace(/^https?:\/\//, '').replace(/\/$/, ''),
    email: /CONTACT_EMAIL\s*=\s*'([^']+)'/.exec(ts)[1],
    orgName: 'National Collaborative for Reproductive Justice, Innovation, and Political Education in Social Work',
  };
}

const font = (family, weight, file, pkg) =>
  `@font-face{font-family:'${family}';font-weight:${weight};font-style:normal;src:url(data:font/woff2;base64,${read(
    `node_modules/${pkg}/files/${file}`,
  ).toString('base64')}) format('woff2');}`;

export const FONT_CSS = [
  font('Libre Caslon Text', 400, 'libre-caslon-text-latin-400-normal.woff2', '@fontsource/libre-caslon-text'),
  font('Libre Caslon Text', 700, 'libre-caslon-text-latin-700-normal.woff2', '@fontsource/libre-caslon-text'),
  font('DM Sans', '100 1000', 'dm-sans-latin-wght-normal.woff2', '@fontsource-variable/dm-sans'),
  font('Nothing You Could Do', 400, 'nothing-you-could-do-latin-400-normal.woff2', '@fontsource/nothing-you-could-do'),
].join('\n');

// Same palette as src/styles/global.css.
export const BASE_CSS = `
:root{
  --green:#1f3b34; --brush:#364638; --rust:#c47555; --rust-text:#96502f; --rust-deep:#8a3a1c;
  --cream:#f8f4ee; --sand:#ece3d4; --icon-bg:#ecdbc5; --ink:#141414; --muted:#5f5a54;
  --sage:color-mix(in srgb,#1f3b34 14%,#f8f4ee);
  --display:'Libre Caslon Text',Georgia,serif; --body:'DM Sans',system-ui,sans-serif; --script:'Nothing You Could Do',cursive;
}
*{box-sizing:border-box;margin:0;padding:0}
html,body{background:#fff}
body{font-family:var(--body);color:var(--ink);-webkit-font-smoothing:antialiased}
.poster{position:relative;overflow:hidden}
.logo-badge{display:grid;place-items:center;border-radius:50%;background:var(--cream)}
.diamond{display:inline-block;width:.5em;height:.5em;background:var(--rust);transform:rotate(45deg);margin:0 .9em;vertical-align:.1em}
`;

export const logo = (size) =>
  `<svg width="${size}" height="${size}" viewBox="${LOGO_VIEWBOX}" xmlns="http://www.w3.org/2000/svg">${LOGO_INNER}</svg>`;

/** The logo on a cream disc, for use on dark backgrounds (the leaf is dark green). */
export const logoBadge = (size) =>
  `<span class="logo-badge" style="width:${size}px;height:${size}px">${logo(Math.round(size * 0.74))}</span>`;

// Line icons from Lucide (ISC licence).
const ICONS = {
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  'file-text': '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
  scale: '<path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>',
  'graduation-cap': '<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
  'x-circle': '<circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/>',
  'message-circle': '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
  minus: '<path d="M5 12h14"/>',
  monitor: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  'bar-chart': '<path d="M5 21v-6"/><path d="M12 21V3"/><path d="M19 21V9"/>',
  alert: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
  megaphone: '<path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
  unlink: '<path d="m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71"/><path d="m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71"/><line x1="8" x2="8" y1="2" y2="5"/><line x1="2" x2="5" y1="8" y2="8"/><line x1="16" x2="16" y1="19" y2="22"/><line x1="19" x2="22" y1="16" y2="16"/>',
  'book-open': '<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>',
  library: '<path d="m16 6 4 14"/><path d="M12 6v14"/><path d="M8 8v12"/><path d="M4 4v16"/>',
  link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
};
export const icon = (name, size = 24, stroke = 1.75) =>
  `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">${ICONS[name]}</svg>`;

/** A QR code as inline SVG, in the brand green. */
export async function qr(text, dark = '#1f3b34') {
  return QRCode.toString(text, { type: 'svg', margin: 0, errorCorrectionLevel: 'M', color: { dark, light: '#00000000' } });
}

export const p4pLogo = () => dataUri('design-sources/assets/p4p-logo.png', 'image/png');
export const page = (css, body) =>
  `<!doctype html><html><head><meta charset="utf-8"><style>${FONT_CSS}${BASE_CSS}${css}</style></head><body>${body}</body></html>`;
