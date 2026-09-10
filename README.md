# Hektor AI chat agent — pitch deck

A management-facing pitch for putting an **AI chat agent inside the contact page** of
[hektormobil.se](https://hektormobil.se/kontakta-oss): the agent answers from Hektor's own
published material and from their CRM, and hands the conversation to a human in the same
window when it should.

## ▶ Present it

**[Open the deck](https://h-sami.github.io/hektor-chat-pitch/)** — 18 slides, no install, works
in any browser.

| While presenting | |
|---|---|
| Next / previous slide | `→` / `←`, or `space` |
| Jump to a slide | `g`, type the number, `Enter` |
| Fullscreen | `f` |
| Speaker notes | `p` opens presenter mode in a second window |
| Overview of all slides | `o` |

Other published entry points:

- **[Chat-widget mockup](https://h-sami.github.io/hektor-chat-pitch/mockup/index.html)** — clickable prototype; the launcher is bottom-right, "Prata med en människa" is the handover button
- **[PDF export](https://h-sami.github.io/hektor-chat-pitch/Hektor-AI-Chat-Pitch.pdf)** — the offline fallback if the network or the browser misbehaves
- **[Speaker script](https://github.com/H-Sami/hektor-chat-pitch/blob/main/docs/demo-script.md)** — 12-minute script, objection handling, and what to do if the demo breaks
- **[Gap analysis](https://github.com/H-Sami/hektor-chat-pitch/blob/main/docs/gap-analysis.md)** — verified facts about Hektor, open questions to ask them, assumptions behind the deck

The deck is served from the `gh-pages` branch. To republish after editing `slides.md`, see
[Publishing to GitHub Pages](#publishing-to-github-pages).

Built with [Slidev](https://github.com/slidevjs/slidev). The hosted
[slidev-mcp](https://github.com/joelbarmettlerUZH/slidev-mcp) publisher is also mounted
(see [Hosted slidev-mcp publisher](#hosted-slidev-mcp-publisher)) for rendering the deck to a
shareable slide URL and PDF when that service is reachable.

---

## Layout

| Path | What it is |
|---|---|
| `slides.md` | **Source of truth.** 18 slides, English, inline-styled HTML layouts, speaker notes per slide |
| `slides.publish.md` | Generated artifact sent to `render_slides` (mockup JPEG inlined as a base64 data URI) |
| `Hektor-AI-Chat-Pitch.pdf` | Exported 18-page PDF, committed as the offline fallback |
| `mockup/index.html` | Standalone clickable prototype: the contact page with the chat widget open |
| `mockup/panel.html` | Isolated chat panel used for the deck image |
| `mockup/shots/` | Rendered screenshots (`01`–`03` PNG, `04` JPEG for embedding) |
| `scripts/build-publish.mjs` | Builds `slides.publish.md`, inlines assets, counts slides, enforces the 1 MB limit |
| `scripts/capture-shots.mjs` | Re-renders the mockup screenshots with Playwright's Chromium shell |
| `scripts/inspect-slides.mjs` | Prints every slide with its title and attached speaker note |
| `scripts/shoot-slides.mjs` | Screenshots every slide of a locally served build into `.verify-shots/` |
| `scripts/check-live-deck.mjs` | Loads the deployed URL in a browser and walks all 18 slides |
| `scripts/serve-dist.mjs` | Serves `dist/` on localhost for local verification |
| `docs/gap-analysis.md` | Verified facts about Hektor, open questions, tooling limits, assumptions |
| `docs/demo-script.md` | 12-minute spoken script, objection handling, fallback plan |

## Publishing to GitHub Pages

The live deck is a static Slidev build on the `gh-pages` branch, served by GitHub Pages at
<https://h-sami.github.io/hektor-chat-pitch/>. Republish after editing `slides.md`:

```sh
node scripts/build-publish.mjs --out slides.local.md --keep-placeholder
node node_modules/@slidev/cli/bin/slidev.mjs build slides.local.md --out ghdest --base /hektor-chat-pitch/
cp -r ghdest/* .ghpages/                       # .ghpages is the gh-pages worktree
cp Hektor-AI-Chat-Pitch.pdf .ghpages/
cd .ghpages && git add -A && git commit -m "Publish deck" && git push
```

`--base /hektor-chat-pitch/` is required: the site is a project page under
`h-sami.github.io`, so assets must resolve under that path. The `.nojekyll` file on the
branch stops Jekyll from interfering with Vite's hashed asset names.

**Why Pages had to be public:** GitHub refuses Pages for a private repository on a Free
plan, so the repo is public. The deck contains only information Hektor publishes on its own
site plus the proposal itself, and all customer data in the mockup is synthetic.

## Hosted slidev-mcp publisher

There is a second, independent publish path for the slidev-mcp tools. It is mounted through
the `web` profile's user patch layer at `~/.dsh/profiles/web/cordis.patch.yml`, which
hot-reloads; `dsh --profile web --dump-config` confirms the `slidev-mcp` row composes, and the
tools appear as `mcp__slidev__*` in **sessions started after** the patch loads.

It has not been exercised, because `mcp.slidev-mcp.org:443` refuses connections while
`slidev-mcp.org` (same IP `188.213.129.204`) serves normally — see `docs/gap-analysis.md` §3.
When the service answers:

```sh
node scripts/build-publish.mjs
# then, from a DSH session that has the slidev MCP tools:
#   get_slidev_guide -> list_themes -> get_theme -> render_slides
#   -> screenshot_slides -> export_slides
```

Publish order matters: the server binds a presentation to its MCP session, so once that
session ends the deck becomes immutable. Finalise content, then in one session run
`render_slides`, `screenshot_slides` (review every slide), at most a few in-place
`render_slides` updates, then `export_slides`. Hosted slides are deleted after 30 days.

## Local verification

```sh
npm install --ignore-scripts          # Slidev CLI, theme, playwright-core
node scripts/build-publish.mjs         # -> slides.publish.md   (images inlined, for the hosted builder)
node scripts/build-publish.mjs --out slides.local.md --keep-placeholder   # for local rendering
node scripts/inspect-slides.mjs        # slide list with attached speaker notes

# local render + export (Chromium must run outside a confined shell)
node node_modules/@slidev/cli/bin/slidev.mjs build slides.local.md --out dist --base /
node node_modules/@slidev/cli/bin/slidev.mjs export slides.local.md --format pdf --output Hektor-AI-Chat-Pitch.pdf
node scripts/serve-dist.mjs 8099 dist     # serve dist/ on http://127.0.0.1:8099/
node scripts/shoot-slides.mjs              # one PNG per slide into .verify-shots/
node scripts/check-live-deck.mjs https://h-sami.github.io/hektor-chat-pitch/   # walk the deployed deck
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
- The built SPA ignores hash navigation and `#slide-content` holds every slide at once, so
  the screenshot scripts navigate with Slidev's own goto dialog (`g`, number, `Enter`).

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
