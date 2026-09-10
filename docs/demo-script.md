# Demo script - Hektor AI chat agent

A spoken script for the pitch. Target: **12 minutes of talking plus questions**, 16 slides.
Timings assume you present from the hosted Slidev URL and press `f` for fullscreen.

---

## Before you start

- Open the hosted URL, press `f`, and check that the chat image on slide 4 renders.
- Have `mockup/index.html` open in a second tab. Click the launcher so the chat is on screen
  before you begin. The widget is a scripted mockup, not a live model.
- Know your numbers: **45 open hours out of 168**, so **123 hours a week** with no live channel.
- Decide your answer to "what does it cost" before the meeting. Nothing in the deck answers it.

---

## The script

### 0:00 - Slide 1, title
> "Tack för att ni tar er tid. Jag vill prata om en sak: vad som händer när en kund försöker
> nå er utanför kontorstid. Jag har tittat på er sajt, och jag tror det finns en ganska
> enkel möjlighet här."

Switch to English if the room prefers it. The deck is in English.

### 0:45 - Slide 2, the status quo
> "Idag finns tre vägar in: formuläret, support@hektormobil.se och telefonnumret. Alla tre
> är bra. Men de är bemannade 08-17, måndag till fredag, med lunchstängt. Det är 45 timmar
> av veckans 168. I 123 timmar i veckan finns ingen som svarar direkt.
>
> Om en kund ringer på fredag kväll och mobilen har slutat fungera, vad gör hen då? Oftast
> ställer hen en fråga som ni redan har svaret på, och svaret ligger på er egen sajt."

**Do not** say the form is bad. Say it is one channel, and it is closed most of the week.

### 1:45 - Slide 3, the idea
> "Förslaget är enkelt: en chatt på kontakta-oss-sidan. En AI-assistent som svarar direkt,
> dygnet runt, utifrån ert eget material: sajten, FAQ:n, villkoren, tjänstekatalogen. Och
> utifrån CRM:et när kunden är identifierad, så att svaret handlar om just deras abonnemang.
>
> Och så fort den är osäker, eller kunden ber om en människa, tar en kollega över i samma
> fönster, med hela konversationen framför sig."

### 2:45 - Slide 4, what it looks like
> "Det här är en mockup med påhittade kunduppgifter, inte en färdig produkt. Jag vill vara
> tydlig med det.
>
> Kunden frågar varför första fakturan är högre. Assistenten svarar med 299 kronor i
> startavgift och visar varifrån svaret kommer. Sedan frågar kunden om den kan delas upp
> på två betalningar, och där stannar AI:n. Den säger: det är en betalningsuppgörelse, det
> vill jag inte avgöra själv, jag kopplar dig till en kollega.
>
> Det där är hela poängen. Den svarar på det den får svara på, och lämnar över resten."

If the room is engaged, open `mockup/index.html` here and let them watch the handover happen.

### 4:00 - Slide 5, three conversations
> "Det här är egentligen tre olika funktioner i samma fönster. Självservice för befintliga
> kunder. Säljstöd för nya kunder: en nyfiken kund som får svar klockan 22 är en varmare
> lead än en formulärrad. Och triage, där kunder som behöver en människa hamnar rätt direkt."

### 5:00 - Slide 6, architecture
> "Arkitekturen på tiotusentals meters höjd. Längst upp widgeten på er sida: ett script,
> inget mer. Sedan en gateway som håller koll på session, identitet, samtycke och loggning.
> I mitten agenten, med tre delar: orkestreringen, kunskapsbasen och modell-API:t.
> Och sist människorna, support och sälj, i samma fönster.
>
> Det viktiga: allt AI:n får se är ett beslut vi fattar explicit i det mittersta lagret.
> Ingen del av det här har obegränsad tillgång till något."

### 6:00 - Slide 7, one question end to end
> "Steg 4a och 4b är skillnaden mellan en generisk chatbot och det här. 4a: svaret byggs
> från era egna dokument. 4b: kundspecifika fakta läggs till, men bara efter identifiering
> och samtycke. Steg 5 är där förtroendet skyddas: låg konfidens går till en människa i
> stället för att gissa. Och steg 6: allt loggas."

### 7:00 - Slide 8, where the answers come from
> "Notera uppdelningen. Vänsterspalten är sådant ni redan publicerar. Den ensam svarar på
> en stor del av det som kommer in i dag, och den bär ingen personuppgiftsrisk."

### 7:45 - Slide 9, how the AI is powered
> "Modellen är en tjänst vi anropar, precis som vilket API som helst, och ni väljer
> leverantör. Ni köper API-nyckeln på ert eget konto och faktureras direkt av dem. Vi lägger
> inget påslag. Nyckeln ligger i ett secret store hos er och kan roteras eller dras in när
> ni vill.
>
> Om ni inte är nöjda med modellerna byter vi leverantör utan att röra resten av systemet.
> Och om ni någon gång vill köra en öppen modell på egen hårdvara går arkitekturen med på
> det, men det är ett större projekt och inget jag rekommenderar att börja med."

Expect a procurement question here. The point to land: Hektor owns the provider relationship
and the rest of the system does not care which provider it is.

### 8:30 - Slide 10, keeping it on the rails
> Läs de fem reglerna. Sedan: *"De här fem är svaret på frågan 'vad händer om den säger fel'.
> Och de är policy, inte kod. Ni ska kunna strama åt dem utan en release."*

### 9:15 - Slide 11, data protection and identity
> *"Det här är Sverige och det är telekom, så det här är en designfråga och inte en slide.
> Hektor är personuppgiftsansvarig, vi är personuppgiftsbiträde. Identitet är grinden:
> inget kundnummer och ingen verifierad uppgift, ingen CRM-data, oavsett vad kunden påstår."*

### 10:00 - Slide 12, handover
> *"En knapp, alltid synlig. Ingen 'är du säker'-loop. Och handover sker bara när någon
> faktiskt är tillgänglig. Utanför öppettider tar AI:n uppgifterna och säger när ni hör av er."*

### 10:30 - Slide 13, what we need
> "Vad vi behöver: tillgång till era publicerade dokument, en namngiven person som äger
> svaren, läsrättighet mot CRM:et, en API-nyckel, och två personer på deltid. Inga nya
> system, ingen ny personal, ingen redesign av sajten."

### 11:00 - Slide 14, how we will know it works
Say the caveat out loud:
> "De här siffrorna är förslag, inte löften. Pilotperioden finns just för att byta ut dem
> mot era riktiga tal."

### 11:30 - Slides 15 and 16, objections and the ask
> "Och det jag ber om i dag är inte ett ja till projektet. Det är ett ja till att köra det
> och mäta det."

---

## Objection handling

| They say | You say |
|---|---|
| "We already answer these questions by email." | "You do, and that is exactly why the answers exist. The chat just makes them instant and free to deliver. Nothing is removed." |
| "Our customers want to talk to a person." | "Some do, and they get one with one click. The question is what happens to the ones who would rather not wait until Monday." |
| "How do we know it won't say something wrong about prices?" | "It does not know prices. It reads them from your data and shows the source. Anything binding is refused and handed to a human. You saw that in the demo." |
| "What does it cost?" | Be honest: give a pilot price and say the next step depends on what the pilot measures. Never improvise an ROI number. |
| "Which AI do you use, and who pays for it?" | "Whichever provider you choose. You hold the account and the API key, and you are billed by them directly. We add no markup, and the provider can be swapped without rebuilding anything." |
| "Is our customer data safe?" | "You stay controller, we are a processor under a DPA. The assistant sees one customer at a time, identity is the gate, everything is logged, and retention is your decision." |
| "Can our site even do this?" | "That is question one for your web platform: one script on the contact page. I would like to confirm it with whoever manages one.com for you before we go further." |
| "Why not just use ChatGPT?" | "Because ChatGPT does not know your tariffs, your binding periods or your customers, and it cannot hand over to your support team with the transcript attached." |

## If the demo breaks

- The hosted URL needs internet. If it fails, present from the exported PDF.
- If someone asks to try the chat: open `mockup/index.html`. Say plainly that it is a
  scripted prototype, then offer the pilot as the way to try the real thing.
