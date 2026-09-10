# Evidence and open questions

Updated for the 12-slide Hektor Agent management proposal, 10 September 2026.

## Public facts used in the deck

The [Hektor contact page](https://hektormobil.se/kontakta-oss), checked 10 September 2026, lists a contact form, `support@hektormobil.se`, `070-100 01 00`, and a public FAQ. Its WiFi-calling explanation says that calls use WiFi instead of the mobile network and require a compatible phone. Slide 4 paraphrases that explanation in a clearly labelled illustrative conversation.

Published support hours are weekdays 08:00-17:00, with lunch closed 12:00-13:00, and weekends closed. The calculation is **5 × (9 - 1) = 40 staffed hours per week**, leaving **168 - 40 = 128 hours outside those hours**. The earlier 16-slide deck incorrectly used 45 and 123. Forms and email can still receive messages outside staffed hours. No inference about lost sales or customer demand follows from the schedule alone.

## Proposed scope

Start on the contact page with approved public information and a defined handover to support or sales. Customer-record access is a separate later decision. Hektor appoints a service owner and approves material, scope, follow-up rules and supplier arrangements.

The initial pilot should test Swedish conversations, source support for answers, refusals, mobile use, keyboard accessibility and case delivery. Agree success criteria before launch. The deck does not promise savings, a resolution rate, a launch date or a price.

## Questions that still need answers

| Question | Why it matters |
|---|---|
| Can the website embed the chat, and who manages it? | Confirms feasibility and deployment access. |
| What questions arrive, how often and through which channels? | Establishes a baseline and a useful initial scope. |
| Who approves sources and keeps them current? | Defines ownership of answer quality. |
| Where should handovers arrive and who follows up? | Makes escalation operationally useful. |
| What response can be promised outside staffed hours? | Prevents misleading expectations. |
| Which suppliers and billing arrangements are acceptable? | Allows a concrete implementation and running-cost proposal. |
| What information may the chat collect and retain? | General chats can still receive personal information. |
| What privacy, contractual and accessibility requirements apply? | Determines the checks required before launch. |
| Which CRM and identity systems are used? | Determines whether a later personal-support phase is feasible. |
| Which outcome thresholds justify expansion? | Gives the pilot a clear decision at its end. |

These are open design and commercial questions. No statement in the deck is a guarantee of legal compliance or error-free model behaviour. Confirm personal-data responsibilities, supplier terms, retention and access controls with the appropriate Hektor reviewers.

## Tooling and publishing

The redesign uses Slidev locally, with `slides.md`, shared `style.css` and reusable Vue components under `components/`. Its supported output paths are a static build and PDF export. The visual design uses a forest-green cover and closing, light content slides, a proportional weekly-hours chart and a branching customer-journey diagram. Section navigation and page progress help orient the audience. Node 22.12 or later is needed by the locked dependencies. Verification uses installed Chrome on Windows and checks all slide titles, browser errors, text bounds and footer collisions before capturing screenshots.

The previous hosted Slidev MCP workflow is optional legacy tooling. The old markdown-packaging helper does not bundle the redesigned CSS or Vue components, so do not assume its output reproduces this version. The current session's MCP access and service availability have not been tested. No MCP installation is necessary for local editing.

GitHub Pages serves the separate `gh-pages` branch. Source commits alone do not deploy the deck. Rebuild with the project asset base and include the new PDF when publishing.

The earlier standalone mockup remains under `mockup/` as a scripted prototype, with invented customer details. The redesigned slides use their own readable HTML illustration; the older prototype is not a live service or proof of a working integration.
