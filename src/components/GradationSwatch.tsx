const STEPS = [
  "var(--color-umber-900)",
  "var(--color-clay-700)",
  "var(--color-clay-500)",
  "var(--color-clay-300)",
  "var(--color-sand-100)",
];

export default function GradationSwatch({
  className = "",
  orientation = "horizontal",
  reverse = false,
}: {
  className?: string;
  orientation?: "horizontal" | "vertical";
  reverse?: boolean;
}) {
  const steps = reverse ? [...STEPS].reverse() : STEPS;
  return (
    <span
      aria-hidden="true"
      className={`inline-flex overflow-hidden rounded-[2px] ${
        orientation === "vertical" ? "flex-col" : "flex-row"
      } ${className}`}
    >
      {steps.map((color, i) => (
        <span key={i} style={{ background: color, flex: "1 1 0%" }} />
      ))}
    </span>
  );
}
