export default function Hero() {
  return (
    <section className="hero" id="home">
      <svg
        className="hero-chart"
        viewBox="0 0 1000 340"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="chartFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2FA878" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#2FA878" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          className="fill"
          d="M0,300 L60,280 L140,290 L220,240 L300,255 L380,190 L460,205 L540,150 L620,170 L700,110 L780,125 L860,70 L940,85 L1000,40 L1000,340 L0,340 Z"
        />
        <path
          className="line"
          d="M0,300 L60,280 L140,290 L220,240 L300,255 L380,190 L460,205 L540,150 L620,170 L700,110 L780,125 L860,70 L940,85 L1000,40"
        />
      </svg>

      <div className="hero-content">
        <div className="hero-kicker">
          <span className="sym">KGARG</span> · GURUGRAM, IN · FINANCE
        </div>
        <h1 className="hero-name">
          Kunal<br />
          Garg
        </h1>
        <div className="hero-role">Financial Analyst — Valuation &amp; FP&amp;A</div>
        <p className="hero-desc">
          MBA with a Post Graduate Program in Financial Analysis. Builds DCF
          valuation models, forecasts financial statements, and reads market
          trends for a living — with an eye on investment banking, equity
          research, and corporate finance.
        </p>
      </div>
    </section>
  );
}
