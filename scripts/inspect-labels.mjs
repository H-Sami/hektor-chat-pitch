// Inspect the Mermaid edge-label styling on a slide, walking into shadow roots.
// Usage: node scripts/inspect-labels.mjs [slideNumber] [url]
import { chromium } from 'playwright-core'

const slide = Number(process.argv[2] ?? 13)
const base = (process.argv[3] ?? 'http://localhost:8123').replace(/\/$/, '')

const browser = await chromium.launch({ channel: 'chrome' })
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } })
await page.goto(base, { waitUntil: 'networkidle' })
await page.waitForTimeout(1500)

// Navigate with the goto dialog; hash navigation is unreliable on built decks.
await page.keyboard.press('g')
await page.waitForTimeout(400)
await page.keyboard.type(String(slide))
await page.keyboard.press('Enter')
await page.waitForTimeout(2500)

const report = await page.evaluate(() => {
  const walk = (root) => {
    const out = []
    const visit = (node) => {
      for (const el of node.querySelectorAll('*')) {
        out.push(el)
        if (el.shadowRoot) visit(el.shadowRoot)
      }
    }
    visit(root)
    return out
  }

  const all = walk(document)
  const svgEls = all.filter((e) => e.namespaceURI === 'http://www.w3.org/2000/svg')
  const wanted = ['Handover intent', 'Authorized operation', 'Open', 'Context', 'Follow-up work']

  const hits = svgEls
    .filter((e) => {
      const t = (e.textContent ?? '').trim()
      return t && wanted.some((w) => t === w || t.includes(w))
    })
    .map((e) => {
      const cs = getComputedStyle(e)
      const r = e.getBoundingClientRect()
      return {
        tag: e.tagName,
        text: (e.textContent ?? '').trim().slice(0, 40),
        fill: cs.fill,
        background: cs.backgroundColor,
        stroke: cs.stroke,
        parent: e.parentElement?.tagName,
        parentClass: e.parentElement?.getAttribute?.('class') ?? null,
        rect: { w: Math.round(r.width), h: Math.round(r.height) },
      }
    })

  // Anything in the SVG that actually paints a non-transparent background.
  const painted = svgEls
    .map((e) => {
      const cs = getComputedStyle(e)
      const r = e.getBoundingClientRect()
      return {
        tag: e.tagName,
        cls: e.getAttribute('class') ?? '',
        bg: cs.backgroundColor,
        fill: cs.fill,
        w: Math.round(r.width),
        h: Math.round(r.height),
        text: (e.textContent ?? '').trim().slice(0, 30),
      }
    })
    .filter((e) => e.bg && e.bg !== 'rgba(0, 0, 0, 0)' && e.w > 0 && e.h > 0)

  const containers = all
    .filter((e) => e.classList?.contains('mermaid'))
    .map((e) => ({
      tag: e.tagName,
      shadow: !!e.shadowRoot,
      children: [...e.children].map((c) => c.tagName),
      bg: getComputedStyle(e).backgroundColor,
    }))

  return { hits, painted: painted.slice(0, 25), containers }
})

console.log(JSON.stringify(report, null, 2))

await page.screenshot({ path: `C:/Users/PC/Desktop/hektor-chat-pitch/.tmp-slide-${slide}.png` })
console.log(`\nscreenshot: .tmp-slide-${slide}.png`)

await browser.close()
