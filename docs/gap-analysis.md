# Evidence and open questions

Updated 10 September 2026 for 20 main slides and six appendix slides. This is presentation work, not a working support backend or telephone deployment.

## What the repository establishes

The previous 12-slide proposal supplied the management narrative and visual identity. Its older mockup is scripted. The inspected README, slides, components, demo script and build tooling do not verify a Hektor runtime interface. No runtime code was modified or integration provisioned. All diagrams and customer interactions remain proposed or illustrative.

The [Hektor contact page](https://hektormobil.se/kontakta-oss), checked on the baseline date, supports the WiFi-calling explanation and published hours: weekdays 08:00–17:00 with lunch 12:00–13:00. This is 5 × (9 − 1) = 40 staffed hours, leaving 128 outside the schedule. Forms and email can still receive messages; this is not traffic, revenue or lost-sales evidence.

## Proposed scope

Retain website chat for approved general information and human handover. Extend the proposal to Swedish telephone public help via ConversationRelay and a session-aware Hektor adapter, with separate reviewed Scribe dictation. Reuse live AI transcripts for documentation without duplicate STT by default. Verified read-only account access is a separate later gate; account-changing actions require separate authorization and safety review.

The alternative native ElevenLabs Agents/SIP plus custom full-turn endpoint may be simpler for a compatible existing PBX. It is not the separate Speech Engine/Twilio Media Streams pattern. Supplier claims and their limitations were checked in the [S01–S20 registry](voice-dictation-research.md). Swedish telephone quality, cost savings and operational reliability have not been measured.

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

Proposed targets and sample sizes are recorded in Appendix D2 and the research document; every result remains **not yet measured**. A call ending is not proof of resolution. Local build, browser and PDF checks only validate presentation artifacts.

## Budget and privacy limits

The $84/month ConversationRelay processing example and $97.63–$111.86 selected usage subtotal are illustrative USD amounts, excluding tax. Neither is total operating cost or a quote. Carrier routing, plan allowances, Enterprise terms, implementation, ongoing operation and human review require separate agreement. No markup on agreed direct supplier usage remains a conditional commercial proposal.

IE1 does not establish an EU-only processing chain. ElevenLabs regional residency is Enterprise and configuration-dependent. Hektor's published up-to-90-day recorded-call/chat retention is context, not blanket approval for new vendors or every artifact. Privacy and applicable Swedish/EU obligations need Hektor review; no compliance sign-off is implied.
