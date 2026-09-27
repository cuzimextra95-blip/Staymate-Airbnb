# StayMate Project Plan

## Objective

Turn the current product concept and responsive prototypes into a clear, credible portfolio case study, then validate and build the highest-priority StayMate decision-support experience. Keep concept screens, proposed behavior, and measured product outcomes clearly separated.

## Principles

- Start with the PRD’s P0 review-summary opportunity; do not build the broad research agent first.
- Keep evidence and trade-offs visible, and leave the booking decision with the guest.
- Treat prototype content as illustrative until validated against permitted, reliable sources.
- Set metric baselines and targets before claiming success.
- Choose implementation architecture only after confirming source access, privacy needs, and MVP scope.

## Phases

### 0. Make the portfolio baseline clear

- Use the PRD, `context.md`, and this plan as the product source of truth.
- Add a README that explains the problem, priorities, prototype links, project status, and how to preview the screens.
- Label screenshots and prototype data as illustrative; avoid presenting mock research or scores as real results.
- Review image and logo usage rights and add any required attribution.
- Decide whether to restore Git metadata, connect the intended GitHub remote, and publish the portfolio materials.

**Complete when:** A reviewer can understand the problem, see the key screens, and distinguish the concept from a live product.

### 1. Validate the decision problem and MVP

- Identify and interview representative stay-booking users; validate the research pain points and the first target audience.
- Test the current mobile and desktop flows for comprehension, trust, and ability to spot a meaningful trade-off.
- Confirm which sources are available, permitted, fresh enough, and suitable for guest-facing claims.
- Define MVP boundaries, metric events, baseline, target thresholds, and an experiment plan.

**Complete when:** The target decision, source constraints, MVP scope, and measurement plan are documented and reviewed.

### 2. Deliver P0: review intelligence

- Let guests provide or refine trip priorities and see how those priorities shape a review summary.
- Show concise themes with supporting review evidence, source context, and uncertainty where appropriate.
- Include negative signals and gaps; do not turn missing evidence into a positive claim.
- Provide a clear path back to the listing and its original reviews.

**Proposed acceptance checks:** A guest can identify the main relevant review themes, inspect the basis for a claim, correct or refine a priority, and distinguish confirmed evidence from an inference.

### 3. Deliver P1: personalized comparison

- Compare a small set of stays using the same criteria and consistent units.
- Make total cost, relevant amenities, location/logistics, review themes, and meaningful trade-offs easy to scan.
- Explain why each stay fits the stated priorities; do not hide a mismatch behind a single match score.
- Allow the guest to change priorities and see the comparison update.

**Proposed acceptance checks:** Guests can find the strongest fit and a material drawback without cross-referencing separate screens, and can explain why the options differ.

### 4. Explore P2: agentic research

- Orchestrate only approved, relevant sources and show the research scope and progress.
- Preserve source links, retrieval time, and provenance for claims in the resulting shortlist.
- Handle unavailable, contradictory, and stale information explicitly.
- Support refining, revisiting, and rerunning a research brief while preserving user control.

**Proposed acceptance checks:** Every consequential external claim has understandable provenance or is clearly labeled as uncertain; guests can revise criteria, rerun research, and choose whether to continue to booking.

### 5. Evaluate quality, safety, and release readiness

- Create representative test cases for relevance, factual grounding, citation accuracy, stale/conflicting data, and sensitive preferences.
- Measure response time and reliability against targets agreed during validation.
- Review privacy, data retention, accessibility, responsive behavior, and failure states.
- Track the north-star metric alongside adoption, comparison behavior, decision time, abandonment, rejection, and D30 repeat usage.
- Publish a portfolio case study with the problem, decisions, prototype evidence, limitations, and results only after results exist.

**Complete when:** Quality and privacy risks have owners and acceptance criteria, and product results are reported with their measurement method and limitations.

## Portfolio readiness checklist

- [ ] README links to the PRD, screenshots, design notes, and representative desktop/mobile prototypes.
- [ ] The README states that prototypes use illustrative content and are not connected to live research services.
- [ ] Screenshot and logo licensing/attribution have been checked.
- [ ] Git metadata and the intended GitHub remote are set up before the next commit/push.
- [ ] Any published claims distinguish product intent, prototype behavior, and validated outcomes.

## Dependencies and risks

- External research depends on permitted access to reliable, current sources.
- Incorrect or overconfident claims can undermine trust and affect booking decisions.
- Review summaries may obscure minority experiences unless evidence and coverage are shown.
- Match scores can create false precision; their meaning must be explainable and tested.
- Metric movement can be misleading without event definitions, baselines, and a suitable experiment.
- The current design-system document has conflicting token and prose color values; resolve them before using it as an implementation specification.

## Decisions still open

- Initial target segment and validated primary job.
- MVP source set and provenance format.
- Match-score policy, confidence language, and missing-data behavior.
- Privacy/retention requirements and response-time targets.
- Technical stack, data architecture, and deployment approach.
- Success baselines, thresholds, and experiment design.
