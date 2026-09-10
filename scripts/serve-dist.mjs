/**
 * Minimal static server for the built deck.
 *
 * Chromium cannot reach `file://` module scripts, so the built deck is served
 * over http for screenshot verification.
 *
 * Usage: node scripts/serve-dist.mjs [port] [dir]
 */
import { createServer } from 'node:http'
import { createReadStream, existsSync, statSync } from 'node:fs'
import { extname, join, normalize, resolve } from 'node:path'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const port = Number(process.argv[2] ?? 8099)
const dir = resolve(root, process.argv[3] ?? 'dist')

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.ico': 'image/x-icon',
  '.map': 'application/json; charset=utf-8',
}

createServer((req, res) => {
  const url = new URL(req.url ?? '/', 'http://localhost')
  const rel = normalize(decodeURIComponent(url.pathname)).replace(/^([/\\])+/, '')
  let file = join(dir, rel)
  if (!file.startsWith(dir)) {
    res.writeHead(403).end('forbidden')
    return
  }
  if (!existsSync(file) || statSync(file).isDirectory()) file = join(dir, 'index.html')
  if (!existsSync(file)) {
    res.writeHead(404).end('not found')
    return
  }
  res.writeHead(200, {
    'content-type': MIME[extname(file).toLowerCase()] ?? 'application/octet-stream',
    'cache-control': 'no-store',
  })
  createReadStream(file).pipe(res)
}).listen(port, '127.0.0.1', () => {
  console.log(`[serve] http://127.0.0.1:${port}/ -> ${dir}`)
})
