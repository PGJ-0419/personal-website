export function Section({ eyebrow, title, children }) {
  return (
    <section className="section">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      <div className="section-body">{children}</div>
    </section>
  );
}
