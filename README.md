# Hektor Agent - pitch deck

A management-facing pitch for putting the **Hektor Agent inside the contact page** of
[hektormobil.se](https://hektormobil.se/kontakta-oss): it answers from Hektor's own
published material and from their CRM, and hands the conversation to a human in the same
window when it should.

## ▶ How to use it from GitHub

1. Open **<https://github.com/H-Sami/hektor-chat-pitch>**
2. Click **[Open the deck](https://h-sami.github.io/hektor-chat-pitch/)** at the top of this
   page, or use the website link in the **About** box. Both go to the same place.
3. Press `f` for fullscreen and present.

While presenting:

| Key | Does |
|---|---|
| `→` / `←`, or `space` | next / previous slide |
| `g`, then a number, then `Enter` | jump to a slide |
| `f` | fullscreen |
| `p` | presenter mode with speaker notes, in a second window |
| `o` | grid of all 16 slides |

Other published entry points:

- **[Chat-widget mockup](https://h-sami.github.io/hektor-chat-pitch/mockup/index.html)** - clickable prototype; the launcher is bottom-right, "Prata med en människa" is the handover button
- **[PDF export](https://h-sami.github.io/hektor-chat-pitch/Hektor-AI-Chat-Pitch.pdf)** - the offline fallback if the network or the browser misbehaves
- **[Speaker script](https://github.com/H-Sami/hektor-chat-pitch/blob/main/docs/demo-script.md)** - 12-minute script, objection handling, and what to do if the demo breaks
- **[Gap analysis](https://github.com/H-Sami/hektor-chat-pitch/blob/main/docs/gap-analysis.md)** - verified facts about Hektor, open questions to ask them, assumptions behind the deck

To put the site link in the repo sidebar permanently, use the ⚙️ next to **About** and paste
`https://h-sami.github.io/hektor-chat-pitch/` into **Website**.

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
| `slides.md` | **Source of truth.** 16 slides, English, inline-styled HTML layouts, speaker notes per slide |
| `slides.publish.md` | Generated artifact sent to `render_slides` (chat panel inlined as a base64 data URI) |
| `Hektor-AI-Chat-Pitch.pdf` | Exported PDF, committed as the offline fallback |
| `mockup/index.html` | Standalone clickable prototype: the contact page with the chat widget open |
| `mockup/panel.html` | Isolated chat panel; also the source of the deck image |
| `mockup/shots/` | Rendered screenshots, including `06-panel-tight.jpg`, the image used on slide 4 |
| `scripts/build-publish.mjs` | Builds `slides.publish.md`, inlines assets, counts slides, enforces the 1 MB limit |
| `scripts/capture-shots.mjs` | Re-renders the mockup screenshots with Playwright's Chromium shell |
| `scripts/capture-panel.mjs` | Re-captures the slide 4 chat image at 2x, tight and readable |
| `scripts/inspect-slides.mjs` | Prints every slide with its title and attached speaker note |
| `scripts/check-overflow.mjs` | Fails if any slide's content runs past the bottom of the stage |
| `scripts/shoot-slides.mjs` | Screenshots every slide of a locally served build into `.verify-shots/` |
| `scripts/check-live-deck.mjs` | Loads the deployed URL in a browser and walks every slide |
| `scripts/probe-stage.mjs` | Diagnostic: box model of the active slide, for debugging layout |
| `scripts/inspect-css.mjs` | Diagnostic: computed styles of an element on a given slide |
| `scripts/serve-dist.mjs` | Serves `dist/` on localhost for local verification |
| `docs/gap-analysis.md` | Verified facts about Hektor, open questions, tooling limits, assumptions |
| `docs/demo-script.md` | 12-minute spoken script, objection handling, fallback plan |

## Terminology

The assistant is called the **Hektor Agent** everywhere in the deck, the docs and the
speaker script. "AI" is deliberately not used as a noun for it, because the audience is
non-technical management and the deck is written in plain language: no "orchestrator", no
"RAG", no "token", no "API key" without a plain-English gloss.

Two names are infrastructure and cannot be changed without breaking live URLs, so they keep
"AI": the repository `hektor-chat-pitch` publishes to `h-sami.github.io/hektor-chat-pitch/`,
and the committed fallback is `Hektor-AI-Chat-Pitch.pdf`.

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
`slidev-mcp.org` (same IP `188.213.129.204`) serves normally. See `docs/gap-analysis.md` §3.
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
node scripts/check-overflow.mjs            # fails if a slide is clipped
node scripts/shoot-slides.mjs              # one PNG per slide into .verify-shots/
node scripts/check-live-deck.mjs https://h-sami.github.io/hektor-chat-pitch/ 16   # walk the deployed deck
node scripts/pdf-info.mjs Hektor-AI-Chat-Pitch.pdf
```

Notes:
- `slides.md` keeps a readable path for the chat image. `build-publish.mjs` replaces it with
  a base64 data URI for the hosted builder, and a local build instead resolves it through
  `public/images/panel-tight.jpg`.
- `check-overflow.mjs` exists because Slidev renders every slide into one stage-sized box
  with `overflow: hidden`: a slide that is too tall is clipped silently and nothing scrolls.
- Chromium needs named-pipe IPC, so a confined shell cannot run it; everything above was
  verified in a shell without that restriction.
- `vite.config.ts` excludes scratch directories from the watcher, because an export aborts
  with `EBUSY` if Vite walks a live Chromium profile inside the project.
- The built SPA ignores hash navigation and `#slide-content` holds every slide at once, so
  the screenshot scripts navigate with Slidev's own goto dialog (`g`, number, `Enter`).

## Constraints the hosted builder imposes

- Images must be **remote URLs or base64 inline**, so local paths are rejected, which is why
  `build-publish.mjs` inlines the chat panel JPEG.
- No custom CSS/JS *files*, no custom fonts, no presenter mode, no live preview.
  Layouts here use inline `style` attributes for that reason.
- Markdown limit 1 MB, build timeout 120 s, three concurrent builds, 30-day slide TTL.

## Content caveats

- All customer data in the mockup is synthetic (`104287`, `07X-XXX XX 12`).
- The deck names **no implementation timeline and no cost**. Cost, CRM vendor, contact volume
  and ROI figures are deliberately absent; the deck frames them as pilot measurements. See
  `docs/gap-analysis.md` before presenting.
- Deck language is English at the client's request; Swedish site copy and proper nouns stay
  untranslated so the deck matches the live site.
- No em-dashes anywhere in the deck or the docs. Regular hyphens only.
