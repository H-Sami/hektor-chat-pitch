# Demo script — Hektor AI chat agent

A spoken script for the pitch. Target: **12 minutes of talking plus questions**, 18 slides.
Timings assume you present from the hosted Slidev URL and press `f` for fullscreen.

---

## Before you start

- Open the hosted URL, press `f`, check that the demo image on slide 4 renders.
- Have `mockup/index.html` open in a second tab. Click the launcher so the chat is on screen
  before you begin; the widget is a scripted mockup, not a live model.
- Know your numbers: **45 open hours out of 168**, so **123 hours a week** with no live channel.
- Decide your answer to "what does it cost" before the meeting. Nothing in the deck answers it.

---

## The script

### 0:00 — Slide 1, title
> "Tack för att ni tar er tid. Jag vill prata om en sak: vad som händer när en kund försöker
> nå er utanför kontorstid. Jag har tittat på er sajt, och jag tror det finns en ganska
> enkel möjlighet här."

Switch to English if the room prefers it — the deck is in English.

### 0:45 — Slide 2, the status quo
> "Idag finns tre vägar in: formuläret, support@hektormobil.se och telefonnumret. Alla tre
> är bra. Men de är bemannade 08–17, måndag till fredag, med lunchstängt. Det är 45 timmar
> av veckans 168. I 123 timmar i veckan finns ingen som svarar direkt.
>
> Om en kund ringer på fredag kväll och mobilen har slutat fungera, vad gör hen då? Oftast
> ställer hen en fråga som ni redan har svaret på — det ligger på er egen sajt."

**Do not** say the form is bad. Say it is one channel, and it is closed most of the week.

### 1:45 — Slide 3, the idea
> "Förslaget är enkelt: en chatt på kontakta-oss-sidan. En AI-assistent som svarar direkt —
> dygnet runt — utifrån ert eget material: sajten, FAQ:n, villkoren, tjänstekatalogen. Och
> utifrån CRM:et när kunden är identifierad, så att svaret handlar om just deras abonnemang.
>
> Och så fort den är osäker, eller kunden ber om en människa, tar en kollega över i samma
> fönster — med hela konversationen framför sig."

### 2:45 — Slide 4, what it looks like
> "Det här är en mockup, inte en färdig produkt — jag vill vara tydlig med det.
>
> Kunden frågar varför första fakturan är högre. Assistenten svarar med 299 kronor i
> startavgift, och visar varifrån svaret kommer. Sedan frågar kunden om den kan delas upp
> på två betalningar — och där stannar AI:n. Den säger: det är en betalningsuppgörelse, det
> vill jag inte avgöra själv, jag kopplar dig till en kollega.
>
> Det där är hela poängen. Den svarar på det den får svara på, och lämnar över resten."

### 4:00 — Slide 5, three conversations
> "Det här är egentligen tre olika funktioner i samma fönster. Självservice för befintliga
> kunder. Säljstöd för nya kunder — en nyfiken kund som får svar klockan 22 är en varmare
> lead än en formulärrad. Och triage: kunder som behöver en människa hamnar rätt direkt."

### 5:00 — Slide 6, architecture
> "Arkitekturen på tiotusentals meters höjd. Längst upp widgeten på er sida — ett script,
> inget mer. Sedan en gateway som håller koll på session, identitet, samtycke och loggning.
> I mitten agenten, med tre verktyg: orkestreringen, kunskapsbasen och CRM-kopplingen.
> Och sist människorna — support och sälj, i samma fönster.
>
> Det viktiga: allt AI:n får se är ett beslut vi fattar explicit i det mittersta lagret.
> Det finns ingen del av det här som har obegränsad tillgång till något."

### 6:00 — Slide 7, one question end to end
> "Steg 4a och 4b är skillnaden mellan en generisk chatbot och det här. 4a: svaret byggs
> från era egna dokument. 4b: kundspecifika fakta läggs till — men bara efter identifiering
> och samtycke. Steg 5 är där förtroendet skyddas: låg konfidens går till en människa i
> stället för att gissa. Och steg 6: allt loggas."

### 7:00 — Slide 8, where the knowledge comes from
> "Notera uppdelningen. Vänsterspalten är sådant ni redan publicerar. Den ensam svarar på
> en stor del av det som kommer in i dag. Det är därför fas 1 kan köras utan någon
> personuppgiftsrisk alls."

### 7:45 — Slide 9, a real example
> Walk the four bubbles out loud. Land on: *"Första svaret är rutin, publicerat och citerat.
> Andra svaret är kommersiellt känsligt — och där beslutar inte AI:n."*

### 8:30 — Slide 10, the trust layer
> Read the five rules. Then: *"De här fem är svaret på frågan 'vad händer om den säger fel'.
> Och de är policy, inte kod — ni ska kunna strama åt dem utan en release."*

### 9:15 — Slide 11, data protection
> *"Det här är Sverige och det är telekom. Så det här är en designfråga, inte en slide.
> Hektor är personuppgiftsansvarig, vi är personuppgiftsbiträde. Identitet är grinden:
> inget kundnummer, ingen verifierad uppgift — ingen CRM-data, oavsett vad kunden påstår."*

### 10:00 — Slides 12–14
Handover, rollout, KPIs. For the KPIs, say the caveat out loud:
> "De här siffrorna är förslag, inte löften. En fyraveckorspilot finns just för att byta ut
> dem mot era riktiga tal."

### 11:00 — Slides 15–17
> "Vad vi behöver: tillgång till era publicerade dokument, läsrättighet mot CRM:et, ett
> pilotfönster, och två personer på deltid. Inga nya system, ingen ny personal, ingen
> redesign av sajten.
>
> Och det jag ber om i dag är inte ett ja till projektet. Det är ett ja till fyra veckor
> och en mätning."

---

## Objection handling

| They say | You say |
|---|---|
| "We already answer these questions by email." | "You do — that is exactly why the answers exist. The chat just makes them instant and free to deliver. Nothing is removed." |
| "Our customers want to talk to a person." | "Some do, and they get one with one click. The question is what happens to the ones who would rather not wait until Monday." |
| "How do we know it won't say something wrong about prices?" | "It does not know prices. It reads them from your data and shows the source. Anything binding is refused and handed to a human — you saw that in the demo." |
| "What does it cost?" | Be honest: give a pilot price for the four weeks and say Phase 2 depends on what the pilot measures. Never improvise an ROI number. |
| "Is our customer data safe?" | "You stay controller, we are a processor under a DPA. The assistant sees one customer at a time, identity is the gate, everything is logged, and retention is your decision." |
| "Can our site even do this?" | "That is question one for your web platform — one script on the contact page. I would like to confirm it with whoever manages one.com for you before we go further." |
| "Why not just use ChatGPT?" | "Because ChatGPT does not know your tariffs, your binding periods or your customers — and it cannot hand over to your support team with the transcript attached." |

## If the demo breaks

- The hosted URL needs internet. If it fails, present from the exported PDF.
- If someone asks to try the chat: open `mockup/index.html`. Say plainly that it is a
  scripted prototype, then offer the pilot as the way to try the real thing.
