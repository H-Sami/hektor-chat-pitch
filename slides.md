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

<div style="margin-top:.8rem;font-size:.95rem;opacity:.75">Answers in seconds, knows your services, hands over to your staff when it should.</div>

<div style="margin-top:2.2rem;font-size:.7rem;opacity:.5;letter-spacing:.08em;text-transform:uppercase">Architecture and pilot proposal · Management briefing</div>

<!--
Open with the problem, not the technology. Today a customer can reach Hektor by filling in a form or calling, and both close at 17:00. We want to put an AI agent in the chat window that answers from Hektor's own material, and keep your staff in control of anything that matters.
-->

---
layout: default
---

# Today: one door, and it is often shut

<div style="display:grid;grid-template-columns:1.15fr 1fr;gap:2rem;margin-top:.6rem">

<div>

**How customers reach you**

- The <b>kontakta-oss</b> form: *"Fyll i formuläret så kontaktar vi dig under dagen"*
- <b>support@hektormobil.se</b><span style="font-size:.68rem;opacity:.5"> &nbsp;(e-post)</span>
- <b>070-100 01 00</b>

</div>

<div>

**When you are open**

| | |
|---|---|
| Måndag - Fredag | 08:00 - 17:00 |
| Lunchstängt | 12:00 - 13:00 |
| Lördag - Söndag | Stängt |

**That is 45 hours out of 168.**

</div>

</div>

<div style="margin-top:1.4rem;padding:.9rem 1.1rem;border-left:4px solid #10b981;background:rgba(16,185,129,.08);font-size:.95rem">
Someone whose mobile stopped working on Friday evening waits until Monday morning. The question they wanted to ask is probably one you already answer on the site.
</div>

<!--
Be fair to the form. It does its job when someone is there to read it. But it is the only way in, it is staffed 45 hours a week, and it makes the customer do the waiting. The other 123 hours are when people are most likely to look at a competitor.
-->

---
layout: center
class: text-center
---

# The idea

<div style="margin-top:1rem;font-size:1.15rem;line-height:1.8;max-width:46rem;margin-left:auto;margin-right:auto">

A chat window on <span style="color:#10b981;font-weight:600">/kontakta-oss</span>.

An AI agent answers right away from <span style="color:#10b981;font-weight:600">Hektor's own material</span>: the website, the FAQ, the terms and your service catalogue. When the customer is identified it can also read <span style="color:#10b981;font-weight:600">their record in your CRM</span>.

If it is unsure, or the customer asks for a person, <span style="color:#10b981;font-weight:600">a human takes over in the same window</span>, with the whole conversation already in front of them.

</div>

<!--
Three things in one: instant answers, answers grounded in Hektor's facts, and a human one click away. The form, the phone line and the email address all stay exactly as they are. This is another way in, not a replacement.
-->

---
layout: default
---

# What it looks like

<div style="display:grid;grid-template-columns:1.1fr 1fr;gap:2rem;align-items:start;margin-top:.2rem">

<div>
<img src="/images/panel-tight.jpg" alt="Chat window with a sourced answer and a handover to a human" style="display:block;width:auto;height:auto;max-width:100%;max-height:25.8rem;border-radius:12px;box-shadow:0 5px 18px rgba(0,0,0,.18)" />
</div>

<div style="font-size:.88rem">

Customer types a question. The answer is backed by a source, and the price comes from Hektor's own documents rather than from the model's memory.

When the question turns into a payment arrangement, the AI declines to decide. It hands over, and the transcript follows.

**What the customer gets**

- an answer in seconds, with the source it came from
- one visible **"Prata med en människa"** button

**What your staff get**

- the full transcript, not a bare form submission
- the identified customer and what the AI already tried

</div>

</div>

<div style="margin-top:.7rem;font-size:.8rem;opacity:.75">A mockup with invented customer data, not a screenshot of a finished product. The phone line, the form and the email address stay as they are.</div>

<!--
Say plainly that this is a mockup and the customer data is invented. Walk the panel top to bottom: the question, the answer with its source, then the handover card. Then go to the live mockup in the browser if the room wants to click it themselves. The refusal in the last message is the safety behaviour, and it is the part management should notice.
-->

---
layout: default
---

# Three conversations, one window

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin-top:.5rem">

<div style="border:1px solid rgba(0,0,0,.1);border-top:4px solid #10b981;border-radius:8px;padding:.9rem 1rem;font-size:.8rem">
<div style="font-weight:700;font-size:.72rem;letter-spacing:.04em;text-transform:uppercase;opacity:.6;margin-bottom:.5rem">1 · Existing customer</div>
<div style="font-style:italic;opacity:.85;margin-bottom:.6rem">"Why is my first invoice higher than the plan price?"</div>
The AI answers from the published FAQ, pro-rata month plus the 299 kr start fee, and cites the page. <b>No human needed.</b>
</div>

<div style="border:1px solid rgba(0,0,0,.1);border-top:4px solid #10b981;border-radius:8px;padding:.9rem 1rem;font-size:.8rem">
<div style="font-weight:700;font-size:.72rem;letter-spacing:.04em;text-transform:uppercase;opacity:.6;margin-bottom:.5rem">2 · New customer</div>
<div style="font-style:italic;opacity:.85;margin-bottom:.6rem">"I need mobile broadband for a summer house. What do you have?"</div>
It asks about coverage and usage, answers from the service catalogue and offers to put them through to sales. <b>A warmer lead than a form row.</b>
</div>

<div style="border:1px solid rgba(0,0,0,.1);border-top:4px solid #10b981;border-radius:8px;padding:.9rem 1rem;font-size:.8rem">
<div style="font-weight:700;font-size:.72rem;letter-spacing:.04em;text-transform:uppercase;opacity:.6;margin-bottom:.5rem">3 · Needs a person</div>
<div style="font-style:italic;opacity:.85;margin-bottom:.6rem">"I want to cancel and dispute last month's charge."</div>
It does not argue and does not decide. It confirms the request, checks opening hours and passes the case to support with the transcript. <b>A handover, not a dead end.</b>
</div>

</div>

<!--
Three examples because the AI does three different jobs: self-service, sales qualification, and triage. Only the first is about saving time. The second is about revenue. The third is about not damaging trust.
-->

---
layout: default
---

# Architecture, from 10,000 metres

<div style="margin-top:.4rem">

<div style="display:grid;grid-template-columns:7rem 1fr;gap:.8rem;align-items:center;margin-bottom:.55rem">
<div style="font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:.07em;opacity:.55">1 · Customer</div>
<div style="border:1px solid rgba(0,0,0,.12);border-radius:7px;padding:.5rem .7rem;font-size:.76rem;background:rgba(16,185,129,.05)">Chat widget on <b>/kontakta-oss</b>. One script tag, inherits the look of the site, works on mobile</div>
</div>

<div style="display:grid;grid-template-columns:7rem 1fr;gap:.8rem;align-items:center;margin-bottom:.55rem">
<div style="font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:.07em;opacity:.55">2 · Gateway</div>
<div style="border:1px solid rgba(0,0,0,.12);border-radius:7px;padding:.5rem .7rem;font-size:.76rem;background:rgba(16,185,129,.05)">Session, identity, consent, rate limiting, audit log</div>
</div>

<div style="display:grid;grid-template-columns:7rem 1fr 1fr 1fr;gap:.6rem;align-items:stretch;margin-bottom:.55rem">
<div style="font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:.07em;opacity:.55;align-self:center">3 · Agent</div>
<div style="border:1px solid rgba(0,0,0,.12);border-radius:7px;padding:.5rem .7rem;font-size:.76rem;background:rgba(16,185,129,.05)"><b>Orchestrator</b><br><span style="opacity:.6">tools, guardrails, escalation rules</span></div>
<div style="border:1px solid rgba(0,0,0,.12);border-radius:7px;padding:.5rem .7rem;font-size:.76rem;background:rgba(16,185,129,.05)"><b>Knowledge base</b><br><span style="opacity:.6">site, FAQ, terms, catalogue (RAG)</span></div>
<div style="border:1px solid rgba(0,0,0,.12);border-radius:7px;padding:.5rem .7rem;font-size:.76rem;background:rgba(16,185,129,.05)"><b>Model API</b><br><span style="opacity:.6">your provider, your key</span></div>
</div>

<div style="display:grid;grid-template-columns:7rem 1fr;gap:.8rem;align-items:center;margin-bottom:.55rem">
<div style="font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:.07em;opacity:.55">4 · People</div>
<div style="border:1px solid rgba(0,0,0,.12);border-radius:7px;padding:.5rem .7rem;font-size:.76rem;background:rgba(16,185,129,.05)">Support and sales live-chat inbox. A human takes over in the same window</div>
</div>

</div>

<div style="margin-top:.7rem;font-size:.78rem;opacity:.7">Every part can be replaced on its own. None of it requires changing how Hektor works today.</div>

<!--
Four layers, no vendor names. Two things management needs from this slide: the widget is a small addition to a page that already exists, and everything the AI may look at is a decision we write down in layer 3. Nothing here has open access to anything.
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
<div><b>Orchestrator</b> works out what is being asked and which tools it is allowed to use</div>
</div>

<div style="display:grid;grid-template-columns:2.6rem 1fr;gap:.8rem;align-items:center;padding:.42rem .6rem;border-radius:6px;font-size:.84rem;background:rgba(16,185,129,.08)">
<div style="font-weight:700;color:#10b981;font-size:.8rem">4a</div>
<div><b>Knowledge base</b> fetches the passages that back up an answer, from Hektor's own documents</div>
</div>

<div style="display:grid;grid-template-columns:2.6rem 1fr;gap:.8rem;align-items:center;padding:.42rem .6rem;border-radius:6px;font-size:.84rem;background:rgba(16,185,129,.08)">
<div style="font-weight:700;color:#10b981;font-size:.8rem">4b</div>
<div><b>CRM connector</b> adds facts about this customer, and only after identification and consent</div>
</div>

<div style="display:grid;grid-template-columns:2.6rem 1fr;gap:.8rem;align-items:center;padding:.42rem .6rem;border-radius:6px;font-size:.84rem">
<div style="font-weight:700;color:#10b981;font-size:.8rem">5</div>
<div><b>Answer</b> is put together with its sources. Low confidence, or a sensitive question, goes to a human instead</div>
</div>

<div style="display:grid;grid-template-columns:2.6rem 1fr;gap:.8rem;align-items:center;padding:.42rem .6rem;border-radius:6px;font-size:.84rem;background:rgba(0,0,0,.03)">
<div style="font-weight:700;color:#10b981;font-size:.8rem">6</div>
<div><b>Everything is logged</b>: question, sources, answer, confidence, handover</div>
</div>

</div>

<!--
Stay on this slide. Steps 4a and 4b are the whole difference between a generic chatbot and what we are proposing. Step 5 is where trust is protected. Step 6 is what makes it defensible in an audit or a dispute.
-->

---
layout: default
---

# Where the answers come from

<div style="display:grid;grid-template-columns:1fr 1fr;gap:1.8rem;font-size:.85rem;margin-top:.4rem">

<div>

**Public information, no personal data**

- hektormobil.se: plans, coverage, the Tele2 network, 5G, VoLTE, WiFi calling
- the FAQ on /kontakta-oss: first invoice, network, VoLTE, WiFi calling, feedback
- Allmänna villkor, the cookie and privacy policies, the withdrawal form
- support hours and the escalation rules themselves

</div>

<div>

**Customer information, only for the customer in the chat**

- subscription and plan, binding period, monthly cost
- invoice and payment status, first-invoice start fees
- open support errands and earlier contacts
- nothing outside the record of the customer in the conversation

</div>

</div>

<div style="margin-top:1.2rem;padding:.8rem 1.1rem;border-left:4px solid #10b981;background:rgba(16,185,129,.08);font-size:.88rem">
The left column alone answers a big share of what lands in the inbox today. The right column is what makes an answer about <i>them</i> instead of about <i>the product</i>.
</div>

<!--
Note the split. The first version of this only needs the left column, which is material Hektor already publishes. That version carries no personal-data risk, which is why it can go live early and be judged on answer quality alone.
-->

---
layout: default
---

# How the AI is powered

<div style="margin-top:.5rem;font-size:.86rem;opacity:.85">The model is a service we call, the same way you would call any other API. You choose who provides it.</div>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:1.8rem;font-size:.85rem;margin-top:.9rem">

<div>

**Your choice, your account**

- You buy the API key. OpenAI, Anthropic, Google, Mistral, or an EU-hosted provider
- Hektor's own account with that provider, billed directly by them. We add nothing on top
- The key stays in a secret store on your side and can be rotated or revoked at any time
- If you are not happy with the models, we change provider without touching the rest of the system

</div>

<div>

**What we set up and run**

- the agent, the knowledge base and the guardrails around them
- model and cost controls: which model answers what, and a monthly token ceiling
- a fallback provider, so one outage does not take the chat down
- the quality review loop, so a model swap is measured before it goes live

</div>

</div>

<div style="margin-top:1.3rem;padding:.8rem 1.1rem;border-left:4px solid #10b981;background:rgba(16,185,129,.08);font-size:.88rem">
No lock-in at either end. The provider can be swapped, and the agent can be switched off, without rebuilding anything else.
</div>

<!--
This is the slide for whoever signs the contracts. Two points to land: Hektor owns the relationship with the model provider, and the rest of the system does not care which provider it is. If they would rather run an open model on their own hardware, the architecture allows it, but that is a bigger piece of work and it is not what we recommend to start.
-->

---
layout: default
---

# Keeping it on the rails

<div style="margin-top:.5rem">

<div style="font-size:.84rem;padding:.55rem .85rem;margin-bottom:.45rem;border-left:3px solid #10b981;background:rgba(0,0,0,.03);border-radius:0 6px 6px 0"><b>Every claim points at a document.</b> If there is no source in the knowledge base, there is no answer.</div>

<div style="font-size:.84rem;padding:.55rem .85rem;margin-bottom:.45rem;border-left:3px solid #10b981;background:rgba(0,0,0,.03);border-radius:0 6px 6px 0"><b>Rules beat the model.</b> Prices, terms, legal text and campaign conditions are read from Hektor's data, never written from memory.</div>

<div style="font-size:.84rem;padding:.55rem .85rem;margin-bottom:.45rem;border-left:3px solid #10b981;background:rgba(0,0,0,.03);border-radius:0 6px 6px 0"><b>Unsure means stop.</b> Below a confidence threshold, or on a sensitive question, it escalates instead of guessing.</div>

<div style="font-size:.84rem;padding:.55rem .85rem;margin-bottom:.45rem;border-left:3px solid #10b981;background:rgba(0,0,0,.03);border-radius:0 6px 6px 0"><b>Nothing irreversible.</b> No cancellations, no binding changes, no commitments, no payments without a person.</div>

<div style="font-size:.84rem;padding:.55rem .85rem;margin-bottom:.45rem;border-left:3px solid #10b981;background:rgba(0,0,0,.03);border-radius:0 6px 6px 0"><b>It does not promise a colleague who is not there.</b> Handover happens only when someone is actually available. Otherwise it takes the details and says when you will get back.</div>

</div>

<!--
These five rules are the answer to "what if it says something wrong". They are policy, not code. Your staff should be able to tighten or loosen any of them without waiting for a release.
-->

---
layout: default
---

# Data protection and identity

<div style="display:grid;grid-template-columns:1fr 1fr;gap:1.8rem;font-size:.84rem;margin-top:.4rem">

<div>

**Built in from the start**

- Hektor stays the data controller, the supplier is the processor under a data processing agreement
- a lawful basis is recorded for each purpose, and the privacy policy is updated for chat
- the AI sees only the record of the customer it is talking to
- personal data is masked before it reaches the model where it is not needed

</div>

<div>

**Controlled and provable**

- identity is established before any account detail is shown
- transcripts and decisions are kept for audit and dispute handling
- retention and deletion rules are set by Hektor, not by us
- sales conversations are handled as marketing, service conversations as support

</div>

</div>

<div style="margin-top:1.1rem;padding:.8rem 1.1rem;border-left:4px solid #10b981;background:rgba(16,185,129,.08);font-size:.88rem">
Identity is the gate. No customer number or verified phone number means no CRM data, whatever the customer claims in the chat.
</div>

<!--
Swedish customers will ask about this, and a telecom handles personal data all day. The line that matters is the last one: the AI never decides whether someone is who they say they are. Identity comes from your systems or from a verified phone number, not from a claim typed into a chat.
-->

---
layout: default
---

# When a human takes over

<div style="display:grid;grid-template-columns:1fr 2rem 1fr 2rem 1fr;align-items:stretch;gap:.4rem;margin-top:.4rem">

<div style="border:1px solid rgba(0,0,0,.1);border-radius:8px;padding:.75rem .9rem;font-size:.8rem">
<div style="font-weight:700;margin-bottom:.45rem;color:#10b981">The customer asks for a person</div>
<div style="opacity:.85">One button, always visible. No "are you sure" loop and no attempt to talk them out of it.</div>
</div>

<div style="text-align:center;font-size:1.3rem;opacity:.35;align-self:center">→</div>

<div style="border:1px solid rgba(0,0,0,.1);border-radius:8px;padding:.75rem .9rem;font-size:.8rem">
<div style="font-weight:700;margin-bottom:.45rem;color:#10b981">The AI escalates on its own</div>
<div style="opacity:.85">Low confidence, a sensitive question, an angry customer, or something the knowledge base does not cover.</div>
</div>

<div style="text-align:center;font-size:1.3rem;opacity:.35;align-self:center">→</div>

<div style="border:1px solid rgba(0,0,0,.1);border-radius:8px;padding:.75rem .9rem;font-size:.8rem">
<div style="font-weight:700;margin-bottom:.45rem;color:#10b981">The human arrives prepared</div>
<div style="opacity:.85">Transcript, identified customer, CRM record, what the AI already tried and where it stopped.</div>
</div>

</div>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:1.1rem;font-size:.8rem">

<div style="padding:.7rem .9rem;border-radius:8px;background:rgba(0,0,0,.03)"><b>During opening hours</b><br>Live handover in the same window. The customer keeps typing in one place.</div>

<div style="padding:.7rem .9rem;border-radius:8px;background:rgba(0,0,0,.03)"><b>Outside opening hours</b><br>The AI takes the details, says what happens next, and files the errand with the transcript for the morning.</div>

</div>

<!--
The handover is what makes the rest acceptable. Staff should hear "this takes the boring questions off you", not "this replaces you". The AI only ever ends up with conversations a human did not have to have.
-->

---
layout: default
---

# What we need from Hektor

<div style="margin-top:.4rem">

<div style="display:grid;grid-template-columns:1.8rem 1fr;gap:.7rem;padding:.5rem .6rem;border-radius:6px;font-size:.84rem">
<div style="font-weight:800;color:#10b981">1</div>
<div><b>The material the AI may use</b><span style="display:block;opacity:.75;font-size:.78rem;margin-top:.15rem">the documents you already publish, plus one named person at Hektor who approves changes to what the AI is allowed to say.</span></div>
</div>

<div style="display:grid;grid-template-columns:1.8rem 1fr;gap:.7rem;padding:.5rem .6rem;border-radius:6px;font-size:.84rem;background:rgba(0,0,0,.03)">
<div style="font-weight:800;color:#10b981">2</div>
<div><b>Read-only CRM access</b><span style="display:block;opacity:.75;font-size:.78rem;margin-top:.15rem">an API, a scheduled export, or a scoped integration user, whichever your CRM supports. Read-only, limited to the customer in the chat, fully logged.</span></div>
</div>

<div style="display:grid;grid-template-columns:1.8rem 1fr;gap:.7rem;padding:.5rem .6rem;border-radius:6px;font-size:.84rem">
<div style="font-weight:800;color:#10b981">3</div>
<div><b>A model provider</b><span style="display:block;opacity:.75;font-size:.78rem;margin-top:.15rem">the API key and the account. You pick the provider and you hold the contract.</span></div>
</div>

<div style="display:grid;grid-template-columns:1.8rem 1fr;gap:.7rem;padding:.5rem .6rem;border-radius:6px;font-size:.84rem;background:rgba(0,0,0,.03)">
<div style="font-weight:800;color:#10b981">4</div>
<div><b>Two people, part-time</b><span style="display:block;opacity:.75;font-size:.78rem;margin-top:.15rem">one from support for answer quality, one from management for decisions. No new headcount.</span></div>
</div>

</div>

<div style="margin-top:.9rem;font-size:.78rem;opacity:.72">Nothing here means changing the website's design, the phone line, the email address or the existing form. The chat is one more way in.</div>

<!--
Keep this slide small on purpose. The ask is deliberately light: no new systems, no new staff, no redesign. The two things that actually gate the project are CRM access and one person who owns the answers.
-->

---
layout: default
---

# How we will know it works

<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:.8rem;margin-top:.4rem">

<div style="border:1px solid rgba(0,0,0,.1);border-radius:8px;padding:.8rem;text-align:center">
<div style="font-size:1.55rem;font-weight:800;color:#10b981;line-height:1.1">≥ 40%</div>
<div style="font-size:.72rem;opacity:.8;margin-top:.35rem;line-height:1.4">of chat conversations finished without a human</div>
</div>

<div style="border:1px solid rgba(0,0,0,.1);border-radius:8px;padding:.8rem;text-align:center">
<div style="font-size:1.55rem;font-weight:800;color:#10b981;line-height:1.1">&lt; 10 s</div>
<div style="font-size:.72rem;opacity:.8;margin-top:.35rem;line-height:1.4">to a first answer, at any hour, including weekends</div>
</div>

<div style="border:1px solid rgba(0,0,0,.1);border-radius:8px;padding:.8rem;text-align:center">
<div style="font-size:1.55rem;font-weight:800;color:#10b981;line-height:1.1">24/7</div>
<div style="font-size:.72rem;opacity:.8;margin-top:.35rem;line-height:1.4">something answers the first question, up from 45 hours a week</div>
</div>

<div style="border:1px solid rgba(0,0,0,.1);border-radius:8px;padding:.8rem;text-align:center">
<div style="font-size:1.55rem;font-weight:800;color:#10b981;line-height:1.1">0</div>
<div style="font-size:.72rem;opacity:.8;margin-top:.35rem;line-height:1.4">wrong prices or terms in the weekly audit sample</div>
</div>

</div>

<div style="margin-top:1rem;font-size:.82rem;padding:.7rem .9rem;background:rgba(0,0,0,.03);border-radius:8px">
<b>How it is measured:</b> a pilot on a share of your traffic, reviewed every week against the same tickets support handles today. Deflection, first-response time, satisfaction after a handover, and how many after-hours conversations would otherwise have waited until Monday.
</div>

<div style="margin-top:.7rem;font-size:.76rem;opacity:.7;font-style:italic">These are targets for us to agree with you, not promises. The pilot exists to replace them with your numbers.</div>

<!--
Do not let the numbers become the argument. The argument is coverage and consistency. The numbers are how we check afterwards whether the argument held. Say out loud that the targets are proposals.
-->

---
layout: default
---

# The three objections

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin-top:1rem">

<div style="border-radius:8px;padding:.9rem 1rem;background:rgba(0,0,0,.03);border-top:4px solid #f59e0b">
<div style="font-weight:700;font-size:.88rem;margin-bottom:.5rem">"We are too small for this."</div>
<div style="font-size:.8rem;opacity:.85;line-height:1.5">A small team feels those 123 closed hours the most. The first version is a chat widget and a knowledge base. No CRM, no new systems.</div>
</div>

<div style="border-radius:8px;padding:.9rem 1rem;background:rgba(0,0,0,.03);border-top:4px solid #f59e0b">
<div style="font-weight:700;font-size:.88rem;margin-bottom:.5rem">"It will make up prices."</div>
<div style="font-size:.8rem;opacity:.85;line-height:1.5">It reads prices and terms from your data and cites where they came from. Anything binding it refuses and hands over. The weekly audit checks answers against their sources.</div>
</div>

<div style="border-radius:8px;padding:.9rem 1rem;background:rgba(0,0,0,.03);border-top:4px solid #f59e0b">
<div style="font-weight:700;font-size:.88rem;margin-bottom:.5rem">"We already have support."</div>
<div style="font-size:.8rem;opacity:.85;line-height:1.5">Support keeps every conversation that needs judgement. The AI takes the ones that need a lookup, and hands over with the transcript already written.</div>
</div>

</div>

<!--
Answer these before they are asked. The middle one is the real objection in a telecom, because a wrong price is a commercial problem, not a technical one. The answer is not "the model is good". It is "the model is not where the price comes from".
-->

---
layout: center
class: text-center
---

# Next step: a measured pilot

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin-top:1.2rem;text-align:left">

<div style="font-size:.84rem;padding:.8rem .9rem;border-radius:8px;background:rgba(16,185,129,.07)">
<div style="font-weight:700;color:#10b981;margin-bottom:.35rem">Start with answers</div>
Build the knowledge base from your published material, put the widget on /kontakta-oss, and let your support team judge the answers.
</div>

<div style="font-size:.84rem;padding:.8rem .9rem;border-radius:8px;background:rgba(16,185,129,.07)">
<div style="font-weight:700;color:#10b981;margin-bottom:.35rem">Then add the customer</div>
Turn on identity and read-only CRM lookups once the answers are good enough and legal has signed off.
</div>

<div style="font-size:.84rem;padding:.8rem .9rem;border-radius:8px;background:rgba(16,185,129,.07)">
<div style="font-weight:700;color:#10b981;margin-bottom:.35rem">Then look at the numbers</div>
One page: what it answered, what it escalated, what it got wrong, and what the next step would cost.
</div>

</div>

<div style="margin-top:2rem;font-size:.95rem;padding:.9rem 1.2rem;border:1px solid rgba(16,185,129,.5);border-radius:8px;display:inline-block">
What we need to start: <b>a yes to the pilot</b>, the published material, and one contact person at Hektor.
</div>

<!--
End on the smallest possible yes. Not "approve the project", but "run it and measure it". Everything after that is a decision they make with real data in front of them.
-->
