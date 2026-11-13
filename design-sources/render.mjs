// Renders the posters and infographics to images in public/images/graphics/.
//
//   cd design-sources && npm install     (once)
//   npm run render                       (all graphics)
//   npm run render -- epas               (only graphics whose name contains "epas")
//
// Run it again whenever the website address or contact email changes, or when a
// graphic's text needs editing: change the source in graphics/, then render.
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { chromium } from 'playwright';
import { ROOT, siteConfig } from './common.mjs';

const only = process.argv[2];
const files = fs.readdirSync(path.join(ROOT, 'design-sources/graphics')).filter((f) => f.endsWith('.mjs') && (!only || f.includes(only)));
const graphics = [];
for (const f of files) graphics.push((await import(`./graphics/${f}`)).default);
const site = siteConfig();
const outDir = path.join(ROOT, 'public/images/graphics');
fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium
  .launch({ executablePath: process.env.CHROMIUM_PATH || '/opt/pw-browsers/chromium' })
  .catch(() => chromium.launch());
for (const g of graphics) {
  const page = await browser.newPage({ viewport: { width: g.width, height: 1200 }, deviceScaleFactor: 2 });
  await page.setContent(await g.html(site), { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  const png = await page.locator('.poster').screenshot();
  const file = path.join(outDir, `${g.name}.webp`);
  await sharp(png).webp({ quality: 88 }).toFile(file);
  const meta = await sharp(file).metadata();
  console.log(`${g.name}.webp  ${meta.width}x${meta.height}  ${(fs.statSync(file).size / 1024).toFixed(0)} KB`);
  await page.close();
}
await browser.close();
