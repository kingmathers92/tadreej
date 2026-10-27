import type { Locale } from "./types";

export function buildOrderMessage(
  locale: Locale,
  params: { productName: string; variant?: string; quantity?: number }
): string {
  const { productName, variant, quantity } = params;
  const greeting = locale === "ar" ? "مرحبًا تدريج، أرغب في طلب" : "Bonjour Tadreej, je voudrais commander";

  let msg = `${greeting} ${productName}`;
  if (variant) msg += ` (${variant})`;
  if (quantity && quantity > 1) msg += ` × ${quantity}`;
  msg += ".";
  return msg;
}
