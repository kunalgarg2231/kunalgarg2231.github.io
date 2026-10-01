const steps = [
  { title: "Analyze", body: "Five years of financial statements, ratios, and business performance." },
  { title: "Forecast", body: "Free Cash Flow to Firm built from operating and financial assumptions." },
  { title: "Value", body: "Discount at WACC with comparable-company beta to reach intrinsic value." },
  { title: "Stress Test", body: "Sensitivity across growth and discount-rate scenarios before a view." },
];

export default function Approach() {
  return (
    <div className="band" role="region" aria-labelledby="approach-title">
      <div className="band-media" aria-hidden="true">
        <img src="images/band-candles.jpg" alt="" loading="lazy" />
      </div>
      <div className="band-inner">
        <div className="band-head reveal">
          <div className="eyebrow eyebrow-light">
            <span className="eyebrow-bar" aria-hidden="true" />
            How I Model
          </div>
          <h2 id="approach-title" className="band-title">
            From statements to a <em>defensible valuation.</em>
          </h2>
        </div>

        <ol className="steps reveal">
          {steps.map((step, i) => (
            <li className="step" key={step.title}>
              <span className="step-idx">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-body">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
