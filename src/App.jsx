import { useState } from 'react';

const desktopScreens = [
  { title: 'Stay discovery', description: 'Explore Airbnb stays with StayMate alongside the search journey.', image: '/Prototype Screens/Desktop/airbnb_stay_discovery_with_staymate_desktop/screen.png', source: '/Prototype Screens/Desktop/airbnb_stay_discovery_with_staymate_desktop/code.html' },
  { title: 'Review intelligence', description: 'Turn guest feedback into useful, traceable themes.', image: '/Prototype Screens/Desktop/staymate_review_intelligence_desktop/screen.png', source: '/Prototype Screens/Desktop/staymate_review_intelligence_desktop/code.html' },
  { title: 'Side-by-side comparison', description: 'See how shortlisted stays match the priorities that matter most.', image: '/Prototype Screens/Desktop/staymate_side_by_side_stay_comparison_desktop/screen.png', source: '/Prototype Screens/Desktop/staymate_side_by_side_stay_comparison_desktop/code.html' },
  { title: 'Agentic research dossier', description: 'Follow a source-led research task from question to shortlist.', image: '/Prototype Screens/Desktop/staymate_agentic_research_dossier_desktop/screen.png', source: '/Prototype Screens/Desktop/staymate_agentic_research_dossier_desktop/code.html' },
  { title: 'Decision and booking flow', description: 'Move from a confident choice into the existing booking journey.', image: '/Prototype Screens/Desktop/staymate_decision_booking_flow_desktop/screen.png', source: '/Prototype Screens/Desktop/staymate_decision_booking_flow_desktop/code.html' },
];

const mobileScreens = [
  { title: 'StayMate entry', description: 'A focused starting point for a guest who wants help deciding.', image: '/Prototype Screens/Mobile/staymate_entry/screen.png', source: '/Prototype Screens/Mobile/staymate_entry/code.html' },
  { title: 'Stay discovery', description: 'Browse candidate stays without losing search context.', image: '/Prototype Screens/Mobile/airbnb_stay_discovery/screen.png', source: '/Prototype Screens/Mobile/airbnb_stay_discovery/code.html' },
  { title: 'Review summary', description: 'Scan the review themes and trade-offs that fit the guest’s question.', image: '/Prototype Screens/Mobile/ai_review_summary/screen.png', source: '/Prototype Screens/Mobile/ai_review_summary/code.html' },
  { title: 'Stay comparison', description: 'Compare selected stays against personal priorities on mobile.', image: '/Prototype Screens/Mobile/personalized_stay_comparison/screen.png', source: '/Prototype Screens/Mobile/personalized_stay_comparison/code.html' },
  { title: 'Personalized shortlist', description: 'Keep a short, relevant set of candidates in view.', image: '/Prototype Screens/Mobile/personalized_shortlist/screen.png', source: '/Prototype Screens/Mobile/personalized_shortlist/code.html' },
  { title: 'Research results', description: 'Review options and the reasoning behind each one.', image: '/Prototype Screens/Mobile/agentic_research_results/screen.png', source: '/Prototype Screens/Mobile/agentic_research_results/code.html' },
  { title: 'AI research', description: 'A mobile exploration of the research experience.', image: '/Prototype Screens/Mobile/ai_research/screen.png', source: '/Prototype Screens/Mobile/ai_research/code.html' },
  { title: 'Decision and booking', description: 'Keep the guest in control through the final handoff.', image: '/Prototype Screens/Mobile/decision_booking/screen.png', source: '/Prototype Screens/Mobile/decision_booking/code.html' },
  { title: 'StayMate identity', description: 'A mobile brand exploration for StayMate by Airbnb.', image: '/Prototype Screens/Mobile/staymate_by_airbnb_logo/screen.png' },
  { title: 'Traveler portrait', description: 'A human-centered visual from the supplied concept assets.', image: '/Prototype Screens/Mobile/friendly_young_professional_traveler_woman_with_warm_smile_relaxed_holiday_vibe/screen.png' },
];

const capabilities = [
  { number: '01', priority: 'P0 · Review summary', title: 'Make the reviews make sense.', description: 'Surface guest themes, practical details, and meaningful caveats that matter to a traveler’s stated priorities.' },
  { number: '02', priority: 'P1 · Stay comparison', title: 'Compare what matters to you.', description: 'Put a shortlist side by side and make trade-offs across price, location, amenities, and reviews easier to see.' },
  { number: '03', priority: 'P2 · Agentic research', title: 'Research with a reason.', description: 'Gather relevant information into a source-aware shortlist, explain the reasoning, and leave the final choice to the guest.' },
];

function App() {
  const [screenSize, setScreenSize] = useState('desktop');
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const screens = screenSize === 'desktop' ? desktopScreens : mobileScreens;
  const activeScreen = screens[activeScreenIndex];

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="StayMate home">
          <span className="brand-mark" aria-hidden="true">S</span>
          <span className="wordmark-copy"><strong>StayMate</strong><small>AN AIRBNB CONCEPT</small></span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#story">The opportunity</a><a href="#approach">Approach</a><a href="#screens">Screens</a>
        </nav>
        <a className="nav-link" href="PRD.md">Read the PRD <span aria-hidden="true">↗</span></a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Product concept · Travel decision support</p>
            <h1>Find the stay that feels <em>right for you.</em></h1>
            <p className="hero-description">StayMate is an AI decision companion for Airbnb guests. It brings review insight, thoughtful comparison, and transparent research into one calmer path to a stay.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#screens">Explore the screens <span aria-hidden="true">↓</span></a>
              <a className="button button-secondary" href="https://stitch.withgoogle.com/projects/12556739218636411021" target="_blank" rel="noreferrer">Open the Stitch board <span aria-hidden="true">↗</span></a>
            </div>
            <p className="hero-note">A portfolio exploration. No live Airbnb or AI integrations are implied.</p>
          </div>
          <figure className="hero-visual">
            <img src="/Prototype Screens/Desktop/airbnb_stay_discovery_with_staymate_desktop/screen.png" alt="StayMate concept integrated into an Airbnb stay discovery experience" />
            <figcaption><span className="caption-marker" aria-hidden="true">✳</span><span><strong>More signal, less searching.</strong><small>Stay discovery · Desktop concept</small></span></figcaption>
          </figure>
        </section>

        <section className="priority-rail" aria-label="Product priorities">
          <div><span className="priority-dot dot-red" />P0 <strong>Review summary</strong></div>
          <div><span className="priority-dot dot-rose" />P1 <strong>Stay comparison</strong></div>
          <div><span className="priority-dot dot-violet" />P2 <strong>Agentic research</strong></div>
          <p>One guest-led decision journey</p>
        </section>

        <section className="story-section" id="story">
          <div className="section-index">01 <span>/</span> THE OPPORTUNITY</div>
          <div className="story-grid">
            <h2>Booking a stay shouldn’t mean opening ten more tabs.</h2>
            <div className="story-copy">
              <p>Guests often leave Airbnb to reconcile reviews, prices, amenities, and neighborhood advice across search, travel sites, and social media. The information is scattered; the decision still belongs to them.</p>
              <p>StayMate keeps useful context close to the stay, so travelers can evaluate options with more confidence and continue booking on their own terms.</p>
            </div>
          </div>
          <div className="journey" aria-label="StayMate decision flow">
            <div><span>01</span><strong>Tell StayMate what matters</strong><small>Natural language or a few priorities</small></div><span className="journey-arrow" aria-hidden="true">→</span>
            <div><span>02</span><strong>Understand the options</strong><small>Review evidence, compare, refine</small></div><span className="journey-arrow" aria-hidden="true">→</span>
            <div><span>03</span><strong>Choose with confidence</strong><small>Return to the listing to book</small></div>
          </div>
        </section>

        <section className="approach-section" id="approach">
          <div className="section-heading">
            <div><p className="section-index">02 <span>/</span> THE APPROACH</p><h2>Support the decision. Keep it theirs.</h2></div>
            <p className="section-intro">Three capabilities, sequenced from fast review clarity to deeper research.</p>
          </div>
          <div className="capability-list">
            {capabilities.map((capability) => (
              <article className="capability-row" key={capability.number}>
                <span className="capability-number">{capability.number}</span>
                <div className="capability-copy"><p className="capability-priority">{capability.priority}</p><h3>{capability.title}</h3><p>{capability.description}</p></div>
                <span className="capability-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
          <p className="trust-note"><span aria-hidden="true">✳</span> Evidence-led by design: show the source, the trade-off, and what is still unknown.</p>
        </section>

        <section className="screens-section" id="screens">
          <div className="screen-section-inner">
            <div className="screens-heading">
              <div>
                <p className="section-index">03 <span>/</span> THE EXPLORATIONS</p>
                <h2>From first question to confident choice.</h2>
                <p className="screens-note">A closer look at the moments that make up the StayMate journey.</p>
              </div>
              <div className="screen-switch" role="group" aria-label="Choose screen size">
                <button type="button" aria-pressed={screenSize === 'desktop'} onClick={() => { setScreenSize('desktop'); setActiveScreenIndex(0); }}>Desktop <span>05</span></button>
                <button type="button" aria-pressed={screenSize === 'mobile'} onClick={() => { setScreenSize('mobile'); setActiveScreenIndex(0); }}>Mobile <span>10</span></button>
              </div>
            </div>
            <div className={`screen-gallery ${screenSize === 'mobile' ? 'screen-gallery-mobile' : ''}`}>
              <article className="featured-screen" aria-live="polite">
                <a className="featured-screen-image" href={activeScreen.source || activeScreen.image} target="_blank" rel="noreferrer" aria-label={`Open ${activeScreen.title} prototype`}>
                  <img src={activeScreen.image} alt={activeScreen.title} />
                  <span className="featured-screen-count">{String(activeScreenIndex + 1).padStart(2, '0')} <i>/</i> {String(screens.length).padStart(2, '0')}</span>
                  <span className="featured-screen-open" aria-hidden="true">↗</span>
                </a>
                <div className="featured-screen-caption">
                  <div>
                    <p>{screenSize === 'desktop' ? 'DESKTOP EXPLORATION' : 'MOBILE EXPLORATION'}</p>
                    <h3>{activeScreen.title}</h3>
                    <span>{activeScreen.description}</span>
                  </div>
                  <a href={activeScreen.source || activeScreen.image} target="_blank" rel="noreferrer">Open {activeScreen.source ? 'prototype' : 'image'} <span aria-hidden="true">↗</span></a>
                </div>
              </article>
              <nav className="screen-index" aria-label={`${screenSize} screen index`}>
                <div className="screen-index-heading"><span>IN THIS FLOW</span><span>{String(screens.length).padStart(2, '0')} SCREENS</span></div>
                <div className="screen-index-list">
                  {screens.map((screen, index) => (
                    <button className="screen-index-item" type="button" key={`${screenSize}-${screen.title}-${index}`} aria-pressed={activeScreenIndex === index} onClick={() => setActiveScreenIndex(index)}>
                      <span className="screen-index-number">{String(index + 1).padStart(2, '0')}</span>
                      <img src={screen.image} alt="" loading="lazy" />
                      <span className="screen-index-copy"><strong>{screen.title}</strong><small>{screenSize === 'desktop' ? 'Desktop' : 'Mobile'}</small></span>
                      <span className="screen-index-arrow" aria-hidden="true">↗</span>
                    </button>
                  ))}
                </div>
              </nav>
            </div>
          </div>
        </section>

        <section className="closing-band">
          <div><p className="section-index">A SMALLER LEAP OF FAITH</p><h2>Better context. A more confident yes.</h2></div>
          <a className="button button-light" href="PRD.md">Explore the product brief <span aria-hidden="true">↗</span></a>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-wordmark" href="#top">StayMate <span>×</span> Airbnb</a>
        <p>Independent product concept for portfolio exploration. Not affiliated with Airbnb, Inc.</p>
        <div><a href="https://github.com/cuzimextra95-blip/Staymate-Airbnb" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://stitch.withgoogle.com/projects/12556739218636411021" target="_blank" rel="noreferrer">Stitch ↗</a></div>
      </footer>
    </div>
  );
}

export default App;
