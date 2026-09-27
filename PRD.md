# StayMate Product Requirements

## Document status

This Markdown PRD is a portfolio-friendly transcription and clarification of the supplied [original PRD PDF](archive/Kritika%20-%20PM%20Workshop%20-%20PRD.pdf). It preserves the source priorities and goals while making open decisions explicit. Requirements below describe a product concept; they do not mean the features are implemented or validated.

## Executive summary

StayMate is an AI-assisted stay research and comparison concept for Airbnb. It helps guests use their trip preferences to understand relevant review themes, compare stays, and explore a reasoned shortlist without leaving the Airbnb decision journey. The guest remains in control of the final booking decision.

The proposed sequence is to start with AI review summaries (P0), add personalized comparisons (P1), and then explore broader agentic research (P2).

## Problem statement

Guests often leave Airbnb to research and compare reviews, ratings, prices, amenities, and other stay details across search engines, travel websites, social media, and competing platforms. The information is fragmented, time-consuming to assemble, and difficult to evaluate against an individual trip’s priorities.

StayMate explores whether proactive, preference-aware research and clear explanations of trade-offs can reduce that effort, keep guests in the Airbnb journey, and build confidence in their decision.

The problem statement is a product hypothesis from the source PRD. This repository does not contain user-research evidence validating its frequency or impact.

## Goals

- Reduce time spent researching and comparing stays.
- Keep guests within Airbnb during the decision-making journey.
- Provide personalized comparisons and recommendations using AI-assisted research.
- Increase booking conversion while building trust in assisted decisions.

## Non-goals

- Make the final decision for the guest.
- Replace Airbnb’s existing search and filters.
- Build a complete travel assistant.
- Collect every piece of information available online.
- Optimize only for bookings at the expense of decision quality or trust.

## Initial concept scenario

The current screens illustrate a family trip to North Goa: two adults and a toddler, an example nightly budget around ₹15,000, and preferences such as child safety, cleanliness, walkability, and quiet. This scenario is for prototyping only. It is not a validated target segment, and displayed listings, review counts, research findings, prices, match scores, and source checks are illustrative.

## Product principles

- Keep the guest in control of preferences, shortlist, and booking decision.
- Explain why a stay matches and what trade-offs or missing information remain.
- Make the basis, source, and freshness of consequential information inspectable.
- Distinguish sourced facts from summaries, estimates, and model inferences.
- Support revisiting and refining research without unexpectedly losing context.
- Complement existing search and filters rather than replacing them.

## Prioritization

The source PRD uses a RICE-inspired assessment. The ratings are relative prioritization inputs, not measured product outcomes.

| Opportunity | Reach | Impact | Confidence | Effort | Priority |
| --- | --- | --- | --- | --- | --- |
| AI review summary | High | Medium | High | Low | P0 |
| Personalized stay comparison | High | High | High | Medium | P1 |
| Agentic research | High | High | Medium | High | P2 |

## User journey

1. The guest describes a trip and priorities in natural language.
2. StayMate reflects the interpreted preferences so the guest can correct or refine them.
3. The guest reviews stay-specific insights relevant to those preferences.
4. The guest compares candidate stays using consistent criteria and visible trade-offs.
5. If useful, StayMate researches relevant available sources and returns a reasoned shortlist.
6. The guest decides whether to continue to the existing booking flow.

## Functional requirements

### P0: AI review summary

StayMate should summarize review themes most relevant to the guest’s stated priorities.

**Proposed acceptance criteria:**

- Summaries are tied to the active trip preferences, not only a generic property rating.
- Guests can inspect supporting review context and understand the coverage behind a theme.
- Positive and negative themes, as well as gaps in available evidence, are represented fairly.
- The interface distinguishes sourced review content from AI-generated interpretation.

### P1: Personalized stay comparison

StayMate should compare stays according to the guest’s priorities and explain meaningful differences.

**Proposed acceptance criteria:**

- Candidate stays are compared on consistent criteria and units.
- Price, relevant amenities, location or logistics, and review themes are easy to scan where available.
- The comparison explains both fit and compromise; a single score does not conceal important drawbacks.
- Guests can refine priorities and revisit the comparison.

### P2: Agentic research

StayMate should proactively gather relevant information from available sources and return a personalized shortlist with reasoning.

**Proposed acceptance criteria:**

- The research scope and information sources are understandable to the guest.
- Consequential claims include source context and freshness where available.
- Conflicting, stale, missing, or unavailable information is communicated rather than presented as verified.
- Guests can refine and rerun research without losing prior context.
- The guest chooses whether to proceed to booking.

## Non-functional requirements

- **Performance:** Return summaries, research, and comparisons within a response time that does not disrupt the booking journey. A numerical target is TBD.
- **Quality:** Keep recommendations relevant to preferences and grounded in reliable available information. Evaluation thresholds are TBD.
- **Reliability:** Let guests revisit, refine, and rerun research without losing preferences or prior context.
- **Security and privacy:** Protect preference, search, and personal information. Retention, consent, and deletion requirements are TBD.
- **Transparency:** Communicate sources, relevant trade-offs, and the reasoning behind recommendations.
- **Usability:** Make research, comparison, and evaluation low-effort and usable within the stay decision flow.

## Success measures

**North-star metric:** Percentage of users who complete a booking after using StayMate to research and compare stays.

**Leading indicators:** Agent adoption rate, average number of comparisons per user, and median time to a booking decision.

**Counter-metrics:** Agent abandonment rate, recommendation rejection rate, and D30 repeat usage rate.

Baselines, targets, event definitions, and experiment design have not yet been set. Establish these before reporting impact, and define privacy-safe attribution for booking completion.

## Dependencies and open questions

- Which first-party and external sources can be accessed, displayed, and kept current?
- How should source quality, freshness, coverage, conflicting claims, and uncertainty be represented?
- How are comparison, recommendation adoption/rejection, abandonment, and booking completion defined?
- How should a match score be explained, or should it be used at all?
- What response-time, accuracy, and reliability thresholds are acceptable?
- What user data is retained to support revisiting a research session, and how can guests manage it?
- Which audience and trip scenario should be validated first?
- Which design tokens are canonical? The design-system files contain differing token values and prose color guidance.

## References

- [Original PRD PDF](archive/Kritika%20-%20PM%20Workshop%20-%20PRD.pdf)
- [StayMate prototype gallery](README.md#prototype-gallery)
- [Product context](context.md)
- [Project plan](plan.md)
- [Google Stitch mockup project](https://stitch.withgoogle.com/projects/12556739218636411021)
