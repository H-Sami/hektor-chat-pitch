# Hektor AI chat agent — pitch deck

A management-facing pitch for putting an **AI chat agent inside the contact page** of
[hektormobil.se](https://hektormobil.se/kontakta-oss): the agent answers from Hektor's own
published material and from their CRM, and hands the conversation to a human in the same
window when it should.

Built with [Slidev](https://github.com/slidevjs/slidev) and published through the hosted
[slidev-mcp](https://github.com/joelbarmettlerUZH/slidev-mcp) server, mounted into this
DSH session with `@deepseek-ai/dsh-mcp-client`.

---

## Layout

| Path | What it is |
|---|---|
| `slides.md` | **Source of truth.** 18 slides, English, inline-styled HTML layouts, speaker notes per slide |
| `slides.publish.md` | Generated artifact sent to `render_slides` (mockup JPEG inlined as a base64 data URI) |
| `mockup/index.html` | Standalone clickable prototype: the contact page with the chat widget open |
| `mockup/panel.html` | Isolated chat panel used for the deck image |
| `mockup/shots/` | Rendered screenshots (`01`–`03` PNG, `04` JPEG for embedding) |
| `scripts/build-publish.mjs` | Builds `slides.publish.md`, inlines assets, counts slides, enforces the 1 MB limit |
| `scripts/capture-shots.mjs` | Re-renders the mockup screenshots with Playwright's Chromium shell |
| `scripts/inspect-slides.mjs` | Prints every slide with its title and attached speaker note |
| `docs/gap-analysis.md` | Verified facts about Hektor, open questions, tooling limits, assumptions |
| `docs/demo-script.md` | 12-minute spoken script, objection handling, fallback plan |

## Build and local render

```sh
npm install --ignore-scripts          # Slidev CLI, theme, playwright-core
node scripts/build-publish.mjs         # -> slides.publish.md   (images inlined, for the hosted builder)
node scripts/build-publish.mjs --out slides.local.md --keep-placeholder   # for local rendering
node scripts/inspect-slides.mjs        # slide list with attached speaker notes

# local render + export (Chromium must run outside a confined shell)
node node_modules/@slidev/cli/bin/slidev.mjs build slides.local.md --out dist --base /
node node_modules/@slidev/cli/bin/slidev.mjs export slides.local.md --format pdf --output Hektor-AI-Chat-Pitch.pdf
node scripts/serve-dist.mjs 8099 dist    # serve dist/ for browser verification
node scripts/shoot-slides.mjs             # one PNG per slide into .verify-shots/
node scripts/pdf-info.mjs Hektor-AI-Chat-Pitch.pdf
```

Notes:
- `slides.md` keeps a readable placeholder for the mockup image. `build-publish.mjs`
  replaces it with a base64 data URI for the hosted builder, and a local build instead
  resolves it through `public/images/mock-chat.jpg`.
- Chromium needs named-pipe IPC, so a confined shell cannot run it; everything above was
  verified in a shell without that restriction.
- `vite.config.ts` excludes scratch directories from the watcher, because an export aborts
  with `EBUSY` if Vite walks a live Chromium profile inside the project.

## Publishing

Verified state: `slides.md` builds and exports locally into an 18-page PDF, and every slide
has been screenshot-reviewed. The hosted publish step has **not** run, because
`mcp.slidev-mcp.org:443` refuses connections (see `docs/gap-analysis.md` §3).

The deck is mounted for the hosted slidev-mcp server through the `web` profile's user patch
layer at `~/.dsh/profiles/web/cordis.patch.yml`, which hot-reloads; `dsh --profile web
--dump-config` confirms the `slidev-mcp` row composes. The tools appear as `mcp__slidev__*`
in **sessions started after** the patch loads.

Publish order matters: the server binds a presentation to its MCP session, so once that
session ends the deck becomes immutable. Finalise content, then in one session run
`render_slides`, `screenshot_slides` (review every slide), at most a few in-place
`render_slides` updates, then `export_slides`. Hosted slides are deleted after 30 days —
the exported PDF is the durable artifact.

```sh
node scripts/build-publish.mjs
# then, from a DSH session that has the slidev MCP tools:
#   get_slidev_guide -> list_themes -> get_theme -> render_slides
#   -> screenshot_slides -> export_slides
```

## Constraints the hosted builder imposes

- Images must be **remote URLs or base64 inline** — local paths are rejected, which is why
  `build-publish.mjs` inlines the mockup JPEG.
- No custom CSS/JS *files*, no custom fonts, no presenter mode, no live preview.
  Layouts here use inline `style` attributes for that reason.
- Markdown limit 1 MB, build timeout 120 s, three concurrent builds, 30-day slide TTL.

## Content caveats

- All customer data in the mockup is synthetic (`104287`, `07X-XXX XX 12`).
- Cost, CRM vendor, contact volume and ROI figures are deliberately absent; the deck frames
  them as pilot measurements. See `docs/gap-analysis.md` before presenting.
- Deck language is English at the client's request; Swedish site copy and proper nouns stay
  untranslated so the deck matches the live site.
