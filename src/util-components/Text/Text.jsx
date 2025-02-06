import "./Text.scss";

export function Text({ children, classes }) {
  return <p className={classes}>{children}</p>;
}
