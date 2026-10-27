import GradationSwatch from "./GradationSwatch";

/**
 * Text-based wordmark treatment. Tadreej doesn't have a supplied logo file,
 * so this stands in for one — swap for an <Image> of the real mark
 * whenever it's available; the gradation swatch beside it can stay as a
 * recurring brand device either way.
 *
 * The name itself stays in Latin script on every locale (like the
 * Instagram handle and URL do) rather than being transliterated, and its
 * font is pinned directly to Fraunces italic via inline style so it's
 * unaffected by the Arabic-locale font/italic overrides in globals.css
 * that apply to translated headings elsewhere on the page.
 */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <GradationSwatch orientation="vertical" className="h-6 w-1.5" />
      <span
        className="text-[1.35rem] leading-none tracking-tight text-ink"
        style={{ fontFamily: "var(--font-fraunces)", fontStyle: "italic" }}
      >
        Tadreej
      </span>
    </span>
  );
}
