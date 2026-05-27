export default function Chip({ children, selected, onClick, className = '' }) {
  const baseClasses = "flex items-center justify-center rounded-[var(--radius-sm)] px-3 py-2 label transition-colors cursor-pointer select-none";
  const stateClasses = selected 
    ? "bg-[var(--color-purple-primary)] border border-[var(--color-purple-primary)] text-[var(--color-text-primary)] shadow-[var(--shadow-glow)]"
    : "bg-transparent border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-purple-light)]/50";

  return (
    <div onClick={onClick} className={`${baseClasses} ${stateClasses} ${className}`}>
      {children}
    </div>
  );
}
