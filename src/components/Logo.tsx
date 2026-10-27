import GradationSwatch from "./GradationSwatch";

/**
 * Text-based wordmark treatment. Tadreej doesn't have a supplied logo file,
 * so this stands in for one — swap for an <Image> of the real mark
 * whenever it's available; the gradation swatch beside it can stay as a
 * recurring brand device either way.
 */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <GradationSwatch orientation="vertical" className="h-6 w-1.5" />
      <span className="font-display text-[1.35rem] italic leading-none tracking-tight text-ink">
        Tadreej
      </span>
    </span>
  );
}
