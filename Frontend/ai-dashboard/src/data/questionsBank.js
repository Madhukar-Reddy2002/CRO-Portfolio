export const questions = [
  {
    id: 1,
    category: 'Ideation',
    question: 'Enhancement idea that improves UX but won\'t impact business KPIs — should we do it?',
    context: 'Adding address lookup API eases form filling, but users aren\'t dropping at that point. You also have a version where users just enter company name and it auto-fills address, industry, website etc.',
    answer: `**Short answer:** Prioritize the company-name version. Deprioritize the basic address lookup alone.

**Framework to decide:**
1. If users aren't dropping at that step → the current friction is tolerable
2. Address lookup = UX improvement, not conversion improvement
3. Company name → auto-fill = UX improvement + removes multiple fields = BOTH UX and KPI impact

**When to still do UX-only improvements:**
- Client specifically requests it
- It's very low dev effort (< 1 day)
- It supports a larger redesign already in scope
- It reduces support tickets / error rates

**The company-name version hypothesis:**
IF we replace individual address/industry/website fields with a single company name lookup
THEN form completion rate will increase
BECAUSE we've reduced 4–5 fields to 1 touchpoint while maintaining data quality.

This one is worth testing.`,
  },
  {
    id: 2,
    category: 'Form Optimization',
    question: 'Can we reduce form friction by removing the Continue button and auto-advancing on option selection?',
    context: 'Showing all options and automatically progressing when user selects one, removing explicit Continue button.',
    answer: `**Yes — this is a well-validated pattern. But with conditions.**

**When it works well:**
- Single-choice questions (radio button style)
- Options are mutually exclusive and clear
- Mobile forms where button tap adds extra effort

**When it backfires:**
- User accidentally taps wrong option → no way to review
- Users with motor difficulties → accessibility issue
- Questions where user might want to reconsider

**Best implementation:**
- Auto-advance after 300ms delay (gives visual confirmation)
- Always allow back navigation
- Show selected state clearly before advancing
- For final step — keep explicit submit button (high stakes, should be intentional)

**Hypothesis:**
IF we remove Continue button and auto-advance on selection for Steps 1–3
THEN form step completion rate will increase by 10–15%
BECAUSE we've removed a redundant action from a clear single-choice interaction.`,
  },
  {
    id: 3,
    category: 'Form Optimization',
    question: '"Save and Continue Later" — worth adding despite the extra friction?',
    context: 'Options: login wall (friction), cache/localStorage (not reliable), email link (middle ground).',
    answer: `**Best option: Email-based save link. Here's why.**

**localStorage problems:**
- Clears on browser cache clear
- Doesn't work across devices
- No recovery if user switches device or browser

**Login wall problems:**
- Adds a whole new conversion barrier
- Users who haven't converted don't want to create an account yet
- Abandonment spike at login step

**Email link approach:**
- User enters email early in flow (Step 1 ideally)
- "Save progress" button emails a unique URL
- URL restores exact state of form
- No account creation required

**When is this worth building?**
Only if your form is:
- 5+ steps / 10+ fields
- Requires document uploads or research (income, company details)
- B2B applications where decision involves multiple stakeholders

For simple 3-step forms → not worth the dev effort. Focus on reducing form length instead.`,
  },
  {
    id: 4,
    category: 'Design',
    question: 'Why not modernize the website with glassmorphism, neumorphism, scroll animations?',
    context: 'Client has an older-looking website. Suggesting visual modernization.',
    answer: `**Honest answer: Modernization ≠ Conversion improvement. Sometimes it hurts.**

**What actually matters:**
- Speed (animations add weight → slower page → lower conversions)
- Clarity (glassmorphism can reduce text contrast → WCAG fails → accessibility issues)
- Trust (established BFSI clients sometimes equate "old = trusted")

**When visual modernization is justified:**
- Bounce rate is high and exit surveys cite "looks outdated"
- Brand is targeting younger, digital-native audience
- Competitor benchmark shows significant visual gap

**How to frame it to clients:**
Don't say "let's make it look modern." Say:
"Our heatmaps show users aren't engaging with the hero section. We want to test a redesign that improves visual hierarchy and trust signals."

**Safe modernization wins:**
- Better typography (one good font > five mediocre ones)
- More whitespace
- Micro-animations on CTA hover (not full scroll animations)
- Better photography / illustrations

**Rule:** Redesign in service of a metric, not for aesthetics alone.`,
  },
  {
    id: 5,
    category: 'Testing',
    question: 'How to convert ideas into hypotheses — especially when multiple changes are involved?',
    answer: `**The PIEE Framework (revised):**
Problem → Insight → Expected outcome → Evidence needed

**For single changes:**
IF [we make this change]
THEN [this metric] will [increase/decrease] by [X%]
BECAUSE [user behavior reason backed by data]

**For multiple changes in one test (multivariate):**
Be careful. Multiple changes = you can't isolate what worked.

**Options:**
1. **Sequence tests** — test change A first, then B
2. **Bundle as "Version B"** — treat the whole set as one variant. You lose isolation but gain speed.
3. **Multivariate test** — only if you have very high traffic (10k+ sessions/week per variation)

**When bundling is acceptable:**
- Low-traffic pages (can't afford to run 4 separate tests)
- Changes are all part of the same UX problem (form redesign)
- Speed of learning matters more than isolation

**Document everything:** Even if you can't isolate, record what changed, what moved, and what didn't. That's your institutional knowledge.`,
  },
  {
    id: 6,
    category: 'Testing',
    question: 'What to do after a test fails? (Multiple scenarios)',
    answer: `**First: Define "failed"**
A) Variant lost (control won) → B) No significant result → C) Variant won but wrong metric moved

---

**Scenario A: Variant clearly lost**
- Don't delete — document WHY it lost
- Check: did it lose on all devices or just one?
- Check: did it lose for all traffic sources equally?
- Insight from a losing test is just as valuable as a win

**Scenario B: No significant result (inconclusive)**
- Was test run long enough? (min 2 weeks, ideally full business cycle)
- Was traffic sufficient? (use sample size calculator)
- Was the change too small to detect?
- Action: Either extend test, increase change magnitude, or move on

**Scenario C: Variant won but unexpected metric moved**
- e.g., form starts went up but completions went down
- This is actually a gold mine — you learned something about user behavior
- Dig into WHY — segment by device, channel, user type
- Often this is your best hypothesis for the next test

**Universal rule after any test:**
Write a 1-page test summary: hypothesis, result, segments, what you learned, next action.
This builds your CRO institutional knowledge.`,
  },
  {
    id: 7,
    category: 'Client Management',
    question: 'Insights vs Observations — what\'s the difference when presenting?',
    answer: `**This is the difference between a junior and senior CRO analyst.**

---

**Observation:** What you see in the data.
"60% of mobile users drop off at Step 2 of the form."

**Insight:** What it means + why it matters.
"60% of mobile users drop at Step 2 — which asks for income documents. On mobile, file upload is significantly more friction than desktop. This is causing us to lose our highest-intent mobile segment at the most critical step."

---

**Observation:** "The Apply Now button has a 2% CTR."

**Insight:** "Our Apply Now button has a 2% CTR against a BFSI benchmark of 5–8%. Combined with heatmap data showing users scroll past it without clicking, this suggests either the CTA isn't visually prominent enough or users aren't yet convinced to apply at that scroll position."

---

**Rule:** Every observation needs a "so what?" 
Every insight needs a "therefore we should..."

If you present observations, clients think you're just reading dashboards.
If you present insights, clients think you're solving their business problem.

**Framework:** Data point → Pattern → Cause → Impact → Recommendation`,
  },
]