/**
 * One-off probe: box model of the active slide's subtree (depth <= 6), to see
 * which element actually holds the content and where it ends.
 *
 * Usage: node scripts/probe-stage.mjs [baseUrl] [slideNumber]
 */
import { readdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { chromium } from 'playwright-core'

const baseUrl = (process.argv[2] ?? 'http://127.0.0.1:8099').replace(/\/$/, '')
const target = Number(process.argv[3] ?? 4)

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
const page = await browser.newPage({ viewport: { width: 1600, height: 900 } })
await page.goto(`${baseUrl}/`, { waitUntil: 'networkidle' })
await page.waitForSelector('#slide-content', { timeout: 30_000 })
await page.waitForTimeout(1500)
await page.click('body')

if (target > 1) {
  await page.keyboard.press('g')
  const input = page.locator('#slidev-goto-input')
  await input.waitFor({ state: 'visible', timeout: 8_000 })
  await input.fill(String(target))
  await page.waitForTimeout(300)
  await page.keyboard.press('Enter')
  await page.waitForTimeout(1200)
}

const out = await page.evaluate(() => {
  const stage = document.querySelector('#slide-content')
  const sr = stage.getBoundingClientRect()
  const active = [...stage.querySelectorAll('.slidev-page')].find(p => getComputedStyle(p).display !== 'none')
  const lines = []
  const walk = (el, depth) => {
    if (depth > 6) return
    const r = el.getBoundingClientRect()
    const cs = getComputedStyle(el)
    lines.push(
      `${'  '.repeat(depth)}${el.tagName.toLowerCase()}${el.className ? '.' + String(el.className).trim().split(/\s+/).slice(0, 3).join('.') : ''}` +
      ` | top ${(r.top - sr.top).toFixed(0)} bottom ${(r.bottom - sr.top).toFixed(0)} h ${r.height.toFixed(0)}` +
      ` | pos ${cs.position} oy ${cs.overflowY} d ${cs.display} pad ${cs.paddingTop}/${cs.paddingBottom}` +
      ` | ${(el.textContent ?? '').trim().slice(0, 30)}`,
    )
    for (const c of el.children) walk(c, depth + 1)
  }
  walk(active, 0)
  return {
    stage: `${sr.width.toFixed(0)}x${sr.height.toFixed(0)}`,
    activeDisplay: getComputedStyle(active).display,
    activeClass: String(active.className),
    lines,
  }
})

console.log(`[probe] stage ${out.stage}; active page class "${out.activeClass}"`)
console.log(out.lines.join('\n'))

await browser.close()
