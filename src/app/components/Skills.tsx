import SectionHeader from "./SectionHeader";

const financial = [
  "Financial Statement Analysis",
  "FP&A",
  "Financial Modeling",
  "DCF Valuation",
  "Equity Research",
  "Financial Forecasting",
  "Financial Ratio Analysis",
  "Risk Analysis",
  "Market Research & Data Analysis",
  "Dashboard Reporting",
  "Budgeting & Forecasting",
  "Capital Budgeting",
  "Variance Analysis",
  "Financial Reporting",
  "KPI Analysis",
  "Cost Analysis",
  "Due Diligence",
  "LBO Analysis",
  "M&A",
  "Capital Markets",
];

const technical = ["Advanced Excel", "Power BI", "SQL", "Microsoft PowerPoint", "Microsoft Word"];

const languages = ["English", "Hindi", "Punjabi"];

function SkillGroup({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="skills-card">
      <div className="skills-card-head">
        <h3>{title}</h3>
        <span className="count">{skills.length}</span>
      </div>
      <ul className="skill-cells">
        {skills.map((s) => (
          <li className="skill-cell" key={s}>{s}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills">
      <SectionHeader index="04" eyebrow="Toolkit" title="Skills" />

      <div className="skills-layout reveal">
        <SkillGroup title="Financial Skills" skills={financial} />
        <div className="skills-stack">
          <SkillGroup title="Technical Skills" skills={technical} />
          <SkillGroup title="Communication" skills={languages} />
        </div>
      </div>
    </section>
  );
}
