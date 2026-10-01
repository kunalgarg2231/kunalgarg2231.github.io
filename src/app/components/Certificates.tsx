import SectionHeader from "./SectionHeader";

const certificates = [
  { name: "NISM-IV", issuer: "NISM" },
  { name: "Investment Banking Course", issuer: "Jobaaj" },
  { name: "Investment Banking Certification", issuer: "Udemy" },
  { name: "Analyze the Financial Statement & Company Reports", issuer: "Skill Edge" },
  { name: "Reality of Capital Markets and Business Valuation", issuer: "Skill Edge" },
  {
    name: "Financial Markets and Training in Share Market, Insurance, Mutual Funds, Banking Concepts",
    issuer: "Shine Projects",
  },
  { name: "Advanced Stock Market and Derivative Training", issuer: "Shine Projects" },
];

export default function Certificates() {
  return (
    <section id="certificates">
      <SectionHeader index="06" eyebrow="Credentials" title="Certificates" />

      <ul className="cert-grid reveal">
        {certificates.map((c, i) => (
          <li className="cert-card" key={c.name}>
            <div className="cert-top">
              <span className="cert-check" aria-hidden="true">✓</span>
              <span className="cert-idx">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <div className="cert-name">{c.name}</div>
            <div className="cert-issuer">{c.issuer}</div>
          </li>
        ))}
        <li className="cert-summary" aria-hidden="true">
          <span className="cert-summary-num">{certificates.length}</span>
          <span className="cert-summary-text">
            Finance credentials across markets, investment banking, and valuation.
          </span>
        </li>
      </ul>
    </section>
  );
}
