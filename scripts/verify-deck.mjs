// Check every slide, including text bounds and footer collisions, then capture it.
// Uses installed Chrome on Windows; elsewhere uses Playwright's installed browser.
import { readFileSync, mkdirSync } from 'node:fs'
import { chromium } from 'playwright-core'
import { fileURLToPath } from 'node:url'

const baseUrl = process.argv[2] ?? 'http://127.0.0.1:8099'
const headings = readFileSync(new URL('../slides.md', import.meta.url), 'utf8')
  .split('\n').filter(line => /^# /.test(line)).map(line => line.slice(2).trim())
const output = new URL('../.verify-shots/', import.meta.url)
mkdirSync(output, { recursive: true })
const browser = await chromium.launch(process.platform === 'win32' ? { channel: 'chrome' } : {})
let failures = 0
try {
  const page = await browser.newPage({ viewport: { width: 1600, height: 900 } })
  page.on('pageerror', error => { console.error(error.message); failures++ })
  for (let i = 0; i < headings.length; i++) {
    await page.goto(`${baseUrl.replace(/\/$/, '')}/${i + 1}`, { waitUntil: 'networkidle' })
    const layout = page.locator('.slidev-page:visible .slidev-layout').first()
    await layout.waitFor()
    await page.evaluate(() => document.fonts.ready)
    await page.waitForTimeout(300)
    const actual = await layout.locator('h1').innerText()
    if (actual.trim() !== headings[i]) throw new Error(`Slide ${i + 1}: wrong heading: ${actual}`)
    const issues = await layout.evaluate(root => {
      const bounds = root.getBoundingClientRect()
      const footer = root.querySelector('.footer')?.getBoundingClientRect()
      const issues = []
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
      while (walker.nextNode()) {
        const node = walker.currentNode
        if (!node.textContent.trim()) continue
        const parent = node.parentElement
        if (['STYLE', 'SCRIPT'].includes(parent.tagName)) continue
        const range = document.createRange()
        range.selectNodeContents(node)
        for (const r of range.getClientRects()) {
          if (!r.width || !r.height) continue
          const inFooter = !!parent.closest('.footer')
          if (r.left < bounds.left - 1 || r.right > bounds.right + 1 || r.top < bounds.top - 1 || r.bottom > bounds.bottom + 1 || (!inFooter && footer && r.bottom > footer.top - 4)) {
            issues.push(node.textContent.trim().slice(0, 80))
            break
          }
        }
      }
      for (const img of root.querySelectorAll('img')) {
        if (!img.complete || !img.naturalWidth) issues.push(`Broken image: ${img.src}`)
      }
      return issues
    })
    if (issues.length) { failures++; console.error(`${i + 1}: overflow or footer collision`, issues) }
    else console.log(`${String(i + 1).padStart(2, '0')} OK ${actual}`)
    await layout.screenshot({ path: fileURLToPath(new URL(`slide-${String(i + 1).padStart(2, '0')}.png`, output)) })
  }
} finally { await browser.close() }
if (failures) throw new Error(`${failures} slide verification failures`)
console.log(`Verified and captured all ${headings.length} slides.`)
