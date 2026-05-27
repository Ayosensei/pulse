export default function Card({ children, glow, className = '' }) {
  const baseClasses = "bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-md)] p-[var(--spacing-4)] shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-[1px] hover:shadow-lg hover:border-[var(--color-border)]/80";
  const glowClasses = glow ? "border-[var(--color-purple-light)] shadow-[var(--shadow-glow)]" : "";
  
  return (
    <div className={`${baseClasses} ${glowClasses} ${className}`}>
      {children}
    </div>
  );
}
