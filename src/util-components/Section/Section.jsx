import "./Section.scss";

export function Section({ extraClasses = "", children}) {
  return <section className={`main-section ${extraClasses}`}>{children}</section>;
}
