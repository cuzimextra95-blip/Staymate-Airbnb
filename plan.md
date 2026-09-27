# Implementation Plan

## 1. Project Vision
Build a portfolio-ready, full-stack claim management platform based on the AiroRight product requirements. The application will focus on operational clarity, workflow automation, passenger communication, and case tracking in a way that demonstrates strong product and engineering judgment.

## 2. Product Strategy
The project should be implemented as a realistic SaaS-style workflow application instead of a static prototype. The goal is to show both product design thinking and technical execution.

### Core principles
- Keep the user experience operational and clear.
- Model real claim lifecycle stages instead of a single-form dashboard.
- Support document tracking and milestone communication.
- Design for future extension into analytics and automation.

## 3. MVP Scope
### Must-have features
1. Claim intake form
   - passenger details
   - travel details
   - disruption details
   - scenario selection

2. Dynamic claim questionnaire
   - delay, cancellation, baggage delay, baggage loss flows
   - conditional sections based on claim type

3. Claim assignment and duplicate detection
   - round-robin assignment
   - probable duplicate flagging
   - executive review workflow

4. Review dashboard
   - open claims
   - accepted claims
   - rejected claims
   - duplicates
   - legal review

5. Document management
   - upload and attach evidence
   - status tracking for missing or invalid documents

6. Airline submission workflow
   - eligibility confirmation
   - SLA marker for 48-hour submission
   - submission tracking and case references

7. Communication timeline
   - passenger email and status updates
   - milestone tracking

8. Legal escalation and closure states
   - legal review,
   - resolved,
   - closed,
   - deleted or duplicate records

## 4. Recommended Tech Stack
### Frontend
- Next.js or React
- TypeScript
- Tailwind CSS
- shadcn/ui for dashboard components

### Backend
- Node.js / Next.js API routes or a separate Express/Nest service
- PostgreSQL

### Data and Auth
- Supabase or Postgres + Prisma
- Auth with email/password or OAuth

### Storage
- Cloud storage for documents and attachments

### Optional enhancements
- email service integration
- AI-assisted claim triage or summarization
- analytics dashboard

## 5. Suggested Architecture
### App layers
- Client UI for passenger and internal workflows
- API layer for case management logic
- Database layer for structured records and statuses
- File storage for documents and evidence
- Notification layer for updates and reminders

### Key entities
- Passenger
- Claim
- ClaimType
- FlightDetails
- DisruptionDetails
- CaseAssignment
- DocumentRecord
- CommunicationLog
- AirlineSubmission
- OutcomeStatus

## 6. Detailed Delivery Plan

### Phase 1 — Foundation and product setup
- define repository structure
- set up app shell and design system
- create database schema
- implement auth and role-based access
- build generic dashboard layout

### Phase 2 — Claim intake and dynamic workflows
- create claim creation flow
- add claim type selection
- implement conditional questionnaire logic
- add validation and submission states

### Phase 3 — Operational workflow and review
- implement assignment logic
- support duplicate detection UI
- create claim detail page with timeline
- add eligibility and document review states

### Phase 4 — Airline submission and follow-up
- add submission checklist
- track airline case numbers and timestamps
- implement follow-up workflow and response logging
- create SLA tracking for 48-hour and 7-day milestones

### Phase 5 — Communication and legal escalation
- add passenger communication templates
- add milestone notifications
- implement legal review and closure actions
- support historical case audit trail

### Phase 6 — Polish and portfolio presentation
- write production-ready README
- polish UX and interactions
- add analytics and metrics dashboards
- prepare demo data and mock case scenarios

## 7. Database Model Outline
- Users
- Roles
- Passengers
- Claims
- ClaimEvents
- Documents
- AirlineSubmitters
- CommunicationEntries
- LegalEscalations

## 8. Suggested Business Logic Workflows
### Round-robin assignment
- maintain a queue or cycle of active executives
- assign each new claim to the next available team member

### Duplicate detection
- compare passenger, booking, flight, airline, and disruption fields
- flag as probable duplicate
- require human confirmation before final duplicate status

### Eligibility reassessment
- permit changes in status as new documents or airline responses arrive
- track reasons for ineligible outcomes

### SLA enforcement
- enforce claim submission within 48 hours
- trigger follow-up after airline response windows

## 9. Risks and Mitigations
### Risk: overly broad scope
Mitigation: build MVP around the most important operational claims workflow first.

### Risk: unrealistic complexity in duplicate logic
Mitigation: start with rule-based matching and allow future AI-assisted enhancement.

### Risk: weak UX for operations teams
Mitigation: prioritize clarity, status visibility, and simple workflows over flashy UI.

## 10. Exit Criteria for MVP
The MVP is complete when a user can:
- create a claim,
- review and assign it,
- confirm or reject duplicate classification,
- validate eligibility,
- request missing documents,
- submit to airline,
- track follow-up and outcome,
- close the claim with auditable records.

## 11. Recommended Portfolio Positioning
This project should be framed as:

- a workflow-first SaaS product,
- a real-world operations platform,
- a case management system for claims and customer support,
- and a strong demonstration of product thinking plus full-stack engineering capability.

This framing makes the project compelling to recruiters, hiring managers, and product-focused engineering teams.
