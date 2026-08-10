"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Scroll-reveal logic
    const revealEls = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => io.observe(el));

    // Nav scroll-spy logic
    const navLinks = document.querySelectorAll(".nav-links a");
    const sections = Array.from(navLinks).map((a) =>
      document.querySelector(a.getAttribute("href") || "")
    );
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = "#" + entry.target.id;
            navLinks.forEach((a) =>
              a.classList.toggle("active", a.getAttribute("href") === id)
            );
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => {
      if (s) spy.observe(s);
    });

    return () => {
      io.disconnect();
      spy.disconnect();
    };
  }, []);

  return (
    <>
      <header className="site-nav">
        <div className="nav-inner">
          <div className="nav-mark">
            KUNAL GARG <span>·</span> <span>FINANCIAL ANALYST</span>
          </div>
          <nav className="nav-links">
            <a href="#summary" className="cell-hover">
              Summary
            </a>
            <a href="#experience" className="cell-hover">
              Experience
            </a>
            <a href="#projects" className="cell-hover">
              Projects
            </a>
            <a href="#skills" className="cell-hover">
              Skills
            </a>
            <a href="#education" className="cell-hover">
              Education
            </a>
            <a href="#certificates" className="cell-hover">
              Certificates
            </a>
            <a href="#contact" className="cell-hover">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <div className="ticker-wrap" aria-hidden="true">
        <div className="ticker-track">
          <span className="up">▲ DCF VALUATION</span>
          <span>EQUITY RESEARCH</span>
          <span className="up">▲ FINANCIAL MODELING</span>
          <span>RISK ANALYSIS</span>
          <span className="up">▲ FP&amp;A</span>
          <span>WACC</span>
          <span className="up">▲ FCFF FORECASTING</span>
          <span>M&amp;A</span>
          <span>LBO ANALYSIS</span>
          <span className="up">▲ POWER BI</span>
          <span>SQL</span>
          <span className="up">▲ ADVANCED EXCEL</span>
          <span>CAPITAL MARKETS</span>
          <span className="up">▲ DCF VALUATION</span>
          <span>EQUITY RESEARCH</span>
          <span className="up">▲ FINANCIAL MODELING</span>
          <span>RISK ANALYSIS</span>
          <span className="up">▲ FP&amp;A</span>
          <span>WACC</span>
          <span className="up">▲ FCFF FORECASTING</span>
          <span>M&amp;A</span>
          <span>LBO ANALYSIS</span>
          <span className="up">▲ POWER BI</span>
          <span>SQL</span>
          <span className="up">▲ ADVANCED EXCEL</span>
          <span>CAPITAL MARKETS</span>
        </div>
      </div>

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
          {/* Note: The stat-row containing the "60+ Clients Onboarded" etc. was removed as requested. */}
        </div>
      </section>

      <section id="summary">
        <div className="eyebrow reveal">Analyst Note</div>
        <h2 className="section-title reveal">Professional Summary</h2>
        <div className="summary-panel reveal">
          <span className="drop">R</span>esults-driven finance professional with
          an MBA and a Post Graduate Program in Financial Analysis. Skilled in
          financial modeling, business valuation, financial statement analysis,
          equity research, risk analysis, and data analytics — proficient in
          advanced Excel, Power BI, SQL, and PowerPoint, with hands-on
          experience building DCF valuation models, forecasting financial
          statements, and analyzing market trends. Strong analytical,
          problem-solving, and communication skills, with a keen interest in
          investment banking, corporate finance, equity research, and FP&amp;A.
          Passionate about turning financial insight into strategic business
          decisions.
        </div>
      </section>

      <section id="experience">
        <div className="eyebrow reveal">Track Record</div>
        <h2 className="section-title reveal">Experience</h2>

        <div className="exp-row reveal">
          <div className="exp-date">
            09/2021 – 10/2021<br />
            Remote / Field
          </div>
          <div>
            <div className="exp-title">
              <span className="tick">▲</span> Financial Sales Intern
            </div>
            <div className="exp-org">Shine Projects</div>
            <ul>
              <li>
                Completed training in financial markets, mutual funds, insurance,
                and banking products.
              </li>
              <li>
                Acquired and onboarded 60+ clients through relationship
                management and consultative selling.
              </li>
              <li>
                Assisted in managing customer investment portfolios and
                recommended suitable financial and banking products.
              </li>
              <li>
                Generated leads through consultative selling and relationship
                management.
              </li>
              <li>
                Collaborated with team members to achieve monthly sales targets.
              </li>
              <li>
                Sharpened communication, presentation, negotiation, and client
                relationship management skills.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="eyebrow reveal">Independent Research</div>
        <h2 className="section-title reveal">Projects</h2>

        <div className="proj-grid reveal">
          <div className="proj-card cell-hover">
            <div className="proj-ticker">
              <span>CLGT·IN</span>
              <span className="chg">EQUITY RESEARCH</span>
            </div>
            <div className="proj-name">
              Equity Research Report &amp; DCF Valuation — Colgate Palmolive
              India Ltd
            </div>
            <ul>
              <li>
                Conducted 5-year financial statement analysis to evaluate
                business performance.
              </li>
              <li>
                Built a three-statement DCF valuation model to estimate intrinsic
                value.
              </li>
              <li>
                Forecasted Free Cash Flow to Firm (FCFF) using historical data
                and business assumptions.
              </li>
              <li>
                Ran sensitivity analysis across growth and discount-rate
                scenarios.
              </li>
            </ul>
            <div className="tag-row">
              <span className="tag">DCF</span>
              <span className="tag">FCFF</span>
              <span className="tag">Sensitivity Analysis</span>
            </div>
          </div>

          <div className="proj-card cell-hover">
            <div className="proj-ticker">
              <span>TATAMTR·IN</span>
              <span className="chg">MODELING</span>
            </div>
            <div className="proj-name">
              Financial Modelling — Tata Motors Ltd
            </div>
            <ul>
              <li>Developed a comprehensive three-statement financial model.</li>
              <li>
                Forecasted 5 years of FCFF from operational and financial
                assumptions.
              </li>
              <li>Calculated WACC using comparable-company beta analysis.</li>
              <li>
                Estimated intrinsic share value and evaluated the investment
                opportunity.
              </li>
            </ul>
            <div className="tag-row">
              <span className="tag">3-Statement Model</span>
              <span className="tag">WACC</span>
              <span className="tag">Valuation</span>
            </div>
          </div>

          <div className="proj-card cell-hover">
            <div className="proj-ticker">
              <span>AUTO10·β</span>
              <span className="chg">RISK</span>
            </div>
            <div className="proj-name">
              Risk Analysis Using Beta — Auto Sector
            </div>
            <ul>
              <li>
                Calculated beta values for ten large-cap automobile companies.
              </li>
              <li>
                Benchmarked company betas against the Nifty Auto Index and Nifty
                50.
              </li>
              <li>
                Analyzed systematic risk to support investment decision-making.
              </li>
            </ul>
            <div className="tag-row">
              <span className="tag">Beta</span>
              <span className="tag">Systematic Risk</span>
              <span className="tag">Nifty Auto</span>
            </div>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="eyebrow reveal">Toolkit</div>
        <h2 className="section-title reveal">Skills</h2>

        <div className="reveal">
          <div className="skills-group">
            <h3>Financial Skills</h3>
            <div className="skill-cells">
              <div className="skill-cell cell-hover">
                Financial Statement Analysis
              </div>
              <div className="skill-cell cell-hover">FP&amp;A</div>
              <div className="skill-cell cell-hover">Financial Modeling</div>
              <div className="skill-cell cell-hover">DCF Valuation</div>
              <div className="skill-cell cell-hover">Equity Research</div>
              <div className="skill-cell cell-hover">
                Financial Forecasting
              </div>
              <div className="skill-cell cell-hover">
                Financial Ratio Analysis
              </div>
              <div className="skill-cell cell-hover">Risk Analysis</div>
              <div className="skill-cell cell-hover">
                Market Research &amp; Data Analysis
              </div>
              <div className="skill-cell cell-hover">Dashboard Reporting</div>
              <div className="skill-cell cell-hover">
                Budgeting &amp; Forecasting
              </div>
              <div className="skill-cell cell-hover">Capital Budgeting</div>
              <div className="skill-cell cell-hover">Variance Analysis</div>
              <div className="skill-cell cell-hover">Financial Reporting</div>
              <div className="skill-cell cell-hover">KPI Analysis</div>
              <div className="skill-cell cell-hover">Cost Analysis</div>
              <div className="skill-cell cell-hover">Due Diligence</div>
              <div className="skill-cell cell-hover">LBO Analysis</div>
              <div className="skill-cell cell-hover">M&amp;A</div>
              <div className="skill-cell cell-hover">Capital Markets</div>
            </div>
          </div>

          <div className="skills-group">
            <h3>Technical Skills</h3>
            <div className="skill-cells">
              <div className="skill-cell cell-hover">Advanced Excel</div>
              <div className="skill-cell cell-hover">Power BI</div>
              <div className="skill-cell cell-hover">SQL</div>
              <div className="skill-cell cell-hover">Microsoft PowerPoint</div>
              <div className="skill-cell cell-hover">Microsoft Word</div>
            </div>
          </div>

          <div className="skills-group">
            <h3>Communication</h3>
            <div className="skill-cells">
              <div className="skill-cell cell-hover">English</div>
              <div className="skill-cell cell-hover">Hindi</div>
              <div className="skill-cell cell-hover">Punjabi</div>
            </div>
          </div>
        </div>
      </section>

      <section id="education">
        <div className="eyebrow reveal">Academic Record</div>
        <h2 className="section-title reveal">Education</h2>

        <div className="reveal">
          <div className="edu-row">
            <div>
              <div className="edu-deg">
                Postgraduate Financial Analysis Program
              </div>
              <div className="edu-org">Imarticus Learning</div>
              <div className="edu-loc">Delhi</div>
            </div>
            <div className="edu-date">02/2026 – 07/2026</div>
          </div>
          <div className="edu-row">
            <div>
              <div className="edu-deg">Masters in Business Administration</div>
              <div className="edu-org">NMIMS</div>
              <div className="edu-loc">Mumbai</div>
            </div>
            <div className="edu-date">2021 – 2023</div>
          </div>
          <div className="edu-row">
            <div>
              <div className="edu-deg">Bachelor of Commerce</div>
              <div className="edu-org">Punjab University</div>
              <div className="edu-loc">Chandigarh</div>
            </div>
            <div className="edu-date">2017 – 2020</div>
          </div>
        </div>
      </section>

      <section id="certificates">
        <div className="eyebrow reveal">Credentials</div>
        <h2 className="section-title reveal">Certificates</h2>

        <div className="cert-grid reveal">
          <div className="cert-card">
            <div className="cert-name">NISM – IV</div>
            <div className="cert-issuer">NISM</div>
          </div>
          <div className="cert-card">
            <div className="cert-name">Investment Banking Course</div>
            <div className="cert-issuer">Jobaaj</div>
          </div>
          <div className="cert-card">
            <div className="cert-name">Investment Banking Certification</div>
            <div className="cert-issuer">Udemy</div>
          </div>
          <div className="cert-card">
            <div className="cert-name">
              Analyze the Financial Statement &amp; Company Reports
            </div>
            <div className="cert-issuer">Skill Edge</div>
          </div>
          <div className="cert-card">
            <div className="cert-name">
              Reality of Capital Markets and Business Valuation
            </div>
            <div className="cert-issuer">Skill Edge</div>
          </div>
          <div className="cert-card">
            <div className="cert-name">
              Financial Markets and Training in Share Market, Insurance, Mutual
              Funds, Banking Concepts
            </div>
            <div className="cert-issuer">Shine Projects</div>
          </div>
          <div className="cert-card">
            <div className="cert-name">
              Advanced Stock Market and Derivative Training
            </div>
            <div className="cert-issuer">Shine Projects</div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="eyebrow reveal">Get In Touch</div>
        <h2 className="section-title reveal">Contact</h2>

        <div className="contact-panel reveal">
          <div className="meta-grid">
            <div className="meta-item">
              <div className="meta-key">Phone</div>
              <a
                className="meta-val cell-hover"
                href="tel:+919023805708"
                style={{ display: "inline-block" }}
              >
                +91 90238 05708
              </a>
            </div>
            <div className="meta-item">
              <div className="meta-key">Email</div>
              <a
                className="meta-val cell-hover"
                href="mailto:kunalgarg2231@gmail.com"
                style={{ display: "inline-block" }}
              >
                kunalgarg2231@gmail.com
              </a>
            </div>
            <div className="meta-item">
              <div className="meta-key">LinkedIn</div>
              <a
                className="meta-val cell-hover"
                href="https://linkedin.com/in/kunalgarg13"
                target="_blank"
                rel="noopener"
                style={{ display: "inline-block" }}
              >
                linkedin.com/in/kunalgarg13
              </a>
            </div>
            <div className="meta-item">
              <div className="meta-key">Location</div>
              <div className="meta-val">Gurugram, India</div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-mark">KUNAL GARG © 2026</div>
        <div className="disclaimer">
          This profile is prepared for informational purposes only and does not
          constitute an offer, recommendation, or solicitation of any kind.
        </div>
      </footer>
    </>
  );
}
