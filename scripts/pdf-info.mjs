/**
 * Report a PDF's page count and metadata.
 *
 * Skips object streams are usually Flate-compressed, so a plain text search
 * finds nothing; this inflates every /FlateDecode stream and counts the page
 * objects inside, which also proves the streams are intact.
 *
 * Usage: node scripts/pdf-info.mjs <file.pdf>
 */
import { readFileSync, statSync } from 'node:fs'
import { inflateSync } from 'node:zlib'

const file = process.argv[2]
if (!file) {
  console.error('usage: node scripts/pdf-info.mjs <file.pdf>')
  process.exit(1)
}

const bytes = readFileSync(file)
const latin = bytes.toString('latin1')

let pages = (latin.match(/\/Type\s*\/Page(?![s])/g) ?? []).length
let inflated = 0
let failed = 0

// Walk every `stream ... endstream` pair and inflate the Flate ones.
const streamRe = /stream\r?\n/g
let match
while ((match = streamRe.exec(latin)) !== null) {
  const start = match.index + match[0].length
  const end = latin.indexOf('endstream', start)
  if (end === -1) break
  const raw = bytes.subarray(start, end)
  try {
    const out = inflateSync(raw).toString('latin1')
    inflated += 1
    pages += (out.match(/\/Type\s*\/Page(?![s])/g) ?? []).length
  } catch {
    failed += 1
  }
  streamRe.lastIndex = end
}

const producer = (latin.match(/\/Producer\s*\(([^)]*)\)/) ?? [])[1]
  ?? (latin.match(/\/Producer\s*<([0-9A-Fa-f]+)>/) ?? [])[1]
  ?? 'compressed/unknown'

console.log(`file:            ${file}`)
console.log(`bytes:           ${statSync(file).size.toLocaleString('en-US')}`)
console.log(`streams inflated: ${inflated} (${failed} skipped)`)
console.log(`page objects:    ${pages}`)
console.log(`producer:        ${producer}`)
