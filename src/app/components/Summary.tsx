import SectionHeader from "./SectionHeader";

const facts = [
  { key: "Based in", val: "Gurugram, India" },
  { key: "Degree", val: "MBA, NMIMS Mumbai" },
  { key: "Program", val: "PGP Financial Analysis, Imarticus Learning" },
  { key: "Toolkit", val: "Advanced Excel, Power BI, SQL, PowerPoint" },
  { key: "Interests", val: "Investment Banking, Equity Research, Corporate Finance, FP&A" },
];

export default function Summary() {
  return (
    <section id="summary">
      <SectionHeader index="01" eyebrow="Analyst Note" title="Professional Summary" />

      <div className="summary-grid reveal">
        <div className="summary-panel">
          <p>
            Results-driven finance professional with an MBA and a Post Graduate
            Program in Financial Analysis. Skilled in financial modeling,
            business valuation, financial statement analysis, equity research,
            risk analysis, and data analytics.
          </p>
          <p>
            Proficient in advanced Excel, Power BI, SQL, and PowerPoint, with
            hands-on experience building DCF valuation models, forecasting
            financial statements, and analyzing market trends. Strong
            analytical, problem-solving, and communication skills, with a keen
            interest in investment banking, corporate finance, equity research,
            and FP&amp;A. Passionate about turning financial insight into
            strategic business decisions.
          </p>
        </div>

        <dl className="facts">
          {facts.map((f) => (
            <div className="fact" key={f.key}>
              <dt>{f.key}</dt>
              <dd>{f.val}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
