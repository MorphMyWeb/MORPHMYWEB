import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function generate() {
  const publicDir = path.resolve('public');
  const svgPath = path.join(publicDir, 'favicon.svg');
  const svgBuffer = fs.readFileSync(svgPath);

  // Generate PNG sizes
  const sizes = [
    { name: 'favicon-16x16.png', size: 16 },
    { name: 'favicon-32x32.png', size: 32 },
    { name: 'favicon-48x48.png', size: 48 }, // Critical for Google Search
    { name: 'favicon-96x96.png', size: 96 },
    { name: 'favicon-192x192.png', size: 192 },
    { name: 'favicon-512x512.png', size: 512 },
    { name: 'apple-touch-icon.png', size: 180 },
  ];

  for (const item of sizes) {
    await sharp(svgBuffer, { density: 300 })
      .resize(item.size, item.size)
      .png()
      .toFile(path.join(publicDir, item.name));
    console.log(`Generated ${item.name}`);
  }

  // Create favicon.ico (32x32 png saved as favicon.ico or multiple sizes)
  // Most modern browsers and Google read PNG-encoded ICO or 32x32/48x48 directly
  const icoBuffer = await sharp(svgBuffer, { density: 300 })
    .resize(48, 48)
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  console.log('Generated favicon.ico');

  // Generate 1200x630 OpenGraph / Twitter Card Banner with the Logo, brand name and slogan
  const ogSvg = `
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="og-bg" cx="50%" cy="40%" r="70%">
        <stop offset="0%" stop-color="#15082e" />
        <stop offset="60%" stop-color="#07040f" />
        <stop offset="100%" stop-color="#020105" />
      </radialGradient>
      <linearGradient id="og-cyan-blue" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#00F0FF" />
        <stop offset="100%" stop-color="#0047FF" />
      </linearGradient>
      <linearGradient id="og-purple-magenta" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#7000FF" />
        <stop offset="100%" stop-color="#FF00D6" />
      </linearGradient>
      <linearGradient id="og-glow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#00F0FF" stop-opacity="0.3" />
        <stop offset="50%" stop-color="#7000FF" stop-opacity="0.4" />
        <stop offset="100%" stop-color="#FF00D6" stop-opacity="0.3" />
      </linearGradient>
    </defs>

    <!-- Deep Background -->
    <rect width="1200" height="630" fill="url(#og-bg)" />
    
    <!-- Neon ambient glows -->
    <circle cx="600" cy="220" r="280" fill="#7000FF" opacity="0.22" filter="blur(60px)" />
    <circle cx="350" cy="280" r="220" fill="#00F0FF" opacity="0.12" filter="blur(50px)" />
    <circle cx="850" cy="280" r="220" fill="#FF00D6" opacity="0.12" filter="blur(50px)" />

    <!-- Subtle framing border -->
    <rect x="24" y="24" width="1152" height="582" rx="20" fill="none" stroke="url(#og-glow)" stroke-width="1.5" />

    <!-- Logo Icon centered -->
    <g transform="translate(600, 205) scale(1.15) translate(-175, -150)">
      <!-- Left Stem ribbon -->
      <path d="M105 215 L105 85 L205 185" stroke="url(#og-cyan-blue)" stroke-width="26" stroke-linecap="round" stroke-linejoin="round" />
      <!-- Right Stem ribbon -->
      <path d="M145 185 L245 85 L245 215" stroke="url(#og-purple-magenta)" stroke-width="26" stroke-linecap="round" stroke-linejoin="round" />
      <!-- Center code bracket -->
      <g transform="translate(175, 208)">
        <path d="M-10 -5 L-17 0 L-10 5" stroke="#00F0FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M10 -5 L17 0 L10 5" stroke="#00F0FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M-3 7 L3 -7" stroke="#cbd5e1" stroke-width="3" stroke-linecap="round" />
      </g>
      <!-- Tech cubes -->
      <rect x="248" y="75" width="12" height="12" fill="#B000FF" />
      <rect x="264" y="60" width="14" height="14" fill="#FF00D6" />
      <rect x="282" y="78" width="10" height="10" fill="#0077FF" />
      <rect x="260" y="44" width="9" height="9" fill="#00F0FF" />
    </g>

    <!-- Brand Typography -->
    <text x="600" y="410" text-anchor="middle" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="58" letter-spacing="1">
      Morph <tspan fill="#00F0FF">my</tspan> web
    </text>

    <!-- Subtitle / Tagline -->
    <text x="600" y="460" text-anchor="middle" fill="#A1A1AA" font-family="system-ui, -apple-system, sans-serif" font-weight="600" font-size="20" letter-spacing="8">
      DIGITAL EVOLUTION
    </text>

    <!-- Core Badges -->
    <text x="600" y="535" text-anchor="middle" fill="#E4E4E7" font-family="system-ui, -apple-system, sans-serif" font-weight="500" font-size="18" letter-spacing="1.5">
      Κορυφαία Κατασκευή Ιστοσελίδων &amp; E-shop • SEO • UI/UX
    </text>

    <!-- Domain -->
    <text x="600" y="575" text-anchor="middle" fill="#818CF8" font-family="monospace" font-weight="700" font-size="16" letter-spacing="2">
      morphmyweb.gr
    </text>
  </svg>
  `;

  await sharp(Buffer.from(ogSvg))
    .png()
    .toFile(path.join(publicDir, 'og-image.png'));
  console.log('Generated og-image.png (1200x630)');

  // Also create a square 512x512 logo.png for Schema.org & Google Knowledge Graph
  await sharp(svgBuffer, { density: 300 })
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'logo.png'));
  console.log('Generated logo.png (512x512)');
}

generate().catch(console.error);
