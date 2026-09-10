# Hektor Agent pitch

> **Branch: `demo-v2`.** An 18-slide management cut. It leads with the value proposition, states no cost, and drops the testing gates and appendices. `main` holds the longer 26-slide version and is unchanged. Only the `gh-pages` branch is published, so nothing here is live.

An 18-slide management proposal covering web chat, Swedish telephone support and reviewed staff dictation. Non-technical throughout: no supplier names, protocols, prices or acceptance targets. This is a proposed extension, not a working telephone integration.

The editable presentation is in **slides.md**. Its design preserves the forest-green/light palette, Segoe UI typography and 16:9 format. Shared styling is in **style.css**; reusable headers, dynamic footers, vector icons and the schedule chart are in **components/**. Architecture diagrams remain editable Mermaid. Each slide has presenter notes.

The technical material this cut removes (costs, interfaces, session contracts, test plans, source registry) is preserved in [`docs/voice-dictation-research.md`](docs/voice-dictation-research.md).


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

The existing published deck is at https://h-sami.github.io/hektor-chat-pitch/. GitHub Pages serves the `gh-pages` branch. A source commit on another branch does not update that site.

`npm run build:pages` prepares `ghdest/` with the required `/hektor-chat-pitch/` asset base. Publishing requires updating the `gh-pages` branch with that output, the current PDF and a `.nojekyll` file. **This branch does not publish.** The live site still serves the 26-slide `main` version; updating it is a separate, deliberate decision.

## Supporting files

| File | Purpose |
|---|---|
| `slides.md` | Slide content and speaker notes (18 slides) |
| `style.css` | Shared typography, layouts and colours |
| `components/` | Section navigation, page progress, vector icons and the weekly schedule |
| `docs/demo-script.md` | Presenter run-through matching all 18 slides |
| `docs/gap-analysis.md` | Assumptions, open questions and what this cut deliberately omits |
| `docs/voice-dictation-research.md` | S01-S20 source registry, checked claims, complete diagrams, cost assumptions and proposed tests |
| `scripts/check-overflow.mjs` | Fails if slide content overflows the stage or collides with the footer |
| `scripts/verify-deck.mjs` | Browser verification and screenshots (needs system Chrome) |
| `mockup/` | Earlier standalone scripted prototype and screenshots |

The older `build-publish.mjs` and `build:local` helpers are retained for the earlier hosted workflow. They do not package `style.css` or `components/`; their markdown output alone will not reproduce this deck in a hosted MCP renderer. Use the local Slidev build.

Two one-off scripts document the restructure that produced this branch: `scripts/restructure-demo-v2.mjs` and `scripts/fix-page-numbers.mjs`. They are kept for reference and are safe to delete.

## Content conventions

The deck is English, with a Swedish example conversation. It calls the assistant **Hektor Agent**, never "AI". The chat and phone flows are proposals, not working products; every example is illustrative.

This cut deliberately carries **no cost, no timeline, no testing detail and no supplier names**, and no slide has an appendix. Nothing asserts measured savings, launch dates or telephone performance. Use regular hyphens instead of em-dashes in copy.

The published support schedule is 08:00-17:00 weekdays with lunch closed 12:00-13:00: **40 staffed hours per week**, leaving **128 hours outside the published hours**. Forms and email can still accept messages. These hours do not establish lost sales or customer demand. Source: [Hektor contact page](https://hektormobil.se/kontakta-oss), checked 10 September 2026.

## Slide order

| Chapter | Slides | Content |
|---|---|---|
| Cover | 1 | Title |
| 01 Opportunity | 2-3 | Value proposition, then the current support hours |
| 02 Web chat | 4-8 | Customer journey, the example conversation, knowledge, responsibilities, handover |
| 03 Voice & dictation | 9-15 | Phased scope, channels, the voice proposal, the Swedish call, handover, dictation, access control |
| 04 Pilot | 16-18 | How to add the phone, the pilot path, thank you |

The value proposition is slide 2 on purpose: the room should hear the benefit before any detail. If the deck is ever reordered, keep it there.

Hektor runtime interfaces, tool APIs and telephone integration remain unverified prerequisites. The local presentation checks validate rendering only; they do not test telephone performance or any live integration.
