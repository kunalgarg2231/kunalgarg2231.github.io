const items = [
  { label: "DCF Valuation", up: true },
  { label: "Equity Research" },
  { label: "Financial Modeling", up: true },
  { label: "Risk Analysis" },
  { label: "FP&A", up: true },
  { label: "WACC" },
  { label: "FCFF Forecasting", up: true },
  { label: "M&A" },
  { label: "LBO Analysis" },
  { label: "Power BI", up: true },
  { label: "SQL" },
  { label: "Advanced Excel", up: true },
  { label: "Capital Markets" },
];

export default function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {/* Two identical groups so the loop is seamless */}
        {[0, 1].map((copy) => (
          <div className="ticker-group" key={copy}>
            {items.map((item) => (
              <span key={item.label} className={item.up ? "up" : undefined}>
                {item.up && "▲ "}
                {item.label}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
