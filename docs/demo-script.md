# Demo script - Hektor Agent

A spoken script for the pitch. Target: **12 minutes of talking plus questions**, 16 slides.
Timings assume you present from the hosted Slidev URL and press `f` for fullscreen.

Everything here is aimed at a **non-technical** room. Avoid "orchestrator", "RAG", "token",
"session", "API" and "LLM" unless you immediately translate them into everyday words.

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

Switch to English if the room prefers it. The deck is in English. Say the name early: the
assistant is called the **Hektor Agent**.

### 0:45 - Slide 2, the status quo
> "Idag finns tre vägar in: formuläret, support@hektormobil.se och telefonnumret. Alla tre
> är bra. Men de är bemannade 08-17, måndag till fredag, med lunchstängt. Det är 45 timmar
> av veckans 168. I 123 timmar i veckan finns ingen som svarar direkt.
>
> Om en kund ringer på fredag kväll och mobilen har slutat fungera, vad gör hen då? Oftast
> ställer hen en fråga som ni redan har svaret på, och svaret ligger på er egen sajt."

**Do not** say the form is bad. Say it is one channel, and it is closed most of the week.

### 1:45 - Slide 3, the idea
> "Förslaget är enkelt: en chatt på kontakta-oss-sidan. Hektor Agent svarar direkt, dygnet
> runt, utifrån ert eget material: sajten, FAQ:n, villkoren, tjänstekatalogen. Och utifrån
> CRM:et när kunden är identifierad, så att svaret handlar om just deras abonnemang.
>
> Och så fort den är osäker, eller kunden ber om en människa, tar en kollega över i samma
> fönster, med hela konversationen framför sig."

### 2:45 - Slide 4, what it looks like
> "Det här är en mockup med påhittade kunduppgifter, inte en färdig produkt. Jag vill vara
> tydlig med det.
>
> Kunden frågar varför första fakturan är högre. Hektor Agent svarar med 299 kronor i
> startavgift och visar vilken sida svaret kommer från. Sedan frågar kunden om den kan delas
> upp på två betalningar, och där stannar den. Den säger: det är en betalningsuppgörelse, det
> vill jag inte avgöra själv, jag kopplar dig till en kollega.
>
> Det där är hela poängen. Den svarar på det den får svara på, och lämnar över resten."

If the room is engaged, open `mockup/index.html` here and let them watch the handover happen.

### 4:00 - Slide 5, three conversations
> "Det här är egentligen tre olika funktioner i samma fönster. Svar till befintliga kunder.
> Säljstöd för nya kunder: en nyfiken kund som får svar klockan 22 är en varmare lead än en
> formulärrad. Och sortering, där kunder som behöver en människa hamnar rätt direkt."

### 5:00 - Slide 6, how it fits together
> "Fyra delar. Kunden öppnar chatten på er sida, inget att installera. En reception som
> hälsar, kollar vem kunden är och vad de har avtalat, och för anteckningar. Hektor Agent
> själv, som förstår frågan, läser ert eget material och slår upp kundens uppgifter när
> kunden är identifierad. Och sist era medarbetare, som tar de samtal Hektor Agent inte
> kunde avsluta.
>
> Det viktiga: allt Hektor Agent får titta på är ett beslut vi skriver ner i tredje raden.
> Ingen del av det här har fri tillgång till någonting."

Do not say "gateway", "orchestrator" or "widget" here. Say reception, and say the agent.

### 6:00 - Slide 7, what happens when someone asks a question
> "Steg 4a och 4b är skillnaden mellan en generisk chattbot och det här. 4a: svaret byggs
> från era egna dokument. 4b: kundens egna uppgifter läggs till, men bara efter
> identifiering. Steg 5 är där förtroendet skyddas: är den osäker går frågan till en
> människa i stället för att gissa. Och steg 6: allt sparas."

### 7:00 - Slide 8, where the answers come from
> "Notera uppdelningen. Vänsterspalten är sådant ni redan publicerar. Den ensam svarar på
> en stor del av det som kommer in i dag, och den bär ingen personuppgiftsrisk."

### 7:45 - Slide 9, how the Hektor Agent is powered
> "Att formulera svaren kräver en språkmodell, ungefär som en webbplats kräver ett webbhotell.
> Ni väljer leverantör och ni äger kontot. Ni betalar leverantören direkt, till deras pris.
> Vi lägger inget påslag. Nyckeln ligger hos er och kan bytas eller stängas av när ni vill.
>
> Om ni inte är nöjda med svaren byter vi leverantör utan att röra något annat. Och ni är
> inte inlåsta: chatten kan stängas av utan att något annat byggs om."

Expect a procurement question here. The point to land: Hektor owns the supplier relationship,
and the rest of the system does not care which supplier it is.

### 8:30 - Slide 10, keeping it on the rails
> Läs de fem reglerna. Sedan: *"De här fem är svaret på frågan 'vad händer om den säger fel'.
> Och de är inställningar, inte kod. Ni ska kunna strama åt dem utan att vänta på en ny
> version av någonting."*

### 9:15 - Slide 11, data protection and identity
> *"Det här är Sverige och det är telekom, så det här är en designfråga och inte en slide.
> Hektor är personuppgiftsansvarig, leverantören är personuppgiftsbiträde. Identitet är
> grinden: inget kundnummer och ingen verifierad uppgift, inga kunduppgifter, oavsett vad
> kunden påstår i chatten."*

### 10:00 - Slide 12, when a human takes over
Walk the flow chart once, left to right, then down:
> "En fråga kommer in. Antingen kan Hektor Agent svara, eller så ska en människa svara. Fler
> möjligheter finns inte. Och det som är viktigast för er i support: allt sparas. Ingenting
> tappas bort, vem som än svarade.
>
> Utanför öppettider händer samma sak. Hektor Agent tar uppgifterna, säger när ni hör av er,
> och lämnar konversationen med ärendet."

### 10:30 - Slide 13, what we need
> "Vad vi behöver: tillgång till era publicerade dokument, en namngiven person som äger
> svaren, läsrättighet mot kunduppgifterna, ett konto hos en språkmodellsleverantör, och två
> personer på deltid. Inga nya system, ingen ny personal, ingen redesign av sajten."

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
| "How do we know it won't say something wrong about prices?" | "It does not know prices. It reads them from your own list and shows where each one came from. Anything binding it refuses and passes to a person. You saw that in the demo." |
| "What does it cost?" | Be honest: give a pilot price and say the next step depends on what the pilot measures. Never improvise an ROI number. |
| "Which supplier do you use, and who pays for it?" | "Whichever one you choose. You hold the account and the key, and you are billed by them directly. We add no markup, and the supplier can be swapped without rebuilding anything." |
| "Is our customer data safe?" | "You stay responsible for the data, the supplier works under a written agreement. The Hektor Agent sees one customer at a time, identity is the gate, everything is recorded, and how long records are kept is your decision." |
| "Can our site even do this?" | "That is question one for your web platform: one small piece of code on the contact page. I would like to confirm it with whoever manages one.com for you before we go further." |
| "Why not just use ChatGPT?" | "Because ChatGPT does not know your tariffs, your binding periods or your customers, and it cannot hand over to your support team with the conversation attached." |

## If the demo breaks

- The hosted URL needs internet. If it fails, present from the exported PDF.
- If someone asks to try the chat: open `mockup/index.html`. Say plainly that it is a
  scripted prototype, then offer the pilot as the way to try the real thing.
