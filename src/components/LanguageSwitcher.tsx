"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, stripLocale, type Locale } from "@/lib/i18n";

const labels: Record<Locale, string> = { fr: "FR", ar: "ع" };
const fullLabels: Record<Locale, string> = { fr: "Français", ar: "العربية" };

export default function LanguageSwitcher({
  locale,
  navLabel,
  className = "",
}: {
  locale: Locale;
  navLabel: string;
  className?: string;
}) {
  const pathname = usePathname();
  const rest = stripLocale(pathname);

  return (
    <div className={`flex items-center gap-1 ${className}`} role="group" aria-label={navLabel}>
      {locales.map((l) => (
        <Link
          key={l}
          href={`/${l}${rest === "/" ? "" : rest}`}
          aria-current={l === locale ? "true" : undefined}
          aria-label={fullLabels[l]}
          className={`flex h-8 min-w-8 items-center justify-center rounded-full px-2 font-mono text-xs transition-colors ${
            l === locale ? "bg-ink text-paper" : "text-ink-soft hover:text-ink"
          }`}
        >
          {labels[l]}
        </Link>
      ))}
    </div>
  );
}
