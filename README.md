# Hektor Agent pitch

> **Branch: `demo-v2`.** A 17-slide management cut. It leads with the value proposition, states no cost, and drops the implementation, testing and appendix material. `main` holds the longer 26-slide version. Both are published from one GitHub Pages site by the `Publish decks` workflow.

A 17-slide management proposal covering web chat, Swedish telephone support and reviewed staff dictation. Non-technical throughout: no supplier names, protocols, prices or acceptance targets. This is a proposed extension, not a working telephone integration.

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

One GitHub Pages site serves both branches, built by `.github/workflows/publish-decks.yml`:

| URL | Branch | Deck |
|---|---|---|
| https://h-sami.github.io/hektor-chat-pitch/ | `main` | 26 slides |
| https://h-sami.github.io/hektor-chat-pitch/demo-v2/ | `demo-v2` | 17 slides |

A push to `main` rebuilds both decks and redeploys the site. A push to `demo-v2` does not deploy on its own: run **Actions -> Publish decks -> Run workflow** from `main`. This is deliberate, because every deploy replaces the whole site, so an automatic `demo-v2` deploy would remove the `main` deck from the root URL. Workflow changes must reach `main` before they take effect.

Each deck is built with its own asset base (`/hektor-chat-pitch/` and `/hektor-chat-pitch/demo-v2/`). Building the subdeck with `--base /demo-v2/` produces assets that 404 on a project page, so keep the repository prefix. The older `gh-pages` branch is no longer used by Pages and can be deleted.

## Supporting files

| File | Purpose |
|---|---|
| `slides.md` | Slide content and speaker notes (17 slides) |
| `style.css` | Shared typography, layouts and colours |
| `components/` | Section navigation, page progress, vector icons and the weekly schedule |
| `docs/demo-script.md` | Presenter run-through matching all 17 slides |
| `docs/gap-analysis.md` | Assumptions, open questions and what this cut deliberately omits |
| `docs/voice-dictation-research.md` | S01-S20 source registry, checked claims, complete diagrams, cost assumptions and proposed tests |
| `scripts/check-overflow.mjs` | Fails if slide content overflows the stage or collides with the footer |
| `scripts/verify-deck.mjs` | Browser verification and screenshots (needs system Chrome) |
| `mockup/` | Earlier standalone scripted prototype and screenshots |

The older `build-publish.mjs` and `build:local` helpers are retained for the earlier hosted workflow. They do not package `style.css` or `components/`; their markdown output alone will not reproduce this deck in a hosted MCP renderer. Use the local Slidev build.

Two one-off scripts document the restructure that produced this branch: `scripts/restructure-demo-v2.mjs` and `scripts/fix-page-numbers.mjs`. They are kept for reference and are safe to delete.

## Content conventions

The deck is English, with a Swedish example conversation. It calls the assistant **Hektor Agent**, never "AI". The chat and phone flows are proposals, not working products; every example is illustrative.

This cut deliberately carries **no cost, no timeline, no implementation detail and no supplier names**, and no slide has an appendix. Nothing asserts measured savings, launch dates or telephone performance. Use regular hyphens instead of em-dashes in copy.

Each Mermaid diagram sets `edgeLabelBackground` to `transparent` in its `%%{init}%%` directive. Mermaid's base theme otherwise paints every arrow label with `secondaryColor`, a pale pink that shows as a visible slab against this deck's white canvas. Keep that setting when adding or editing a diagram.

The published support schedule is 08:00-17:00 weekdays with lunch closed 12:00-13:00: **40 staffed hours per week**, leaving **128 hours outside the published hours**. Forms and email can still accept messages. These hours do not establish lost sales or customer demand. Source: [Hektor contact page](https://hektormobil.se/kontakta-oss), checked 10 September 2026.

## Slide order

| Chapter | Slides | Content |
|---|---|---|
| Cover | 1 | Title |
| 01 Opportunity | 2-4 | Value proposition, the current support hours, the customer journey |
| 02 Web chat | 5-9 | The example conversation, knowledge, responsibilities, handover, phasing |
| 03 Voice & dictation | 10-16 | Channels, the voice proposal, the Swedish call, handover, dictation, access control, adding the phone |
| 04 Pilot | 17 | Thank you and the ask |

The value proposition is slide 2 on purpose: the room should hear the benefit before any detail. If the deck is ever reordered, keep it there.

Hektor runtime interfaces, tool APIs and telephone integration remain unverified prerequisites. The local presentation checks validate rendering only; they do not test telephone performance or any live integration.
