/**
 * Central site configuration.
 *
 * Everything in this file is a value the business owner should confirm
 * before launch. Fields marked TODO are placeholders — swap them for the
 * real thing and the rest of the site updates automatically.
 */

export const site = {
  name: "Tadreej",
  legalName: "Tadreej",
  tagline: "Shades, considered.",
  description:
    "Tadreej is a Tunisian studio for hand-finished leather goods — bags, wallets and book covers worked in graduated tone. Made in small batches, ordered directly through WhatsApp and Instagram.",
  url: "https://tadreej.shop",
  locale: "en",
  currency: "TND",

  whatsappNumber: "21600000000",

  instagramHandle: "tadreej.shop",
  instagramUrl: "https://www.instagram.com/tadreej.shop/",

  email: "",
  city: "Tunis, Tunisia",
  address: "",

  hours: [
    { day: "Monday – Friday", time: "9:00 – 18:00" },
    { day: "Saturday", time: "10:00 – 15:00" },
    { day: "Sunday", time: "Closed" },
  ],

  deliveryNote:
    "Delivery across Tunisia in 2–4 working days. Pickup in Tunis available on request.",
} as const;

export const nav = [
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

/** Builds a wa.me link with a pre-filled, editable message. */
export function whatsappLink(message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${site.whatsappNumber}?text=${text}`;
}

export function whatsappOrderMessage(params: {
  productName: string;
  variant?: string;
  quantity?: number;
}) {
  const { productName, variant, quantity } = params;
  let msg = `Hello Tadreej, I'd like to order ${productName}`;
  if (variant) msg += ` (${variant})`;
  if (quantity && quantity > 1) msg += ` × ${quantity}`;
  msg += ".";
  return msg;
}

export function formatPrice(amount: number) {
  return `${amount.toFixed(2)} ${site.currency}`;
}
