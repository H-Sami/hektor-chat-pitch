/**
 * Build the publish-ready Slidev markdown for the hosted slidev-mcp builder.
 *
 * The hosted builder accepts a single markdown string and cannot read workspace
 * files, so the local mockup screenshots are inlined as base64 data URIs.
 * `slides.md` stays the human-editable source; this script emits the artifact
 * that is sent to `render_slides`.
 *
 * Flags:
 *   --out <file>       write the artifact somewhere other than slides.publish.md
 *   --keep-placeholder leave the image placeholder in place (for local builds,
 *                      which resolve it through the mockup directory instead)
 *
 * Usage: node scripts/build-publish.mjs [--out slides.local.md] [--keep-placeholder]
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const argv = process.argv.slice(2)
const flag = name => argv.includes(name)
const option = name => {
  const i = argv.indexOf(name)
  return i === -1 ? undefined : argv[i + 1]
}

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE = join(root, 'slides.md')
const TARGET = resolve(root, option('--out') ?? 'slides.publish.md')
const keepPlaceholders = flag('--keep-placeholder')
const ASSET_DIR = join(root, 'mockup', 'shots')

/** Screenshot placeholders in slides.md -> file in mockup/shots. */
const ASSETS = {
  '/images/panel-tight.jpg': '06-panel-tight.jpg',
}

/**
 * `{{PLACEHOLDER:id}}` -> value. Change DEFAULTS and rebuild after the deck is
 * first published so the deck can point at its own hosted URL.
 */
const DEFAULTS = {
  deckUrl: 'the hosted URL printed by render_slides',
}
const OVERRIDES = JSON.parse(process.env.SLIDE_VARS ?? '{}')

const MIME = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
}

/** Encode one screenshot as a data URI the remote builder can embed. */
function dataUri(file) {
  const ext = file.slice(file.lastIndexOf('.')).toLowerCase()
  const mime = MIME[ext]
  if (!mime) throw new Error(`unsupported image extension: ${file}`)
  return `data:${mime};base64,${readFileSync(join(ASSET_DIR, file)).toString('base64')}`
}

let markdown = readFileSync(SOURCE, 'utf8')
const inlined = []

for (const [placeholder, file] of Object.entries(ASSETS)) {
  if (!markdown.includes(placeholder)) {
    console.warn(`[build] placeholder not used in slides.md: ${placeholder}`)
    continue
  }
  if (keepPlaceholders) {
    inlined.push(`${placeholder} kept (local build resolves it)`)
    continue
  }
  markdown = markdown.replaceAll(placeholder, dataUri(file))
  inlined.push(`${placeholder} -> ${file}`)
}

const variables = { ...DEFAULTS, ...OVERRIDES }
const substituted = []
for (const [key, value] of Object.entries(variables)) {
  const token = `{{${key}}}`
  if (!markdown.includes(token)) continue
  markdown = markdown.replaceAll(token, value)
  substituted.push(`${token} -> ${value}`)
}

const unresolved = markdown.match(/\{\{[a-zA-Z0-9_]+\}\}/g)
if (unresolved) {
  console.error(`[build] FATAL: unresolved placeholders: ${[...new Set(unresolved)].join(', ')}`)
  process.exitCode = 1
}

writeFileSync(TARGET, markdown, 'utf8')

/**
 * Count content slides: one title heading per slide.
 *
 * Counting `---` lines would over-count, because a slide that carries its own
 * `layout:` frontmatter contributes two more delimiters. Separators and
 * frontmatter delimiters are indistinguishable without parsing, and the house
 * style is one `#` heading per slide, so the headings are the reliable signal.
 */
function countSlides(text) {
  const lines = text.split('\n')
  if (lines[0]?.trim() !== '---') return 0

  let slides = 0
  let inComment = false
  let fence = null
  for (const line of lines) {
    const trimmed = line.trim()
    if (fence) {
      if (trimmed.startsWith(fence)) fence = null
      continue
    }
    if (inComment) {
      if (trimmed.includes('-->')) inComment = false
      continue
    }
    if (trimmed.startsWith('<!--')) {
      // A comment block ends only at a line carrying `-->`; `---` inside a
      // multi-line speaker note is content, not a slide separator.
      if (!trimmed.includes('-->')) inComment = true
      continue
    }
    if (trimmed.startsWith('```')) {
      fence = trimmed.slice(0, 3)
      continue
    }
    if (/^#\s+\S/.test(trimmed)) slides += 1
  }
  return slides
}

const sourceBytes = readFileSync(SOURCE).length
const targetBytes = Buffer.byteLength(markdown, 'utf8')
const slides = countSlides(markdown)

console.log(`[build] ${SOURCE} (${sourceBytes} bytes) -> ${TARGET} (${targetBytes} bytes)`)
console.log(`[build] content slides: ${slides}`)
for (const line of inlined) console.log(`[build] inlined ${line}`)
for (const line of substituted) console.log(`[build] substituted ${line}`)
if (targetBytes > 1_000_000) {
  console.error('[build] FATAL: artifact exceeds the 1 MB markdown limit of the hosted builder')
  process.exitCode = 1
}
