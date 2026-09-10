/**
 * Inspect an exported PDF without a PDF library: inflate its FlateDecode streams
 * and report the page tree count plus the first text drawn on each page.
 *
 * Slidev's PDF export compresses the page tree into object streams, so a plain
 * `/Type /Page` scan finds nothing. This walks the inflated streams instead.
 *
 * Usage: node scripts/pdf-info.mjs <file.pdf>
 */
import { readFileSync } from 'node:fs'
import { inflateSync, inflateRawSync } from 'node:zlib'
import { resolve } from 'node:path'

const file = resolve(process.argv[2] ?? 'Hektor-AI-Chat-Pitch.pdf')
const buf = readFileSync(file)

let inflated = 0
let pageCount = 0
let counted = []
const textPerPage = []

/** Scan a decoded buffer for `/Type /Page` and text-showing operators. */
function scan(asBuffer, label) {
  const latin = asBuffer.toString('latin1')
  const counts = [...latin.matchAll(/\/Count\s+(\d+)/g)].map(m => Number(m[1]))
  if (counts.length) counted.push(...counts)
  pageCount += [...latin.matchAll(/\/Type\s*\/Page(?![s])/g)].length

  // Inline text runs: (literal) Tj  and  [ ... ] TJ
  const runs = []
  for (const m of latin.matchAll(/\((?:[^()\\]|\\.)*\)/g)) {
    const raw = m[0].slice(1, -1)
    if (raw.length < 3) continue
    runs.push(raw.replace(/\\([()\\])/g, '$1'))
  }
  if (runs.length) textPerPage.push({ label, sample: runs.slice(0, 14).join(' ') })
}

scan(buf, 'raw')

// Walk every `stream ... endstream` region and try to inflate it.
let cursor = 0
for (;;) {
  const start = buf.indexOf('stream', cursor)
  if (start === -1) break
  let dataStart = start + 'stream'.length
  if (buf[dataStart] === 0x0d) dataStart += 1
  if (buf[dataStart] === 0x0a) dataStart += 1
  const end = buf.indexOf('endstream', dataStart)
  if (end === -1) break
  const chunk = buf.subarray(dataStart, end)
  for (const inflate of [inflateSync, inflateRawSync]) {
    try {
      const out = inflate(chunk)
      inflated += 1
      scan(out, `stream@${dataStart}`)
      break
    } catch {
      // not this codec; try the next
    }
  }
  cursor = end + 'endstream'.length
}

const declared = counted.length ? Math.max(...counted) : 0
console.log(`file:            ${file}`)
console.log(`bytes:           ${buf.length.toLocaleString('en-US')}`)
console.log(`streams inflated: ${inflated}`)
console.log(`/Type /Page hits: ${pageCount}`)
console.log(`largest /Count:   ${declared}`)

if (textPerPage.length) {
  console.log('\nfirst text found per decoded stream:')
  for (const p of textPerPage.slice(0, 20)) {
    console.log(`  ${p.label}: ${p.sample.slice(0, 110)}`)
  }
}
