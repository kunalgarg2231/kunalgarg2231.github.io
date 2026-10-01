import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section id="experience">
      <SectionHeader index="02" eyebrow="Track Record" title="Experience" />

      <article className="exp-card reveal">
        <div className="exp-meta">
          <div className="exp-date">Sep 2021 to Oct 2021</div>
          <div className="exp-loc">Remote / Field</div>
          <div className="exp-kpi">
            <span className="exp-kpi-num">60+</span>
            <span className="exp-kpi-label">Clients onboarded</span>
          </div>
        </div>

        <div>
          <h3 className="exp-title">
            <span className="tick" aria-hidden="true">▲</span> Financial Sales Intern
          </h3>
          <div className="exp-org">Shine Projects</div>
          <ul className="bullets">
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
      </article>
    </section>
  );
}
