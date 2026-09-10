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
  page.on('console', message => {
    if (message.type() === 'error' || /mermaid.*error|error.*mermaid|parse error/i.test(message.text())) {
      console.error(`Browser ${message.type()}: ${message.text()}`); failures++
    }
  })
  for (let i = 0; i < headings.length; i++) {
    await page.goto(`${baseUrl.replace(/\/$/, '')}/${i + 1}`, { waitUntil: 'networkidle' })
    const layout = page.locator('.slidev-page:visible .slidev-layout').first()
    await layout.waitFor()
    await page.evaluate(() => document.fonts.ready)
    await page.waitForTimeout(300)
    await page.waitForFunction(() => [...document.querySelectorAll('.slidev-page:not([style*="display: none"]) .slidev-layout .mermaid')]
      .filter(el => el.getBoundingClientRect().width).every(el => el.shadowRoot?.querySelector('svg')), undefined, { timeout: 15000 })
    const actual = await layout.locator('h1').innerText()
    if (actual.trim() !== headings[i]) throw new Error(`Slide ${i + 1}: wrong heading: ${actual}`)
    const issues = await layout.evaluate((root, expectedTotal) => {
      const bounds = root.getBoundingClientRect()
      const footer = root.querySelector('.footer')?.getBoundingClientRect()
      const issues = []
      const position = root.querySelector('.page-position')?.textContent
      if (!position?.includes(`/ ${expectedTotal}`)) issues.push(`Incorrect dynamic total: ${position}`)
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
      // Mermaid renders in Shadow DOM; normal text walkers cannot see these labels.
      if (root.querySelectorAll('.voice-diagram').length !== root.querySelectorAll('.voice-diagram .mermaid').length) issues.push('Missing Mermaid component')
      for (const host of root.querySelectorAll('.mermaid')) {
        const svg = host.shadowRoot?.querySelector('svg')
        if (!svg || svg.querySelector('.error-icon, .error-text')) { issues.push('Mermaid missing or parse error'); continue }
        const r = svg.getBoundingClientRect()
        const headingBottom = root.querySelector('h1')?.getBoundingClientRect().bottom ?? bounds.top
        if (r.left < bounds.left - 1 || r.right > bounds.right + 1 || r.top < headingBottom || (footer && r.bottom > footer.top - 4)) issues.push('Mermaid bounds / heading or footer collision')
        for (const label of svg.querySelectorAll('text, foreignObject')) {
          const b = label.getBoundingClientRect()
          if (b.left < r.left - 2 || b.right > r.right + 2 || b.top < r.top - 2 || b.bottom > r.bottom + 2) issues.push(`Clipped Mermaid label: ${label.textContent}`)
        }
      }
      return issues
    }, headings.length)
    if (issues.length) { failures++; console.error(`${i + 1}: overflow or footer collision`, issues) }
    else console.log(`${String(i + 1).padStart(2, '0')} OK ${actual}`)
    await layout.screenshot({ path: fileURLToPath(new URL(`slide-${String(i + 1).padStart(2, '0')}.png`, output)) })
  }
} finally { await browser.close() }
if (failures) throw new Error(`${failures} slide verification failures`)
console.log(`Verified and captured all ${headings.length} slides.`)
