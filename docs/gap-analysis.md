# Avgränsningar och antaganden: Hektor Demo

Uppdaterad 11 september 2026 för den svenska grenen `hektor-demo-sv`, baserad på `demo-v2`. Den här versionen innehåller 14 bilder för en bred, icke-teknisk målgrupp.

## Vad presentationen visar

Kundnytta, återkommande arbetsmoment, chatt, telefon och granskad personaldiktering. Flödena är föreslagna och dialogerna illustrativa. Repositoriet verifierar inte en fungerande Hektor-runtime, telefonkoppling eller ett ärendesystem. Ingen telefonintegration har införts eller testats i presentationsarbetet.

Hektor Demo är titeln och PDF-namnet. Hektor Agent är namnet på tjänsten i presentationen. Avslutningen beskriver värdet och det kommersiella erbjudandet, inte en önskan om pilot.

## Kostnad och avlastning

Uppdragsgivaren vill erbjuda en agent till kostnaden av en supportmedarbetare och kunna automatisera arbete som annars belastar ett helt team. Därför står kostnadsjämförelsen under ”Vårt erbjudande”. Formuleringen om hela teamet avser **potential att automatisera återkommande arbete**, inte verifierad ersättning av alla roller eller beslut.

Före en bindande offert behöver följande fastställas:

- Jämförelsen mot lön eller full arbetsgivarkostnad, och vilken tidsperiod som avses.
- Ingående funktioner, införande, support och mänsklig granskning.
- Telefon-, leverantörs-, användnings- och driftkostnader samt volymgränser.
- Kapacitet för samtidiga kontakter och faktisk automatiseringsgrad.

Det finns inga verifierade kronor, lönebelopp, sparade timmar, teamstorlekar eller besparingsprocent. En agent betyder en gemensam tjänst, inte obegränsad kapacitet. Texten på bild 14 och dess sidfot gör omfattning och ännu ej uppmätt effekt synliga.

## Tekniska förutsättningar

| Område | Behöver bekräftas före drift |
|---|---|
| Hektors agent | Fullständigt samtalsflöde, kunskapsunderlag, sessioner och avbrott |
| Kunduppgifter | Godkänd identifiering, behörigheter och tillåten åtkomst |
| Telefon | Befintlig operatör/växel, koppling, överlämning och tillgänglighet |
| Ärenden | Mottagare, format, behörig lagring och hantering av leveransfel |
| Diktering | Granskningsflöde, faktakontroll och osäkra fält |
| Data och drift | Godkända leverantörer, information till kunden, lagring, felvägar och ansvar |

Nummerpresentation räcker inte som identitetskontroll. Taletiketter bevisar inte identitet. Dikterade instruktioner får inte direkt ändra konton. Den mänskliga delen av ett överlämnat samtal transkriberas inte automatiskt av AI-flödet. Kunden ska kunna nå en människa även utan verifierad identitet.

## Tidigare källunderlag

Wifi-exemplet utgår från [Hektors vanliga frågor](https://hektormobil.se/kontakta-oss), S18 i [forskningsunderlaget](voice-dictation-research.md), kontrollerat 10 september 2026. Inga nya leverantörsprestanda-, laglighets- eller prisfakta introduceras i denna svenska version. Tekniska leverantörsval och äldre bildreferenser i forskningsunderlaget gäller den längre presentationen.

## Kvalitetskontroll

Kontrollera svensk text, huvudrubriker, dynamiska sidnummer, diagram, textgränser och webbläsarfel med `npm run verify`. Exportera därefter `Hektor-Demo.pdf` och kontrollera att filen har samma 14 rubriker och 16:9-format. Kontrollerna gäller presentationen, inte den tänkta tjänstens kapacitet eller driftsäkerhet.
