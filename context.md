# StayMate Product Context

## Project status

StayMate is a product and UX portfolio concept for helping Airbnb guests evaluate stays without doing scattered research across multiple tabs. This workspace contains a PRD, design-system notes, responsive HTML prototypes, and screenshots. The prototypes use illustrative listing and research content; there is no production application, backend, live data connection, or measured experiment here.

The concept is independent and is not affiliated with or endorsed by Airbnb.

## Problem

Travelers often leave Airbnb to compare reviews, ratings, prices, amenities, neighborhood details, and other information across search engines, travel sites, and social media. That fragmented work takes time and makes it harder to judge which details are relevant to a particular trip.

StayMate’s opportunity is to bring focused, personalized research into the stay decision journey, so guests can understand meaningful differences among options while keeping control of the decision.

## Product direction

**Product hypothesis:** If guests can state what matters to them in natural language and receive evidence-aware summaries and comparisons of relevant stays, they can make faster, more confident decisions without leaving Airbnb to research elsewhere.

StayMate should:

- Accept trip needs and preferences in natural language.
- Use those preferences to summarize relevant review themes and compare stays.
- Gather relevant information from available, reliable sources and explain important trade-offs.
- Return a personalized shortlist with clear reasoning.
- Let guests refine or revisit their research without losing context.
- Keep the guest in control of the final booking decision.

StayMate complements existing search and filters; it does not replace them.

## Priorities

The PRD prioritizes capabilities in this order:

1. **P0: AI review summary.** Surface review insights that matter to the guest’s stated needs.
2. **P1: Personalized stay comparison.** Compare candidate stays against the guest’s preferences and make trade-offs legible.
3. **P2: Agentic research.** Research relevant available sources, synthesize findings, and produce a reasoned shortlist.

Current prototypes illustrate all three directions. Prototype coverage does not mean these capabilities have been implemented or validated.

## Current prototype scenario

Several screens use a family trip to North Goa as an example: two adults and a toddler, a nightly budget around ₹15,000, and priorities such as child safety, cleanliness, walkability, and a quiet stay. This is illustrative prototype content, not evidence that the segment or the displayed listing facts have been researched or validated.

The workspace includes desktop and mobile HTML screens for stay discovery, review intelligence, comparison, agentic research, and a decision/booking flow. Some screens include lightweight presentation interactions. Images, listings, match scores, review counts, source checks, and research claims in the screens must be treated as mock content unless independently verified.

## Goals and non-goals

### Goals

- Reduce time spent researching and comparing stays.
- Keep users within Airbnb during the decision-making journey.
- Provide personalized comparisons and recommendations using agentic AI.
- Increase booking conversion while building trust in AI-assisted decisions.

### Non-goals

- Make the booking decision for the guest.
- Build a complete travel assistant.
- Replace Airbnb search or filters.
- Collect every piece of information available online.
- Optimize conversion at the expense of user trust or decision quality.

## Trust and quality principles

- Make the source, freshness, and basis of important claims understandable.
- Distinguish sourced facts from summaries, estimates, and model inferences; show uncertainty instead of implying verification where none exists.
- Explain why an option matches and what trade-offs remain, including negative findings.
- Protect preference, search, and personal data; define retention and consent before implementation.
- Support refining, revisiting, and rerunning research without unexpected loss of context.
- Keep research responsive and usable within the existing booking journey.

## Success measures

**North star:** Percentage of users who complete a booking after using StayMate to research and compare stays.

**Leading indicators:** Agent adoption rate, average comparisons per user, and median time to a booking decision.

**Counter-metrics:** Agent abandonment rate, recommendation rejection rate, and D30 repeat usage rate.

The PRD does not define baselines, target thresholds, event definitions, or an experiment design. Those need to be agreed before interpreting movement in the metrics.

## Open product questions

- Which information sources can be accessed and shown, and under what permissions?
- How will source reliability, evidence freshness, and conflicts between sources be represented?
- What should count as a comparison, an adopted recommendation, a rejection, or a completed booking for measurement?
- How should the product explain match scores and let guests correct misunderstood preferences?
- What response-time target is acceptable for review summaries and multi-source research?
- What user data is retained to support revisiting a research session, and how can a guest manage it?
- Who is the initial validated audience beyond the illustrative family-travel scenario?
- Which design tokens are canonical? The design-system file contains both token values and prose color guidance that should be reconciled before implementation.

## Source materials

- [Product requirements document](Kritika%20-%20PM%20Workshop%20-%20PRD.pdf)
- [Prototype screens](Prototype%20Screens/)
- [Project screenshots](Project%20Screenshots/)
- [Logo asset](logo.png)
