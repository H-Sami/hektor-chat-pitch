# Hektor Agent pitch

A 12-slide management proposal for a Hektor Agent on the contact page: useful general answers, a clear handover to staff, and a focused pilot before customer-record integration.

The editable presentation is in **slides.md**; its white and green design is in **style.css**. Each slide has presenter notes. No Slidev MCP is required.

## Preview and edit

Use Node.js 22.12 or later (Node 22 LTS recommended for the locked dependencies).

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

The static preview is http://127.0.0.1:8099. Verification visits all 12 slides, checks titles, text bounds, footer collisions and browser errors, and writes screenshots to `.verify-shots/`. On Windows it uses installed Google Chrome. On other platforms install Playwright Chromium first (`npx playwright-core install chromium`).

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

`npm run build:pages` prepares `ghdest/` with the required `/hektor-chat-pitch/` asset base. Publishing requires updating the `gh-pages` branch with that output, the current PDF and a `.nojekyll` file. Include `mockup/` only if retaining the legacy prototype link. Review the result before publishing.

## Supporting files

| File | Purpose |
|---|---|
| `slides.md` | Slide content and speaker notes |
| `style.css` | Shared typography, layouts and colours |
| `docs/demo-script.md` | Presenter run-through matching the 12-slide deck |
| `docs/gap-analysis.md` | Source context, assumptions and questions for Hektor |
| `scripts/verify-deck.mjs` | Browser verification and screenshots |
| `mockup/` | Earlier standalone scripted prototype and screenshots |

The older `build-publish.mjs` and `build:local` helpers are retained for the earlier hosted workflow. They do not package `style.css`; their markdown output alone will not reproduce this redesign in a hosted MCP renderer. Use the local Slidev build or GitHub Pages for this version.

## Content conventions

The deck is English, with a Swedish example conversation. It calls the assistant **Hektor Agent**. The chat is a proposal, not a working product; examples are illustrative. Costs, launch dates, contact volumes and savings are not asserted. The pilot's scope and acceptance criteria need agreement with Hektor. Use regular hyphens instead of em-dashes in copy.

The published support schedule is 08:00-17:00 weekdays with lunch closed 12:00-13:00: **40 staffed hours per week**, leaving **128 hours outside the published hours**. Forms and email can still accept messages. These hours do not establish lost sales or customer demand. Source: [Hektor contact page](https://hektormobil.se/kontakta-oss), checked 10 September 2026.
