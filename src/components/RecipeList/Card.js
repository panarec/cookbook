export function Card({ children, className, hover, setHover }) {
  return <div className={`card ${className}`}>{children}</div>;
}
