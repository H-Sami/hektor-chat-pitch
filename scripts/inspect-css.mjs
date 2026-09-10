/**
 * Print the CSS rules that style the slide's bold text, to explain visual
 * artifacts in the rendered deck.
 *
 * Usage: node scripts/inspect-css.mjs [baseUrl]
 */
import { readdirSync, existsSync } from 'node:fs'
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

const browser = await chromium.launch({ executablePath: findChromium(), args: ['--no-sandbox', '--disable-gpu'] })
const page = await browser.newPage({ viewport: { width: 1600, height: 900 } })
await page.goto(`${baseUrl}/`, { waitUntil: 'networkidle' })
await page.waitForSelector('#slide-content')
await page.waitForTimeout(1200)

const report = await page.evaluate(() => {
  const strong = document.querySelector('#slide-content strong')
  if (!strong) return { error: 'no <strong> found' }
  const props = ['text-decoration', 'text-decoration-line', 'background-color', 'color', 'background-image', 'font-weight']
  const styles = {}
  for (const p of props) styles[p] = getComputedStyle(strong)[p]
  const rules = []
  for (const sheet of document.styleSheets) {
    let list
    try { list = sheet.cssRules } catch { continue }
    for (const rule of list) {
      const text = rule.cssText ?? ''
      if (/\bstrong\b|mark/.test(text) && text.length < 400) rules.push(text)
    }
  }
  return { html: strong.outerHTML.slice(0, 120), styles, rules: rules.slice(0, 12) }
})

console.log(JSON.stringify(report, null, 2))
await browser.close()
