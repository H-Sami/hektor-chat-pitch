---
theme: default
title: Hektor AI Kundservice
info: |
  AI chat agent for hektormobil.se/kontakta-oss
  Architecture pitch for management.
class: text-center
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
mdc: true
colorSchema: light
---

<div style="letter-spacing:.35em;font-size:.75rem;font-weight:700;color:#10b981;margin-bottom:.6rem">HEKTOR</div>

# Never miss another customer

### An AI agent in the chat window on <span style="color:#10b981">hektormobil.se/kontakta-oss</span>

<div style="margin-top:.8rem;font-size:.95rem;opacity:.75">Answers instantly, knows your services, hands over to your staff when it should.</div>

<div style="margin-top:2.2rem;font-size:.7rem;opacity:.5;letter-spacing:.08em;text-transform:uppercase">Architecture &amp; rollout proposal · Management briefing · 2026</div>

<!--
Open with the cost of the status quo, not the technology. One sentence: your customers can only reach you by filling in a form and waiting, and that form is closed 123 hours a week. We are proposing to put an AI agent in the chat window that answers from Hektor's own material, and to keep your staff in control of everything that matters.
-->

---
layout: default
---

# Today: one door, and it is often shut

<div style="display:grid;grid-template-columns:1.15fr 1fr;gap:2rem;margin-top:.6rem">

<div>

**How customers reach you today**

- The <b>kontakta-oss</b> form: *"Fyll i formuläret så kontaktar vi dig under dagen"*
- <b>support@hektormobil.se</b>
- <b>070-100 01 00</b>

</div>

<div>

**When you are open**

| | |
|---|---|
| Måndag – Fredag | 08:00 – 17:00 |
| Lunchstängt | 12:00 – 13:00 |
| Lördag – Söndag | Stängt |

**That is 45 of 168 hours a week.**

</div>

</div>

<div style="margin-top:1.4rem;padding:.9rem 1.1rem;border-left:4px solid #10b981;background:rgba(16,185,129,.08);font-size:.95rem">
A customer whose mobile stopped working on Friday evening waits until Monday morning. And the question they wanted to ask is probably one you already answer on the site.
</div>

<!--
Be fair: a form is not a bad channel. But it is one channel, it is manned 45 hours a week, and it asks the customer to do the waiting. The remaining 123 hours a week are when customers are most likely to look at a competitor.
-->

---
layout: center
class: text-center
---

# The idea

<div style="margin-top:1rem;font-size:1.15rem;line-height:1.8;max-width:46rem;margin-left:auto;margin-right:auto">

A chat window on <span style="color:#10b981;font-weight:600">/kontakta-oss</span>.

An AI agent answers instantly from <span style="color:#10b981;font-weight:600">Hektor's own material</span> — the site, the FAQ, the terms, your service catalogue — and from <span style="color:#10b981;font-weight:600">your CRM</span> when the customer is identified.

The moment it is unsure, or the customer asks for a person, <span style="color:#10b981;font-weight:600">a human takes over in the same window</span> — with the whole conversation already in front of them.

</div>

<!--
Three promises in one: instant answers, answers grounded in Hektor's facts, and a human one click away. Nothing about the existing form is removed. The chat is an addition, not a replacement.
-->

---
layout: default
---

# What it looks like

<div style="display:grid;grid-template-columns:1.3fr 1fr;gap:1.6rem;align-items:start;margin-top:.4rem">

<div>
<img src="/images/mock-chat.jpg" alt="Chat window: grounded answer, cited source, and a handover to a human" style="width:100%;border-radius:10px;box-shadow:0 10px 30px rgba(0,0,0,.16)" />
</div>

<div style="font-size:.85rem">

**The customer sees**

- an answer in seconds, with the source it came from
- a cited price instead of a guess
- one visible **"Prata med en människa"** button
- no form to fill in for a question they already have

**Your staff see**

- the full transcript, not a bare form submission
- the identified customer, the invoices, and what the AI already tried
- only the conversations the AI could not finish
- a queue that no longer waits for Monday morning

**Hektor keeps**

- the phone line, the form and the email address exactly as they are
- the final word: every handover lands with a person

</div>

</div>

<!--
This is a mockup, not a product screenshot - say that plainly. Walk the left image top to bottom: question, grounded answer, source chip, handover card. Then the right column: what changes for staff. Note the AI declines the payment arrangement by itself - that is the safety behaviour, visible in the demo.
-->

---
layout: default
---

# Three conversations, one window

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin-top:.5rem">

<div style="border:1px solid rgba(0,0,0,.1);border-top:4px solid #10b981;border-radius:8px;padding:.9rem 1rem;font-size:.8rem">
<div style="font-weight:700;font-size:.72rem;letter-spacing:.04em;text-transform:uppercase;opacity:.6;margin-bottom:.5rem">1 · Existing customer</div>
<div style="font-style:italic;opacity:.85;margin-bottom:.6rem">"Why is my first invoice higher than the plan price?"</div>
AI answers from the published FAQ — pro-rata month plus the 299 kr start fee — and cites it. <b>No human needed.</b>
</div>

<div style="border:1px solid rgba(0,0,0,.1);border-top:4px solid #10b981;border-radius:8px;padding:.9rem 1rem;font-size:.8rem">
<div style="font-weight:700;font-size:.72rem;letter-spacing:.04em;text-transform:uppercase;opacity:.6;margin-bottom:.5rem">2 · New customer</div>
<div style="font-style:italic;opacity:.85;margin-bottom:.6rem">"I need mobile broadband for a summer house — what do you have?"</div>
AI qualifies the need and coverage, answers from the service catalogue, then offers a call or a handover to sales. <b>A warmer lead than a form row.</b>
</div>

<div style="border:1px solid rgba(0,0,0,.1);border-top:4px solid #10b981;border-radius:8px;padding:.9rem 1rem;font-size:.8rem">
<div style="font-weight:700;font-size:.72rem;letter-spacing:.04em;text-transform:uppercase;opacity:.6;margin-bottom:.5rem">3 · Needs a person</div>
<div style="font-style:italic;opacity:.85;margin-bottom:.6rem">"I want to cancel and dispute last month's charge."</div>
AI does not argue and does not decide. It confirms the request, checks opening hours, and transfers to support with the transcript. <b>A handover, not a dead end.</b>
</div>

</div>

<!--
The point of showing three: the AI is not one feature, it is three different behaviours. Self-service, sales qualification, and triage. Only the first is really about saving money; the second is about revenue; the third is about not damaging trust.
-->

---
layout: default
---

# Architecture, from 10,000 metres

<div style="margin-top:.4rem">

<div style="display:grid;grid-template-columns:7rem 1fr;gap:.8rem;align-items:center;margin-bottom:.55rem">
<div style="font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:.07em;opacity:.55">1 · Customer</div>
<div style="border:1px solid rgba(0,0,0,.12);border-radius:7px;padding:.5rem .7rem;font-size:.76rem;background:rgba(16,185,129,.05)">Chat widget on <b>/kontakta-oss</b> — one script tag, inherits the site's look, works on mobile</div>
</div>

<div style="display:grid;grid-template-columns:7rem 1fr;gap:.8rem;align-items:center;margin-bottom:.55rem">
<div style="font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:.07em;opacity:.55">2 · Gateway</div>
<div style="border:1px solid rgba(0,0,0,.12);border-radius:7px;padding:.5rem .7rem;font-size:.76rem;background:rgba(16,185,129,.05)">Session, identity, consent, rate limiting, audit log</div>
</div>

<div style="display:grid;grid-template-columns:7rem 1fr 1fr 1fr;gap:.6rem;align-items:stretch;margin-bottom:.55rem">
<div style="font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:.07em;opacity:.55;align-self:center">3 · Agent</div>
<div style="border:1px solid rgba(0,0,0,.12);border-radius:7px;padding:.5rem .7rem;font-size:.76rem;background:rgba(16,185,129,.05)"><b>Orchestrator</b><br><span style="opacity:.6">tools, guardrails, escalation rules</span></div>
<div style="border:1px solid rgba(0,0,0,.12);border-radius:7px;padding:.5rem .7rem;font-size:.76rem;background:rgba(16,185,129,.05)"><b>Knowledge base</b><br><span style="opacity:.6">site, FAQ, terms, catalogue (RAG)</span></div>
<div style="border:1px solid rgba(0,0,0,.12);border-radius:7px;padding:.5rem .7rem;font-size:.76rem;background:rgba(16,185,129,.05)"><b>CRM connector</b><br><span style="opacity:.6">read-only, customer-scoped</span></div>
</div>

<div style="display:grid;grid-template-columns:7rem 1fr;gap:.8rem;align-items:center;margin-bottom:.55rem">
<div style="font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:.07em;opacity:.55">4 · People</div>
<div style="border:1px solid rgba(0,0,0,.12);border-radius:7px;padding:.5rem .7rem;font-size:.76rem;background:rgba(16,185,129,.05)">Support &amp; sales live-chat inbox — a human takes over in the same window</div>
</div>

</div>

<div style="margin-top:.7rem;font-size:.78rem;opacity:.7">Every component is separately replaceable. No part of it requires changing how Hektor works today.</div>

<!--
Ten thousand metres means four layers and no vendor names. Say the two things management cares about: the widget is a small addition to an existing page, and everything the AI can see is a decision we make explicitly in layer 3 - nothing here has unlimited access to anything.
-->

---
layout: default
---

# One question, end to end

<div style="margin-top:.3rem">

<div style="display:grid;grid-template-columns:2.6rem 1fr;gap:.8rem;align-items:center;padding:.42rem .6rem;border-radius:6px;font-size:.84rem">
<div style="font-weight:700;color:#10b981;font-size:.8rem">1</div>
<div><b>Customer</b> types into the widget on /kontakta-oss</div>
</div>

<div style="display:grid;grid-template-columns:2.6rem 1fr;gap:.8rem;align-items:center;padding:.42rem .6rem;border-radius:6px;font-size:.84rem;background:rgba(0,0,0,.03)">
<div style="font-weight:700;color:#10b981;font-size:.8rem">2</div>
<div><b>Gateway</b> starts a session, loads consent and any known identity, logs the turn</div>
</div>

<div style="display:grid;grid-template-columns:2.6rem 1fr;gap:.8rem;align-items:center;padding:.42rem .6rem;border-radius:6px;font-size:.84rem">
<div style="font-weight:700;color:#10b981;font-size:.8rem">3</div>
<div><b>Orchestrator</b> classifies the intent and decides which tools it may use</div>
</div>

<div style="display:grid;grid-template-columns:2.6rem 1fr;gap:.8rem;align-items:center;padding:.42rem .6rem;border-radius:6px;font-size:.84rem;background:rgba(16,185,129,.08)">
<div style="font-weight:700;color:#10b981;font-size:.8rem">4a</div>
<div><b>Knowledge base</b> retrieves the passages that support an answer — from Hektor's own documents</div>
</div>

<div style="display:grid;grid-template-columns:2.6rem 1fr;gap:.8rem;align-items:center;padding:.42rem .6rem;border-radius:6px;font-size:.84rem;background:rgba(16,185,129,.08)">
<div style="font-weight:700;color:#10b981;font-size:.8rem">4b</div>
<div><b>CRM connector</b> adds customer-scoped facts — only after identification and consent</div>
</div>

<div style="display:grid;grid-template-columns:2.6rem 1fr;gap:.8rem;align-items:center;padding:.42rem .6rem;border-radius:6px;font-size:.84rem">
<div style="font-weight:700;color:#10b981;font-size:.8rem">5</div>
<div><b>Answer</b> is composed with its sources; low confidence or a sensitive intent routes to a human instead</div>
</div>

<div style="display:grid;grid-template-columns:2.6rem 1fr;gap:.8rem;align-items:center;padding:.42rem .6rem;border-radius:6px;font-size:.84rem;background:rgba(0,0,0,.03)">
<div style="font-weight:700;color:#10b981;font-size:.8rem">6</div>
<div><b>Everything is logged</b> — question, sources, answer, confidence, handover — for quality and audit</div>
</div>

</div>

<!--
This is the slide to linger on. Steps 4a and 4b are the whole difference between a generic chatbot and what we are proposing. Step 5 is where trust is protected. Step 6 is what makes it defensible in an audit or a dispute.
-->

---
layout: default
---

# Where the AI’s knowledge comes from

<div style="display:grid;grid-template-columns:1fr 1fr;gap:1.8rem;font-size:.85rem;margin-top:.4rem">

<div>

**Public knowledge — no personal data**

- hektormobil.se: plans, coverage, the Tele2 network, 5G, VoLTE, WiFi calling
- the FAQ on /kontakta-oss: first invoice, network, VoLTE, WiFi calling, feedback
- Allmänna villkor, cookie and privacy policies, the withdrawal form
- support hours and the escalation rules themselves

</div>

<div>

**Customer knowledge — only for the identified customer**

- subscription and plan, binding period, monthly cost
- invoice and payment status, first-invoice start fees
- open support errands and earlier contacts
- nothing outside the record of the customer in the conversation

</div>

</div>

<div style="margin-top:1.2rem;padding:.8rem 1.1rem;border-left:4px solid #10b981;background:rgba(16,185,129,.08);font-size:.88rem">
The public layer alone answers a large share of what arrives in the inbox today. The CRM layer is what makes an answer <i>about them</i> instead of <i>about the product</i>.
</div>

<!--
Note the split. Phase 1 of the rollout only needs the left column - public information Hektor already publishes. That means the first version carries no personal-data risk at all, which is why it can ship in weeks.
-->

---
layout: default
---

# A real example

<div style="margin-top:.4rem;max-width:42rem">

<div style="padding:.6rem .85rem;border-radius:12px 12px 4px 12px;font-size:.84rem;margin-bottom:.55rem;line-height:1.6;background:#eef2f5;margin-left:auto;max-width:88%">
Why is my first invoice higher than the plan price?
</div>

<div style="padding:.6rem .85rem;border-radius:12px 12px 12px 4px;font-size:.84rem;margin-bottom:.55rem;line-height:1.6;background:rgba(16,185,129,.1);border-left:3px solid #10b981;max-width:92%">
Your first invoice covers the period from activation to the end of the month, plus a one-time start fee of <b>299 kr</b> (299 kr excl. VAT for business) unless something else was agreed.
<div style="font-size:.72rem;opacity:.65;font-style:italic;margin-top:.45rem">Källa: FAQ — "Varför är min första faktura högre som ny kund?" · Allmänna villkor</div>
</div>

<div style="padding:.6rem .85rem;border-radius:12px 12px 4px 12px;font-size:.84rem;margin-bottom:.55rem;line-height:1.6;background:#eef2f5;margin-left:auto;max-width:88%">
Can you split it into two payments?
</div>

<div style="padding:.6rem .85rem;border-radius:12px 12px 12px 4px;font-size:.84rem;line-height:1.6;background:rgba(245,158,11,.12);border-left:3px solid #f59e0b;max-width:92%">
That is a payment arrangement, so I will not decide it. I can pass you to a colleague who can look at your specific invoices.
<div style="font-size:.72rem;opacity:.65;font-style:italic;margin-top:.45rem">Handing over · transcript attached · Mon–Fri 08:00–17:00</div>
</div>

</div>

<!--
This one exchange is the entire safety story. First answer: routine, published, cited, automated. Second answer: commercially sensitive, so the AI declines to decide and hands over. The customer never hits a wall and never gets an answer the AI had no business giving.
-->

---
layout: default
---

# The trust layer

<div style="margin-top:.5rem">

<div style="font-size:.84rem;padding:.55rem .85rem;margin-bottom:.45rem;border-left:3px solid #10b981;background:rgba(0,0,0,.03);border-radius:0 6px 6px 0"><b>Answers carry sources.</b> Every factual claim points at a document in the knowledge base. No source, no answer.</div>

<div style="font-size:.84rem;padding:.55rem .85rem;margin-bottom:.45rem;border-left:3px solid #10b981;background:rgba(0,0,0,.03);border-radius:0 6px 6px 0"><b>Rules beat the model.</b> Prices, terms, legal text and campaign conditions are read from Hektor's data, never generated from memory.</div>

<div style="font-size:.84rem;padding:.55rem .85rem;margin-bottom:.45rem;border-left:3px solid #10b981;background:rgba(0,0,0,.03);border-radius:0 6px 6px 0"><b>Confidence decides.</b> Below a threshold, or on a sensitive intent, the AI stops and escalates instead of guessing.</div>

<div style="font-size:.84rem;padding:.55rem .85rem;margin-bottom:.45rem;border-left:3px solid #10b981;background:rgba(0,0,0,.03);border-radius:0 6px 6px 0"><b>Nothing irreversible without a person.</b> No cancellations, no binding changes, no commitments, no payments.</div>

<div style="font-size:.84rem;padding:.55rem .85rem;margin-bottom:.45rem;border-left:3px solid #10b981;background:rgba(0,0,0,.03);border-radius:0 6px 6px 0"><b>It never invents a colleague.</b> Handover happens only when a human path is actually open — otherwise it takes a message and says when you will reply.</div>

</div>

<!--
These five rules are the answer to "what if it says something wrong". They are also configurable policy, not code - your staff should be able to tighten or loosen them without a release.
-->

---
layout: default
---

# Data protection is a design constraint, not a slide

<div style="display:grid;grid-template-columns:1fr 1fr;gap:1.8rem;font-size:.84rem;margin-top:.4rem">

<div>

**Built in from day one**

- GDPR: Hektor remains controller; a processing agreement covers the supplier
- lawful basis recorded per purpose; the privacy policy is updated for chat
- the AI sees only the record of the customer it is talking to
- personal data is masked before it reaches the model where it is not needed

</div>

<div>

**Controlled and provable**

- identity is established before any account detail is shown
- transcripts and decisions are logged for audit and dispute handling
- retention and deletion rules are set by Hektor, not by the vendor
- sales conversations are routed as marketing, service conversations as support

</div>

</div>

<div style="margin-top:1.1rem;padding:.8rem 1.1rem;border-left:4px solid #10b981;background:rgba(16,185,129,.08);font-size:.88rem">
Identity is the gate: no customer number or verified phone number, no CRM data — regardless of what the customer claims in the chat.
</div>

<!--
Swedish customers will ask this question, and a telecom handles personal data as routine. The important line is the last one: the AI is never the thing that decides whether someone is who they say they are.
-->

---
layout: default
---

# When a human has to take over

<div style="display:grid;grid-template-columns:1fr 2rem 1fr 2rem 1fr;align-items:stretch;gap:.4rem;margin-top:.4rem">

<div style="border:1px solid rgba(0,0,0,.1);border-radius:8px;padding:.75rem .9rem;font-size:.8rem">
<div style="font-weight:700;margin-bottom:.45rem;color:#10b981">The customer asks for a person</div>
<div style="opacity:.85">One button, always visible. No "are you sure" loop and no attempt to talk them out of it.</div>
</div>

<div style="text-align:center;font-size:1.3rem;opacity:.35;align-self:center">→</div>

<div style="border:1px solid rgba(0,0,0,.1);border-radius:8px;padding:.75rem .9rem;font-size:.8rem">
<div style="font-weight:700;margin-bottom:.45rem;color:#10b981">The AI escalates on its own</div>
<div style="opacity:.85">Low confidence, a sensitive intent, an angry customer, or a question outside the knowledge base.</div>
</div>

<div style="text-align:center;font-size:1.3rem;opacity:.35;align-self:center">→</div>

<div style="border:1px solid rgba(0,0,0,.1);border-radius:8px;padding:.75rem .9rem;font-size:.8rem">
<div style="font-weight:700;margin-bottom:.45rem;color:#10b981">The human arrives prepared</div>
<div style="opacity:.85">Transcript, identified customer, CRM record, what the AI already tried and where it stopped.</div>
</div>

</div>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:1.1rem;font-size:.8rem">

<div style="padding:.7rem .9rem;border-radius:8px;background:rgba(0,0,0,.03)"><b>Within opening hours</b><br>Live handover in the same window; the customer keeps typing in one place.</div>

<div style="padding:.7rem .9rem;border-radius:8px;background:rgba(0,0,0,.03)"><b>Outside opening hours</b><br>The AI takes the details, confirms what happens next, and files the errand with the transcript for Monday morning.</div>

</div>

<!--
The handover is the feature that makes everything else acceptable. Staff should hear "this saves you the boring questions", not "this replaces you" - the AI only ever ends up handling what a human did not have to.
-->

---
layout: default
---

# Rollout in three phases

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:.9rem;margin-top:.5rem">

<div style="border:1px solid rgba(0,0,0,.1);border-radius:8px;padding:.8rem .9rem;font-size:.76rem">
<div style="font-size:.66rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#10b981;margin-bottom:.35rem">Phase 1 · weeks 1–4</div>
<div style="font-weight:700;font-size:.92rem;margin-bottom:.45rem">Answer from published material</div>
<ul style="margin:0;padding-left:1.05rem">
<li style="margin-bottom:.22rem">chat widget live on /kontakta-oss</li>
<li style="margin-bottom:.22rem">knowledge base from site, FAQ, terms, catalogue</li>
<li style="margin-bottom:.22rem">no personal data and no CRM access</li>
<li style="margin-bottom:.22rem">handover files a support errand</li>
</ul>

<div style="margin-top:.6rem;padding-top:.5rem;border-top:1px dashed rgba(0,0,0,.15);font-size:.7rem;opacity:.75">Gate: answer quality reviewed by your support team</div>
</div>

<div style="border:1px solid rgba(0,0,0,.1);border-radius:8px;padding:.8rem .9rem;font-size:.76rem">
<div style="font-size:.66rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#10b981;margin-bottom:.35rem">Phase 2 · weeks 5–10</div>
<div style="font-weight:700;font-size:.92rem;margin-bottom:.45rem">Know the customer</div>
<ul style="margin:0;padding-left:1.05rem">
<li style="margin-bottom:.22rem">identity check, then customer-scoped CRM reads</li>
<li style="margin-bottom:.22rem">invoice, subscription and errand status answers</li>
<li style="margin-bottom:.22rem">full audit log and retention rules</li>
<li style="margin-bottom:.22rem">staff can see and correct every answer</li>
</ul>

<div style="margin-top:.6rem;padding-top:.5rem;border-top:1px dashed rgba(0,0,0,.15);font-size:.7rem;opacity:.75">Gate: legal sign-off and a measured accuracy baseline</div>
</div>

<div style="border:1px solid rgba(0,0,0,.1);border-radius:8px;padding:.8rem .9rem;font-size:.76rem">
<div style="font-size:.66rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#10b981;margin-bottom:.35rem">Phase 3 · weeks 11+</div>
<div style="font-weight:700;font-size:.92rem;margin-bottom:.45rem">Run the queue</div>
<ul style="margin:0;padding-left:1.05rem">
<li style="margin-bottom:.22rem">skill-based routing to support and sales</li>
<li style="margin-bottom:.22rem">out-of-hours capture with clear response promises</li>
<li style="margin-bottom:.22rem">proactive follow-up on open errands</li>
<li style="margin-bottom:.22rem">continuous tuning from real transcripts</li>
</ul>

<div style="margin-top:.6rem;padding-top:.5rem;border-top:1px dashed rgba(0,0,0,.15);font-size:.7rem;opacity:.75">Gate: measurable deflection and satisfaction targets</div>
</div>

</div>

<!--
Each phase is independently useful and independently stoppable. Phase 1 carries no personal-data risk, so it is the cheap way to find out whether the answers are good enough before anyone signs a bigger contract.
-->

---
layout: default
---

# How we will know it works

<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:.8rem;margin-top:.4rem">

<div style="border:1px solid rgba(0,0,0,.1);border-radius:8px;padding:.8rem;text-align:center">
<div style="font-size:1.55rem;font-weight:800;color:#10b981;line-height:1.1">≥ 40%</div>
<div style="font-size:.72rem;opacity:.8;margin-top:.35rem;line-height:1.4">of chat conversations resolved without a human <span style="opacity:.6">(Phase 1 target)</span></div>
</div>

<div style="border:1px solid rgba(0,0,0,.1);border-radius:8px;padding:.8rem;text-align:center">
<div style="font-size:1.55rem;font-weight:800;color:#10b981;line-height:1.1">&lt; 10 s</div>
<div style="font-size:.72rem;opacity:.8;margin-top:.35rem;line-height:1.4">first response, day and night, including weekends</div>
</div>

<div style="border:1px solid rgba(0,0,0,.1);border-radius:8px;padding:.8rem;text-align:center">
<div style="font-size:1.55rem;font-weight:800;color:#10b981;line-height:1.1">24/7</div>
<div style="font-size:.72rem;opacity:.8;margin-top:.35rem;line-height:1.4">coverage of the first question — up from 45 hours a week</div>
</div>

<div style="border:1px solid rgba(0,0,0,.1);border-radius:8px;padding:.8rem;text-align:center">
<div style="font-size:1.55rem;font-weight:800;color:#10b981;line-height:1.1">0</div>
<div style="font-size:.72rem;opacity:.8;margin-top:.35rem;line-height:1.4">incorrect price or term statements in the weekly audit sample</div>
</div>

</div>

<div style="margin-top:1rem;font-size:.82rem;padding:.7rem .9rem;background:rgba(0,0,0,.03);border-radius:8px">
<b>How it is measured:</b> a pilot on a share of traffic with a control group, reviewed weekly against the same tickets your support team handles today. Deflection, first-response time, satisfaction after handover, and the share of after-hours conversations that would otherwise have waited until Monday.
</div>

<div style="margin-top:.7rem;font-size:.76rem;opacity:.7;font-style:italic">These are targets to be agreed with you, not promises — a four-week pilot exists precisely to replace them with your numbers.</div>

<!--
Do not let the numbers become the argument. The argument is coverage and consistency; the numbers are how we check the argument afterwards. Say out loud that the targets are proposals.
-->

---
layout: default
---

# What this asks of Hektor

<div style="margin-top:.4rem">

<div style="display:grid;grid-template-columns:1.8rem 1fr;gap:.7rem;padding:.5rem .6rem;border-radius:6px;font-size:.84rem">
<div style="font-weight:800;color:#10b981">1</div>
<div><b>Access to the knowledge</b><span style="display:block;opacity:.75;font-size:.78rem;margin-top:.15rem">the documents you already publish, plus a named owner inside Hektor who approves changes to what the AI may say.</span></div>
</div>

<div style="display:grid;grid-template-columns:1.8rem 1fr;gap:.7rem;padding:.5rem .6rem;border-radius:6px;font-size:.84rem;background:rgba(0,0,0,.03)">
<div style="font-weight:800;color:#10b981">2</div>
<div><b>Read-only CRM access</b><span style="display:block;opacity:.75;font-size:.78rem;margin-top:.15rem">an API, a scheduled export, or a scoped integration user — whatever your CRM supports. Read-only, customer-scoped, audited.</span></div>
</div>

<div style="display:grid;grid-template-columns:1.8rem 1fr;gap:.7rem;padding:.5rem .6rem;border-radius:6px;font-size:.84rem">
<div style="font-weight:800;color:#10b981">3</div>
<div><b>A pilot window and a control group</b><span style="display:block;opacity:.75;font-size:.78rem;margin-top:.15rem">so results are measured against your real traffic instead of our estimates.</span></div>
</div>

<div style="display:grid;grid-template-columns:1.8rem 1fr;gap:.7rem;padding:.5rem .6rem;border-radius:6px;font-size:.84rem;background:rgba(0,0,0,.03)">
<div style="font-weight:800;color:#10b981">4</div>
<div><b>Two people, part-time</b><span style="display:block;opacity:.75;font-size:.78rem;margin-top:.15rem">one from support for answer quality, one from management for decisions. No new headcount.</span></div>
</div>

</div>

<div style="margin-top:.9rem;font-size:.78rem;opacity:.72">Nothing above requires changing the website's design, the phone line, the email address, or the existing form. The chat is an additional way in.</div>

<!--
Keep this slide small on purpose. The ask is deliberately light: no new systems, no new staff, no website redesign. The two things that actually gate the project are CRM access and a person who owns the answers.
-->

---
layout: default
---

# The three objections

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin-top:1rem">

<div style="border-radius:8px;padding:.9rem 1rem;background:rgba(0,0,0,.03);border-top:4px solid #f59e0b">
<div style="font-weight:700;font-size:.88rem;margin-bottom:.5rem">"We are too small for this."</div>
<div style="font-size:.8rem;opacity:.85;line-height:1.5">Small teams feel the 123 closed hours the most. Phase 1 is one script tag and a knowledge base — no CRM and no new systems.</div>
</div>

<div style="border-radius:8px;padding:.9rem 1rem;background:rgba(0,0,0,.03);border-top:4px solid #f59e0b">
<div style="font-weight:700;font-size:.88rem;margin-bottom:.5rem">"It will make up prices."</div>
<div style="font-size:.8rem;opacity:.85;line-height:1.5">It reads prices and terms from your data and cites them; anything binding is refused and handed to a person. The weekly audit samples answers against their sources.</div>
</div>

<div style="border-radius:8px;padding:.9rem 1rem;background:rgba(0,0,0,.03);border-top:4px solid #f59e0b">
<div style="font-weight:700;font-size:.88rem;margin-bottom:.5rem">"We already have support."</div>
<div style="font-size:.8rem;opacity:.85;line-height:1.5">Support keeps every conversation that needs judgement. The AI takes the ones that need a lookup — and hands over with the transcript already written.</div>
</div>

</div>

<!--
Answer these before they are asked. The middle one is the real objection in a telecom - commercial accuracy. The answer is not "the model is good", it is "the model is not the source of the price".
-->

---
layout: center
class: text-center
---

# Next step: a four-week pilot

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin-top:1.2rem;text-align:left">

<div style="font-size:.84rem;padding:.8rem .9rem;border-radius:8px;background:rgba(16,185,129,.07)">
<div style="font-weight:700;color:#10b981;margin-bottom:.35rem">Weeks 1–2</div>
Build the knowledge base from your published material and stand the widget up on /kontakta-oss.
</div>

<div style="font-size:.84rem;padding:.8rem .9rem;border-radius:8px;background:rgba(16,185,129,.07)">
<div style="font-weight:700;color:#10b981;margin-bottom:.35rem">Weeks 3–4</div>
Run it on a share of traffic, with your support team reviewing answers daily.
</div>

<div style="font-size:.84rem;padding:.8rem .9rem;border-radius:8px;background:rgba(16,185,129,.07)">
<div style="font-weight:700;color:#10b981;margin-bottom:.35rem">Day 28</div>
A one-page result: what it answered, what it escalated, what it got wrong, and what Phase 2 would cost.
</div>

</div>

<div style="margin-top:2rem;font-size:.95rem;padding:.9rem 1.2rem;border:1px solid rgba(16,185,129,.5);border-radius:8px;display:inline-block">
What we need to start: <b>a yes to the pilot</b>, access to the published material, and one contact person at Hektor.
</div>

<!--
End on the smallest possible yes. Not "approve the project" - approve four weeks and a measurement. Everything after that is a decision you make with real data in front of you.
-->

---
layout: default
---

# Appendix: how this deck was made

<div style="display:grid;grid-template-columns:1.15fr 1fr;gap:1.8rem;font-size:.84rem;margin-top:.4rem">

<div>

**Built with Slidev, driven by an MCP server**

- the deck is plain markdown — versionable, reviewable, diffable
- an MCP client inside the agent harness rendered, hosted and exported it
- every slide was screenshot-reviewed before being called done

</div>

<div>

**Tools used**

`render_slides` · `export_slides` · `screenshot_slides`

`list_session_slides` · `list_themes` · `browse_themes`

`get_theme` · `get_slidev_guide`

</div>

</div>

<div style="margin-top:1.2rem;padding:.8rem 1.1rem;border-left:4px solid #10b981;background:rgba(16,185,129,.08);font-size:.88rem">
The same pattern — retrieve, answer, cite, escalate — is what would run inside the chat window on your own site.
</div>

<!--
Optional closing slide. Use it if the audience is technical, skip it if not - it is the only slide that talks about our tooling instead of their customer service.
-->
