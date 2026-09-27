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

| Flow | Desktop | Mobile |
| --- | --- | --- |
| Stay discovery | [Explore stays](Prototype%20Screens/Desktop/airbnb_stay_discovery_with_staymate_desktop/code.html) | [Explore stays](Prototype%20Screens/Mobile/airbnb_stay_discovery/code.html) |
| Review intelligence | [Review intelligence](Prototype%20Screens/Desktop/staymate_review_intelligence_desktop/code.html) | [Review summary](Prototype%20Screens/Mobile/ai_review_summary/code.html) |
| Stay comparison | [Side-by-side comparison](Prototype%20Screens/Desktop/staymate_side_by_side_stay_comparison_desktop/code.html) | [Personalized comparison](Prototype%20Screens/Mobile/personalized_stay_comparison/code.html) |
| Agentic research | [Research dossier](Prototype%20Screens/Desktop/staymate_agentic_research_dossier_desktop/code.html) | [Research results](Prototype%20Screens/Mobile/agentic_research_results/code.html) |
| Decision flow | [Decision and booking](Prototype%20Screens/Desktop/staymate_decision_booking_flow_desktop/code.html) | [Decision and booking](Prototype%20Screens/Mobile/decision_booking/code.html) |
| Research brief | — | [AI research brief](Prototype%20Screens/Mobile/ai_research/code.html) |

To preview a screen, open its `code.html` file in a modern browser. An internet connection is needed for externally hosted fonts, styles, and imagery.

## Screenshots

See the [full screenshot set](Project%20Screenshots/):

- [Project screen 1](Project%20Screenshots/staymate-project-01.png)
- [Project screen 2](Project%20Screenshots/staymate-project-02.png)
- [Project screen 3](Project%20Screenshots/staymate-project-03.png)
- [Project screen 4](Project%20Screenshots/staymate-project-04.png)

The design-system notes are available for [desktop](Prototype%20Screens/Desktop/staymate_companion_design_system/DESIGN.md) and [mobile](Prototype%20Screens/Mobile/staymate_companion_design_system/DESIGN.md). Their color-token values and prose guidance should be reconciled before treating them as an implementation spec.

## Success measures

The proposed north-star metric is the percentage of users who complete a booking after using StayMate to research and compare stays. Leading indicators are agent adoption, average comparisons per user, and median time to a booking decision. Counter-metrics are agent abandonment, recommendation rejection, and D30 repeat usage.

No baseline, target, or experiment result is available yet. Measurement definitions and privacy-safe attribution need to be established before reporting impact.

## Project files

- [PRD](Kritika%20-%20PM%20Workshop%20-%20PRD.pdf): product requirements and prioritization.
- [context.md](context.md): problem, product direction, trust principles, and unresolved questions.
- [plan.md](plan.md): proposed validation, delivery, evaluation, and portfolio phases.
- `Prototype Screens/`: responsive HTML concepts and design-system notes.
- `Project Screenshots/`: portfolio image assets.
- [logo.png](logo.png): project logo asset.

## Current status

**Product discovery and UX prototyping.** The next step is to validate the target user and source constraints, then test the P0 review-summary experience. Technical architecture and deployment have not been selected.
