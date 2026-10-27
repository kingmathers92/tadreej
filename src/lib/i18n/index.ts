import type { Locale, Dictionary } from "./types";
import { fr } from "./dictionaries/fr";
import { ar } from "./dictionaries/ar";

export type { Locale, Dictionary } from "./types";
export { locales, defaultLocale, dirFor, toLocale } from "./types";

const dictionaries: Record<Locale, Dictionary> = { fr, ar };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

/** Tunisian Dinar is quoted to 3 decimals (the millime). */
export function formatPrice(amount: number, locale: Locale): string {
  const dict = getDictionary(locale);
  const fixed = amount.toFixed(3);
  const numeral = locale === "fr" ? fixed.replace(".", ",") : fixed;
  return `${numeral} ${dict.common.currencySuffix}`;
}

export function localizePath(pathWithoutLocale: string, locale: Locale): string {
  const clean = pathWithoutLocale === "/" ? "" : pathWithoutLocale;
  return `/${locale}${clean}`;
}

/** Strips a leading /fr or /ar segment, returning the locale-agnostic path. */
export function stripLocale(pathname: string): string {
  const match = pathname.match(/^\/(fr|ar)(\/.*)?$/);
  if (!match) return pathname;
  return match[2] ?? "/";
}
