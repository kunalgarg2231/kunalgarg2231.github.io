import SectionHeader from "./SectionHeader";

const projects = [
  {
    sym: "CLGT·IN",
    kind: "Equity Research",
    name: "Equity Research Report & DCF Valuation",
    company: "Colgate Palmolive India Ltd",
    image: "images/proj-fmcg.jpg",
    alt: "A plain consumer goods tube on a white studio background",
    points: [
      "Conducted 5-year financial statement analysis to evaluate business performance.",
      "Built a three-statement DCF valuation model to estimate intrinsic value.",
      "Forecasted Free Cash Flow to Firm (FCFF) using historical data and business assumptions.",
      "Ran sensitivity analysis across growth and discount-rate scenarios.",
    ],
    tags: ["DCF", "FCFF", "Sensitivity Analysis"],
  },
  {
    sym: "TATAMTR·IN",
    kind: "Modeling",
    name: "Financial Modelling",
    company: "Tata Motors Ltd",
    image: "images/proj-auto.jpg",
    alt: "Industrial robots on an automotive assembly line",
    points: [
      "Developed a comprehensive three-statement financial model.",
      "Forecasted 5 years of FCFF from operational and financial assumptions.",
      "Calculated WACC using comparable-company beta analysis.",
      "Estimated intrinsic share value and evaluated the investment opportunity.",
    ],
    tags: ["3-Statement Model", "WACC", "Valuation"],
  },
  {
    sym: "AUTO10·β",
    kind: "Risk",
    name: "Risk Analysis Using Beta",
    company: "Auto Sector",
    image: "images/proj-risk.jpg",
    alt: "A laptop displaying a candlestick trading chart",
    points: [
      "Calculated beta values for ten large-cap automobile companies.",
      "Benchmarked company betas against the Nifty Auto Index and Nifty 50.",
      "Analyzed systematic risk to support investment decision-making.",
    ],
    tags: ["Beta", "Systematic Risk", "Nifty Auto"],
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <SectionHeader index="03" eyebrow="Independent Research" title="Projects" />

      <div className="proj-grid reveal">
        {projects.map((p, i) => (
          <article className="proj-card" key={p.sym}>
            <div className="proj-media">
              <img src={p.image} alt={p.alt} loading="lazy" />
              <span className="proj-index">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <div className="proj-body">
              <div className="proj-ticker">
                <span className="sym">{p.sym}</span>
                <span className="chg">{p.kind}</span>
              </div>
              <h3 className="proj-name">{p.name}</h3>
              <div className="proj-company">{p.company}</div>
              <ul className="bullets bullets-sm">
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <div className="tag-row">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
