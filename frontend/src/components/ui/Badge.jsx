export default function Badge({ type, children, className = '' }) {
  const styles = {
    HOT: "bg-[var(--color-success)]/15 text-[var(--color-success)]",
    WAIT: "bg-[var(--color-warning)]/15 text-[var(--color-warning)]",
    HOLD: "bg-[var(--color-danger)]/15 text-[var(--color-danger)]",
    default: "bg-[var(--color-surface-2)] text-[var(--color-text-secondary)]"
  };

  return (
    <span className={`px-2 py-1 rounded-[var(--radius-sm)] label text-[11px] font-semibold ${styles[type] || styles.default} ${className}`}>
      {children}
    </span>
  );
}
