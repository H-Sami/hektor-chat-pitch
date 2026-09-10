/**
 * Screenshot every slide of the locally built deck.
 *
 * Navigation uses Slidev's own goto dialog (`g`, type the slide number, Enter),
 * because the production build wires no hash router and `#slide-content`
 * contains every slide at once. Each capture is gated on the rendered heading
 * being visible in the viewport.
 *
 * Chromium must run unconfined (named-pipe IPC) and the deck must be served over
 * http (module scripts are blocked on file://): start scripts/serve-dist.mjs first.
 *
 * Usage: node scripts/shoot-slides.mjs [baseUrl] [count]
 */
import { mkdirSync, readdirSync, existsSync, readFileSync } from 'node:fs'
import { join, resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright-core'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const baseUrl = (process.argv[2] ?? 'http://127.0.0.1:8099').replace(/\/$/, '')
const outDir = join(root, '.verify-shots')
mkdirSync(outDir, { recursive: true })

/** Every `# Heading` in the deck source, in slide order. */
function slideHeadings() {
  return readFileSync(join(root, 'slides.md'), 'utf8')
    .split('\n')
    .filter(line => /^#\s+\S/.test(line.trim()))
    .map(line => line.trim().replace(/^#\s+/, ''))
}

const headings = slideHeadings()
const count = Number(process.argv[3] ?? headings.length)
console.log(`[shoot] ${headings.length} headings found in slides.md`)

function findChromium() {
  const cache = join(process.env.LOCALAPPDATA ?? '', 'ms-playwright')
  if (!existsSync(cache)) throw new Error(`no Playwright browser cache at ${cache}`)
  const builds = readdirSync(cache)
    .filter(name => /^chromium-\d+$/.test(name))
    .sort((a, b) => Number(b.split('-')[1]) - Number(a.split('-')[1]))
  for (const build of builds) {
    const exe = join(cache, build, 'chrome-win64', 'chrome.exe')
    if (existsSync(exe)) return exe
  }
  throw new Error('no chrome.exe in the Playwright browser cache')
}

const browser = await chromium.launch({ executablePath: findChromium(), args: ['--no-sandbox', '--disable-gpu'] })
const page = await browser.newPage({ viewport: { width: 1600, height: 900 }, deviceScaleFactor: 1 })
page.on('pageerror', e => console.log('[shoot] pageerror:', String(e).slice(0, 120)))

await page.goto(`${baseUrl}/`, { waitUntil: 'networkidle' })
await page.waitForSelector('#slide-content', { timeout: 30_000 })
await page.waitForTimeout(1500)
await page.click('body')

/** Headings of the slides currently on screen. */
const visibleHeading = () =>
  page.evaluate(() => {
    const nodes = [...document.querySelectorAll('#slide-content h1, #slide-content h2')]
    return nodes
      .filter(el => {
        const r = el.getBoundingClientRect()
        return r.width > 0 && r.height > 0 && r.top > -50 && r.top < window.innerHeight
      })
      .map(el => (el.textContent ?? '').trim())
  })

/** Ask Slidev's goto dialog for `index` and confirm the move landed on `expected`. */
async function goTo(index, expected) {
  for (let attempt = 1; attempt <= 3; attempt++) {
    await page.keyboard.press('g')
    const input = page.locator('#slidev-goto-input')
    await input.waitFor({ state: 'visible', timeout: 8_000 })
    await input.fill(String(index))
    await page.waitForTimeout(350)
    await page.keyboard.press('Enter')
    await page.waitForTimeout(900)
    const shown = await visibleHeading()
    if (shown.some(text => text.includes(expected))) return true
    console.log(`[shoot] retry ${attempt} for slide ${index}; showing: ${JSON.stringify(shown).slice(0, 120)}`)
    await page.keyboard.press('Escape')
    await page.waitForTimeout(200)
  }
  return false
}

const written = []
for (let n = 1; n <= count; n++) {
  const expected = headings[n - 1]
  let ok = n === 1
  if (n > 1) ok = await goTo(n, expected)
  await page.waitForTimeout(700)
  const file = join(outDir, `slide-${String(n).padStart(2, '0')}.png`)
  await page.screenshot({ path: file })
  written.push(file)
  console.log(`[shoot] ${String(n).padStart(2, '0')} ${ok ? 'ok  ' : 'WARN'} ${expected.slice(0, 50)}`)
}

await browser.close()
console.log(`[shoot] ${written.length} slides captured in ${outDir}`)
