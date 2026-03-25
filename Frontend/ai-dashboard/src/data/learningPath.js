export const learningPath = [
  {
    id: 'qual',
    section: 'Qualitative Analysis',
    topics: [
      {
        id: 'first-look',
        title: 'First Look at a Page',
        content: `When you land on a URL for the first time, here's your structured observation checklist:

**Visual Hierarchy & Contrast**
- Is the primary CTA visually dominant? Check color contrast ratio (WCAG AA = 4.5:1 minimum)
- Does the eye flow naturally from headline → subtext → CTA?
- Are there competing focal points diluting attention?

**Responsiveness Check**
- Open DevTools → toggle device toolbar → check 375px (iPhone SE), 768px (tablet), 1440px (desktop)
- Look for text overflow, broken layouts, hidden CTAs on mobile

**Content Understanding**
- Can you understand what this page offers in under 5 seconds?
- Is the value proposition above the fold?
- Is there a clear "why this, why now, why us" structure?

**Information Order & Ease**
- Does the page answer questions in the order users ask them?
- Is pricing visible without excessive scrolling?
- Are objections addressed before the CTA?`,
      },
      {
        id: 'clicks',
        title: 'Good Clicks vs Bad Clicks',
        content: `**Good Clicks (Engagements that signal intent)**
- CTA clicks: Apply Now, Get Quote, Start Free Trial
- Form starts / first field interactions
- Pricing plan selections
- Testimonial / review expansions
- Calculator / tool interactions
- Internal navigation to product/service pages

**Bad Clicks (Friction or confusion signals)**
- Logo clicks going back to homepage mid-funnel
- Back button immediately after landing
- Multiple rage clicks on non-clickable elements
- Social media link exits (leaving your funnel)
- Footer nav clicks on a landing page (distraction)
- Repeated clicks on same element (user confusion)

**What to measure:**
Track click map data in Hotjar/VWO. Filter by device. Compare good:bad click ratio.
If bad clicks > 20% of total — there's a UX problem to investigate.`,
      },
      {
        id: 'clickable-inventory',
        title: 'Clickable Elements Inventory',
        content: `Before any analysis, map every interactive element on the page:

**Checklist:**
- [ ] All CTAs (text + position + color)
- [ ] Navigation links (header + footer)
- [ ] Form fields and submit buttons
- [ ] Expandable sections / accordions
- [ ] Image links / banner links
- [ ] Social proof elements (ratings, reviews)
- [ ] Chat widgets / popups
- [ ] Exit intent triggers

**For each element, note:**
1. Is it visually distinct from body text?
2. Does hover state change? (cursor: pointer, color shift)
3. Is it above or below fold?
4. Is it repeated at scroll points?

Links that don't visually differ from text = invisible CTAs = lost conversions.`,
      },
    ],
  },
  {
    id: 'quant',
    section: 'Quantitative Analysis',
    topics: [
      {
        id: 'desktop-vs-mobile',
        title: '1. Desktop vs Mobile Users',
        content: `**What to look at:**
- Session split % by device (GA4: Device Category)
- Bounce rate per device
- Conversion rate per device
- Avg session duration per device

**What it tells you:**
If mobile = 65% traffic but 20% conversions → mobile experience is broken.
If desktop converts 3x better → page is not mobile-optimized.

**Action:**
Segment ALL further analysis by device. Never look at aggregate numbers only.
Device-specific heatmaps in Hotjar. Compare scroll depth mobile vs desktop.`,
      },
      {
        id: 'traffic-channels',
        title: '2. Traffic Channel Analysis',
        content: `**Why it matters:**
A paid search user has very different intent vs an organic social user.
Showing the same page to both = suboptimal.

**Channels to segment:**
- Organic Search → high intent, expects answers
- Paid Search → very high intent, expects landing page match to ad
- Direct → brand aware, possibly return visitor
- Organic Social → low-mid intent, visual-first
- Email → warm audience, knows the brand
- Referral → cold, needs trust building first

**In GA4:**
Reports → Acquisition → Traffic Acquisition → filter by Session medium

**Red flags:**
- Paid traffic with high bounce = ad-to-page message mismatch
- Email traffic with low conversion = offer mismatch or page load issues`,
      },
      {
        id: 'search-queries',
        title: '3. Search Queries Analysis',
        content: `**Goal:** Understand what users expect BEFORE they arrive.

**Where to find:**
Google Search Console → Performance → Queries tab

**What to analyze:**
- Top queries driving traffic to this page
- Are these queries answered on the page?
- Query intent (informational vs transactional vs navigational)
- CTR per query — low CTR = meta title/description mismatch

**The Key Question:**
For every top query → does the page answer it within the first scroll?

If users search "business loan eligibility criteria" and land on a general loan page with no eligibility section → that's a content gap → that's a conversion leak.

**Action:**
Map top 10 queries → check if page addresses each → add missing sections.`,
      },
      {
        id: 'ctr-analysis',
        title: '4. CTR of All Links & Buttons',
        content: `**What to measure:**
Click-through rate per element = clicks / sessions (or impressions)

**Tools:**
- GA4 Events → track all clicks with event_name = "click" + link_text parameter
- VWO Heatmaps → visual click density
- Hotjar → click maps + rage click detection

**Analysis checklist:**
- [ ] Which CTA has highest CTR? (your primary action)
- [ ] Is CTR order as expected? (primary > secondary > tertiary)
- [ ] Are there unexpected high-CTR elements? (users want something you're not prioritizing)
- [ ] Are there zero-click elements? (remove or redesign)

**CTR Hierarchy Check:**
If "Learn More" gets more clicks than "Apply Now" on a conversion page → users aren't ready → add more trust content before the CTA.`,
      },
      {
        id: 'kpi-benchmarks',
        title: '5. KPI vs Benchmarks',
        content: `**Core KPIs to track per page:**

| KPI | BFSI Benchmark | Action if Below |
|-----|---------------|-----------------|
| Conversion Rate | 2–5% | Funnel audit |
| Bounce Rate | 40–55% | Above-fold redesign |
| Avg Session Duration | 2–3 min | Content depth review |
| Form Completion Rate | 30–50% | Form friction audit |
| CTA CTR | 3–8% | CTA visibility/copy test |

**How to use:**
Pull current numbers → compare to benchmark → identify biggest gap → that's your first hypothesis.

Never optimize everything at once. Pick the metric furthest from benchmark. Fix that first.`,
      },
      {
        id: 'easy-wins',
        title: '6. Easy Friction Finds (No Analysis Needed)',
        content: `Before deep analysis, walk through the page as a user. Find obvious friction:

**Common easy wins:**
- CTA button color same as background → invisible
- Form has 10+ fields on step 1 → overwhelming
- No phone number / trust signals above fold
- Page takes >3s to load on mobile
- Font size <14px on mobile
- Form submit button says "Submit" (vague) instead of "Get My Quote"
- No progress indicator on multi-step form
- Error messages don't explain what to fix
- Auto-playing videos with sound on landing
- Popups firing within 2 seconds of arrival

**Rule:** Fix easy finds FIRST. They're low-effort, high-impact, and build momentum with clients.`,
      },
      {
        id: 'scroll-depth',
        title: '10. Scroll Depth Analysis',
        content: `**What to measure:**
% of users reaching 25%, 50%, 75%, 90% scroll depth

**In GA4:**
scroll event fires at 90% by default. For custom depths use GTM.

**Analysis:**
- If high engagement (clicks) happening below 60% scroll → move those elements up
- If users drop off at 30% → above-fold isn't compelling enough
- If testimonials are at 80% and 70% of users never reach them → move up

**The Golden Rule:**
Your highest-converting content should live where most users are. Map engagement events to scroll position. If your best social proof is unseen, it's wasted.`,
      },
      {
        id: 'funnel-analysis',
        title: '11. Funnel Leaks & Drop-offs',
        content: `**In GA4:**
Explore → Funnel Exploration → define your steps

**Standard BFSI funnel:**
Landing Page → Form Start → Step 1 → Step 2 → Step 3 → Submit → Thank You

**For each drop-off point, ask:**
1. What is the user being asked here?
2. What information do they need to answer it?
3. What friction exists? (fields, trust, uncertainty)
4. What's the fix?

**Common drop-off patterns:**
- Drop at Step 1 → first impression / too many fields
- Drop at income/document step → privacy concern → add trust copy
- Drop after submit → technical error or slow confirmation

**After identifying:** Create a hypothesis for each major drop. Prioritize by drop volume × ease of fix.`,
      },
      {
        id: 'missing-sections',
        title: '8. Missing Page Sections',
        content: `**Checklist — what high-converting BFSI pages include:**

Trust & Credibility:
- [ ] Customer testimonials with photo + name + specific result
- [ ] Star ratings (Google/Trustpilot embedded)
- [ ] Awards & certifications (RBI approved, ISO, etc.)
- [ ] Press mentions / media logos

Objection Handling:
- [ ] FAQ section (min 5–7 questions)
- [ ] How it works / process steps
- [ ] Security & privacy assurance
- [ ] Comparison table (vs competitors or old way)

Urgency & Social Proof:
- [ ] "X people applied today" live counter
- [ ] Limited time offer / deadline
- [ ] Case studies with numbers

If any of these are missing and competitors have them → that's a test to run.`,
      },
    ],
  },
  {
    id: 'competitors',
    section: 'Competitor Analysis',
    topics: [
      {
        id: 'who-are-competitors',
        title: 'Who Are Potential Competitors',
        content: `**Direct competitors:** Same product, same audience (e.g., other BFSI loan providers)

**Indirect competitors:** Different product, same job-to-be-done (e.g., bank branch vs fintech app)

**Non-obvious competitors (most valuable):**
- Best-in-class UX from unrelated industries (e.g., Airbnb's booking flow for your form)
- International versions of your product
- Adjacent categories (insurance → lending → investing)

**Where to find them:**
- Google your top search queries — who ranks above you?
- SimilarWeb → competitors tab
- SEMrush / Ahrefs → competing domains
- Ask the client who they admire and who they fear`,
      },
      {
        id: 'what-to-copy',
        title: 'What to Copy & What to Test',
        content: `**What to look for on competitor pages:**
- Page structure order (what section comes first?)
- CTA copy (what words do they use?)
- Form length and field order
- Trust signals and how they're displayed
- Pricing transparency
- Mobile experience

**From non-related competitors:**
- E-commerce checkout flow → apply to multi-step forms
- SaaS onboarding → apply to account creation flows
- Travel booking confidence patterns → apply to high-value financial decisions

**Wayback Machine:**
- Go to web.archive.org → enter competitor URL
- See how their page evolved over time
- If they changed something and kept it → it probably worked
- Reversions = failed tests`,
      },
    ],
  },
]