// Package all versions atomically, including PDFs and GitHub Pages deep links.
// Usage: node scripts/prepare-pages.mjs <checkout-root> <site-root>
import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'

const checkouts = resolve(process.argv[2] ?? '.')
const site = resolve(process.argv[3] ?? 'site')
const decks = [
  { ref: 'main', path: '', pdf: 'Hektor-AI-Chat-Pitch.pdf' },
  { ref: 'demo-v2', path: 'demo-v2', pdf: 'Hektor-AI-Chat-Pitch.pdf' },
  { ref: 'hektor-demo-sv', path: 'hektor-demo', pdf: 'Hektor-Demo.pdf' },
]

// Validate all inputs before changing the artifact; never publish a partial set.
for (const deck of decks) {
  deck.output = join(site, deck.path)
  deck.index = join(deck.output, 'index.html')
  deck.pdfSource = join(checkouts, deck.ref, deck.pdf)
  deck.headings = readFileSync(join(checkouts, deck.ref, 'slides.md'), 'utf8').match(/^# .+/gm) ?? []
  if (!deck.headings.length || !existsSync(deck.pdfSource)) throw new Error(`Missing source/PDF: ${deck.ref}`)
  const html = readFileSync(deck.index, 'utf8')
  const base = `/hektor-chat-pitch/${deck.path ? `${deck.path}/` : ''}`
  const assets = [...html.matchAll(/(?:src|href)="(\/[^"\s]+\.(?:js|css))"/g)].map(match => match[1])
  if (!assets.length || assets.some(asset => !asset.startsWith(`${base}assets/`) || !existsSync(join(deck.output, asset.slice(base.length))))) {
    throw new Error(`Missing assets or incorrect base: ${deck.ref}`)
  }
}

for (const deck of decks) {
  copyFileSync(deck.pdfSource, join(deck.output, deck.pdf))
  // Pages only uses the root 404.html. A nested deck needs its own numbered
  // entry pages so opening /hektor-demo/14 cannot load the main deck by mistake.
  for (let page = 1; page <= deck.headings.length; page++) {
    const dir = join(deck.output, String(page))
    mkdirSync(dir, { recursive: true })
    copyFileSync(deck.index, join(dir, 'index.html'))
  }
  console.log(`${deck.ref}: ${deck.headings.length} direct slide links and ${deck.pdf}`)
}
writeFileSync(join(site, '.nojekyll'), '')
