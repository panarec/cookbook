export function Collapse({ active, children }) {
  return <div className={`collapse ${active}`}>{children}</div>;
}
