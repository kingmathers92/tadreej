export type Locale = "fr" | "ar";

export const locales: Locale[] = ["fr", "ar"];
export const defaultLocale: Locale = "fr";

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export function dirFor(locale: Locale): "ltr" | "rtl" {
  return locale === "ar" ? "rtl" : "ltr";
}

/**
 * Next.js's generated route-param types always type dynamic segments as
 * plain `string` (it can't know about our Locale union), so every page
 * receives `params.locale` as a string and narrows it here. Safe because
 * `dynamicParams = false` on the [locale] layout already 404s any value
 * outside `locales` before a page component ever runs; the defaultLocale
 * fallback below is just defensive.
 */
export function toLocale(value: string): Locale {
  return (locales as string[]).includes(value) ? (value as Locale) : defaultLocale;
}

type Pillar = { title: string; body: string };
type Step = { n: string; title: string; body: string };
type Faq = { question: string; answer: string };
type HourRow = { day: string; time: string };

export type Dictionary = {
  htmlLang: string;

  nav: {
    shop: string;
    about: string;
    contact: string;
    orderWhatsapp: string;
    skipToContent: string;
    openMenu: string;
    closeMenu: string;
    language: string;
  };

  site: {
    tagline: string;
    description: string;
    city: string;
    hours: HourRow[];
    deliveryNote: string;
  };

  common: {
    piece: string;
    pieces: string;
    bestSeller: string;
    new: string;
    soldOut: string;
    orderViaWhatsapp: string;
    currencySuffix: string;
    followHandle: string;
  };

  home: {
    eyebrowWorkshop: string;
    heroLine1: string;
    heroLine2: string;
    heroSub: string;
    ctaShop: string;
    ctaOrderWhatsapp: string;
    heroImgMainAlt: string;
    heroImgDetailAlt: string;
    bestSellersEyebrow: string;
    bestSellersTitle: string;
    viewFullShop: string;
    whyEyebrow: string;
    whyTitle: string;
    pillars: [Pillar, Pillar, Pillar];
    studioEyebrow: string;
    studioTitle: string;
    studioP1: string;
    studioP2: string;
    readFullStory: string;
    studioImgAlt: string;
    orderingEyebrow: string;
    orderingTitle: string;
    orderingDescription: string;
    steps: [Step, Step, Step];
    followEyebrow: string;
    followTitle: string;
    finalTitle: string;
    finalBody: string;
    askQuestion: string;
  };

  shop: {
    eyebrow: string;
    title: string;
    body: string;
    filterAll: string;
    emptyCategory: string;
  };

  categories: {
    bags: string;
    wallets: string;
    covers: string;
  };

  product: {
    backToShop: string;
    shadeLabel: string;
    quantityLabel: string;
    decreaseQty: string;
    increaseQty: string;
    orderViaWhatsappPrice: string; // "{price}" token replaced at render
    soldOutMessage: string;
    orderMobilePrice: string; // "{price}" token
    soldOutMobile: string;
    relatedEyebrow: string;
    relatedTitle: string;
  };

  about: {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
    materialsEyebrow: string;
    materialsTitle: string;
    materials: [Pillar, Pillar, Pillar];
    wideImgAlt: string;
    closingTitle: string;
    closingBody: string;
    messageStudio: string;
  };

  contact: {
    eyebrow: string;
    title: string;
    body: string;
    whatsappCardTitle: string;
    whatsappCardBody: string;
    startChat: string;
    instagramCardTitle: string;
    instagramCardBody: string;
    hoursLabel: string;
    deliveryLabel: string;
    faqHeading: string;
    faqs: [Faq, Faq, Faq, Faq, Faq, Faq];
    stillHaveQuestion: string;
  };

  footer: {
    shopHeading: string;
    hoursHeading: string;
    madeInSmallBatches: string;
  };

  notFound: {
    title: string;
    body: string;
    backHome: string;
  };

  whatsapp: {
    genericQuestion: string;
    questionBeforeOrdering: string;
  };
};
