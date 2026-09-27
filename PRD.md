# StayMate PRD

**Product:** StayMate, an AI decision companion for Airbnb stay discovery
**Document status:** Ready for implementation of a portfolio prototype
**Product owner:** Product team
**Source brief:** PRD Workshop brief and supplied empathy map
**Design reference:** [Google Stitch mockup](https://stitch.withgoogle.com/projects/12556739218636411021)

## 1. Executive Summary

StayMate helps Airbnb guests research, understand, and compare accommodation options without leaving the Airbnb decision journey. Guests can ask questions in natural language, get review insights tailored to their priorities, compare a shortlist of stays, and see a transparent explanation of trade-offs. StayMate supports the guest's decision; it does not choose or book on their behalf.

The portfolio MVP should demonstrate three progressively capable experiences: AI Review Summary (P0), Personalized Stay Comparison (P1), and Agentic Research (P2). The initial implementation is a responsive, interactive prototype using clearly identified demo data. It must not imply that it is connected to Airbnb systems or conducting live web research unless those integrations are actually implemented.

## 2. Problem Statement

Airbnb guests often leave the platform to cross-check reviews, prices, amenities, location, and photos on search engines, travel sites, social media, and competing platforms. This fragmented research takes time, creates confusion when sources disagree, and makes it harder to feel confident about a booking decision.

StayMate should gather and organize relevant available information around each guest's stated preferences, surface useful evidence and trade-offs, and make it easier to continue to the existing Airbnb booking flow.

## 3. Product Vision

Help every guest find the stay that fits their trip with less tab-hopping and more confidence, while keeping the guest informed and in control.

### Product principles

- **Guest-led:** The guest sets priorities and makes the final decision.
- **Evidence first:** Explain where an insight comes from and distinguish review content from listing facts.
- **Balanced:** Show meaningful drawbacks and trade-offs alongside benefits.
- **Personalized:** Use the guest's stated priorities, not a universal definition of the best stay.
- **In the booking journey:** Make it easy to return to the relevant Airbnb listing and continue booking there.
- **Honest about capability:** Clearly distinguish sourced facts, guest reviews, AI-generated synthesis, and unavailable information.

## 4. Goals and Non-Goals

### Goals

1. Reduce time spent researching and comparing stays.
2. Keep guests within the Airbnb decision-making journey.
3. Provide useful, preference-aware summaries, comparisons, and recommendations.
4. Improve booking conversion after AI-assisted research.
5. Build trust through evidence, transparency, and guest control.

### Non-goals

- Replace the guest's final decision or make a booking autonomously.
- Build a complete end-to-end travel assistant, including flights, itineraries, or trip management.
- Replace Airbnb search, filters, listing details, or booking flows.
- Collect every piece of information available online.
- Optimize for bookings at the expense of suitability, trust, or guest choice.
- Present demo content as live Airbnb data or verified external research.

## 5. Target User and Needs

### Primary user: the researching guest

The supplied empathy map describes **Aanya**, a 28-year-old product manager in Bengaluru, India, who is evaluating stays for a trip. She wants a stay that fits her needs and budget, but comparing scattered, sometimes conflicting information takes too long.

**Thinks:** “There are so many options. Which is actually best?” “Are the reviews trustworthy?” “Am I getting good value?”
**Sees:** Search results, mixed reviews, influencer posts, different prices across platforms, and attractive but unclear photos.
**Hears:** Advice to check several review sources and compare prices and guest photos.
**Says:** She wants an easier way to compare everything in one place and a stay that fits her needs and budget.
**Does:** Searches across sites, checks travel websites, browses social media, compares prices and reviews, shortlists a few options, and may abandon the search.
**Feels:** Curious at first, then overwhelmed, frustrated, and anxious about choosing incorrectly; relieved when she finds a well-supported fit.

### User needs

- Quickly understand what past guests consistently liked and disliked.
- Compare a small set of plausible stays against her own priorities.
- Know why a recommendation fits and what she would give up by choosing it.
- See reliable evidence and recognize when information is missing or uncertain.
- Refine preferences without starting over.
- Remain in control of whether to open a listing or book.

## 6. Product Scope and Prioritization

| Priority | Capability | Scope |
| --- | --- | --- |
| P0 | AI Review Summary | Summarize relevant review themes and trade-offs for a stay, tailored to the guest's question or priorities. |
| P1 | Personalized Stay Comparison | Compare selected stays using the guest's priorities and explain the meaningful differences. |
| P2 | Agentic Research | Research available sources, compare candidates, and return a cited, personalized shortlist with reasoning. |

Priorities follow the supplied RICE-inspired assessment:

| Opportunity | Reach | Impact | Confidence | Effort | Priority |
| --- | --- | --- | --- | --- | --- |
| AI Review Summary | High | Medium | High | Low | P0 |
| Personalized Stay Comparison | High | High | High | Medium | P1 |
| Agentic Research | High | High | Medium | High | P2 |

P0 is the first delivery milestone. P1 builds on the same preference model and listing data. P2 is a later capability and must not be represented as live or autonomous research in a prototype that uses fixtures.

## 7. Key User Journey

1. The guest browses stays and opens StayMate from a stay or discovery experience.
2. The guest enters a question or selects priorities, such as quiet, location, cleanliness, family suitability, amenities, or value.
3. StayMate returns a review summary for a stay, highlighting relevant positives, concerns, and evidence.
4. The guest selects two or more stays to compare, or asks StayMate to create a shortlist.
5. StayMate explains which options best match the stated priorities and calls out trade-offs and missing information.
6. The guest adjusts priorities, removes or adds stays, or asks a follow-up question while retaining the current context.
7. The guest opens a selected listing and continues through Airbnb's existing booking flow. The guest confirms any booking themselves.

## 8. Functional Requirements and Acceptance Criteria

### 8.1 Shared experience

- **FR-01:** The guest can enter a natural-language question or choose suggested priorities.
  - **Acceptance:** The interface accepts free text and presents selectable example priorities. Submitting either path produces a visible result state.
- **FR-02:** The guest can revise priorities and ask a follow-up without losing the current comparison or research context.
  - **Acceptance:** A follow-up updates the displayed result while preserving the selected stays and preferences unless the guest changes them.
- **FR-03:** AI-generated content is visibly labeled and separated from listing facts and guest-review evidence.
  - **Acceptance:** Every result makes clear which content is synthesis, which is a listing detail, and which is review-derived; unavailable sources are not implied.
- **FR-04:** The guest retains control of navigation and booking.
  - **Acceptance:** Recommendations are not auto-selected or booked. A clear listing action leads to the listing/booking handoff; no booking is completed by StayMate.
- **FR-05:** The experience provides loading, empty, error, and unavailable-information states.
  - **Acceptance:** A failed or incomplete research request is explained in plain language, and the guest can retry or refine the request without losing entered preferences.

### 8.2 P0: AI Review Summary

- **FR-06:** The guest can request a summary of a stay's reviews, optionally focused on one or more priorities.
  - **Acceptance:** The result reflects the selected priorities or explicitly says when the result is a general summary.
- **FR-07:** The summary presents both positive themes and concerns or trade-offs.
  - **Acceptance:** The result does not present only praise; it includes relevant caveats when the supplied review data supports them.
- **FR-08:** Review insights are traceable to the available review data.
  - **Acceptance:** The result displays available review counts, dates, excerpts, or review references. It does not invent counts, quotes, sources, or certainty when those are absent.
- **FR-09:** The guest can inspect source reviews or evidence behind a summary insight.
  - **Acceptance:** Each displayed evidence reference opens or reveals its associated source content when that content is available; otherwise, the interface identifies the limitation.

### 8.3 P1: Personalized Stay Comparison

- **FR-10:** The guest can compare at least two selected stays side by side.
  - **Acceptance:** The comparison uses a consistent set of attributes where data exists, including guest priorities, price, location, amenities, rating/review themes, and relevant listing details.
- **FR-11:** The guest can change the importance of comparison priorities.
  - **Acceptance:** Changing a priority visibly updates the explanation or ordering, and the interface identifies the changed trade-off.
- **FR-12:** The comparison explains why each stay may or may not fit the guest.
  - **Acceptance:** Each option has a concise, preference-linked rationale and at least one meaningful difference or trade-off where the data supports it.
- **FR-13:** Missing values are distinguishable from negative values.
  - **Acceptance:** Missing or incomparable information is shown as unavailable, not treated as a zero, a failure, or an inferred fact.

### 8.4 P2: Agentic Research

- **FR-14:** The guest can describe a stay need in natural language and receive a researched shortlist.
  - **Acceptance:** The result contains a small set of relevant candidate stays, matching rationale, key trade-offs, and source references for available information.
- **FR-15:** The guest can see research progress and what sources or information categories were considered.
  - **Acceptance:** While research is in progress, the interface communicates status. On completion, it lists sources or source categories actually used; it does not claim to have searched sources it did not access.
- **FR-16:** The guest can refine or rerun research while retaining relevant preferences and context.
  - **Acceptance:** A refinement changes the shortlist or explains why it did not, while retaining unchanged constraints.
- **FR-17:** The agent does not take consequential actions on the guest's behalf.
  - **Acceptance:** The agent may research and recommend, but cannot reserve, pay, message a host, or commit the guest to an option.

## 9. Non-Functional Requirements

The source brief does not define numeric service-level targets. The targets below are proposed for prototype evaluation and should be revisited before production use.

### Performance

- The interface remains responsive while results load.
- Proposed prototype target: P0/P1 demo responses appear within 3 seconds; P2 research shows progress immediately and returns a result or a clear timeout state within 30 seconds.

### Quality and transparency

- Recommendations must be relevant to stated preferences and supported by available data.
- Do not fabricate facts, reviews, prices, source references, or confidence.
- Explain the principal reasons and trade-offs behind each recommendation.
- Show when data is missing, stale, inconsistent, or outside the prototype's coverage.

### Reliability and usability

- Guests can revisit, refine, and rerun the current research without re-entering unchanged preferences.
- Common tasks work with keyboard and touch input and provide visible focus states.
- The layout adapts to mobile and desktop without hiding essential evidence or controls.
- Use clear language, readable text, and accessible labels; do not rely on color alone to communicate meaning.

### Security and privacy

- Collect only information required for the current research task.
- Do not expose one guest's preferences or research to another guest.
- Do not place secrets, API credentials, or personal data in client-side source code or demo fixtures.
- For the prototype, use synthetic listing and review data; do not request real guest personal information.
- Any future production integration must define consent, retention, access control, and data-protection requirements before launch.

## 10. Prototype and Repository Requirements

These requirements make the PRD usable as a handoff for a portfolio implementation. They are implementation guidance, not a claim that production integrations already exist.

- Build a responsive, interactive web prototype that demonstrates the guest journey and P0/P1 experiences; include a P2 research-results experience if feasible.
- Use synthetic, internally consistent listing and review fixtures unless authorized APIs and credentials are provided.
- Clearly label mock or simulated AI/research behavior. Never fabricate the use of live external sources.
- Keep the experience focused on stay discovery, review understanding, comparison, and a guest-controlled listing handoff.
- Provide an understandable project structure, reusable UI components, and a README with setup and run instructions.
- The project must install from its documented package manifest, run locally, and produce a successful production build.
- Suggested baseline for this repository: React 18 and Vite, matching the existing frontend stack. Do not add a backend, database, authentication, or paid AI dependency unless separately approved or required for a working implementation.
- Persist preferences and shortlist only as needed to demonstrate the revisit/refine flow. If browser storage is used, keep it local to the prototype and provide a way to clear the demo state.

## 11. Success Metrics

### North Star

- **AI-assisted booking conversion:** Percentage of users who complete a booking after using StayMate to research or compare stays.

### Leading indicators

- Agent adoption rate.
- Average number of comparisons per user.
- Median time from starting StayMate research to making a booking decision.

### Counter-metrics

- Agent abandonment rate.
- Recommendation rejection rate.
- Day-30 repeat usage rate.

Metrics should be interpreted together. Conversion must not be optimized by weakening user control, trust, or recommendation suitability. The portfolio prototype may demonstrate metric instrumentation points, but must not report simulated activity as real product analytics.

## 12. Risks and Mitigations

| Risk | Mitigation |
| --- | --- |
| Incorrect or unsupported AI claims reduce trust. | Ground insights in supplied data, cite evidence, identify uncertainty, and avoid fabricated sources. |
| Too many features make the first release unfocused. | Deliver P0 first, then P1; keep P2 explicitly phased. |
| Conflicting or missing source information creates false confidence. | Show provenance, dates where available, and missing/inconsistent data states. |
| A recommendation feels like pressure to book. | Explain alternatives and trade-offs; leave selection and booking to the guest. |
| Prototype is mistaken for an Airbnb integration. | Use synthetic fixtures and label all simulated data and behaviors. |
| Research scope expands into a full travel assistant. | Limit research to evaluating accommodation options for a stay decision. |

## 13. Release Acceptance Checklist

The portfolio MVP is ready when:

- A guest can submit a natural-language question or select priorities.
- P0 review summaries show relevant positive and negative themes with available supporting evidence.
- P1 comparisons explain fit and trade-offs across selected stays.
- The guest can refine the request without losing unchanged context.
- Missing data, loading, empty, and error states are handled clearly.
- The guest remains in control and can continue to the listing/booking handoff without an automatic booking action.
- The prototype uses synthetic data or clearly disclosed real integrations and never misrepresents simulated research.
- The interface works at mobile and desktop sizes and supports keyboard interaction.
- Setup instructions are documented and the production build succeeds.

## 14. Assumptions and Open Decisions

The following defaults are chosen so implementation can begin; confirm them before a production launch:

- The first deliverable is a portfolio prototype, not a production Airbnb feature.
- The prototype uses synthetic stays, reviews, and research results unless live data access is explicitly supplied.
- The user begins from a discovery or listing context with candidate stays available; this PRD does not redefine Airbnb search.
- StayMate's booking handoff returns the guest to the selected listing and existing booking flow.
- Production data sources, freshness guarantees, AI provider, privacy policy, analytics instrumentation, and numeric performance SLOs remain to be selected.

## 15. Design References

- [Google Stitch mockup](https://stitch.withgoogle.com/projects/12556739218636411021)
- Supplied StayMate empathy map and workshop PRD PDF.
- Existing desktop and mobile prototype screens in the repository may be used as visual references; this PRD's requirements and priority order remain the product source of truth.