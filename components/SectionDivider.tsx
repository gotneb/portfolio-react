interface SectionDividerProps {
  variant?: "diamond" | "star";
  className?: string;
}

export default function SectionDivider({
  variant = "diamond",
  className = "",
}: SectionDividerProps) {
  return (
    <div
      className={`flex items-center justify-center gap-3 my-6 ${className}`}
      aria-hidden="true"
    >
      <span
        className="block h-px w-12"
        style={{ background: "var(--border-strong)" }}
      />
      <span
        className="text-sm font-light tracking-widest"
        style={{ color: "var(--accent-secondary)" }}
      >
        {variant === "diamond" ? "♦" : "♦ ★ ♦"}
      </span>
      <span
        className="block h-px w-12"
        style={{ background: "var(--border-strong)" }}
      />
    </div>
  );
}
