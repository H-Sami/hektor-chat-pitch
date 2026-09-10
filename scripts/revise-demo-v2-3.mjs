// Demo-v2 revision: remove slide 17, fix slide 2 grammar, drop Mermaid edge-label background.
import { readFileSync, writeFileSync } from 'node:fs'

const FILE = 'slides.md'
const PINK = '"primaryBorderColor":"#9abda4"'
// Mermaid's base theme paints every edge label with secondaryColor (a pale pink).
// Match the deck's paper colour so the slabs disappear.
const LABEL_FIX = '"primaryBorderColor":"#9abda4","edgeLabelBackground":"transparent"'

// The working tree is CRLF; normalise so patterns are line-ending independent.
let src = readFileSync(FILE, 'utf8').replace(/\r\n/g, '\n')
const before = src
const log = []

const replaceOnce = (label, from, to) => {
  const n = src.split(from).length - 1
  if (n !== 1) throw new Error(`${label}: expected 1 match, found ${n}`)
  src = src.replace(from, to)
  log.push(`${label}: ok`)
}

// --- 1. Slide 2 grammar -----------------------------------------------------
replaceOnce(
  'slide 2 grammar',
  'holds as many conversations as arrive together',
  'holds as many conversations as they arrive together',
)

// --- 2. Mermaid edge-label background (3 diagram blocks) --------------------
const pinkCount = src.split(PINK).length - 1
if (pinkCount !== 3) throw new Error(`edge-label fix: expected 3 init blocks, found ${pinkCount}`)
src = src.replaceAll(PINK, LABEL_FIX)
log.push(`edge-label background: ${pinkCount} diagram blocks updated`)

// --- 3. Slide 17 removal ----------------------------------------------------
const start = src.indexOf('<DeckHeader :chapter="4" />\n\n<div class="kicker">THE PILOT PATH</div>')
if (start === -1) throw new Error('slide 17: header not found')
// The block runs to the closing comment marker that follows it.
const commentEnd = src.indexOf('-->\n', src.indexOf('Optional outbound follow-up is a later decision', start))
if (commentEnd === -1) throw new Error('slide 17: closing comment not found')
const end = commentEnd + '-->\n'.length
const removed = src.slice(start, end)
if (!removed.includes('# Prepare. Test. Learn.')) throw new Error('slide 17: block does not contain the heading')
const headingCount = (removed.match(/^# /gm) ?? []).length
if (headingCount !== 1) throw new Error(`slide 17: block contains ${headingCount} headings`)

// Swallow the separator and blank lines that preceded the block, keeping one blank line.
const leadStart = src.lastIndexOf('---\n', start)
const tail = src.slice(end)
src = src.slice(0, leadStart) + tail.replace(/^\n+/, '\n')
log.push('slide 17 (Prepare. Test. Learn.): removed')

if (src === before) throw new Error('no changes made')

writeFileSync(FILE, src, 'utf8')
log.forEach((l) => console.log(`  ${l}`))

const headings = [...src.matchAll(/^# .+$/gm)].map((m) => m[0])
console.log(`\nslides now: ${headings.length}`)
headings.forEach((h, i) => console.log(`  ${i + 1}. ${h.slice(2)}`))
