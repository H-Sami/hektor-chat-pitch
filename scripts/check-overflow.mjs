/**
 * Detect slides whose content does not fit the stage.
 *
 * Slidev renders every slide into one stage-sized box with `overflow: hidden`,
 * so a slide that is too tall is silently clipped: the box never grows, and
 * nothing scrolls. This walks the active slide's own layout element and reports
 * the lowest piece of real content against the stage bottom.
 *
 * Usage: node scripts/check-overflow.mjs [baseUrl]
 */
import { readdirSync, existsSync, readFileSync } from 'node:fs'
import { join, resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright-core'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const baseUrl = (process.argv[2] ?? 'http://127.0.0.1:8099').replace(/\/$/, '')

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

const headings = readFileSync(join(root, 'slides.md'), 'utf8')
  .split('\n')
  .filter(line => /^#\s+\S/.test(line.trim()))
  .map(line => line.trim().replace(/^#\s+/, ''))

const browser = await chromium.launch({ executablePath: findChromium(), args: ['--no-sandbox', '--disable-gpu'] })
const page = await browser.newPage({ viewport: { width: 1600, height: 900 }, deviceScaleFactor: 1 })
await page.goto(`${baseUrl}/`, { waitUntil: 'networkidle' })
await page.waitForSelector('#slide-content', { timeout: 30_000 })
await page.waitForTimeout(1500)
await page.click('body')

const visibleHeading = () =>
  page.evaluate(() =>
    [...document.querySelectorAll('#slide-content h1, #slide-content h2')]
      .filter(el => {
        const r = el.getBoundingClientRect()
        return r.width > 0 && r.height > 0 && r.top > -50 && r.top < window.innerHeight
      })
      .map(el => (el.textContent ?? '').trim()))

async function goTo(index, expected) {
  for (let attempt = 1; attempt <= 3; attempt++) {
    await page.keyboard.press('g')
    const input = page.locator('#slidev-goto-input')
    await input.waitFor({ state: 'visible', timeout: 8_000 })
    await input.fill(String(index))
    await page.waitForTimeout(300)
    await page.keyboard.press('Enter')
    await page.waitForTimeout(800)
    if ((await visibleHeading()).some(t => t.includes(expected))) return true
    await page.keyboard.press('Escape')
    await page.waitForTimeout(200)
  }
  return false
}

/**
 * The active page is the only `.slidev-page` that is not `display: none`.
 * Content is measured inside its `.slidev-layout`, which is the element the
 * markdown actually fills.
 */
const measure = () =>
  page.evaluate(() => {
    const stage = document.querySelector('#slide-content')
    const sr = stage.getBoundingClientRect()
    const pages = [...stage.querySelectorAll('.slidev-page')]
    const active = pages.find(p => getComputedStyle(p).display !== 'none')
    if (!active) return null
    const layout = active.querySelector('.slidev-layout') ?? active

    // `.slidev-layout` is often stretched to the full stage (`h-full`, or a
    // grid that fills it), so its own box says nothing about content. Measure
    // the last child in flow instead, plus every leaf in the subtree.
    const flowChildren = [...layout.children].filter(el => getComputedStyle(el).position === 'static')
    const lastChild = flowChildren[flowChildren.length - 1]
    const lastBottom = lastChild ? lastChild.getBoundingClientRect().bottom - sr.top : 0

    let lowest = { bottom: -Infinity, text: '', tag: '' }
    for (const el of layout.querySelectorAll('*')) {
      if (el.children.length > 0) continue
      const r = el.getBoundingClientRect()
      if (r.height === 0 || r.width === 0) continue
      const cs = getComputedStyle(el)
      if (cs.display === 'none' || cs.visibility === 'hidden') continue
      const bottom = r.bottom - sr.top
      if (bottom > lowest.bottom) {
        lowest = { bottom, text: (el.textContent ?? '').trim().slice(0, 44), tag: el.tagName.toLowerCase() }
      }
    }
    return {
      stageHeight: sr.height,
      layoutHeight: (layout.getBoundingClientRect()).height,
      lastBottom,
      lowest,
      pageIndex: pages.indexOf(active) + 1,
    }
  })

const results = []
for (let n = 1; n <= headings.length; n++) {
  if (n > 1) await goTo(n, headings[n - 1])
  await page.waitForTimeout(500)
  const info = await measure()
  if (!info) {
    console.log(`${String(n).padStart(2)}. NO ACTIVE SLIDE`)
    continue
  }
  const bottom = Math.max(info.lowest.bottom, info.lastBottom)
  const overflow = bottom - info.stageHeight
  results.push({ n, heading: headings[n - 1], overflow, info, bottom })
  const flag = overflow > 1 ? 'CLIPPED ' : 'ok      '
  console.log(
    `${String(n).padStart(2)}. ${flag} content ends ${bottom.toFixed(0)} of ${info.stageHeight.toFixed(0)}  (${overflow >= 0 ? '+' : ''}${overflow.toFixed(0)}px)  slack ${(info.stageHeight - bottom).toFixed(0)}px  ${headings[n - 1].slice(0, 38)}`,
  )
}

const bad = results.filter(r => r.overflow > 1)
console.log(`\n${bad.length} of ${results.length} slides clipped:`)
for (const b of bad) {
  console.log(`  ${b.n}. ${b.heading} -> overflows by ${b.overflow.toFixed(0)}px; last element: "${b.info.lowest.text}"`)
}

await browser.close()
process.exitCode = bad.length === 0 ? 0 : 1
