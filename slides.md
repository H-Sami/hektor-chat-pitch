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
<div class="cover-caption"><span class="tiny-line"></span>A focused pilot on your contact page</div>
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
The proposal is a better first response on Hektor's contact page. Customers should be able to find straightforward answers, and reach Hektor's people with context when they need help. This is a proposed service, not a finished product. Today we are deciding whether a focused pilot is worth scoping.
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

<div class="kicker">THE PILOT PATH</div>

# Prepare. Test. Learn.

<p class="intro">One contact page. Approved general questions. One agreed handover.</p>

<div class="pilot-roadmap">
<section><div class="roadmap-marker"><span>01</span><i></i></div><div class="roadmap-label">PREPARE</div><h2>Define the scope.</h2><p>Confirm website access.<br>Approve sources.<br>Name the service owner.</p><div class="roadmap-output"><span>OUTPUT</span>An agreed pilot brief</div></section>
<section><div class="roadmap-marker"><span>02</span><i></i></div><div class="roadmap-label">TEST</div><h2>Rehearse the experience.</h2><p>Test Swedish conversations.<br>Check mobile and keyboard use.<br>Confirm handovers arrive.</p><div class="roadmap-output"><span>OUTPUT</span>A launch decision</div></section>
<section><div class="roadmap-marker"><span>03</span></div><div class="roadmap-label">LEARN</div><h2>Review real outcomes.</h2><p>Review answers and feedback.<br>Measure effort and costs.<br>Decide what to improve.</p><div class="roadmap-output"><span>OUTPUT</span>An evidence-based next step</div></section>
</div>

<DeckFooter :page="9" note="Scope, duration, price and launch criteria to be agreed / no implementation timeline is assumed" />

<!--
Prepare: confirm website access, approved sources, handover ownership and a concrete pilot brief. Test: rehearse Swedish questions, refusals, mobile and keyboard use, source accuracy and case delivery before deciding whether to launch. Learn: run the agreed pilot, review outcomes and full costs, and decide whether to improve, expand or stop. Duration, price and success criteria must be agreed before commissioning. The roadmap shows decisions, not a promised implementation timeline.
-->

---

<DeckHeader :chapter="3" />

<div class="kicker">WHAT SUCCESS LOOKS LIKE</div>

# Four questions decide what comes next.

<p class="intro">Agree a baseline and success criteria before launch.</p>

<div class="scorecard">
<section><span class="score-index">01</span><DeckIcon name="chat" /><div><h2>Did customers get help?</h2><p>Resolution, feedback and repeat contacts.</p></div></section>
<section><span class="score-index">02</span><DeckIcon name="shield" /><div><h2>Were the answers reliable?</h2><p>Reviewed answers against approved sources.</p></div></section>
<section><span class="score-index">03</span><DeckIcon name="person" /><div><h2>Did handovers work?</h2><p>Case delivery, useful context and follow-up.</p></div></section>
<section><span class="score-index">04</span><DeckIcon name="chart" /><div><h2>Was it worth running?</h2><p>Service costs, review effort and staff time.</p></div></section>
</div>

<div class="decision-strip"><b>At the review</b><span>Improve</span><span>Expand</span><span>Stop</span><p>Choose from evidence.</p></div>

<DeckFooter :page="10" note="Pilot outcomes to be measured / no savings or resolution-rate promises" />

<!--
We have no verified contact-volume or cost-per-contact data. Agree a baseline before the pilot and measure outcomes, including the work needed to review answers and operate the service. A chat that ends is not necessarily a resolved case. Ask customers and check repeat contact where the agreed data policy allows. Set thresholds jointly and review both successful and unsuccessful conversations.
-->

---

<DeckHeader :chapter="3" />

<div class="kicker">OWNERSHIP &amp; OPERATING MODEL</div>

# Clear ownership from the start.

<div class="ownership-matrix">
<div class="matrix-head"><span>RESPONSIBILITY</span><span><DeckIcon name="person" />HEKTOR</span><span><DeckIcon name="chat" />IMPLEMENTATION PARTNER</span></div>
<div><b>Service</b><span>Own scope and support follow-up</span><span>Configure the agreed experience</span></div>
<div><b>Knowledge</b><span>Approve sources and boundaries</span><span>Set up and test the answers</span></div>
<div><b>Operation</b><span>Approve suppliers and data handling</span><span>Monitor, review and report</span></div>
</div>

<div class="commercial-note"><div class="icon-tile"><DeckIcon name="document" /></div><div><h2>Transparent supplier costs.</h2><p>Proposed: Hektor holds the model-provider account and pays usage directly, without markup. Implementation and support are scoped separately.</p></div></div>

<DeckFooter :page="11" note="Proposed responsibilities and commercial model / subject to agreement" />

<!--
Hektor should have a named service owner, with a delivery owner on our side. The proposed commercial model keeps the language-model account and usage bill with Hektor, without a markup on that usage. Implementation and support pricing still need a separate agreement. Provider changes require testing and may need integration work; do not promise that swapping a supplier is free or instant.
-->

---

<DeckHeader />

<div class="closing-copy">
<div class="kicker">THE NEXT CONVERSATION</div>

# Let’s define the first pilot.

<p class="closing-sub">Start with your common questions.<br>Leave with a clear plan.</p>
<div class="closing-requests"><div><span>01</span><b>Name a Hektor service owner.</b></div><div><span>02</span><b>Bring approved material and example questions.</b></div><div><span>03</span><b>Confirm who manages the website.</b></div></div>
</div>

<div class="closing-brief">
<div class="brief-heading"><DeckIcon name="document" /><span>THE OUTCOME</span></div>
<h2>One agreed<br>pilot plan.</h2>
<ul><li><DeckIcon name="check" />A focused scope</li><li><DeckIcon name="check" />Price and running costs</li><li><DeckIcon name="check" />Clear success criteria</li><li><DeckIcon name="check" />A decision to proceed</li></ul>
<div class="brief-bottom">Useful answers.<br>People in control.</div>
</div>

<DeckFooter :page="12" note="Hektor Agent / A better first response." />

<!--
Ask for a scoping discussion with a service owner and someone who can confirm website access. Bring approved material and anonymised examples of common questions. The output is a focused pilot plan: scope, implementation approach, price, running costs, duration and success criteria. The decision to proceed is an item for Hektor to make after reviewing the plan, not a foregone conclusion.
-->
