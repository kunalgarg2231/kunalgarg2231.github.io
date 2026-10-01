type SectionHeaderProps = {
  index: string;
  eyebrow: string;
  title: string;
};

export default function SectionHeader({ index, eyebrow, title }: SectionHeaderProps) {
  return (
    <div className="section-head reveal">
      <div className="eyebrow">
        <span className="eyebrow-idx">{index}</span>
        <span className="eyebrow-bar" aria-hidden="true" />
        {eyebrow}
      </div>
      <h2 className="section-title">{title}</h2>
    </div>
  );
}
