import SectionHeader from "./SectionHeader";

const education = [
  {
    degree: "Postgraduate Financial Analysis Program",
    org: "Imarticus Learning",
    loc: "Delhi",
    date: "Feb 2026 to Jul 2026",
  },
  {
    degree: "Masters in Business Administration",
    org: "NMIMS",
    loc: "Mumbai",
    date: "2021 to 2023",
  },
  {
    degree: "Bachelor of Commerce",
    org: "Punjab University",
    loc: "Chandigarh",
    date: "2017 to 2020",
  },
];

export default function Education() {
  return (
    <section id="education">
      <SectionHeader index="05" eyebrow="Academic Record" title="Education" />

      <ol className="timeline reveal">
        {education.map((e) => (
          <li className="tl-item" key={e.degree}>
            <div>
              <h3 className="edu-deg">{e.degree}</h3>
              <div className="edu-org">
                {e.org}
                <span className="edu-loc"> · {e.loc}</span>
              </div>
            </div>
            <div className="edu-date">{e.date}</div>
          </li>
        ))}
      </ol>
    </section>
  );
}
