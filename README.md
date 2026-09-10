# Hektor Demo

**[Öppna Hektor Demo på GitHub Pages](https://h-sami.github.io/hektor-chat-pitch/hektor-demo/)** · **[Ladda ner PDF](https://h-sami.github.io/hektor-chat-pitch/hektor-demo/Hektor-Demo.pdf)**

Svensk presentation för Hektor, på grenen `hektor-demo-sv`. Utgår från `demo-v2` vid `bf7e713` och är omarbetad till **14 bilder** om kundnytta, teamets vardag och erbjudandet. Titel och delningsfil heter **Hektor Demo** respektive **Hektor-Demo.pdf**.

Presentationens avslut är ett värdeerbjudande: en agent till kostnaden av en supportmedarbetare, med potential att automatisera ett helt teams återkommande arbete. Det är uppdragsgivarens kommersiella inriktning; omfattning och kostnadsram fastställs i offert. Ingen uppmätt personalbesparing eller obegränsad kapacitet påstås.

## Innehåll

| Bilder | Innehåll |
|---|---|
| 1–3 | Hektor Demo, kundnytta och mindre återkommande arbete |
| 4–9 | Chatt, telefon, godkänd kunskap, överlämning och diktering |
| 10–12 | Kontroll, ansvarsfördelning och avlastning över hela teamet |
| 13–14 | Samlat värde och kommersiellt erbjudande |

Bilderna är på svenska, inklusive diagram, navigering, sidfot och talaranteckningar. Skogsgrönt, ljusa ytor, Segoe UI och 16:9 är bevarade. Text, ikoner och Mermaid-diagram är redigerbara. Inga nya bildbaserade diagram eller foton används.

## Förhandsvisa och kontrollera

Node.js 22.12 eller senare och Google Chrome på Windows behövs för projektets verifiering.

```sh
npm ci --ignore-scripts
npm run build
npm run serve
# I en annan terminal:
npm run verify
```

Förhandsvisning: http://127.0.0.1:8099/1. Verifieraren hittar alla huvudrubriker dynamiskt och kontrollerar sidantal, textgränser, Mermaid och webbläsarfel. Bilder för intern granskning sparas i `.verify-shots/`.

```powershell
npm run export -- --executable-path "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
npm run build:pages
```

PDF-filen är `Hektor-Demo.pdf`. För löpande redigering används `npm run dev` och http://localhost:3030.

## Egen gren och publicering

Den svenska versionen hålls separat i `hektor-demo-sv` och publiceras på [GitHub Pages](https://h-sami.github.io/hektor-chat-pitch/hektor-demo/). `npm run build:pages` förbereder `ghdest/` med basen `/hektor-chat-pitch/hektor-demo/`; kommandot publicerar inte i sig.

Det gemensamma publiceringsflödet i `.github/workflows/publish-decks.yml` på `main` bygger alla tre versionerna tillsammans: `main` på webbplatsens rot, `demo-v2` under `/demo-v2/` och denna gren under `/hektor-demo/`. PDF-filer och direkta bildlänkar ingår. Alla byggen måste lyckas innan webbplatsen ersätts.

Efter ändringar: committa och pusha till `hektor-demo-sv`, öppna sedan **Actions → Publish decks → Run workflow** och välj **main**. En push till `main` startar också publiceringen av alla tre versionerna. Arbetsflödeskopian på denna gren styr inte den gemensamma publiceringen.

## Underlag

- `slides.md`: innehåll och talaranteckningar.
- `style.css` och `components/`: layout och gemensamma komponenter.
- [Talarmanus](docs/demo-script.md): kort genomgång av alla 14 bilder.
- [Avgränsningar och kommersiella antaganden](docs/gap-analysis.md): vad som återstår att verifiera.
- [Tekniskt forskningsunderlag](docs/voice-dictation-research.md): tidigare källkontroll från 10 september 2026. Dess äldre bildnummer gäller den längre versionen, inte den här.

Illustrativa dialoger och föreslagna flöden är inte en fungerande telefonintegration. Hektors befintliga gränssnitt och kopplingar till kund- och ärendesystem behöver verifieras. Leverantörsval, tekniska detaljer och testplaner ligger i bakgrundsmaterialet.

Äldre omstruktureringsskript avser tidigare versioner och ska inte köras på denna svenska gren. Beroendet `floating-vue` är låst till 5.2.2 för kompatibilitet med Slidevs hjälpfunktioner.

## Verifierat 11 september 2026

Byggning, lokal webbläsargranskning av alla 14 bilder, PDF-export och separat Pages-byggning är genomförda. Inga textöverflöd, diagramkollisioner eller webbläsarfel upptäcktes i slutkontrollen. PDF:ens 14 rubriker och 16:9-format stämmer med källan; första bilden, diagrammen och slutbilden har även granskats visuellt från PDF-filen. Detta verifierar presentationsmaterialet, inte tjänstens ännu ej uppmätta effekt.
