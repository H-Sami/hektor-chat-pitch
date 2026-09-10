/**
 * Normalise em/en dashes to plain hyphens in deck copy.
 *
 * The house rule for this presentation is regular hyphens only, in slide copy
 * and in speaker notes alike. Reads and writes UTF-8 explicitly: Windows
 * PowerShell 5.1 mangles a BOM-less UTF-8 file round-tripped through its text
 * cmdlets.
 *
 * Usage: node scripts/normalize-dashes.mjs <file> [--dry-run]
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const args = process.argv.slice(2).filter(a => !a.startsWith('--'))
const dryRun = process.argv.includes('--dry-run')
if (!args[0]) throw new Error('usage: node scripts/normalize-dashes.mjs <file> [--dry-run]')

const file = resolve(args[0])
const before = readFileSync(file, 'utf8')
const lines = before.split('\n')
const hits = []

lines.forEach((line, i) => {
  if (!/[—–]/.test(line)) return
  hits.push(`line ${i + 1}: ${line.trim().slice(0, 90)}`)
})
const after = lines.map(l => l.replace(/[—–]/g, '-')).join('\n')

if (dryRun) {
  console.log(hits.join('\n'))
  console.log(`\n[dry-run] ${hits.length} line(s) would change; no file written`)
} else {
  writeFileSync(file, after, 'utf8')
  console.log(hits.join('\n'))
  console.log(`\n[write] ${hits.length} line(s) normalised in ${file}`)
}
