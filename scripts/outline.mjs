import { readFileSync } from 'node:fs'

const s = readFileSync('slides.md', 'utf8')
const out = []
let current = null
let seenHeading = false

for (const raw of s.split('\n')) {
  const line = raw.trim()
  const header = line.match(/^<DeckHeader(?:\s+:chapter="(\d+)")?\s*\/>$/)
  if (header) {
    current = header[1] ? Number(header[1]) : 'cover/none'
    seenHeading = false
    continue
  }
  if (/^#\s+\S/.test(line) && !seenHeading) {
    seenHeading = true
    out.push({ n: out.length + 1, chapter: current, title: line.replace(/^#\s+/, '') })
  }
}

const names = { 1: 'Opportunity', 2: 'Web chat', 3: 'Voice & dictation', 4: 'Pilot', 'cover/none': 'cover/none' }
out.forEach((o) => console.log(`${String(o.n).padStart(2)}. [${names[o.chapter]}] ${o.title}`))

console.log('\nchapter ranges:')
const byChapter = new Map()
for (const o of out) {
  if (!byChapter.has(o.chapter)) byChapter.set(o.chapter, [])
  byChapter.get(o.chapter).push(o.n)
}
for (const [ch, list] of byChapter) {
  console.log(`  ${names[ch]}: ${list[0]}-${list[list.length - 1]}`)
}
