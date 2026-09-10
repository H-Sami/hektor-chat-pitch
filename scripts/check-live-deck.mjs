/**
 * Verify a deployed Slidev deck in a real browser: load it, walk it with the
 * goto dialog, and report console/network failures per slide.
 *
 * Usage: node scripts/check-live-deck.mjs [url] [count]
 */
import { mkdirSync, readdirSync, existsSync } from 'node:fs'
import { join, resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright-core'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const url = (process.argv[2] ?? 'https://h-sami.github.io/hektor-chat-pitch/').replace(/\/$/, '')
const count = Number(process.argv[3] ?? 18)
const outDir = join(root, '.verify-shots', 'live')
mkdirSync(outDir, { recursive: true })

function findChromium() {
  const cache = join(process.env.LOCALAPPDATA ?? '', 'ms-playwright')
  const builds = readdirSync(cache).filter(n => /^chromium-\d+$/.test(n))
    .sort((a, b) => Number(b.split('-')[1]) - Number(a.split('-')[1]))
  for (const b of builds) {
    const exe = join(cache, b, 'chrome-win64', 'chrome.exe')
    if (existsSync(exe)) return exe
  }
  throw new Error('no chromium')
}

const browser = await chromium.launch({ executablePath: findChromium(), args: ['--no-sandbox', '--disable-gpu'] })
const page = await browser.newPage({ viewport: { width: 1440, height: 810 }, deviceScaleFactor: 1 })

const failures = []
page.on('console', m => { if (m.type() === 'error') failures.push(`console: ${m.text().slice(0, 110)}`) })
page.on('requestfailed', r => failures.push(`request failed: ${r.url().slice(0, 110)}`))
page.on('response', r => { if (r.status() >= 400) failures.push(`HTTP ${r.status()}: ${r.url().slice(0, 110)}`) })

console.log(`[live] ${url}`)
const response = await page.goto(url, { waitUntil: 'networkidle', timeout: 60_000 })
console.log(`[live] document status: ${response?.status()}`)
await page.waitForSelector('#slide-content', { timeout: 40_000 })
await page.waitForTimeout(2500)
await page.click('body')

const visibleHeading = () =>
  page.evaluate(() =>
    [...document.querySelectorAll('#slide-content h1, #slide-content h2')]
      .filter(el => {
        const r = el.getBoundingClientRect()
        return r.width > 0 && r.height > 0 && r.top > -50 && r.top < window.innerHeight
      })
      .map(el => (el.textContent ?? '').trim()))

let seen = 0
for (let n = 1; n <= count; n++) {
  if (n > 1) {
    await page.keyboard.press('g')
    const input = page.locator('#slidev-goto-input')
    await input.waitFor({ state: 'visible', timeout: 10_000 })
    await input.fill(String(n))
    await page.waitForTimeout(350)
    await page.keyboard.press('Enter')
    await page.waitForTimeout(800)
  }
  const shown = await visibleHeading()
  if (shown.length > 0) seen += 1
  await page.screenshot({ path: join(outDir, `${String(n).padStart(2, '0')}.png`) })
  if (n === 1 || n === count || shown.length === 0) console.log(`[live] ${n}: ${JSON.stringify(shown).slice(0, 100)}`)
}

console.log(`[live] slides showing a heading: ${seen}/${count}`)

const unique = [...new Set(failures)]
console.log(`[live] failures: ${unique.length}`)
for (const f of unique.slice(0, 10)) console.log(`  - ${f}`)

await browser.close()
process.exitCode = seen === count ? 0 : 1
