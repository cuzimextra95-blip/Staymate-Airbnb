# AiroRight Claim Management Portfolio Project

A polished frontend prototype and product case study for an airline passenger claim management platform. This repo combines the PRD requirements with a UI concept that showcases the core workflow: claim intake, duplicate review, eligibility checks, airline submission, and escalation management.

## Project overview
This project is designed to be a strong GitHub portfolio asset for a product-minded frontend/full-stack developer. It emphasizes:

- workflow design and business logic,
- operational dashboard UX,
- product storytelling,
- and realistic case-management patterns used in customer support systems.

## Included in this repo
- PRD-based product context in [context.md](context.md)
- implementation roadmap in [plan.md](plan.md)
- sample product screens and workflow previews in the app UI
- a working frontend prototype ready to run locally

## Product concept
AiroRight helps airline support teams manage claims for:

- flight delays,
- cancellation claims,
- baggage delays,
- baggage loss,
- and related passenger support workflows.

The experience includes the main operational stages of the lifecycle:

1. claim intake,
2. round-robin case assignment,
3. duplicate detection,
4. eligibility review,
5. document verification,
6. airline submission,
7. follow-up tracking,
8. legal escalation and closure.

## Tech stack
- React
- Vite
- JavaScript
- CSS

This was intentionally kept lightweight so the repo is easy to run, modify, and push to GitHub without complex setup overhead.

## Local setup

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal, typically:

```bash
http://localhost:3000
```

## Production build

```bash
npm run build
```

## GitHub push workflow

```bash
git init
git add .
git commit -m "Initial portfolio project setup"
git branch -M main
git remote add origin <your-repository-url>
git push -u origin main
```

## Repository structure

```text
.
├── README.md
├── context.md
├── plan.md
├── package.json
├── vite.config.js
├── index.html
├── .gitignore
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── Prototype Screens/
└── docs/
```

## Why this works well for a portfolio
This project is compelling because it demonstrates:

- product thinking beyond a simple landing page,
- real business workflow modeling,
- strong operational UX design,
- and the ability to convert a PRD into a working prototype.

## Notes
The app intentionally focuses on a realistic, polished product mockup instead of a generic demo. This makes it easier to present as a product design + frontend engineering portfolio project.

## License
No license has been added yet. If you plan to publish this repository publicly, consider adding an appropriate open-source license.
