/**
 * One-off restructure of slides.md for the demo-v2 branch.
 *
 * Runs the whole edit as a single UTF-8 read/modify/write. Do NOT do these edits
 * with PowerShell text cmdlets: the Windows PowerShell 5.1 defaults decode a
 * BOM-less UTF-8 file as Windows-1252 and re-encode it, which double-encodes
 * every Swedish character (a-umlaut becomes two mojibake characters). Node's
 * fs.readFileSync(..., 'utf8') round-trips the file correctly.
 *
 * Usage: node scripts/restructure-demo-v2.mjs [--dry-run]
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const file = join(root, 'slides.md')
const dryRun = process.argv.includes('--dry-run')

let md = readFileSync(file, 'utf8')
// The working copy is CRLF; work in LF throughout and write LF back, which is
// what the rest of the repo's markdown uses.
md = md.replace(/\r\n/g, '\n')

// Guard against a second run. Every precondition below assumes the original
// 26-slide source, so re-running would either throw halfway or corrupt the file.
if (md.includes('# Why this matters to your customers.')) {
  console.error('[skip] slides.md already restructured for demo-v2; nothing to do.')
  process.exit(0)
}

const report = []
const must = (label, condition) => {
  if (!condition) throw new Error(`precondition failed: ${label}`)
  report.push(`ok   ${label}`)
}

/** Replace exactly once, or fail loudly. */
function replaceOnce(label, find, replacement) {
  const first = md.indexOf(find)
  must(`${label} (found)`, first !== -1)
  must(`${label} (unique)`, md.indexOf(find, first + 1) === -1)
  md = md.slice(0, first) + replacement + md.slice(first + find.length)
}

/** Cut everything from `marker` to the end of the file. */
function truncateAt(label, marker) {
  const i = md.indexOf(marker)
  must(`${label} (found)`, i !== -1)
  must(`${label} (unique)`, md.indexOf(marker, i + 1) === -1)
  // Step back over the slide separator that introduced the removed block.
  const sep = md.lastIndexOf('---', i)
  must(`${label} (separator found)`, sep !== -1)
  md = md.slice(0, sep).replace(/\s+$/, '') + '\n'
  report.push(`ok   ${label} (truncated)`)
}

// 1. New slide 2: the value proposition, inserted before "Help should be easier to find".
const VALUE_SLIDE = `<DeckHeader :chapter="1" />

<div class="kicker">WHY THIS MATTERS</div>

# Why this matters to your customers.

<p class="intro">A better first response for the customer, and less pressure on the people answering.</p><div class="proposal-cards"><section><span class="card-label">01 / ALWAYS OPEN</span><h2>Answers at any hour.</h2><p>Every question gets a first response, day or night. Nobody waits until Monday morning for something the website already explains.</p></section><section><span class="card-label">02 / MANY AT ONCE</span><h2>Every customer served at once.</h2><p>Hektor Agent holds as many conversations as arrive together. The team's spare capacity stops being the limit on how quickly customers hear back.</p></section><section><span class="card-label">03 / THE RIGHT NEXT STEP</span><h2>Guided, never stranded.</h2><p>When a question needs a person, it goes straight to support or sales with the conversation attached. No dead ends and no repeating the story.</p></section></div><div class="proposal-strip"><b>What changes for Hektor:</b> the team keeps the judgement and the commitments, and stops being the queue.</div>

<DeckFooter :page="2" note="Proposed value of the service / pilot evidence still to be gathered" />

<!--
Lead with value before evidence. Three benefits in the order a customer experiences them: it answers at any hour, it answers everyone at once, and it always offers a next step. Concurrency is the part that changes the picture for a small team: an agent is not limited to one conversation per person, so the first response no longer waits for a free colleague. Say plainly that these are the intended benefits of the design, and that the pilot exists to measure them rather than assert them.
-->

---

<DeckHeader :chapter="1" />

<div class="kicker">THE OPPORTUNITY</div>

# Help should be easier to find.`

replaceOnce(
  'insert value-proposition slide',
  `<DeckHeader :chapter="1" />

<div class="kicker">THE OPPORTUNITY</div>

# Help should be easier to find.`,
  VALUE_SLIDE,
)

// 2. Delete the cost slide and replace the route-comparison slide with a high-level one.
const COST_AND_ROUTE = md.indexOf('# A small pilot, with visible cost assumptions.')
must('cost slide found', COST_AND_ROUTE !== -1)
const ROUTE_HEADING = '# Start simple. Keep the alternative testable.'
const routeStart = md.indexOf(ROUTE_HEADING)
must('route slide found', routeStart !== -1)
// The route slide block runs to the separator that follows its speaker note.
const afterRoute = md.indexOf('\n---\n', md.indexOf('-->', routeStart))
must('route block end found', afterRoute !== -1)

const SIMPLIFIED = `<DeckHeader :chapter="3" />

<div class="kicker">TWO WAYS TO ADD THE PHONE</div>

# Two ways to add the phone.

<div class="route-comparison"><section class="preferred"><span class="card-label">PREFERRED STARTING POINT</span><h2>Use a managed voice service</h2><p>The speaking and listening is handled by a specialist service. Hektor Agent still writes every answer and makes every decision.</p><ul><li>Fastest route to a working Swedish phone line</li><li>Hektor stays the authority on every answer</li><li>Proven call handling and transfer to a person</li></ul></section><section><span class="card-label">ALTERNATIVE, IF IT FITS BETTER</span><h2>Use Hektor's own phone system</h2><p>The same Hektor Agent, reached directly through the telephone system Hektor already has. Nothing is added to the route.</p><ul><li>Reuses your existing telephone setup</li><li>One less supplier to manage</li><li>Depends on what your phone system supports</li></ul></section></div><div class="proposal-strip">We recommend the first. The choice is confirmed after a short Swedish telephone test, and no decision is needed today.</div>

<DeckFooter :page="15" note="Both routes use the same Hektor Agent and the same approved knowledge" />

<!--
Keep this high level. Both routes put Hektor Agent in charge of the answer; they differ only in who provides the voice. The first is the recommended starting point because the speech side is managed for us. The second is worth considering only if Hektor's own telephone system already supports it. Say that the final choice is a short technical test, not a decision the room has to make today, and do not go into supplier names or protocols here.
-->`

const blockStart = md.lastIndexOf('\n---\n', COST_AND_ROUTE)
must('cost block start found', blockStart !== -1)
md = md.slice(0, blockStart) + '\n---\n\n' + SIMPLIFIED + md.slice(afterRoute)
report.push('ok   cost slide removed and route slide simplified')

// 3. Truncate the pilot/testing/ownership/appendix tail, then add the thank-you slide in its place.
const THANKS = `

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

<DeckFooter :page="18" note="Thank you / questions welcome" />

<!--
End on gratitude and one small ask. Thank the room for the time, then recap in a single sentence: a better first response for the customer, and less pressure on the team. The three items are deliberately small and non-technical. Do not reintroduce cost, timelines or testing detail here; if asked, say the next step is a short technical conversation, not a commitment.
-->
`

truncateAt('remove pilot/testing/appendix tail', '# Measure the experience, not just the call ending.')
md = md.replace(/\s+$/, '') + '\n' + THANKS
report.push('ok   thank-you closing slide added')

// 4. Page numbering: the new slide pushes everything down by one, and the deck is now 18 slides.
replaceOnce(
  'slide 3 footer page 2 -> 3',
  '<DeckFooter :page="2" note="Source: Hektor contact page',
  '<DeckFooter :page="3" note="Source: Hektor contact page',
)
// Five original slides were removed, so the surviving "Prepare. Test. Learn." moves from page 17 to 16.
replaceOnce(
  'slide 17 footer page 17 -> 16',
  '<DeckFooter :page="17" note="Proposed gates and sample sizes',
  '<DeckFooter :page="16" note="Proposed gates and sample sizes',
)

// 5. Terminology: the assistant is the Hektor Agent, never "AI".
replaceOnce(
  'Swedish dialogue greeting',
  'Du pratar med Hektors AI-assistent.',
  'Du pratar med Hektor Agent.',
)
replaceOnce(
  'slide 13 intro',
  'Staff dictation is separate from the live AI conversation.',
  'Staff dictation is separate from the live customer conversation.',
)
replaceOnce(
  'dictation diagram label',
  'L["Live AI transcript +',
  'L["Live conversation transcript +',
)
replaceOnce(
  'slide 11 speaker note',
  'The opening illustrates AI identification, not a complete approved privacy or recording script.',
  'The opening illustrates how the agent introduces itself, not a complete approved privacy or recording script.',
)

if (dryRun) {
  console.log(report.join('\n'))
  console.log('\n[dry-run] no file written')
} else {
  writeFileSync(file, md, 'utf8')
  console.log(report.join('\n'))
  console.log(`\n[write] ${file} (${Buffer.byteLength(md, 'utf8')} bytes)`)
}
