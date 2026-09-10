/**
 * Capture a tight, high-resolution image of the chat panel for the deck.
 *
 * The wide `04-panel-hi.jpg` shot was mostly empty background: the panel filled
 * roughly a third of the frame, so the message text was unreadable once the
 * slide scaled it down. This captures the panel element itself at 2x and pads
 * it slightly, which roughly doubles the rendered text size on the slide.
 *
 * The panel is widened from the mockup's own 430px to 620px so the capture is
 * closer to the aspect ratio of the column it sits in on the slide; at 430px
 * the image is so narrow and tall that it has to shrink to fit vertically,
 * wasting most of the column width.
 *
 * Runs in a full browser (not the headless shell) because it needs
 * `page.screenshot({ clip })` and a device-scale factor.
 *
 * Usage: node scripts/capture-panel.mjs
 */
import { readdirSync, existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { join, resolve, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { chromium } from 'playwright-core'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const shots = join(root, 'mockup', 'shots')
mkdirSync(shots, { recursive: true })

function findChromium() {
  const cache = join(process.env.LOCALAPPDATA ?? '', 'ms-playwright')
  const builds = readdirSync(cache).filter(n => /^chromium-\d+$/.test(n))
    .sort((a, b) => Number(b.split('-')[1]) - Number(a.split('-')[1]))
  for (const b of builds) {
    const exe = join(cache, b, 'chrome-win64', 'chrome.exe')
    if (existsSync(exe)) return exe
  }
  throw new Error('no chromium build in the Playwright cache')
}

/** CSS that strips the pitch column and gives the panel a clean backdrop. */
const ISOLATE = `
  .pitch { display: none !important; }
  body { background: #ffffff !important; }
  .stage { padding: 22px !important; gap: 0 !important; }
  .chat { width: 620px !important; height: 830px !important; box-shadow: 0 12px 30px rgba(12,40,32,.18) !important; }
  .bubble { max-width: 74% !important; }
  .handover { max-width: 74% !important; }
`

const browser = await chromium.launch({ executablePath: findChromium(), args: ['--no-sandbox', '--disable-gpu'] })
const page = await browser.newPage({ viewport: { width: 1000, height: 1000 }, deviceScaleFactor: 2 })
await page.goto(pathToFileURL(join(root, 'mockup', 'panel.html')).href, { waitUntil: 'load' })
await page.addStyleTag({ content: ISOLATE })
await page.waitForTimeout(400)

const panel = await page.locator('.chat').boundingBox()
if (!panel) throw new Error('chat panel not found')
console.log(`[panel] chat box ${panel.width}x${panel.height} at (${panel.x}, ${panel.y})`)

// Screenshot only the panel, grown by the stage padding on each side.
const pad = 22
const png = join(shots, '05-panel-tight.png')
await page.screenshot({
  path: png,
  clip: {
    x: Math.max(0, panel.x - pad),
    y: Math.max(0, panel.y - pad),
    width: panel.width + pad * 2,
    height: panel.height + pad * 2,
  },
})

// Re-encode to JPEG through a canvas so the deck artifact stays small.
const dataUri = `data:image/png;base64,${(await import('node:fs')).readFileSync(png).toString('base64')}`
const jpegDataUri = await page.evaluate(async ([uri, quality]) => {
  const img = new Image()
  await new Promise((ok, bad) => { img.onload = ok; img.onerror = bad; img.src = uri })
  const canvas = document.createElement('canvas')
  canvas.width = img.naturalWidth
  canvas.height = img.naturalHeight
  const ctx = canvas.getContext('2d')
  ctx.drawImage(img, 0, 0)
  return canvas.toDataURL('image/jpeg', quality)
}, [dataUri, 0.92])

const jpg = join(shots, '06-panel-tight.jpg')
writeFileSync(jpg, Buffer.from(jpegDataUri.split(',')[1], 'base64'))

const { statSync } = await import('node:fs')
console.log(`[panel] ${png} ${statSync(png).size.toLocaleString('en-US')} bytes`)
console.log(`[panel] ${jpg} ${statSync(jpg).size.toLocaleString('en-US')} bytes`)

await browser.close()
