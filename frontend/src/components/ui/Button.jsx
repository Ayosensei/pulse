export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseClasses = "flex items-center justify-center font-semibold transition-all cursor-pointer";
  
  const variants = {
    primary: "bg-[var(--color-purple-primary)] text-[var(--color-text-primary)] h-[52px] rounded-[var(--radius-xl)] shadow-[var(--shadow-button)] px-4 label text-[15px]",
    secondary: "bg-[var(--color-purple-muted)] border border-[var(--color-purple-primary)] text-[var(--color-purple-light)] h-[40px] rounded-[var(--radius-full)] px-4 label"
  };

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
