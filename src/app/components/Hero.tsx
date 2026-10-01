const coverage = [
  { sym: "CLGT·IN", name: "Colgate Palmolive India", note: "5-yr statement analysis", model: "DCF" },
  { sym: "TATAMTR·IN", name: "Tata Motors", note: "5-yr FCFF forecast", model: "3-Statement" },
  { sym: "NIFTY AUTO", name: "Auto Sector", note: "10 large-cap companies", model: "Beta" },
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background photo: analyst desk with printed charts */}
      <div className="hero-media" aria-hidden="true">
        <img src="images/hero-desk.jpg" alt="" fetchPriority="high" />
      </div>

      {/* Animated background chart */}
      <svg
        className="hero-chart"
        viewBox="0 0 1000 340"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="chartFadeLight" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0B7A6E" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#0B7A6E" stopOpacity="0" />
          </linearGradient>
          {/* Secondary volume bars gradient */}
          <linearGradient id="volGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0B7A6E" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#0B7A6E" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {/* Volume bars */}
        <rect x="0"   y="300" width="50"  height="40" fill="url(#volGrad)" />
        <rect x="60"  y="290" width="50"  height="50" fill="url(#volGrad)" />
        <rect x="140" y="295" width="50"  height="45" fill="url(#volGrad)" />
        <rect x="220" y="280" width="50"  height="60" fill="url(#volGrad)" />
        <rect x="300" y="285" width="50"  height="55" fill="url(#volGrad)" />
        <rect x="380" y="270" width="50"  height="70" fill="url(#volGrad)" />
        <rect x="460" y="275" width="50"  height="65" fill="url(#volGrad)" />
        <rect x="540" y="260" width="50"  height="80" fill="url(#volGrad)" />
        <rect x="620" y="265" width="50"  height="75" fill="url(#volGrad)" />
        <rect x="700" y="250" width="50"  height="90" fill="url(#volGrad)" />
        <rect x="780" y="255" width="50"  height="85" fill="url(#volGrad)" />
        <rect x="860" y="240" width="50"  height="100" fill="url(#volGrad)" />
        <rect x="940" y="245" width="60"  height="95" fill="url(#volGrad)" />

        {/* Area fill */}
        <path
          className="fill"
          d="M0,300 C40,285 80,278 140,288 C200,298 260,242 300,252 C340,262 370,192 380,188 C415,175 450,208 460,202 C500,180 530,148 540,148 C580,148 610,172 620,168 C660,155 690,112 700,108 C740,96 770,128 780,122 C820,100 850,72 860,68 C900,58 930,88 940,82 L1000,38 L1000,340 L0,340 Z"
        />
        {/* Line */}
        <path
          className="line"
          d="M0,300 C40,285 80,278 140,288 C200,298 260,242 300,252 C340,262 370,192 380,188 C415,175 450,208 460,202 C500,180 530,148 540,148 C580,148 610,172 620,168 C660,155 690,112 700,108 C740,96 770,128 780,122 C820,100 850,72 860,68 C900,58 930,88 940,82 L1000,38"
        />

        {/* Data point dot at the end */}
        <circle cx="1000" cy="38" r="4" fill="#0B7A6E" opacity="0" style={{ animation: "fadein 0.4s ease 3s forwards" }} />
      </svg>

      <div className="hero-grid">
        <div className="hero-content">
          {/* Identity kicker */}
          <div className="hero-kicker">
            <span className="sym">KGARG</span>
            <span className="dot" />
            <span>Gurugram, IN</span>
            <span className="dot" />
            <span>Finance</span>
          </div>

          {/* Name */}
          <h1 className="hero-name">
            Kunal<br />
            Garg<span className="hero-name-dot">.</span>
          </h1>
          <div className="hero-role">Financial Analyst in Valuation &amp; FP&amp;A</div>
          <p className="hero-desc">
            MBA with a Post Graduate Program in Financial Analysis. Builds DCF
            valuation models, forecasts financial statements, and reads market
            trends, with a focus on investment banking, equity research, and
            corporate finance.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View Research
              <span aria-hidden="true">→</span>
            </a>
            <a className="btn btn-ghost" href="kunal-garg-resume.pdf" download>
              Download Resume
            </a>
          </div>

          {/* Expertise badges */}
          <ul className="hero-badge-row" aria-label="Core expertise">
            <li className="hero-badge">DCF Valuation</li>
            <li className="hero-badge">Equity Research</li>
            <li className="hero-badge">FP&amp;A</li>
            <li className="hero-badge">Financial Modeling</li>
            <li className="hero-badge">M&amp;A</li>
          </ul>
        </div>

        {/* Profile snapshot card */}
        <aside className="hero-card" aria-label="Profile snapshot">
          <div className="hero-card-head">
            <span className="hero-card-dots" aria-hidden="true">
              <span /><span /><span />
            </span>
            <span>
              <span className="sym">KGARG</span> · Analyst Profile
            </span>
          </div>

          <div className="stat-row">
            <div className="stat-cell">
              <div className="stat-cell-label-top">Experience</div>
              <div className="stat-num g">3+</div>
              <div className="stat-label">Years in Finance</div>
              <div className="stat-delta up">▲ MBA + PGP Analyst</div>
            </div>
            <div className="stat-cell">
              <div className="stat-cell-label-top">Projects</div>
              <div className="stat-num">3</div>
              <div className="stat-label">Valuation Models</div>
              <div className="stat-delta up">▲ DCF · WACC · Beta</div>
            </div>
            <div className="stat-cell">
              <div className="stat-cell-label-top">Certifications</div>
              <div className="stat-num gold">7</div>
              <div className="stat-label">Finance Credentials</div>
              <div className="stat-delta up">▲ NISM-IV · IB · Markets</div>
            </div>
          </div>

          <div className="coverage">
            <div className="coverage-head">
              <span>Research Coverage</span>
              <span>Model</span>
            </div>
            {coverage.map((row) => (
              <div className="coverage-row" key={row.sym}>
                <span className="cov-sym">{row.sym}</span>
                <span className="cov-name">
                  {row.name}
                  <small>{row.note}</small>
                </span>
                <span className="cov-tag">{row.model}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
