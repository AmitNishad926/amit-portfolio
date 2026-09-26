interface Props {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  description,
  align = "center",
  className = "",
}: Props) {
  const isCenter = align === "center";
  return (
    <div
      className={[isCenter ? "text-center" : "text-left", className].filter(Boolean).join(" ")}
      style={{ marginBottom: description ? "4.5rem" : "2.75rem" }}
    >
      {/* Explicit block container with generous spacing so the pill badge never overlaps heading text */}
      <div style={{ marginBottom: "1.75rem" }}>
        <span className="label">{label}</span>
      </div>

      <h2
        style={{
          fontSize: "clamp(2rem, 3.8vw, 3.1rem)",
          fontWeight: 800,
          lineHeight: 1.25,
          letterSpacing: "-0.025em",
          color: "var(--c-white)",
          marginBottom: description ? "1.5rem" : 0,
          paddingBottom: "6px",
          overflow: "visible",
        }}
      >
        {title}
      </h2>

      {description && (
        <p
          style={{
            fontSize: "1.05rem",
            color: "var(--c-muted)",
            lineHeight: 1.85,
            maxWidth: "660px",
            margin: isCenter ? "0 auto" : undefined,
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}

