# Gap analysis - Hektor Agent pitch

Prepared before building the deck. This is the honest list of what is known, what was
assumed, what the tools cannot do, and what Hektor has to answer before a build starts.

---

## 1. What was verified about Hektor (from public sources only)

Checked on 2026-09-10 by reading hektormobil.se and hektormobil.se/kontakta-oss.

| Fact | Value used in the deck |
|---|---|
| Company | Hektor AB, Gamla Tanneforsvägen 90, 582 54 Linköping |
| Business | Mobile operator / MVNO reselling Tele2 network access, 5G and VoLTE |
| Positioning | Low price, no compromise on quality; free calls, SMS/MMS, at least 10 GB in every plan |
| Segments | Private (privat) and business (företag), plus a reseller programme (`/af`) |
| Contact channels | `kontakta-oss` form, `support@hektormobil.se`, `070-100 01 00` |
| Support hours | Mon-Fri 08:00-17:00, lunch closed 12:00-13:00, weekends closed |
| Stated response promise | "Fyll i formuläret så kontaktar vi dig under dagen" |
| Published FAQ topics | first invoice higher than plan price, WiFi calling, which network, VoLTE, feedback |
| First-invoice start fee | 299 kr incl. VAT (299 kr excl. VAT for business), unless otherwise agreed |
| Withdrawal | 14-day right of withdrawal, Ångerblankett published as a PDF |
| Site platform | one.com Website Builder (`oneComWsb` media paths) |
| Social proof | Trustpilot review page |
| Brand accent | green `#1adb9f` used on the site (deck uses a slightly deeper `#10b981` for contrast) |

**Derived figure used in the deck:** Mon-Fri 08:00-17:00 with a one-hour lunch break is
45 support hours per week out of 168 - **123 hours a week with no live channel** (168 − 45).
The deck uses 123 consistently, on the opening slide, the objection slide and the KPI slide.

---

## 2. Gaps that could not be closed by inspection

1. **Which CRM Hektor uses.** No public information. The deck deliberately describes a
   vendor-neutral layer: read-only, customer-scoped, audited, reachable by API, scheduled
   export, or a scoped integration user.
2. **Whether the site platform allows a custom chat script.** hektormobil.se runs on
   one.com Website Builder. Embedding third-party JavaScript is usually possible, but the
   exact mechanism (custom HTML block, site-wide script setting) is unverified. **This is
   the first technical question to ask Hektor** - it decides whether Phase 1 needs a
   platform change, and it is worth confirming before any contract.
3. **Volume and cost per contact.** No public data. Every deflection and ROI number in the
   deck is therefore framed as a pilot KPI, not as a projected saving. Do not invent
   figures in front of management; ask for current monthly contact volume.
4. **The language model supplier decision.** The deck describes behaviour, not a vendor. If the pitch
   is as an implementation partner, the deck needs a cost model and a named stack before
   the second meeting.
5. **Swedish-language model quality.** The deck is in English, but the live agent must
   handle Swedish - including dialectal and informal phrasing - and Hektor's own material
   mixes Swedish and English terms. A Swedish evaluation set is required before Phase 1
   acceptance, and it is not covered by any slide yet.
6. **Personnummer handling.** The site's homepage form asks for *Personnr. / Org.nr.* and
   the contact page asks for *Kundnummer*. Any automated flow that touches these needs an explicit
   masking rule and a legal basis. The deck states the principle; the implementation detail
   is unverified.
7. **Accessibility requirements.** A chat widget on a Swedish operator site should meet
   WCAG 2.1 AA (keyboard reachable, screen-reader labels, contrast). Not addressed in the
   deck; should be added to the Phase 1 scope.
8. **Recording and monitoring rules.** Chat transcripts are personal data; who may read
   them, for how long, and whether agents are monitored are Hektor policy decisions.

## 3. Gaps in the tooling (verified, with the workaround used)

| Gap | Impact | Workaround |
|---|---|---|
| The hosted Slidev builder cannot read local files; images must be remote URLs or base64 | Mockup screenshots cannot be referenced by path | `scripts/build-publish.mjs` inlines the JPEG as a base64 data URI (artifact 165 KB, limit 1 MB) |
| Custom CSS/JS files, custom fonts, presenter mode and live preview are unavailable on the hosted builder | No fine-grained styling control, no presenter view | Inline `style` attributes only (theme CSS processing of `<style>` blocks is not guaranteed); speaker notes still render in the built deck |
| Hosted decks are immutable once the MCP session ends, and deleted after 30 days | The shareable URL is not a permanent asset | The PDF export is the durable deliverable; markdown stays the source of truth in this repo |
| Self-hosting slidev-mcp needs Python + `uv` + Docker + Postgres + Traefik | Not viable on this machine (no Docker, no usable Python) | Hosted endpoint only |
| The hosted MCP endpoint `mcp.slidev-mcp.org:443` refuses TCP connections while `slidev-mcp.org` (same IP `188.213.129.204`) serves normally | `render_slides` / `export_slides` / `screenshot_slides` cannot run at all | Deck verified through the local Slidev path instead: local build, per-slide screenshots, an overflow check, and a PDF export. Re-run the MCP publish once the service answers |
| Chromium-based rendering needs named-pipe IPC, which a confined agent shell denies (mojo `platform_channel`) | Local slide screenshots and PDF export fail in a confined shell | Run the render/export commands in a shell without that restriction |
| A live Chromium profile inside the project makes Slidev's export abort with `EBUSY` | Export dies while Vite's watcher walks the profile | Chromium state is written to the system temp directory and `vite.config.ts` excludes scratch paths |
| Slidev renders every slide into one stage-sized box with `overflow: hidden` | A slide that is too tall is clipped silently, with no scrollbar, and nothing in the markdown shows it | `scripts/check-overflow.mjs` measures the active slide against the stage and fails on any overflow |
| Link text in the default theme carries `border-bottom: 1px dashed`, which renders as a strike-through on a bolded email address | An auto-linked address looks struck out | Follow a linked line with an explicit `<br />` |
| The mockup's 430 px panel is too narrow to read once a slide scales it down | The chat text was illegible in the deck image | `scripts/capture-panel.mjs` widens the panel to 620 px and captures it tightly at 2x |

## 4. Assumptions stated in the deck

- Deck audience: Hektor management, non-technical; the deck is written in plain language and
  says "Hektor Agent", never "AI". Technical job titles (orchestrator, gateway, RAG, token)
  are kept out of the slides on purpose.
- English deck, Swedish proper nouns and quoted site copy left untranslated.
- No em-dashes in the deck or the docs; regular hyphens only, including in Swedish date and
  time ranges.
- Chat is additive: the form, email, phone number and site design stay as they are.
- All customer examples and identifiers in the mockup are synthetic (`104287`, `07X-XXX XX 12`).
- Pilot targets (≥ 40 % deflection, < 10 s first response, 24/7 coverage, zero incorrect
  price statements) are proposals to be agreed, not commitments.
- Hektor remains GDPR controller; the language model supplier is a processor under a data processing
  agreement.
- The model provider is presented as Hektor's own choice and account, with Hektor's own API
  key. This is deliberate: it removes vendor lock-in and answers the procurement question,
  but it does mean Hektor holds a contract and a bill with a model provider.
- The deck states no implementation timeline and no price. Those are live commercial
  questions and should be answered out loud in the meeting, not printed on a slide.

## 5. Questions to put to Hektor in the first meeting

1. Which site/platform controls lets you add a third-party script to `/kontakta-oss`?
2. Which CRM, and does it expose an API or a scheduled export?
3. How many contacts arrive per month, split by channel (form, email, phone)?
4. What share of those are already answered by the published FAQ?
5. Who owns the answers - who may approve what the Hektor Agent is allowed to say?
6. What is the escalation promise outside 08:00-17:00 today, if any?
7. Are there contractual or procurement constraints on Hektor holding a model provider
   account and an API key, and are there providers they will not use?
