# Evidence and open questions

Updated for the `demo-v2` cut: 18 management-facing slides with no cost, testing or appendix material. This is presentation work, not a working support backend or telephone deployment.

The technical detail that used to be on slides now lives in [voice-dictation-research.md](voice-dictation-research.md). Nothing in it is claimed by the presentation.

## What the repository establishes

The previous 12-slide proposal supplied the management narrative and visual identity. Its older mockup is scripted. The inspected README, slides, components, demo script and build tooling do not verify a Hektor runtime interface. No runtime code was modified or integration provisioned. All diagrams and customer interactions remain proposed or illustrative.

The [Hektor contact page](https://hektormobil.se/kontakta-oss), checked on the baseline date, supports the WiFi-calling explanation and published hours: weekdays 08:00–17:00 with lunch 12:00–13:00. This is 5 × (9 − 1) = 40 staffed hours, leaving 128 outside the schedule. Forms and email can still receive messages; this is not traffic, revenue or lost-sales evidence.

## Proposed scope

Website chat for approved general information and human handover, extended to Swedish telephone public help and separate reviewed staff dictation. One Hektor Agent owns the answer across all three; only the way the customer reaches it changes.

The `demo-v2` deck presents the telephone extension as a high-level choice between a managed voice service and Hektor's own phone system, with the technical selection left to a later conversation. The concrete mechanisms (speech interface, adapter, session handling, dictation workflow) are documented in the [research document](voice-dictation-research.md) and are deliberately kept out of the presentation. Swedish telephone quality, cost and operational reliability have not been measured.

## Missing information before implementation

| Area | Open information |
|---|---|
| Website and knowledge | Website owner/embed feasibility; approved sources, conflicts and update ownership; mobile/keyboard checks |
| Runtime | Repository/API access, complete support turn, streaming, sessions, cancellation, timeouts and concurrency |
| Tools and state | Authorized tools, case API/schema, idempotency, jobs, durable results and audit |
| Identity | Existing verification method and assurance, allowed read-only scope and human escalation; do not assume BankID |
| Telephony | Carrier/PBX, number control, SIP/forwarding, transfer acceptance, destination, hours and fallback owner |
| Documentation | Staff notes vs whole calls, review UI, confirmed-result mapping, human-leg recording/transcription decision |
| Data and suppliers | Processing/storage/access regions, metadata/support access, contracts, disclosure, per-artifact retention, incident handling and Enterprise quotes |
| Operations and economics | Contact volume/peaks, repeated contacts, actual Hektor costs, operator ownership, support expectations, review effort and budget |

## Readiness gates

Confirm the full-turn interface and non-production design first. After authorization, test Swedish public help, complete handover/case delivery and reviewable dictation. Assess approved identity and read-only access separately. Production readiness remains blocked by unresolved interfaces/authentication, handover/case reliability, supplier/data approval and untested Swedish performance. Any test involving personal data still requires appropriate approval.

Proposed targets and sample sizes are recorded in the research document; every result remains **not yet measured**. A call ending is not proof of resolution. Local build, browser and PDF checks only validate presentation artifacts.

## Removed from the presentation

The `demo-v2` deck deliberately omits three things that earlier drafts carried. They remain valid work, but they are not for a non-technical management audience:

- **Cost figures.** Illustrative USD amounts and the selected-usage subtotal are in the research document. They were never total operating cost or a quote, and presenting them invited the wrong conversation.
- **Testing and acceptance detail.** Proposed sample sizes, latency targets and acceptance criteria live in the research document.
- **Supplier and protocol choices.** Speech providers, interfaces and session contracts were removed from the slides and belong in a technical review.

If any of these is needed in a later conversation, take it from [voice-dictation-research.md](voice-dictation-research.md) rather than reintroducing it into the deck.

## Privacy still applies

Hektor's published up-to-90-day recorded-call/chat retention is context, not blanket approval for new vendors or every artifact. Even the public-information chat can receive personal data typed by a customer, so the pilot needs an agreed collection and handling policy. Privacy and applicable Swedish/EU obligations need Hektor review; no compliance sign-off is implied.
