# Hektor Agent pitch

**Svenska Hektor Demo:** [Öppna presentationen](https://h-sami.github.io/hektor-chat-pitch/hektor-demo/) · [Ladda ner PDF](https://h-sami.github.io/hektor-chat-pitch/hektor-demo/Hektor-Demo.pdf)

A 26-slide management proposal: 20 main slides covering web chat, Swedish telephone support and reviewed staff dictation, followed by six appendix slides. This is a proposed extension, not a working telephone integration.

The editable presentation is in **slides.md**. Its design preserves the forest-green/light palette, Segoe UI typography and 16:9 format. Shared styling is in **style.css**; reusable headers, dynamic footers, vector icons and the schedule chart are in **components/**. New architecture diagrams remain editable Mermaid. Each slide has presenter notes. No Slidev MCP is required.


## Preview and edit

Use Node.js 22.12 or later (Node 22 LTS recommended for the locked dependencies).

The lockfile pins `floating-vue` 5.2.2 through an override: the newer transitive version breaks Slidev's Twoslash tooltip initialization and emits a browser error. Keep browser verification when revisiting this compatibility pin.

```sh
npm ci --ignore-scripts
npm run dev
```

Open http://localhost:3030 and edit `slides.md` or `style.css`; the preview updates automatically. Use arrow keys to navigate, `f` for fullscreen, `p` for presenter mode, and `o` for the overview.

## Build and check

```sh
npm run build
npm run serve
# In another terminal:
npm run verify
```

The static preview is http://127.0.0.1:8099. Verification discovers all markdown main headings dynamically and visits every slide, checking titles, dynamic footer totals, text bounds, Mermaid shadow-DOM rendering, footer collisions and browser errors, and writes screenshots to `.verify-shots/`. On Windows it uses installed Google Chrome. On other platforms install Playwright Chromium first (`npx playwright-core install chromium`).

## PDF

```sh
npm run export
```

If using installed Chrome on Windows instead of Playwright's browser:

```powershell
npm run export -- --executable-path "C:\Program Files\Google\Chrome\Application\chrome.exe"
```

The output is `Hektor-AI-Chat-Pitch.pdf`, kept in Git as the offline presentation. Re-export it after changes.

## Repository and publishing

Three decks are published from this repository:

| URL | Source | Deck |
|---|---|---|
| https://h-sami.github.io/hektor-chat-pitch/ | `main` | The 26-slide deck |
| https://h-sami.github.io/hektor-chat-pitch/demo-v2/ | `demo-v2` | The 17-slide value-first cut |
| https://h-sami.github.io/hektor-chat-pitch/hektor-demo/ | `hektor-demo-sv` | Hektor Demo: 14 slides in Swedish |

The workflow in `.github/workflows/publish-decks.yml` builds all three refs and deploys them together as one Pages artifact. Every build is required; if a version fails, deployment stops and the existing site remains in place. The Pages source is **GitHub Actions**. PDF downloads and direct numbered slide links are included for every version.

### Updating a deck

- **`main`**: edit, commit, push. The workflow rebuilds and redeploys all three decks automatically.
- **`demo-v2` or `hektor-demo-sv`**: edit, commit, push, then open **Actions → Publish decks → Run workflow** using branch **`main`** to rebuild all three versions.

The workflow on `main` is authoritative. Its build job is gated to `refs/heads/main`, including manual runs; select `main` when dispatching. Workflow copies on other branches do not automatically publish those branches.

### Build bases

All builds need the repository prefix, because this is a project page:

- main deck: `--base /hektor-chat-pitch/`, output at the site root
- demo-v2 deck: `--base /hektor-chat-pitch/demo-v2/`, output in `demo-v2/`
- Swedish deck: `--base /hektor-chat-pitch/hektor-demo/`, output in `hektor-demo/`

The `gh-pages` branch is no longer part of the publishing path. It still holds the last branch-based build and can be deleted once the Actions deploy is confirmed working.

Local page build, if you want to inspect the output:

```sh
npm run build:pages     # -> ghdest/ at the /hektor-chat-pitch/ base
```

## Supporting files

| File | Purpose |
|---|---|
| `slides.md` | Slide content and speaker notes |
| `style.css` | Shared typography, layouts and colours |
| `components/` | Section navigation, page progress, vector icons and the weekly schedule |
| `docs/demo-script.md` | Presenter run-through matching all 26 slides |
| `docs/gap-analysis.md` | Source context, assumptions and questions for Hektor |
| `docs/voice-dictation-research.md` | S01–S20 source registry, checked claims, complete diagrams, assumptions and proposed tests |
| `scripts/verify-deck.mjs` | Browser verification and screenshots |
| `mockup/` | Earlier standalone scripted prototype and screenshots |

The older `build-publish.mjs` and `build:local` helpers are retained for the earlier hosted workflow. They do not package `style.css` or `components/`; their markdown output alone will not reproduce this redesign in a hosted MCP renderer. Use the local Slidev build or GitHub Pages for this version.

## Content conventions

The deck is English, with a Swedish example conversation. It calls the assistant **Hektor Agent**. The chat is a proposal, not a working product; examples are illustrative. Cost examples and traffic volumes are explicitly illustrative; no launch date, savings or measured telephone performance is asserted. The pilot's scope and acceptance criteria need agreement with Hektor. Use regular hyphens instead of em-dashes in copy.

The published support schedule is 08:00-17:00 weekdays with lunch closed 12:00-13:00: **40 staffed hours per week**, leaving **128 hours outside the published hours**. Forms and email can still accept messages. These hours do not establish lost sales or customer demand. Source: [Hektor contact page](https://hektormobil.se/kontakta-oss), checked 10 September 2026.

## Extended narrative and evidence

Slides 1–8 retain the web-chat story and public-information-first boundary. Slides 9–16 add channels, live architecture, a Swedish call, handover, dictation, controls, illustrative cost and the conditional direct-SIP alternative. Slides 17–20 cover pilot gates, measurement, ownership and the management decision. Appendices 21–26 split responsibilities/tradeoffs (A1/A2), turn/session contract (B), costs (C), and prerequisites/acceptance (D1/D2) for readability.

Provider claims were checked against official sources on 10 September 2026; short source IDs on slides resolve to the registry in `docs/voice-dictation-research.md`. Hektor full-turn, tool, identity and case APIs remain unverified prerequisites. Proposed acceptance targets are not test results. The local presentation checks do not test telephone performance or runtime integration.

The preferred proof of concept uses ConversationRelay and a Hektor-owned session-aware adapter. ElevenLabs Agents native SIP with a custom streaming Hektor endpoint is a conditional alternative. Separate Scribe dictation requires human correction before case writes; live AI transcripts are reused without another STT pass by default.
