---
theme: default
title: Hektor Agent | A better first response
info: |
  A proposal for Hektor management.
  Customer experience, a focused pilot, and a measured decision.
colorSchema: light
transition: fade
aspectRatio: 16/9
canvasWidth: 1200
fonts:
  sans: Segoe UI
  provider: none
defaults:
  layout: default
drawings:
  persist: false
---

<DeckHeader />

<div class="cover-copy">
<div class="kicker">CUSTOMER EXPERIENCE, WITH HEKTOR AT THE CENTRE</div>

# A better first response.

<p class="cover-sub">Answers from your knowledge.<br>A clear path to your people.</p>
<div class="cover-caption"><span class="tiny-line"></span>Web chat, telephone support and staff dictation</div>
</div>

<div class="cover-scene" aria-label="Illustrative customer journey from question to answer to a member of the Hektor team">
<div class="scene-label"><span class="live-dot"></span>THE PROPOSED EXPERIENCE</div>
<div class="scene-question"><DeckIcon name="chat" /><span>“Can you help me with this?”</span></div>
<div class="scene-connector"></div>
<div class="scene-agent"><div class="agent-symbol"><DeckIcon name="chat" /></div><div><span>HEKTOR AGENT</span><strong>Let's find the right answer.</strong><p>Grounded in Hektor's approved information.</p></div></div>
<div class="scene-paths"><span><DeckIcon name="book" />A useful answer</span><span><DeckIcon name="person" />The right colleague</span></div>
<div class="scene-note">Illustrative concept / not a live service</div>
</div>

<DeckFooter :page="1" note="Hektor Agent / A proposal for management" />

<!--
The proposal retains a better first response on Hektor's contact page and extends it to telephone support and separate reviewed staff dictation. Customers should be able to find straightforward answers, and reach Hektor's people with context when they need help. This is a proposed service, not a finished product. Today we are deciding whether a focused pilot is worth scoping.
-->

---

<DeckHeader :chapter="1" />

<div class="kicker">THE OPPORTUNITY</div>

# Help should be easier to find.

<p class="intro">Your answers already exist. A conversation makes them easier to reach.</p>

<div class="hours-layout">
<div class="hours-story">
<div class="big-stat">40<span>staffed hours<br>per week</span></div>
<div class="secondary-stat"><b>128</b><span>hours outside the published schedule</span></div>
<p class="body-copy">Hektor Agent could answer common questions when the team is unavailable.</p>
<div class="fine-note">Forms and email still accept messages.<br>Opening hours do not measure customer demand.</div>
</div>
<WeeklyHours />
</div>

<DeckFooter :page="2" note="Source: Hektor contact page / weekdays 08:00-17:00, lunch 12:00-13:00 / checked 10 Sep 2026" source="https://hektormobil.se/kontakta-oss" />

<!--
The contact page lists nine hours each weekday with a one-hour lunch closure. That is eight staffed hours a day, forty a week, and 128 hours outside the published hours. The previous deck incorrectly used forty-five. Forms and email can still receive messages outside those hours. We have not measured the volume of questions arriving then, so do not turn this figure into a revenue claim.
-->

---

<DeckHeader :chapter="1" />

<div class="kicker">THE CUSTOMER JOURNEY</div>

# Every question needs a next step.

<p class="intro">One chat on the contact page. Three ways to help.</p>

<div class="journey">
<div class="journey-entry"><div class="icon-tile"><DeckIcon name="chat" /></div><h2>The customer asks</h2><p>A question in their<br>own words.</p><span class="site-label">hektormobil.se/kontakta-oss</span></div>
<div class="journey-arrow"><DeckIcon name="arrow" /></div>
<div class="journey-agent"><div class="agent-symbol"><DeckIcon name="chat" /></div><h2>Hektor Agent</h2><p>Understands the need.<br>Finds the right next step.</p></div>
<div class="journey-branch" aria-hidden="true"><span></span><span></span><span></span></div>
<div class="journey-outcomes">
<div><DeckIcon name="book" /><section><h2>Answer</h2><p>Explain an approved support topic.</p></section></div>
<div><DeckIcon name="flag" /><section><h2>Guide</h2><p>Prepare an enquiry for sales.</p></section></div>
<div><DeckIcon name="person" /><section><h2>Connect</h2><p>Bring the right person into the case.</p></section></div>
</div>
</div>

<DeckFooter :page="3" note="Proposed experience / existing phone, email and contact form remain available" />

<!--
These are three different reasons to use the same chat: find information, express an interest, or get help from a person. Existing channels stay available. The pilot should establish which questions are genuinely useful to handle this way. We should confirm that Hektor's website supports the integration before promising an installation approach.
-->

---

<DeckHeader :chapter="2" />

<div class="kicker">WHAT THE CUSTOMER SEES</div>

# A clear answer. A clear way to a person.

<div class="demo-layout">
<div class="product-chat">
<div class="product-chat-head"><div class="agent-symbol small"><DeckIcon name="chat" /></div><div><b>Hektor Agent</b><span>Här för att hjälpa dig</span></div><span class="concept-tag">CONCEPT</span></div>
<div class="chat-body">
<div class="message customer">Hur fungerar WiFi-samtal?</div>
<div class="message agent">Du ringer via WiFi i stället för mobilnätet. Din telefon behöver stödja tjänsten.<a href="https://hektormobil.se/kontakta-oss"><DeckIcon name="link" />Hektors vanliga frågor <span class="annotation">1</span></a></div>
<div class="human-request"><DeckIcon name="person" />Prata med en människa <span class="annotation">2</span></div>
<div class="message agent follow-up">När supporten är stängd kan du lämna en kontaktförfrågan.</div>
</div>
</div>
<div class="demo-explanation">
<div class="explanation-step"><span class="annotation">1</span><div><h2>Make the answer checkable.</h2><p>Show the Hektor page behind the response.</p></div></div>
<div class="explanation-step"><span class="annotation">2</span><div><h2>Make the next step obvious.</h2><p>A visible route to a person, with clear information about availability.</p></div></div>
<div class="takeaway"><DeckIcon name="arrow" /><span>Help without a dead end.</span></div>
</div>
</div>

<DeckFooter :page="4" note="Illustrative conversation / WiFi-calling explanation paraphrases Hektor's public FAQ" source="https://hektormobil.se/kontakta-oss" />

<!--
Walk through the Swedish WiFi-calling example. The answer paraphrases Hektor's FAQ. Marker 1 links the response to its source; marker 2 makes the route to a person visible. The handover control shown here is part of a static illustration, not an interactive or live product. The final message explains the out-of-hours path. Staff availability, case delivery and the response promise all need agreement with Hektor.
-->

---

<DeckHeader :chapter="2" />

<div class="kicker">HOW THE ANSWER IS BUILT</div>

# Your knowledge. Behind every answer.

<p class="intro">Start with information Hektor approves and keeps current.</p>

<div class="knowledge-diagram">
<div class="knowledge-input"><div class="diagram-label">01 / APPROVED SOURCES</div><div class="source-document"><DeckIcon name="book" /><span>FAQ &amp; support guidance</span></div><div class="source-document"><DeckIcon name="document" /><span>Services &amp; terms</span></div></div>
<div class="diagram-arrow"><DeckIcon name="arrow" /></div>
<div class="knowledge-engine"><div class="agent-symbol"><DeckIcon name="chat" /></div><div class="diagram-label">02 / HEKTOR AGENT</div><h2>Find. Explain.<br>Show the source.</h2></div>
<div class="diagram-arrow"><DeckIcon name="arrow" /></div>
<div class="knowledge-answer"><div class="diagram-label">03 / CUSTOMER RESPONSE</div><h2>A useful answer.</h2><p>With a source<br>and a next step.</p><div class="source-stamp"><DeckIcon name="link" />Hektor's own material</div></div>
</div>

<div class="dark-principle"><DeckIcon name="person" /><strong>Hektor owns the answers.</strong><span>A named owner approves sources and resolves conflicts.</span></div>

<DeckFooter :page="5" note="Initial pilot: approved public information / source citations help review; they do not guarantee accuracy" />

<!--
The first pilot can use public information without connecting customer records. Hektor needs to nominate someone to approve the sources and decide which version is authoritative. Showing a source helps review, but does not guarantee a correct answer. We must test whether each answer is supported by its cited material. Conflicting or missing material should lead to a handover.
-->

---

<DeckHeader :chapter="2" />

<div class="kicker">CLEAR RESPONSIBILITIES</div>

# The agent explains. Your team decides.

<p class="intro">Agree the boundaries before the first customer conversation.</p>

<div class="responsibility-pair">
<section class="agent-role"><div class="role-top"><div class="icon-tile"><DeckIcon name="chat" /></div><span class="role-label">HEKTOR AGENT</span></div><h2>Information &amp; guidance</h2><ul class="check-list"><li><DeckIcon name="check" />Answer approved general questions</li><li><DeckIcon name="check" />Explain services and point to sources</li><li><DeckIcon name="check" />Prepare support or sales requests</li></ul><div class="role-bottom">A useful first response.</div></section>
<section class="human-role"><div class="role-top"><div class="icon-tile"><DeckIcon name="person" /></div><span class="role-label">YOUR TEAM</span></div><h2>Judgement &amp; commitments</h2><ul class="check-list"><li><DeckIcon name="check" />Prices, refunds and payment terms</li><li><DeckIcon name="check" />Account changes and cancellations</li><li><DeckIcon name="check" />Uncertain or sensitive cases</li></ul><div class="role-bottom">A person makes the decision.</div></section>
</div>

<DeckFooter :page="6" note="Proposed operating rules / no account-changing tools in the initial pilot" />

<!--
These are proposed operating rules, not a claim that a language model can never make a mistake. The first pilot should not have tools that can alter accounts or take commercial actions. Test the agent with missing information, conflicting sources, pressure to invent a price and requests outside scope. Review failures with Hektor before exposing it to customers.
-->

---

<DeckHeader :chapter="2" />

<div class="kicker">WHAT YOUR TEAM RECEIVES</div>

# A handover with the context attached.

<p class="intro">The next colleague should not have to start the conversation again.</p>

<div class="handover-layout">
<div class="handover-path">
<div class="handover-event"><span class="path-circle"><DeckIcon name="chat" /></span><div><h2>A customer needs a person.</h2><p>The customer asks, or the agent reaches a boundary.</p></div></div>
<div class="handover-event"><span class="path-circle"><DeckIcon name="document" /></span><div><h2>A useful case is prepared.</h2><p>The question, what was tried and the relevant conversation.</p></div></div>
<div class="handover-event"><span class="path-circle"><DeckIcon name="person" /></span><div><h2>The right team follows up.</h2><p>Through the agreed support or sales channel.</p></div></div>
</div>
<div class="support-case">
<div class="case-top"><span><DeckIcon name="document" />SUPPORT HANDOVER</span><span class="case-status">Example</span></div>
<h2>Help with WiFi calling</h2>
<dl><dt>Reason</dt><dd>Customer asked for a person</dd><dt>Already covered</dt><dd>General explanation and FAQ link</dd><dt>Attached</dt><dd>Relevant conversation and summary</dd></dl>
<div class="case-next"><DeckIcon name="arrow" /><div><b>Next step</b><span>Support follows up through the agreed channel.</span></div></div>
</div>
</div>

<DeckFooter :page="7" note="Follow-up ownership, destination and response promise to be agreed with Hektor" />

<!--
The handover is part of the product, not an exception. It needs an owner, a destination and an agreed response promise. A summary should be distinguishable from the actual transcript so staff can check it. Collect only appropriate contact information, explain its purpose and confirm that cases reach the agreed destination. Do not promise an immediate human response when the team is unavailable.
-->

---

<DeckHeader :chapter="2" />

<div class="kicker">A DELIBERATE STARTING POINT</div>

# General answers first. Personal support later.

<p class="intro">Prove the experience before connecting customer records.</p>

<div class="phases">
<section class="phase-now"><div class="phase-label"><span class="phase-dot"></span>INITIAL PILOT</div><h2>Public knowledge.</h2><p>Approved FAQs, services and support guidance.</p><div class="phase-feature"><DeckIcon name="book" /><span>Useful without customer-record access.</span></div></section>
<div class="phase-gate"><DeckIcon name="arrow" /><span>Separate<br>decision</span></div>
<section class="phase-later"><div class="phase-label"><DeckIcon name="lock" />POSSIBLE NEXT PHASE</div><h2>Personal support.</h2><p>Relevant customer information, after an approved identity check.</p><div class="phase-requirements"><span>Verify identity</span><span>Limit access</span><span>Agree retention</span></div></section>
</div>

<div class="quiet-note"><DeckIcon name="shield" /><span>Even a general chat can receive personal information. Agree its handling before launch.</span></div>

<DeckFooter :page="8" note="Customer-system feasibility and privacy requirements need review before any later integration" />

<!--
We do not yet know Hektor's CRM or identity setup. The initial pilot does not need customer-record access. A later phase needs a technical and privacy review, including supplier terms, data flows, access controls and retention. Even a public-information chat can receive personal information typed by users, so the pilot still needs an appropriate collection and handling policy. These are design decisions to review, not a legal compliance guarantee.
-->

---

<DeckHeader :chapter="3" />

<div class="kicker">PROPOSED EXTENSION</div>

# One Hektor Agent. More ways to get help.

<p class="intro">Shared knowledge and rules. Three distinct interaction workflows.</p><div class="proposal-cards"><section><span class="card-label">01 / WEBSITE CHAT</span><h2>Type a question.</h2><p>Public answers and an agreed route to a colleague. The original pilot experience.</p></section><section><span class="card-label">02 / CUSTOMER PHONE</span><h2>Talk in Swedish.</h2><p>A managed speech interface carries the conversation to Hektor. Human help stays available.</p></section><section><span class="card-label">03 / STAFF DICTATION</span><h2>Speak a case note.</h2><p>Transcribe, draft and review. An authorized case operation follows staff approval.</p></section></div><div class="proposal-strip"><b>HEKTOR AGENT</b> owns support reasoning, policy and authorized actions in the proposed design.</div>

<DeckFooter :page="9" note="Proposed integration / Hektor runtime interfaces not yet verified" />

<!--
Extend the original public-information-first proposal across channels. The user intends to reuse an existing Hektor harness; no runtime repository or verified API contract was available in this presentation project. Knowledge retrieval, full-turn execution, tools, identity and case APIs are prerequisites to inspect, not functionality demonstrated by the slides. Dictation is a separate staff documentation workflow, not an autonomous customer telephone agent.
-->

---

<DeckHeader :chapter="3" />

<div class="kicker">PROPOSED EXTENSION</div>

# Add a voice, not another support brain.

<p class="intro">The preferred first proof of concept keeps Hektor authoritative.</p><div class="voice-diagram ">

```mermaid
%%{init: {"theme":"base","themeVariables":{"primaryColor":"#e6f0e7","primaryTextColor":"#173d29","primaryBorderColor":"#9abda4","lineColor":"#658a70","fontFamily":"Segoe UI","fontSize":"18px"},"flowchart":{"htmlLabels":false,"curve":"basis","rankSpacing":22,"nodeSpacing":20,"padding":10}}}%%
flowchart LR
 C["Customer"] <--> N["Existing number
and carrier"]
 N <--> V["Twilio
ConversationRelay"]
 V <--> A["Hektor voice adapter
Session-aware"]
 A <-->|Full support turn| H["HEKTOR AGENT
Reasoning and policy"]
 H --> K["Approved knowledge"]
 H <--> T["Authorized tools
Account access later"]
 style H fill:#173d29,color:#ffffff,stroke:#173d29,stroke-width:3px
```

</div><div class="proposal-strip">Twilio speech: Swedish Google transcription + ElevenLabs voice. Adapter: transcript in, speech text out.</div>

<DeckFooter :page="10" note="S02–S03 / Documented speech interface; proposed Hektor integration" />

<!--
Proposed architecture, not deployed. S02 documents the managed WebSocket speech interface. S03 lists sv-SE with Google transcription and an ElevenLabs voice; this proves configuration availability, not superior Swedish telephone quality. Pin and test provider, model and voice instead of trusting changing defaults. The small adapter delegates complete support turns to Hektor, including knowledge, policy and internal tool loops. It supplies no independent support decisions. It is session-aware: call/session mappings, delivery events, retries and interruption reconciliation. Hektor remains durable authority for conversation and action state. Customer-specific tools are disabled in the initial pilot. Reuse existing service/storage/job mechanisms; no duplicate knowledge base, customer database, vendor LLM, memory or orchestration platform by default. Full Diagram A is retained in docs/voice-dictation-research.md. Sources S02 https://www.twilio.com/docs/voice/twiml/connect/conversationrelay ; S03 https://www.twilio.com/docs/voice/conversationrelay/voice-configuration
-->

---

<DeckHeader :chapter="3" />

<div class="kicker">PROPOSED EXTENSION</div>

# A Swedish call, from question to next step.

<div class="dialogue-label">ILLUSTRATIVE PILOT CONVERSATION</div><div class="phone-dialogue">
<div><b>Hektor</b><p>Hej! Du pratar med Hektors AI-assistent. Jag kan hjälpa dig med vanliga frågor eller hjälpa dig att nå supporten.</p></div>
<div class="caller"><b>Customer</b><p>Hur fungerar wifi-samtal?</p></div>
<div><b>Hektor</b><p>Du ringer via wifi i stället för mobilnätet. Din telefon behöver stödja tjänsten.</p></div>
<div class="caller"><b>Customer</b><p>Kan du kontrollera mitt abonnemang?</p></div>
<div class="boundary"><b>Hektor</b><p>Jag kan inte se dina abonnemangsuppgifter här. Jag hjälper dig vidare till supporten.</p></div></div><div class="small-caption">Proposed next step: connect to support and deliver the context separately.</div>

<DeckFooter :page="11" note="S18 / Public FAQ; dialogue and next steps are illustrative" />

<!--
The Swedish general answer paraphrases the public FAQ, S18 https://hektormobil.se/kontakta-oss . No live call, account lookup, identity verification or subscription change is demonstrated. The initial pilot cannot access account records. Eventual personal support requires an approved identity check, scoped read-only lookup and a supported answer or escalation. Caller ID alone is not authentication; an unverified caller can still reach a person. Do not assume BankID. The opening illustrates AI identification, not a complete approved privacy or recording script. Hektor must approve disclosure and personal-data handling before applicable testing.
-->

---

<DeckHeader :chapter="3" />

<div class="kicker">PROPOSED EXTENSION</div>

# The next colleague receives the context.

<div class="handover-voice-grid"><div><div class="voice-diagram handover-mermaid">

```mermaid
%%{init: {"theme":"base","themeVariables":{"primaryColor":"#e6f0e7","primaryTextColor":"#173d29","primaryBorderColor":"#9abda4","lineColor":"#658a70","fontFamily":"Segoe UI","fontSize":"18px"},"flowchart":{"htmlLabels":false,"curve":"basis","rankSpacing":22,"nodeSpacing":20,"padding":10}}}%%
flowchart LR
 H["Hektor Agent"] -->|Handover intent| A["Adapter / call control"]
 A --> O{"Open?"}
 O -->|Open| Q["Queue → colleague"]
 O -->|Otherwise| F["Callback /
voicemail"]
 H -->|Authorized operation| K["Support case"]
 K -.->|Context| Q
 K -.->|Follow-up work| F
```

</div></div><section class="compact-case"><span class="card-label">ILLUSTRATIVE / CASE DEMO-001</span><h2>WiFi calling → account help</h2><dl><dt>Request</dt><dd>Check subscription</dd><dt>Verification</dt><dd>Not verified</dd><dt>Covered</dt><dd>Public WiFi explanation</dd><dt>Tool outcomes</dt><dd>No account action</dd><dt>Escalation</dt><dd>Account access boundary</dd><dt>Next owner</dt><dd>Support queue / agreed follow-up</dd></dl></section></div><div class="small-caption">Transfer and case delivery are separate. Open → queue; busy, closed or no answer → approved follow-up.</div>

<DeckFooter :page="12" note="S04–S05 / Call control is documented; case delivery is proposed" />

<!--
Diagram B describes proposed handover. Twilio end/handoffData can return control and information to the Connect action callback; it does not populate a CRM or staff desktop. Case creation, context routing and delivery acknowledgment need Hektor-owned integration. Include reason, relevant transcript and confirmed actions. Fictional identifier DEMO-001. Open support routes to the queue; busy, closed and no-answer routes need approved callback/voicemail handling. Failed case delivery needs durable retry and an operator alert; it must not prevent an urgent human connection. Full blueprint is retained in the research document. Sources S04 https://www.twilio.com/docs/voice/conversationrelay/websocket-messages ; S05 https://www.twilio.com/docs/voice/twiml/connect
-->

---

<DeckHeader :chapter="3" />

<div class="kicker">PROPOSED EXTENSION</div>

# Dictate once. Review before saving.

<p class="intro">Staff dictation is separate from the live AI conversation.</p><div class="voice-diagram ">

```mermaid
%%{init: {"theme":"base","themeVariables":{"primaryColor":"#e6f0e7","primaryTextColor":"#173d29","primaryBorderColor":"#9abda4","lineColor":"#658a70","fontFamily":"Segoe UI","fontSize":"18px"},"flowchart":{"htmlLabels":false,"curve":"basis","rankSpacing":22,"nodeSpacing":20,"padding":10}}}%%
flowchart LR
 D["Staff dictation /
approved upload"] --> S["ElevenLabs Scribe v2
Source transcript"]
 S --> H["Hektor documentation
Facts and draft case"]
 L["Live AI transcript +
confirmed action results"] -->|Reuse directly| H
 H --> R["Staff correction
and approval"]
 R --> W["Authorized case tool
Create / update"]
 style H fill:#173d29,color:#ffffff,stroke:#173d29
```

</div><div class="draft-fields"><b>Draft fields</b><span>Reason &amp; request · confirmed facts · steps tried · completed actions · commitments<br>Follow-up owner/date · uncertain fields · source transcript references</span></div>

<DeckFooter :page="13" note="S12 / Documented transcription features; proposed review and case workflow" />

<!--
Proposed documentation workflow, Diagram C. S12 documents Swedish, timestamps and speaker diarization for Scribe v2. Speaker labels do not establish identity; single-speaker staff notes usually need no diarization. Preserve separate channels/known roles where available for multi-party audio. Retain source references, distinguish reported statements from confirmed business-system results and mark uncertainty. Review names, critical numbers, dates and commitments before an authorized case write. A dictated instruction must never directly execute an account change. Reuse live AI transcripts and confirmed Hektor actions; no second transcription service by default. Re-transcribe retained audio only for a justified approved review requirement. The live transcript covers the AI leg only. The subsequent human conversation needs a separately approved PBX/recording/transcription integration. Source S12 https://elevenlabs.io/docs/overview/capabilities/speech-to-text
-->

---

<DeckHeader :chapter="3" />

<div class="kicker">PROPOSED EXTENSION</div>

# Access and actions stay under Hektor’s control.

<p class="intro">Three boundaries must hold across chat, phone and documentation.</p><div class="proposal-cards"><section><span class="card-label">01 / VERIFY</span><h2>Before account access.</h2><p>An approved identity check precedes a scoped lookup. Caller ID is insufficient.</p></section><section><span class="card-label">02 / AUTHORIZE</span><h2>Permissions on the server.</h2><p>Hektor controls tools and confirmed actions. Speech or dictated text cannot grant access.</p></section><section><span class="card-label">03 / RECOVER</span><h2>A safe route to a person.</h2><p>Handle interruptions, outages and failed case delivery. Human access does not require verification.</p></section></div><div class="proposal-strip"><b>Data review required.</b> IE1 does not establish an EU-only chain; ElevenLabs residency requires an eligible Enterprise setup.</div>

<DeckFooter :page="14" note="S05–S06, S14–S15, S19–S20 / Target controls; supplier and privacy review required" />

<!--
Target design, not a compliance guarantee. Validate signed callbacks, prevent replay and restrict transfer destinations. Voice-provider text must not set trusted authorization. Interruption stops queued speech and obsolete generation; reconcile what was actually spoken with Hektor history. It does not undo a committed action. Persist logical action IDs and reconcile uncertain outcomes before retrying idempotent writes. Hektor outages use approved deterministic messages and human/follow-up routes, not a replacement autonomous support LLM. Full voice outage needs original carrier/PBX fallback. Case failures require durable retry/alerting. S05–S06: IE1 availability does not guarantee all data remains there; check each product, speech processor, metadata and support access. S14–S15: ElevenLabs residency and eligible Zero Retention configurations are Enterprise features; EU storage, processing and external endpoints must be reviewed separately. Recording is optional; transcription still handles personal data. Agree purpose, disclosure, access, retention/deletion, processors/subprocessors and incident response under GDPR, applicable Swedish telecom rules and AI transparency obligations (S20), without claiming legal approval. Hektor’s up-to-90-day recorded-call/chat policy is context, not authorization for new vendors or every artifact (S19). Any personal-data test needs appropriate approval. Full URLs and qualification mapping are in docs/voice-dictation-research.md.
-->

---

<DeckHeader :chapter="3" />

<div class="kicker">PROPOSED EXTENSION</div>

# A small pilot, with visible cost assumptions.

<p class="intro">Illustrative sizing, not measured Hektor traffic.</p><div class="cost-feature"><div><span class="card-label">CONVERSATIONRELAY PROCESSING ONLY</span><div class="cost-number">$84<span>/ month</span></div><p>300 inbound calls × 4 AI minutes × $0.07</p></div><section><h2>Usage is measurable.</h2><p>Also assume 45 transfers × 6 human minutes and 10 hours of separate staff dictation.</p><p><b>Total operating cost and implementation scope remain to be agreed.</b></p></section></div><div class="proposal-strip">This is not the total operating cost. Full selected-component arithmetic and exclusions: Appendix C.</div>

<DeckFooter :page="15" note="S07, S13 / USD excluding tax / public rates checked 10 Sep 2026" />

<!--
USD excluding tax; public rates checked 10 September 2026. These are sizing assumptions, not traffic evidence or a production quote. 300×4=1,200 AI minutes. At 15% transfers, 45×6=270 human minutes. In the illustrated bridged route, inbound minutes continue during human conversation: 1,470 before queue/ringing. Eligible SIP/BYOC tariff and onward destination must be verified. Managed speech is assumed in the ConversationRelay processing component; verify the actual account tariff and do not add duplicate Media Streams or Google/ElevenLabs speech charges without a contract requirement. Appendix C shows selected usage only and exclusions. S07 https://www.twilio.com/en-us/products/conversational-ai/pricing ; https://www.twilio.com/en-us/voice/pricing/se ; S13 https://elevenlabs.io/pricing/api
-->

---

<DeckHeader :chapter="3" />

<div class="kicker">PROPOSED EXTENSION</div>

# Start simple. Keep the alternative testable.

<div class="route-comparison"><section class="preferred"><span class="card-label">PREFERRED FIRST PROOF OF CONCEPT</span><h2>Twilio text interface</h2><p>Existing carrier → ConversationRelay → session-aware adapter → Hektor.</p><ul><li>Managed speech with a documented Swedish configuration</li><li>Hektor owns the full support turn</li><li>Validate routing, interruptions and transfer</li></ul></section><section><span class="card-label">CONDITIONAL ALTERNATIVE</span><h2>ElevenLabs native SIP</h2><p>Compatible PBX → ElevenLabs Agents → custom streaming Hektor endpoint.</p><ul><li>Could remove Twilio from the route</li><li>Full turns through an OpenAI-compatible interface</li><li>SIP REFER: context delivered separately</li></ul></section></div><div class="proposal-strip">Choose after Swedish telephone tests, existing-system checks and supplier review.</div>

<DeckFooter :page="16" note="S02–S03, S08–S11 / Supplier capabilities documented; combined integrations untested" />

<!--
Best-fit starting point among assessed routes, not a universal optimum. S08–S09 document native SIP and custom OpenAI-compatible streaming endpoints. A custom endpoint can wrap Hektor’s full support turn; compatible describes an interface and does not require buying another OpenAI model. Combined session lifecycle, interruptions and call control still need testing. This route may be simpler when the current SIP/PBX setup is compatible. S10: native SIP REFER lacks the spoken warm-transfer agent message available with native Twilio integration; verify PBX transfer acceptance and deliver case context separately. Do not conflate native Agents/SIP with S11 Speech Engine WebSocket plus Twilio Media Streams, which has its own bridge, transfer and pricing responsibilities. Appendix A compares modular media and Retell. Sources S08 https://elevenlabs.io/docs/eleven-agents/customization/llm/custom-llm ; S09 https://elevenlabs.io/docs/eleven-agents/phone-numbers/sip-trunking ; S10 https://elevenlabs.io/docs/eleven-agents/customization/tools/system-tools/transfer-to-number ; S11 https://elevenlabs.io/docs/eleven-agents/phone-numbers/twilio-integration/custom-llm-integration
-->

---

<DeckHeader :chapter="4" />

<div class="kicker">THE PILOT PATH</div>

# Prepare. Test. Learn.

<p class="intro">Public help and human handover first. Reviewable dictation alongside.</p><div class="proposal-cards"><section><span class="card-label">GATE 01 / DESIGN</span><h2>Confirm the foundations.</h2><p>Inspect the harness interface and phone system. Agree ownership, data handling and a non-production design.</p></section><section><span class="card-label">GATE 02 / REHEARSE</span><h2>Prove the whole journey.</h2><p>Test Swedish calls, safe boundaries, transfers, case delivery and reviewed dictation. Keep web-chat checks.</p></section><section><span class="card-label">GATE 03 / DECIDE</span><h2>Review the evidence.</h2><p>Agree whether to launch the scoped pilot. Verified read-only account support needs a separate gate.</p></section></div><div class="proposal-strip">Proposed test set: 50 internal calls · about 100 focused utterances · 10–20 matched alternative calls where feasible.</div>

<DeckFooter :page="17" note="Proposed gates and sample sizes / no test results yet" />

<!--
No integration tests have been conducted by this presentation assignment. First inspect the full-turn interface and prepare a non-production design. Following authorization, test public support in Swedish and prove handover/case delivery before considering verified read-only customer access. Account-changing tools need separate authorization and safety review. Dictation requires human correction and an authorized case API. Proposed speech set covers Hektor terminology, Å/Ä/Ö and names, phone/customer/invoice numbers, dates, amounts, negation, corrections, regional and non-native accents, speed, silence, overlapping speech, speakerphone and background noise. Use telephone-bandwidth audio, not only clean browser microphones. Preserve web-chat source, mobile and keyboard checks. Personal-data testing still requires approval. Optional outbound follow-up is a later decision with approved purpose, calling windows, retry limits, caller identity and voicemail privacy; it is outside this inbound pilot.
-->

---

<DeckHeader :chapter="4" />

<div class="kicker">WHAT SUCCESS LOOKS LIKE</div>

# Measure the experience, not just the call ending.

<p class="intro">Agree thresholds before testing. Every result is currently “not yet measured”.</p><div class="measurement-grid">
<section><h2>Swedish quality</h2><p>Intelligibility, terminology and critical identifiers.</p></section><section><h2>Safe behavior</h2><p>Access boundaries, retries and interruptions.</p></section><section><h2>Useful handover</h2><p>Connection success and usable context delivered.</p></section><section><h2>Documentation</h2><p>Factual fields, correction effort and case arrival.</p></section><section><h2>Responsiveness</h2><p>Speech, Hektor and tool delays measured separately.</p></section><section><h2>Actual economics</h2><p>Billed usage, staff review and repeated contacts.</p></section></div><div class="proposal-strip">Proposed no-tool response target: p50 &lt; 1.2 s / p95 &lt; 2.5 s. Full acceptance suite: Appendix D2.</div>

<DeckFooter :page="18" note="Proposed measurements / no measured savings, latency or resolution claims" />

<!--
A call ending does not establish resolution. Review customer feedback, repeat contacts, answer support and follow-up under agreed data handling. Track stage latency: recognition, Hektor processing, tool execution and speech-start delay. Track failed transfers, missing cases, concurrency, actual billed usage and review time. Use correlation IDs and minimize personal data in logs instead of copying full transcripts everywhere. Targets are project proposals, not vendor guarantees or evidence of production reliability from a small sample. Full proposed acceptance targets are in Appendix D2 and research notes.
-->

---

<DeckHeader :chapter="4" />

<div class="kicker">OWNERSHIP & OPERATING MODEL</div>

# Clear ownership from the start.

<div class="ownership-matrix"><div class="matrix-head"><span>RESPONSIBILITY</span><span>HEKTOR</span><span>IMPLEMENTATION / OPERATIONS</span></div><div><b>Service &amp; knowledge</b><span>Approve sources, scope and follow-up</span><span>Configure and test the agreed workflows</span></div><div><b>Access &amp; suppliers</b><span>Approve permissions, data and contracts</span><span>Implement controls and supplier connections</span></div><div><b>Daily operation</b><span>Name owners and review exceptions</span><span>Monitor delivery, failures and actual costs</span></div></div><div class="commercial-note"><div class="icon-tile"><DeckIcon name="document" /></div><div><h2>Separate the budgets.</h2><p>Supplier usage · implementation · ongoing operation · human review.<br>Proposed direct supplier billing without usage markup remains subject to agreement.</p></div></div>

<DeckFooter :page="19" note="Proposed responsibilities and commercial model / subject to agreement" />

<!--
Hektor approves information, access permissions, supplier arrangements and follow-up commitments. Confirm who owns the voice adapter, original carrier fallback, case retries and privacy incidents. The existing no-markup proposal is conditional: direct Hektor supplier accounts where suitable, no markup on agreed usage; implementation, operational support and review are separately scoped and priced. Enterprise terms, minimum commitments and security/residency costs need quotes. No assumption of free supplier migration, implementation or maintenance.
-->

---

<DeckHeader :chapter="4" />

<div class="kicker">THE NEXT CONVERSATION</div>

# Let’s define the expanded pilot.

<div class="decision-requests"><section><span>01</span><h2>People and interfaces</h2><p>Name the service owner. Provide harness/API access and approved knowledge.</p></section><section><span>02</span><h2>Telephone and handover</h2><p>Confirm carrier/PBX details, number control and the human destination.</p></section><section><span>03</span><h2>Permission to proceed</h2><p>Complete privacy review. Agree scope, budget and success criteria.</p></section></div><div class="proposal-strip"><b>The decision requested:</b> scope an authorized proof of concept. No launch or supplier approval is assumed.</div>

<DeckFooter :page="20" note="Management decision requested / proposed extension, not a working telephone integration" />

<!--
Ask for a service owner, runtime interface documentation/access, website ownership, approved information, telephone system details, a human queue/follow-up destination, privacy and supplier review, and agreed acceptance criteria. Resolve gaps into a reviewable plan with scope, cost, owners and decision gates. This assignment produces a presentation only: no telephone runtime changes, services purchased, numbers provisioned, calls placed, routing changed, code pushed or deck published. Implementation and any public/personal-data testing require the appropriate authorization.
-->

---

<DeckHeader :chapter="5" />

<div class="kicker">APPENDIX A1 / PROVIDER RESPONSIBILITIES</div>

# Who owns each part of the service?

<table class="proposal-table responsibility-table"><thead><tr><th>Responsibility</th><th>Twilio + adapter</th><th>ElevenLabs native SIP</th><th>Modular audio stack</th><th>Retell custom LLM</th></tr></thead><tbody><tr><td>Number / routing</td><td>Carrier + Twilio</td><td>Existing SIP / PBX</td><td>Carrier / media provider</td><td>Carrier + Retell route</td></tr><tr><td>Live speech</td><td>ConversationRelay</td><td>ElevenLabs Agents</td><td>Selected STT + TTS</td><td>Retell speech layer</td></tr><tr><td>Full support turn</td><td>Hektor via adapter</td><td>Hektor via custom endpoint</td><td>Hektor via own bridge</td><td>Hektor via custom WS</td></tr><tr><td>Business tools</td><td>Hektor</td><td>Hektor</td><td>Hektor</td><td>Hektor</td></tr><tr><td>Human transfer</td><td>Twilio call control + adapter</td><td>PBX / SIP REFER + integration</td><td>Own controller + carrier</td><td>Retell control + integration</td></tr><tr><td>Case delivery</td><td>Hektor integration</td><td>Hektor integration</td><td>Hektor integration</td><td>Hektor integration</td></tr><tr><td>Staff dictation</td><td>Scribe + Hektor review</td><td>Same separate workflow</td><td>Same separate workflow</td><td>Same separate workflow</td></tr></tbody></table><div class="proposal-strip">All four are proposed full-turn designs. A custom-LLM interface can delegate the complete Hektor workflow.</div>

<DeckFooter :page="21" note="S02–S04, S08–S10, S12, S16 / Proposed allocation of responsibilities" />

<!--
Responsibility matrix describes proposed integration allocations, not an inventory of implemented Hektor APIs. Number routing and transfer ownership depend on actual carrier/PBX capabilities and chosen contract. Vendor transfer controls do not establish case delivery. Retell custom-LLM WebSocket can receive transcripts and return full-turn responses; it should not be classified as tool-only (S16). The fully modular approach means owning media transport, streaming STT/TTS, endpointing, interruptions and call control; it is not a named supplier product. S02–S04, S08–S10, S16 https://docs.retellai.com/api-references/llm-websocket . Dictation can remain an independent Scribe + reviewed Hektor workflow for all options.
-->

---

<DeckHeader :chapter="5" />

<div class="kicker">APPENDIX A2 / TRADEOFFS</div>

# Tradeoffs that can change the choice.

<table class="proposal-table "><thead><tr><th>Approach</th><th>Why consider it</th><th>What must be resolved</th></tr></thead><tbody><tr><td>Twilio + ConversationRelay</td><td>Managed speech; Hektor receives text</td><td>Swedish quality, routing, state and call-control integration</td></tr><tr><td>ElevenLabs Agents + native SIP</td><td>May reuse PBX and remove Twilio</td><td>Streaming harness adapter; SIP REFER acceptance; separate context</td></tr><tr><td>Speech Engine + Twilio Media Streams</td><td>Documented audio bridge pattern</td><td>Own bridge, pricing and transfer work; distinct from native SIP</td></tr><tr><td>Fully modular STT / TTS</td><td>Maximum media/provider control</td><td>More streaming, interruption and operations engineering</td></tr><tr><td>Retell + custom-LLM WebSocket</td><td>Can delegate full turns to Hektor</td><td>Docs say services do not operate within EU; procurement review</td></tr></tbody></table><div class="proposal-strip">Our assessment: modular media ownership adds work the first pilot does not yet justify.</div>

<DeckFooter :page="22" note="S08–S11, S16–S17 / Capabilities documented; fit is our assessment" />

<!--
Recommendations are our assessment, not vendor benchmarks. Direct SIP could win with a compatible PBX and acceptable supplier terms. Native ElevenLabs SIP REFER lacks native spoken warm-transfer messages available in its native Twilio integration (S10). S11 documents a separate Speech Engine WebSocket/Twilio Media Streams bridge; do not substitute its price or transfer behavior for Agents native SIP. S16 documents Retell custom full-turn WebSocket integration. S17 https://docs.retellai.com/general/compliance currently says services do not operate within the EU. This is a procurement consideration, not a conclusion that use is unlawful. All routes still require review of actual data flows, supplier terms and Swedish telephone performance.
-->

---

<DeckHeader :chapter="5" />

<div class="kicker">APPENDIX B / TURN AND SESSION CONTRACT</div>

# One full turn. Explicit session and action state.

<div class="contract-grid"><section><span class="card-label">PROPOSED INPUT</span><p>Call ID · Hektor session ID<br>Unique turn/event ID<br>Swedish transcript<br>Trusted verification context</p></section><section class="contract-core"><span class="card-label">HEKTOR’S COMPLETE WORKFLOW</span><h2>Knowledge → policy → tools → response</h2><p>Durable conversation and confirmed action state.</p></section><section><span class="card-label">PROPOSED OUTPUT</span><p>Speech text · pending-job status<br>Completion / handover intent<br>Optional case reference</p></section></div><table class="proposal-table "><thead><tr><th>Event</th><th>Required behavior</th></tr></thead><tbody><tr><td>Interruption</td><td>Stop queued speech and obsolete generation; reconcile what was heard.</td></tr><tr><td>Retry / uncertain write</td><td>Persist logical action IDs; reconcile status before retrying idempotent writes.</td></tr><tr><td>Slow work / outage</td><td>Acknowledge delay; use approved follow-up or deterministic human route.</td></tr></tbody></table>

<DeckFooter :page="23" note="S04 / Proposed integration contract; API, cancellation and durability are prerequisites" />

<!--
Proposed contract names, not verified Hektor APIs. Adapter must invoke the complete support workflow rather than a raw model call. Enforce permissions/identity server-side; provider text is untrusted for authorization. Validate signed callbacks and prevent replay; allowlist call-control destinations. Session-aware adapter maps calls to durable Hektor sessions. S04 interruption events include spoken-prefix/timing information; reconcile actual speech, do not assume all generated text was heard. Stop obsolete generation without assuming a committed business action was undone. Persist logical action identifiers, make case and later business writes idempotent and resolve uncertain status before retry. Pending/long jobs need acknowledgment and approved follow-up. Open/closed/busy/no-answer paths; case failure durable retry/alert; full voice-layer failure original carrier fallback. Monitor each latency stage and failures with correlation IDs and minimum personal logging. Source S04 https://www.twilio.com/docs/voice/conversationrelay/websocket-messages
-->

---

<DeckHeader :chapter="5" />

<div class="kicker">APPENDIX C / COST ASSUMPTIONS</div>

# Selected usage is only part of the budget.

<div class="small-caption cost-assumptions">300 × 4 = 1,200 AI min · 45 × 6 = 270 human min · bridged inbound = 1,470 min · dictation = 10 h</div><table class="proposal-table cost-table"><thead><tr><th>Selected component</th><th>Illustrative calculation</th><th>USD / month</th></tr></thead><tbody><tr><td>ConversationRelay processing</td><td>1,200 × $0.07</td><td>$84.00</td></tr><tr><td>One eligible SIP / BYOC inbound tariff</td><td>1,470 × $0.004</td><td>$5.88</td></tr><tr><td>Onward Swedish fixed OR mobile leg</td><td>270 × $0.0187 OR $0.0714</td><td>$5.05–$19.28</td></tr><tr><td>Scribe batch + keyterm prompting</td><td>10 × ($0.22 + $0.05)</td><td>$2.70</td></tr><tr><td>Selected usage subtotal only</td><td>Not total operating cost or a quote</td><td>$97.63–$111.86</td></tr></tbody></table><div class="cost-exclusions"><b>Still to budget:</b> carrier/forwarding, numbers, Hektor usage, hosting/storage, monitoring, queue overhead, Enterprise terms, implementation, operation and staff review.</div>

<DeckFooter :page="24" note="S07, S13 / Illustrative USD, excluding tax / recheck at procurement" />

<!--
USD excluding tax, public rates checked 10 September 2026. 15% of 300 calls =45 transferred calls. The inbound leg continues for 270 human minutes in this illustrated Twilio-bridged route, before queue/ringing/hold time. Eligible SIP/BYOC is one applicable incoming tariff, not two charges added together. Fixed OR mobile onward rates are alternatives. 270×0.0187=5.049 and 270×0.0714=19.278; round final displayed amounts to cents. Ordinary forwarding to a new number, a different destination, conference warm transfer or SIP staff endpoint needs different arithmetic. Verify actual account tariffs and billing increments. Standard managed speech is assumed in ConversationRelay; no separate Media Streams or duplicate STT/TTS charges unless required by contract. Exclusions also include model/tool/summarization usage, optional recordings, retained-storage accumulation, security commitments, supplier minimums if any and tax. Do not invent SEK conversion or Swedish number-rental quote. Scribe public usage rate is not an Enterprise residency quote; account for included plan allowances without double charging. Speech Engine is listed at $0.08/min but that rate is not automatically applicable to native Agents/SIP; verify plan, inclusions, endpoint treatment, overage and residency. S07 https://www.twilio.com/en-us/voice/pricing/se and https://www.twilio.com/en-us/products/conversational-ai/pricing ; S13 https://elevenlabs.io/pricing/api
-->

---

<DeckHeader :chapter="5" />

<div class="kicker">APPENDIX D1 / PREREQUISITES AND EVIDENCE</div>

# What must be known before implementation?

<table class="proposal-table "><thead><tr><th>Area</th><th>Outstanding prerequisite</th></tr></thead><tbody><tr><td>Runtime</td><td>Full-turn API, streaming, session ownership, cancellation, timeouts and concurrency</td></tr><tr><td>Tools and state</td><td>Authorized tools, case API, idempotency, pending jobs and durable action audit</td></tr><tr><td>Identity</td><td>Approved verification method, assurance, read-only scope and human escalation</td></tr><tr><td>Telephony</td><td>Carrier/PBX, number control, SIP/forwarding, transfer acceptance, hours and fallback</td></tr><tr><td>Documentation</td><td>Staff notes vs whole calls, review interface, case schema and human-leg recording</td></tr><tr><td>Data and contracts</td><td>Processing/storage/access locations, disclosure, retention, supplier terms and quotes</td></tr><tr><td>Operations and budget</td><td>Traffic, peaks, Hektor runtime cost, support owners and spending limits</td></tr></tbody></table><div class="proposal-strip">Production gates remain open: interfaces, access controls, handover/cases, supplier approval and Swedish performance.</div>

<DeckFooter :page="25" note="Source registry: docs/voice-dictation-research.md / S01–S20 checked 10 Sep 2026" />

<!--
This repository is a presentation, not evidence of an operational support backend. No accessible runtime interface documentation was established during this work. Readiness remains blocked until the named prerequisites are verified. Existing web-chat questions remain: website access, mobile/keyboard behavior, approved sources and ongoing ownership. Source registry, all official URLs, check dates, claim qualifications and full diagrams are in docs/voice-dictation-research.md. Source groups: S01 presentation evidence; S02–S07 Twilio; S08–S15 ElevenLabs; S16–S17 Retell; S18–S19 Hektor; S20 legal review starting points. Selected region is not proof of an EU-only chain. The review must cover exact products, processors, metadata, support access, retention by artifact and external Hektor endpoints. No diagram resolves these gaps.
-->

---

<DeckHeader :chapter="5" />

<div class="kicker">APPENDIX D2 / ACCEPTANCE CRITERIA</div>

# Proposed targets. Results not yet measured.

<table class="proposal-table acceptance-table"><thead><tr><th>Area</th><th>Acceptance target to agree</th></tr></thead><tbody><tr><td>Access boundaries</td><td>Zero unauthorized account reads in the defined security suite</td></tr><tr><td>Retry safety</td><td>Zero duplicate writes in sandbox fault-injection tests</td></tr><tr><td>Human handover</td><td>20/20 controlled transfers with usable context; busy/closed/case failure separately</td></tr><tr><td>Critical identifiers</td><td>Correctly confirmed or explicitly withheld; never silently guessed</td></tr><tr><td>Responsiveness</td><td>No-tool end-of-utterance → audible response: p50 < 1.2 s; p95 < 2.5 s</td></tr><tr><td>Interruptions</td><td>≥95% successful scripted barge-in tests, including history reconciliation</td></tr><tr><td>Dictation</td><td>≥95% factual-field accuracy before review; check critical numbers/dates before save</td></tr><tr><td>Swedish experience</td><td>Median tester rating ≥4/5 for intelligibility and naturalness</td></tr><tr><td>Failure recovery</td><td>Safe route demonstrated for Hektor, voice-layer and case-system failures</td></tr></tbody></table>

<DeckFooter :page="26" note="All results: not yet measured / project targets, not supplier guarantees" />

<!--
These tests are proposed for execution after authorization, not performed in this presentation task. At least 50 internal end-to-end Swedish phone calls, roughly 100 focused utterances and 10–20 matched alternative comparisons where feasible. Include names with Å/Ä/Ö, terminology, numbers, dates, amounts, negations, corrections, accents, fast speech, silence, overlap, speakerphone and noise. Use real telephone-bandwidth audio. Define the security suite, factual-field denominator, barge-in pass rules, timing instrumentation and sample reporting before tests. A small controlled sample cannot establish production reliability. Report actual counts and uncertainty rather than presenting targets as vendor guarantees.
-->
