// Report the effective background colour behind the diagram, and shoot the diagram slides.
import { chromium } from 'playwright-core'

const base = (process.argv[2] ?? 'http://localhost:8123').replace(/\/$/, '')
const slides = (process.argv[3] ?? '11,13,14').split(',').map(Number)

const browser = await chromium.launch({ channel: 'chrome' })
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } })
await page.goto(base, { waitUntil: 'networkidle' })
await page.waitForTimeout(1500)

for (const n of slides) {
  await page.keyboard.press('g')
  await page.waitForTimeout(400)
  await page.keyboard.type(String(n))
  await page.keyboard.press('Enter')
  await page.waitForTimeout(2500)

  const info = await page.evaluate(() => {
    // Walk up from the mermaid svg collecting any non-transparent background.
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
    const svg = walk(document).find((e) => e.tagName === 'svg' && e.getAttribute('class')?.includes('flowchart'))
    if (!svg) return { error: 'no svg' }

    const chain = []
    let el = svg
    while (el && el !== document.documentElement) {
      const cs = getComputedStyle(el)
      if (cs.backgroundColor !== 'rgba(0, 0, 0, 0)') {
        chain.push({
          tag: el.tagName,
          cls: (el.getAttribute('class') ?? '').slice(0, 60),
          bg: cs.backgroundColor,
        })
      }
      el = el.parentElement
    }
    const layout = walk(document).find((e) => e.classList?.contains('slidev-layout'))
    const stage = walk(document).find((e) => e.classList?.contains('slidev-page'))
    return {
      chain: chain.slice(0, 6),
      layoutBg: layout ? getComputedStyle(layout).backgroundColor : null,
      stageBg: stage ? getComputedStyle(stage).backgroundColor : null,
      bodyBg: getComputedStyle(document.body).backgroundColor,
    }
  })
  console.log(`--- slide ${n} ---`)
  console.log(JSON.stringify(info))
  await page.screenshot({ path: `C:/Users/PC/Desktop/hektor-chat-pitch/.tmp-slide-${n}.png` })
}

await browser.close()
console.log('\nscreenshots written')
