/**
 * Generates favicon and OG image from public/logo-source.png
 * Run: node scripts/build-icons.mjs
 * Place your LP logo at public/logo-source.png first.
 */
import sharp from 'sharp';
import { existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const publicDir = join(root, 'public');
const sourcePath = join(publicDir, 'logo-source.png');

if (!existsSync(sourcePath)) {
  console.error('Missing public/logo-source.png — please add your LP logo there, then run: npm run build:icons');
  process.exit(1);
}

const source = sharp(sourcePath);
const metadata = await source.metadata();
const size = Math.min(metadata.width ?? 512, metadata.height ?? 512);

// Favicon 32x32 (browser tab)
await source
  .clone()
  .resize(32, 32)
  .png()
  .toFile(join(publicDir, 'favicon-32x32.png'));
console.log('Created public/favicon-32x32.png');

// Favicon 16x16 (small)
await source
  .clone()
  .resize(16, 16)
  .png()
  .toFile(join(publicDir, 'favicon-16x16.png'));
console.log('Created public/favicon-16x16.png');

// Apple touch icon 180x180
await source
  .clone()
  .resize(180, 180)
  .png()
  .toFile(join(publicDir, 'apple-touch-icon.png'));
console.log('Created public/apple-touch-icon.png');

// OG image 1200x630: logo centered on black background
const ogWidth = 1200;
const ogHeight = 630;
const logoSize = Math.min(500, size);
const logoBuffer = await source
  .clone()
  .resize(logoSize, logoSize)
  .png()
  .toBuffer();
const left = Math.round((ogWidth - logoSize) / 2);
const top = Math.round((ogHeight - logoSize) / 2);
await sharp({
  create: {
    width: ogWidth,
    height: ogHeight,
    channels: 3,
    background: { r: 0, g: 0, b: 0 },
  },
})
  .composite([{ input: logoBuffer, left, top }])
  .png()
  .toFile(join(publicDir, 'og-image.png'));
console.log('Created public/og-image.png (1200x630)');

console.log('Done. Favicon and OG image are ready.');
