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

<div class="kicker">WHY THIS MATTERS</div>

# Why this matters to your customers.

<p class="intro">A better first response for the customer, and less pressure on the team.</p><div class="proposal-cards"><section><span class="card-label">01 / ALWAYS OPEN</span><h2>Answers at any hour.</h2><p>Every question gets a first response, day or night. Nobody waits until Monday for something the website already explains.</p></section><section><span class="card-label">02 / MANY AT ONCE</span><h2>Every customer served at once.</h2><p>Hektor Agent holds as many conversations as they arrive together. The team stops being the queue.</p></section><section><span class="card-label">03 / THE RIGHT NEXT STEP</span><h2>Guided, never stranded.</h2><p>When a question needs a person, it goes to support or sales with the conversation attached. No dead ends.</p></section></div><div class="proposal-strip"><b>What changes for Hektor:</b> the team keeps the judgement, and stops being the queue.</div>

<DeckFooter :page="2" note="Proposed value of the service / pilot evidence still to be gathered" />

<!--
Lead with value before evidence. Three benefits in the order a customer experiences them: it answers at any hour, it answers everyone at once, and it always offers a next step. Concurrency is the part that changes the picture for a small team: an agent is not limited to one conversation per person, so the first response no longer waits for a free colleague. Say plainly that these are the intended benefits of the design, and that the pilot exists to measure them rather than assert them.
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

<DeckFooter :page="3" note="Source: Hektor contact page / weekdays 08:00-17:00, lunch 12:00-13:00 / checked 10 Sep 2026" source="https://hektormobil.se/kontakta-oss" />

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

<DeckFooter :page="4" note="Proposed experience / existing phone, email and contact form remain available" />

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

<DeckFooter :page="5" note="Illustrative conversation / WiFi-calling explanation paraphrases Hektor's public FAQ" source="https://hektormobil.se/kontakta-oss" />

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

<DeckFooter :page="6" note="Initial pilot: approved public information / source citations help review; they do not guarantee accuracy" />

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

<DeckFooter :page="7" note="Proposed operating rules / no account-changing tools in the initial pilot" />

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

<DeckFooter :page="8" note="Follow-up ownership, destination and response promise to be agreed with Hektor" />

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

<DeckFooter :page="9" note="Customer-system feasibility and privacy requirements need review before any later integration" />

<!--
We do not yet know Hektor's CRM or identity setup. The initial pilot does not need customer-record access. A later phase needs a technical and privacy review, including supplier terms, data flows, access controls and retention. Even a public-information chat can receive personal information typed by users, so the pilot still needs an appropriate collection and handling policy. These are design decisions to review, not a legal compliance guarantee.
-->

---

<DeckHeader :chapter="3" />

<div class="kicker">PROPOSED EXTENSION</div>

# One Hektor Agent. More ways to get help.

<p class="intro">Shared knowledge and rules. Three distinct interaction workflows.</p><div class="proposal-cards"><section><span class="card-label">01 / WEBSITE CHAT</span><h2>Type a question.</h2><p>Public answers and an agreed route to a colleague. The original pilot experience.</p></section><section><span class="card-label">02 / CUSTOMER PHONE</span><h2>Talk in Swedish.</h2><p>A managed speech interface carries the conversation to Hektor. Human help stays available.</p></section><section><span class="card-label">03 / STAFF DICTATION</span><h2>Speak a case note.</h2><p>Transcribe, draft and review. An authorized case operation follows staff approval.</p></section></div><div class="proposal-strip"><b>HEKTOR AGENT</b> owns support reasoning, policy and authorized actions in the proposed design.</div>

<DeckFooter :page="10" note="Proposed integration / Hektor runtime interfaces not yet verified" />

<!--
Extend the original public-information-first proposal across channels. The user intends to reuse an existing Hektor harness; no runtime repository or verified API contract was available in this presentation project. Knowledge retrieval, full-turn execution, tools, identity and case APIs are prerequisites to inspect, not functionality demonstrated by the slides. Dictation is a separate staff documentation workflow, not an autonomous customer telephone agent.
-->

---

<DeckHeader :chapter="3" />

<div class="kicker">PROPOSED EXTENSION</div>

# Add a voice, not another support brain.

<p class="intro">The preferred first proof of concept keeps Hektor authoritative.</p><div class="voice-diagram ">

```mermaid
%%{init: {"theme":"base","themeVariables":{"primaryColor":"#e6f0e7","primaryTextColor":"#173d29","primaryBorderColor":"#9abda4","edgeLabelBackground":"transparent","lineColor":"#658a70","fontFamily":"Segoe UI","fontSize":"18px"},"flowchart":{"htmlLabels":false,"curve":"basis","rankSpacing":22,"nodeSpacing":20,"padding":10}}}%%
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

<DeckFooter :page="11" note="S02-S03 / Documented speech interface; proposed Hektor integration" />

<!--
Proposed architecture, not deployed. S02 documents the managed WebSocket speech interface. S03 lists sv-SE with Google transcription and an ElevenLabs voice; this proves configuration availability, not superior Swedish telephone quality. Pin and test provider, model and voice instead of trusting changing defaults. The small adapter delegates complete support turns to Hektor, including knowledge, policy and internal tool loops. It supplies no independent support decisions. It is session-aware: call/session mappings, delivery events, retries and interruption reconciliation. Hektor remains durable authority for conversation and action state. Customer-specific tools are disabled in the initial pilot. Reuse existing service/storage/job mechanisms; no duplicate knowledge base, customer database, vendor LLM, memory or orchestration platform by default. Full Diagram A is retained in docs/voice-dictation-research.md. Sources S02 https://www.twilio.com/docs/voice/twiml/connect/conversationrelay ; S03 https://www.twilio.com/docs/voice/conversationrelay/voice-configuration
-->

---

<DeckHeader :chapter="3" />

<div class="kicker">PROPOSED EXTENSION</div>

# A Swedish call, from question to next step.

<div class="dialogue-label">ILLUSTRATIVE PILOT CONVERSATION</div><div class="phone-dialogue">
<div><b>Hektor</b><p>Hej! Du pratar med Hektor Agent. Jag kan hjälpa dig med vanliga frågor eller hjälpa dig att nå supporten.</p></div>
<div class="caller"><b>Customer</b><p>Hur fungerar wifi-samtal?</p></div>
<div><b>Hektor</b><p>Du ringer via wifi i stället för mobilnätet. Din telefon behöver stödja tjänsten.</p></div>
<div class="caller"><b>Customer</b><p>Kan du kontrollera mitt abonnemang?</p></div>
<div class="boundary"><b>Hektor</b><p>Jag kan inte se dina abonnemangsuppgifter här. Jag hjälper dig vidare till supporten.</p></div></div><div class="small-caption">Proposed next step: connect to support and deliver the context separately.</div>

<DeckFooter :page="12" note="S18 / Public FAQ; dialogue and next steps are illustrative" />

<!--
The Swedish general answer paraphrases the public FAQ, S18 https://hektormobil.se/kontakta-oss . No live call, account lookup, identity verification or subscription change is demonstrated. The initial pilot cannot access account records. Eventual personal support requires an approved identity check, scoped read-only lookup and a supported answer or escalation. Caller ID alone is not authentication; an unverified caller can still reach a person. Do not assume BankID. The opening illustrates how the agent introduces itself, not a complete approved privacy or recording script. Hektor must approve disclosure and personal-data handling before applicable testing.
-->

---

<DeckHeader :chapter="3" />

<div class="kicker">PROPOSED EXTENSION</div>

# The next colleague receives the context.

<div class="handover-voice-grid"><div><div class="voice-diagram handover-mermaid">

```mermaid
%%{init: {"theme":"base","themeVariables":{"primaryColor":"#e6f0e7","primaryTextColor":"#173d29","primaryBorderColor":"#9abda4","edgeLabelBackground":"transparent","lineColor":"#658a70","fontFamily":"Segoe UI","fontSize":"18px"},"flowchart":{"htmlLabels":false,"curve":"basis","rankSpacing":22,"nodeSpacing":20,"padding":10}}}%%
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

<DeckFooter :page="13" note="S04-S05 / Call control is documented; case delivery is proposed" />

<!--
Diagram B describes proposed handover. Twilio end/handoffData can return control and information to the Connect action callback; it does not populate a CRM or staff desktop. Case creation, context routing and delivery acknowledgment need Hektor-owned integration. Include reason, relevant transcript and confirmed actions. Fictional identifier DEMO-001. Open support routes to the queue; busy, closed and no-answer routes need approved callback/voicemail handling. Failed case delivery needs durable retry and an operator alert; it must not prevent an urgent human connection. Full blueprint is retained in the research document. Sources S04 https://www.twilio.com/docs/voice/conversationrelay/websocket-messages ; S05 https://www.twilio.com/docs/voice/twiml/connect
-->

---

<DeckHeader :chapter="3" />

<div class="kicker">PROPOSED EXTENSION</div>

# Dictate once. Review before saving.

<p class="intro">Staff dictation is separate from the live customer conversation.</p><div class="voice-diagram ">

```mermaid
%%{init: {"theme":"base","themeVariables":{"primaryColor":"#e6f0e7","primaryTextColor":"#173d29","primaryBorderColor":"#9abda4","edgeLabelBackground":"transparent","lineColor":"#658a70","fontFamily":"Segoe UI","fontSize":"18px"},"flowchart":{"htmlLabels":false,"curve":"basis","rankSpacing":22,"nodeSpacing":20,"padding":10}}}%%
flowchart LR
 D["Staff dictation /
approved upload"] --> S["ElevenLabs Scribe v2
Source transcript"]
 S --> H["Hektor documentation
Facts and draft case"]
 L["Live conversation transcript +
confirmed action results"] -->|Reuse directly| H
 H --> R["Staff correction
and approval"]
 R --> W["Authorized case tool
Create / update"]
 style H fill:#173d29,color:#ffffff,stroke:#173d29
```

</div><div class="draft-fields"><b>Draft fields</b><span>Reason &amp; request · confirmed facts · steps tried · completed actions · commitments<br>Follow-up owner/date · uncertain fields · source transcript references</span></div>

<DeckFooter :page="14" note="S12 / Documented transcription features; proposed review and case workflow" />

<!--
Proposed documentation workflow, Diagram C. S12 documents Swedish, timestamps and speaker diarization for Scribe v2. Speaker labels do not establish identity; single-speaker staff notes usually need no diarization. Preserve separate channels/known roles where available for multi-party audio. Retain source references, distinguish reported statements from confirmed business-system results and mark uncertainty. Review names, critical numbers, dates and commitments before an authorized case write. A dictated instruction must never directly execute an account change. Reuse live AI transcripts and confirmed Hektor actions; no second transcription service by default. Re-transcribe retained audio only for a justified approved review requirement. The live transcript covers the AI leg only. The subsequent human conversation needs a separately approved PBX/recording/transcription integration. Source S12 https://elevenlabs.io/docs/overview/capabilities/speech-to-text
-->

---

<DeckHeader :chapter="3" />

<div class="kicker">PROPOSED EXTENSION</div>

# Access and actions stay under Hektor’s control.

<p class="intro">Three boundaries must hold across chat, phone and documentation.</p><div class="proposal-cards"><section><span class="card-label">01 / VERIFY</span><h2>Before account access.</h2><p>An approved identity check precedes a scoped lookup. Caller ID is insufficient.</p></section><section><span class="card-label">02 / AUTHORIZE</span><h2>Permissions on the server.</h2><p>Hektor controls tools and confirmed actions. Speech or dictated text cannot grant access.</p></section><section><span class="card-label">03 / RECOVER</span><h2>A safe route to a person.</h2><p>Handle interruptions, outages and failed case delivery. Human access does not require verification.</p></section></div><div class="proposal-strip"><b>Data review required.</b> IE1 does not establish an EU-only chain; ElevenLabs residency requires an eligible Enterprise setup.</div>

<DeckFooter :page="15" note="S05-S06, S14-S15, S19-S20 / Target controls; supplier and privacy review required" />

<!--
Target design, not a compliance guarantee. Validate signed callbacks, prevent replay and restrict transfer destinations. Voice-provider text must not set trusted authorization. Interruption stops queued speech and obsolete generation; reconcile what was actually spoken with Hektor history. It does not undo a committed action. Persist logical action IDs and reconcile uncertain outcomes before retrying idempotent writes. Hektor outages use approved deterministic messages and human/follow-up routes, not a replacement autonomous support LLM. Full voice outage needs original carrier/PBX fallback. Case failures require durable retry/alerting. S05-S06: IE1 availability does not guarantee all data remains there; check each product, speech processor, metadata and support access. S14-S15: ElevenLabs residency and eligible Zero Retention configurations are Enterprise features; EU storage, processing and external endpoints must be reviewed separately. Recording is optional; transcription still handles personal data. Agree purpose, disclosure, access, retention/deletion, processors/subprocessors and incident response under GDPR, applicable Swedish telecom rules and AI transparency obligations (S20), without claiming legal approval. Hektor’s up-to-90-day recorded-call/chat policy is context, not authorization for new vendors or every artifact (S19). Any personal-data test needs appropriate approval. Full URLs and qualification mapping are in docs/voice-dictation-research.md.
-->

---

<DeckHeader :chapter="3" />

<div class="kicker">TWO WAYS TO ADD THE PHONE</div>

# Two ways to add the phone.

<div class="route-comparison"><section class="preferred"><span class="card-label">PREFERRED STARTING POINT</span><h2>Use a managed voice service</h2><p>The speaking and listening is handled by a specialist service. Hektor Agent still writes every answer and makes every decision.</p><ul><li>Fastest route to a working Swedish phone line</li><li>Hektor stays the authority on every answer</li><li>Proven call handling and transfer to a person</li></ul></section><section><span class="card-label">ALTERNATIVE, IF IT FITS BETTER</span><h2>Use Hektor's own phone system</h2><p>The same Hektor Agent, reached directly through the telephone system Hektor already has. Nothing is added to the route.</p><ul><li>Reuses your existing telephone setup</li><li>One less supplier to manage</li><li>Depends on what your phone system supports</li></ul></section></div><div class="proposal-strip">We recommend the first. The choice is confirmed after a short Swedish telephone test, and no decision is needed today.</div>

<DeckFooter :page="16" note="Both routes use the same Hektor Agent and the same approved knowledge" />

<!--
Keep this high level. Both routes put Hektor Agent in charge of the answer; they differ only in who provides the voice. The first is the recommended starting point because the speech side is managed for us. The second is worth considering only if Hektor's own telephone system already supports it. Say that the final choice is a short technical test, not a decision the room has to make today, and do not go into supplier names or protocols here.
-->

---

<DeckHeader :chapter="4" />

<div class="kicker">THANK YOU</div>

# Thank you.

<div class="closing-copy">
<p class="closing-sub">We would welcome the chance to run a measured pilot with you.</p>

<div class="closing-requests">
<div><span>01</span><b>Give us a scope: the web chat, the phone line, or both.</b></div>
<div><span>02</span><b>Name one person at Hektor who owns the answers.</b></div>
<div><span>03</span><b>Tell us what a good result would look like to you.</b></div>
</div>
</div>

<DeckFooter :page="17" note="Thank you / questions welcome" />

<!--
End on gratitude and one small ask. Thank the room for the time, then recap in a single sentence: a better first response for the customer, and less pressure on the team. The three items are deliberately small and non-technical. Do not reintroduce cost, timelines or testing detail here; if asked, say the next step is a short technical conversation, not a commitment.
-->
