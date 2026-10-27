import GradationSwatch from "./GradationSwatch";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}>
      {eyebrow && (
        <div
          className={`mb-4 flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}
        >
          <GradationSwatch className="h-3.5 w-3.5 rounded-full" />
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-ink-soft">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-balance font-display text-[2.1rem] leading-[1.08] text-ink sm:text-[2.6rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-soft">{description}</p>
      )}
    </div>
  );
}
