/**
 * Render the mockup pages to PNG/JPEG with the Playwright Chromium shell.
 *
 * The browser must run outside the agent's file sandbox: Chromium needs
 * named-pipe IPC (mojo platform channels) that the confined sandbox denies.
 * Run this script in a normal shell, or as one escalated command.
 *
 * Usage: node scripts/capture-shots.mjs
 */
import { existsSync, mkdirSync, readdirSync, statSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { tmpdir } from 'node:os'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const shots = join(root, 'mockup', 'shots')
// Chromium state stays out of the project tree: a live profile inside the
// project makes Slidev's export watcher abort with EBUSY.
const profileDir = join(tmpdir(), 'hektor-chat-pitch-chrome')

/** Locate the newest Playwright Chromium shell, or honor CHROME_PATH. */
function findShell() {
  if (process.env.CHROME_PATH) return process.env.CHROME_PATH
  const cache = join(process.env.LOCALAPPDATA ?? '', 'ms-playwright')
  if (!existsSync(cache)) return undefined
  const candidates = readdirSync(cache)
    .filter(name => name.startsWith('chromium_headless_shell-'))
    .sort((a, b) => statSync(join(cache, b)).mtimeMs - statSync(join(cache, a)).mtimeMs)
  for (const dir of candidates) {
    const base = join(cache, dir)
    for (const inner of readdirSync(base)) {
      const exe = join(base, inner, 'chrome-headless-shell.exe')
      if (existsSync(exe)) return exe
    }
  }
  return undefined
}

const shell = findShell()
if (!shell) {
  console.error('[shots] FATAL: no Playwright Chromium shell found. Set CHROME_PATH.')
  process.exit(1)
}

mkdirSync(shots, { recursive: true })

const SHOTS = [
  { page: 'index.html', out: '01-site-wide.png', size: '1440,1000', args: [] },
  { page: 'panel.html', out: '02-panel.png', size: '1400,900', args: [] },
  { page: 'index.html', out: '03-mobile.png', size: '430,880', args: [] },
  { page: 'panel.html', out: '04-panel-hi.jpg', size: '1330,860', args: ['--quality=88'] },
]

console.log(`[shots] chromium: ${shell}`)
let failed = 0

for (const shot of SHOTS) {
  const out = join(shots, shot.out)
  const url = pathToFileURL(join(root, 'mockup', shot.page)).href
  const args = [
    '--headless',
    '--disable-gpu',
    '--no-sandbox',
    '--hide-scrollbars',
    '--force-device-scale-factor=1',
    '--no-first-run',
    `--user-data-dir=${profileDir}`,
    `--window-size=${shot.size}`,
    '--virtual-time-budget=4000',
    ...shot.args,
    `--screenshot=${out}`,
    url,
  ]
  const result = spawnSync(shell, args, { stdio: ['ignore', 'pipe', 'pipe'], encoding: 'utf8' })
  const ok = existsSync(out) && statSync(out).size > 0
  if (!ok) failed += 1
  const size = ok ? statSync(out).size.toLocaleString('en-US') : '0'
  console.log(`[shots] ${ok ? 'OK  ' : 'FAIL'} ${shot.out.padEnd(20)} ${size.padStart(10)} bytes  ${shot.size}`)
  if (!ok) {
    const detail = (result.stderr ?? '').split('\n').filter(Boolean).slice(-3).join(' | ')
    console.error(`[shots]   ${detail || `exit code ${result.status}`}`)
  }
}

process.exitCode = failed === 0 ? 0 : 1
