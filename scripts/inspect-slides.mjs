/**
 * Diagnostic: list every slide with its title and the first line of the
 * speaker-note block that currently belongs to it.
 *
 * Usage: node scripts/inspect-slides.mjs
 */
import { readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const src = process.argv[2] ?? join(root, 'slides.md')
const lines = readFileSync(src, 'utf8').split('\n')

let inComment = false
const blocks = []
let current = { start: 0, lines: [] }

for (let i = 0; i < lines.length; i++) {
  const t = lines[i].trim()
  if (i === 0) continue
  if (inComment) {
    if (t.includes('-->')) inComment = false
    continue
  }
  if (t.startsWith('<!--')) {
    if (!t.includes('-->')) inComment = true
    continue
  }
  if (t === '---' && i > 14) {
    current.end = i
    blocks.push(current)
    current = { start: i + 1, lines: [] }
  }
}
current.end = lines.length
blocks.push(current)

const inNote = line => line.trim().startsWith('<!--')
let n = 0
for (const b of blocks) {
  const body = lines.slice(b.start, b.end)
  const title = body.find(l => l.trim().startsWith('# '))?.trim() ?? '(no heading)'
  const noteLines = []
  let capturing = false
  for (let i = 0; i < body.length; i++) {
    const t = body[i].trim()
    if (t.startsWith('<!--')) { capturing = true; noteLines.push(t.replace(/^<!--\s*/, '')); continue }
    if (capturing && t.includes('-->')) { capturing = false; continue }
    if (capturing) { noteLines.push(t); continue }
    if (t.endsWith('-->') && noteLines.length) continue
    if (t === '-->') { capturing = false; continue }
  }
  // Fall back to any trailing comment block lines.
  const raw = body.filter(l => l.trim().length > 0)
  const noteStart = raw.findIndex(l => l.trim().startsWith('<!--'))
  const noteText = noteStart === -1 ? '' : raw.slice(noteStart).join(' ').replace(/<!--|-->/g, '').trim()
  n += 1
  console.log(`${String(n).padStart(2)}. ${title}`)
  console.log(`    lines ${b.start + 1}-${b.end}  | notes: ${noteText ? noteText.slice(0, 95) + (noteText.length > 95 ? '…' : '') : '(none)'}`)
}

const noteBlocks = lines.filter(l => inNote(l)).length
console.log(`\ntotal slides: ${blocks.length}; lines opening a note block: ${noteBlocks}`)
