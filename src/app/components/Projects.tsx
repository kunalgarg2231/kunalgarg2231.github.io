export default function Projects() {
  return (
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
  );
}
