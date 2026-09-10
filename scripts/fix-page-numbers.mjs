/**
 * One-off page-number fixup for slides.md on the demo-v2 branch.
 *
 * Inserting the value-proposition slide as #2 shifted every following slide down
 * by one position, but the `page` props carried over unchanged. This increments
 * every DeckFooter `page` prop from the first shifted slide onward.
 *
 * Uses explicit UTF-8 read/write: Windows PowerShell 5.1 decodes a BOM-less
 * UTF-8 file as Windows-1252 and double-encodes Swedish characters on write.
 *
 * Usage: node scripts/fix-page-numbers.mjs <fromSlide> [--dry-run]
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const file = join(root, 'slides.md')
const dryRun = process.argv.includes('--dry-run')

/** First slide (1-based, counting `# ` headings) whose footer page prop is wrong. */
const fromSlide = Number(process.argv[2] ?? 4)
/** Last slide to renumber. Slides at or before this are incremented; later ones are left alone. */
const toSlide = Number(process.argv[3] ?? Number.MAX_SAFE_INTEGER)
if (!Number.isInteger(fromSlide) || fromSlide < 2) {
  throw new Error('pass the first slide number to renumber, e.g. node scripts/fix-page-numbers.mjs 4 17')
}

let md = readFileSync(file, 'utf8').replace(/\r\n/g, '\n')
const lines = md.split('\n')

let slide = 0
let changed = 0
const changes = []

for (let i = 0; i < lines.length; i++) {
  const t = lines[i].trim()
  if (/^#\s+\S/.test(t)) slide += 1
  // Only rewrite the footer that belongs to a slide at or after the shift point.
  if (slide >= fromSlide && slide <= toSlide && t.startsWith('<DeckFooter') && /page="(\d+)"/.test(t)) {
    const before = Number(RegExp.$1)
    const after = before + 1
    lines[i] = lines[i].replace(/page="\d+"/, `page="${after}"`)
    changed += 1
    changes.push(`slide ${slide}: page ${before} -> ${after}`)
  }
}

md = lines.join('\n')

if (dryRun) {
  console.log(changes.join('\n'))
  console.log(`\n[dry-run] ${changed} footers would change; no file written`)
} else {
  writeFileSync(file, md, 'utf8')
  console.log(changes.join('\n'))
  console.log(`\n[write] ${changed} footers renumbered`)
}
