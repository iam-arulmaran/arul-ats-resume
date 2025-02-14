import "./Section.scss";

export function Section({ extraClasses = "", children }) {
  return (
    <section className={`${extraClasses} main-section`}>{children}</section>
  );
}
