# StayMate

**A product concept for helping Airbnb guests research and compare stays with less tab-switching.** StayMate turns a guest’s trip priorities into review insights, clear stay-to-stay trade-offs, and a reasoned shortlist.

This is an independent portfolio concept, not an Airbnb product or endorsement. The repository contains product and UX artifacts, not a production application. Prototype listings, reviews, match scores, source checks, and research findings are illustrative; there are no live data integrations or measured outcomes.

![StayMate prototype overview](Project%20Screenshots/staymate-project-01.png)

## The problem

Guests often leave Airbnb to compare reviews, prices, amenities, and location details across multiple sources. That research is time-consuming, fragmented, and difficult to tailor to what matters for a specific trip.

StayMate explores how personalized, evidence-aware assistance could make those trade-offs easier to understand while keeping the guest in control of the booking decision.

## Product priorities

The PRD prioritizes the opportunity in this order:

1. **P0: AI review summary** focused on the guest’s decision.
2. **P1: Personalized stay comparison** with relevant criteria and visible trade-offs.
3. **P2: Agentic research** across relevant available sources, producing a reasoned shortlist.

The product should complement Airbnb search and filters, explain its reasoning, and not replace the guest’s final decision. See [context.md](context.md) for product principles and open questions, and [plan.md](plan.md) for proposed phases and acceptance checks.

## Prototype gallery

The screens are standalone HTML prototypes. Some include lightweight scripted interactions; they depend on external CDNs for styling, fonts, or images and do not call a product backend.

# StayMate

**A product concept for helping Airbnb guests make more confident stay decisions without researching across multiple tabs.** StayMate turns a guest’s trip priorities into relevant review insights, clear comparisons, and a reasoned shortlist.

| Project | Status | Artifacts |
| --- | --- | --- |
| Product strategy and responsive UX concept | Portfolio case study; not a production product | 13 HTML screens, 4 screenshots, PRD, design-system notes |

This is an independent portfolio concept, not an Airbnb product or endorsement. Listing details, reviews, match scores, research claims, and source checks shown in the prototypes are illustrative. The project has no backend, live research integrations, user-test findings, or measured business outcomes.

![StayMate project overview](Project%20Screenshots/staymate-project-01.png)

## Case study

### The problem

The PRD describes a familiar decision burden: guests may leave Airbnb to compare reviews, ratings, prices, amenities, and neighborhood details across search engines, travel sites, and social media. The effort is fragmented, and generic information can be hard to apply to one guest’s trip.

The opportunity is to help guests focus on the information that matters to them, explain meaningful trade-offs, and keep the decision journey in one place. The PRD frames this as a product hypothesis; this repository does not claim that the problem has been validated through user research.

### Product direction

StayMate is imagined as a decision-support companion, not an autonomous booking agent. A guest describes a trip in natural language; StayMate reflects the priorities it understood, helps evaluate relevant stays, and explains why options fit or do not fit. The guest remains responsible for the final choice.

The screens use an illustrative North Goa family trip with a toddler, a nightly budget around ₹15,000, and priorities such as safety, cleanliness, walkability, and quiet. This scenario makes the concept concrete; it is not a validated target segment, and its listing facts are not real research findings.

### Scope and prioritization

The PRD uses a RICE-inspired prioritization to sequence three related capabilities:

1. **P0: Review intelligence.** Summarize the review themes most relevant to the guest’s needs. This is the first opportunity to reduce research effort.
2. **P1: Personalized comparison.** Compare a small set of stays on shared criteria and make the strengths and compromises visible.
3. **P2: Agentic research.** Gather relevant information from available sources, explain the evidence, and return a personalized shortlist. This has broader potential but greater effort and dependency on source access and trust.

The concept complements existing search and filters. It does not aim to replace search, decide for the guest, collect every available data point, or become a complete travel assistant.

### Proposed decision journey

1. The guest enters a trip brief in natural language.
2. StayMate reflects the understood priorities so the guest can refine them.
3. The guest reviews stay-specific insights and evidence relevant to those priorities.
4. A side-by-side view makes consistent criteria, total cost, and trade-offs easier to scan.
5. Optional broader research produces a reasoned shortlist with source context.
6. The guest chooses whether to continue to the existing booking flow.

### Design decisions represented in the prototypes

- Keep the assistant alongside stay discovery rather than turning it into a separate travel product.
- Show the interpreted trip criteria so personalization can be inspected and adjusted.
- Treat negative findings and trade-offs as useful decision information, not as details to hide behind a match score.
- Explore the same decision concepts across desktop and mobile layouts.
- Make evidence and source transparency part of the product direction; the current mock screens do not prove that their claims are verified.

## Prototype gallery

The screens are standalone HTML prototypes; some include lightweight scripted interactions. They use external resources for some styling, fonts, and imagery, and do not connect to a product backend.

| Flow | Desktop | Mobile |
| --- | --- | --- |
| Stay discovery | [Explore stays](Prototype%20Screens/Desktop/airbnb_stay_discovery_with_staymate_desktop/code.html) | [Explore stays](Prototype%20Screens/Mobile/airbnb_stay_discovery/code.html) |
| Review intelligence | [Review intelligence](Prototype%20Screens/Desktop/staymate_review_intelligence_desktop/code.html) | [Review summary](Prototype%20Screens/Mobile/ai_review_summary/code.html) |
| Stay comparison | [Side-by-side comparison](Prototype%20Screens/Desktop/staymate_side_by_side_stay_comparison_desktop/code.html) | [Personalized comparison](Prototype%20Screens/Mobile/personalized_stay_comparison/code.html) |
| Agentic research | [Research dossier](Prototype%20Screens/Desktop/staymate_agentic_research_dossier_desktop/code.html) | [Research results](Prototype%20Screens/Mobile/agentic_research_results/code.html) |
| Research brief | — | [AI research brief](Prototype%20Screens/Mobile/ai_research/code.html) |
| Personalized shortlist | — | [Shortlist](Prototype%20Screens/Mobile/personalized_shortlist/code.html) |
| Decision and booking | [Decision flow](Prototype%20Screens/Desktop/staymate_decision_booking_flow_desktop/code.html) | [Decision flow](Prototype%20Screens/Mobile/decision_booking/code.html) |
| StayMate entry | — | [Assistant entry](Prototype%20Screens/Mobile/staymate_entry/code.html) |

Open a linked `code.html` file in a modern browser to preview it. An internet connection may be needed for externally hosted fonts, styles, and imagery. No package installation or build command is required.

The companion design notes are available for [desktop](Prototype%20Screens/Desktop/staymate_companion_design_system/DESIGN.md) and [mobile](Prototype%20Screens/Mobile/staymate_companion_design_system/DESIGN.md). Reconcile the differing token values and prose color guidance before using these notes as an implementation specification.

## Visual explorations

| Screen 1 | Screen 2 |
| --- | --- |
| ![StayMate concept screen 1](Project%20Screenshots/staymate-project-01.png) | ![StayMate concept screen 2](Project%20Screenshots/staymate-project-02.png) |
| ![StayMate concept screen 3](Project%20Screenshots/staymate-project-03.png) | ![StayMate concept screen 4](Project%20Screenshots/staymate-project-04.png) |

## Success measures

The proposed north-star metric is the percentage of users who complete a booking after using StayMate to research and compare stays. Leading indicators are agent adoption, average comparisons per user, and median time to a booking decision. Counter-metrics are agent abandonment, recommendation rejection, and D30 repeat usage.

No baseline, target, event definition, experiment result, or measured impact is available yet. Measurement definitions and privacy-safe attribution need to be established before reporting outcomes.

## What remains to validate

- Validate the initial audience and research problem with travelers.
- Confirm which sources can be accessed, shown, and kept current.
- Decide how to display provenance, uncertainty, missing data, and conflicting claims.
- Test whether guests understand match scores and can identify meaningful trade-offs.
- Define privacy, retention, response-time, and quality requirements.
- Reconcile design tokens and review asset rights before implementation or wider publication.

## Repository contents

- [PRD](Kritika%20-%20PM%20Workshop%20-%20PRD.pdf): product requirements and prioritization.
- [context.md](context.md): problem, product direction, trust principles, and open questions.
- [plan.md](plan.md): validation, delivery, evaluation, and portfolio-readiness plan.
- `Prototype Screens/`: 5 desktop and 8 mobile HTML prototypes, plus design-system notes.
- [Project Screenshots](Project%20Screenshots/): four portfolio screenshots.
- [logo.png](logo.png): project logo asset.

## Project status

**Product discovery and UX prototyping.** This repository presents a product direction and interface concepts. It does not represent a launched feature, production AI system, validated research finding, or experiment result. The next product step is to validate the target user and source constraints, then test the P0 review-summary experience.
