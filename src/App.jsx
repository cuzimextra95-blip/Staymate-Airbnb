const metrics = [
  { label: 'Open claims', value: '1,284', change: '+18.2%' },
  { label: 'Submitted in 48h', value: '94%', change: '+6.1%' },
  { label: 'Duplicate flagged', value: '87', change: '18 pending' },
  { label: 'Avg. review time', value: '2.4 days', change: '-0.8 days' },
];

const stages = [
  'Claim received',
  'Round-robin assignment',
  'Duplicate checks',
  'Review & eligibility',
  'Airline submission',
  'Legal follow-up',
];

const screens = [
  {
    title: 'Claim intake',
    subtitle: 'Passenger flow',
    accent: 'cyan',
    lines: ['Passenger info', 'Flight details', 'Disruption', 'Documents'],
  },
  {
    title: 'Case dashboard',
    subtitle: 'Operations board',
    accent: 'violet',
    lines: ['Open queue', 'Priority claims', 'Duplicates', 'SLA health'],
  },
  {
    title: 'Claim review',
    subtitle: 'Agent workspace',
    accent: 'amber',
    lines: ['Eligibility', 'Documents', 'Evidence', 'Action timeline'],
  },
  {
    title: 'Airline follow-up',
    subtitle: 'Submission status',
    accent: 'emerald',
    lines: ['48h SLA', 'Airline case', 'Follow-up log', 'Outcome'],
  },
  {
    title: 'Passenger updates',
    subtitle: 'Communication center',
    accent: 'rose',
    lines: ['Milestone alerts', 'Status emails', 'Reminders', 'History'],
  },
  {
    title: 'Legal escalation',
    subtitle: 'Escalation queue',
    accent: 'indigo',
    lines: ['Unresolved', 'Evidence reviewed', 'Legal notes', 'Closure'],
  },
];

const features = [
  'Dynamic claim questionnaires for delay, cancellation, baggage, and lost item scenarios.',
  'Operational workflows with round-robin assignment, duplicate review, and SLA tracking.',
  'Passenger communication milestone tracking with clear status updates and audit trails.',
  'Decision support for eligibility reassessment, airline submission, and legal escalation.',
];

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">A</div>
          <div>
            <div className="brand-name">AiroRight</div>
            <div className="brand-tag">Claim management platform</div>
          </div>
        </div>

        <nav className="nav">
          <a href="#overview">Overview</a>
          <a href="#workflow">Workflow</a>
          <a href="#screens">Screens</a>
          <a href="#portfolio">Portfolio angle</a>
        </nav>

        <button className="primary-btn">View product brief</button>
      </header>

      <main>
        <section className="hero" id="overview">
          <div className="hero-copy">
            <span className="eyebrow">Product case study</span>
            <h1>Operational claim handling built for airline support teams.</h1>
            <p>
              AiroRight helps teams review passenger claims, detect probable duplicates,
              track required documents, submit to airlines within SLA windows, and keep
              passengers informed at every meaningful milestone.
            </p>
            <div className="cta-row">
              <button className="primary-btn">Explore workflow</button>
              <button className="secondary-btn">Read PRD</button>
            </div>
            <ul className="hero-list">
              <li>48-hour airline submission SLA</li>
              <li>Dynamic intakes by claim type</li>
              <li>Legal escalation + audit trail</li>
            </ul>
          </div>

          <div className="hero-panel">
            <div className="panel-header">
              <span className="dot green" />
              <span className="dot amber" />
              <span className="dot red" />
            </div>

            <div className="mini-dashboard">
              <div className="mini-card large">
                <div className="small-label">Claim approval rate</div>
                <div className="large-figure">94.2%</div>
                <div className="mini-bar">
                  <span style={{ width: '94%' }} />
                </div>
              </div>

              <div className="mini-row">
                <div className="mini-card">
                  <div className="small-label">Queue</div>
                  <div className="metric-number">1,284</div>
                </div>
                <div className="mini-card">
                  <div className="small-label">SLA</div>
                  <div className="metric-number">87%</div>
                </div>
              </div>

              <div className="mini-list">
                <div><span>Delay</span><strong>412</strong></div>
                <div><span>Cancellation</span><strong>301</strong></div>
                <div><span>Baggage</span><strong>226</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section className="stats">
          {metrics.map((metric) => (
            <div className="stat-card" key={metric.label}>
              <div className="stat-label">{metric.label}</div>
              <div className="stat-value">{metric.value}</div>
              <div className="stat-change">{metric.change}</div>
            </div>
          ))}
        </section>

        <section className="workflow" id="workflow">
          <div className="section-heading">
            <span className="eyebrow">Workflow</span>
            <h2>End-to-end claim lifecycle</h2>
          </div>

          <div className="timeline">
            {stages.map((stage, index) => (
              <div className="timeline-item" key={stage}>
                <div className="timeline-number">0{index + 1}</div>
                <div className="timeline-label">{stage}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="features" id="screens">
          <div className="section-heading">
            <span className="eyebrow">Sample screens</span>
            <h2>Product preview</h2>
          </div>

          <div className="screen-grid">
            {screens.map((screen) => (
              <article className={`screen-card ${screen.accent}`} key={screen.title}>
                <div className="screen-topbar">
                  <span className="dot green" />
                  <span className="dot amber" />
                  <span className="dot red" />
                </div>

                <div className="screen-body">
                  <div className="screen-title-row">
                    <h3>{screen.title}</h3>
                    <span>{screen.subtitle}</span>
                  </div>

                  <ul>
                    {screen.lines.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="portfolio-section" id="portfolio">
          <div className="portfolio-card">
            <div>
              <span className="eyebrow">Portfolio angle</span>
              <h2>Built to showcase real-world product thinking.</h2>
            </div>

            <div className="feature-list">
              {features.map((feature) => (
                <div className="feature-item" key={feature}>
                  <span className="check">✓</span>
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
