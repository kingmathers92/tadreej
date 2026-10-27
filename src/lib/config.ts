/**
 * Business-specific constants that don't change by language: contact
 * channels, the brand name itself, and the WhatsApp link builder.
 *
 * Everything user-facing and language-dependent (tagline, hours, delivery
 * note, city label, nav labels) lives in the translation dictionaries at
 * src/lib/i18n/dictionaries/ instead, so it stays in sync across locales.
 *
 * Fields marked TODO are placeholders — swap them for the real thing and
 * the rest of the site updates automatically.
 */

export const site = {
  name: "Tadreej",
  legalName: "Tadreej",
  url: "https://tadreej.shop",

  whatsappNumber: "21600000000",

  instagramHandle: "tadreej.shop",
  instagramUrl: "https://www.instagram.com/tadreej.shop/",


  email: "",
  address: "",
} as const;

/** Builds a wa.me link with a pre-filled, editable message. */
export function whatsappLink(message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${site.whatsappNumber}?text=${text}`;
}
