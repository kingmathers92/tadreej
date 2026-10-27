import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { site } from "@/lib/config";
import { locales, dirFor, toLocale } from "@/lib/i18n/types";
import { getDictionary } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Fonts are self-hosted (rather than pulled from Google Fonts at request
 * time) so the site has no third-party font CDN dependency. Both the
 * Latin and Arabic font families are declared here unconditionally --
 * next/font only emits an @font-face rule, the browser only actually
 * fetches whichever family a page's text ends up using, so this doesn't
 * cost French pages an Arabic font download or vice versa. Which family
 * applies is decided in globals.css via a :lang(ar) override.
 */
const fraunces = localFont({
  src: [
    { path: "../../fonts/Fraunces-Variable.ttf", style: "normal", weight: "100 900" },
    { path: "../../fonts/Fraunces-Italic-Variable.ttf", style: "italic", weight: "100 900" },
  ],
  variable: "--font-fraunces",
  display: "swap",
});

const publicSans = localFont({
  src: [{ path: "../../fonts/PublicSans-Variable.ttf", style: "normal", weight: "100 900" }],
  variable: "--font-public-sans",
  display: "swap",
});

const plexMono = localFont({
  src: [
    { path: "../../fonts/IBMPlexMono-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../fonts/IBMPlexMono-Medium.ttf", weight: "500", style: "normal" },
  ],
  variable: "--font-plex-mono",
  display: "swap",
});

const amiri = localFont({
  src: [
    { path: "../../fonts/Amiri-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../fonts/Amiri-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-amiri",
  display: "swap",
});

const plexArabic = localFont({
  src: [
    { path: "../../fonts/IBMPlexSansArabic-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../fonts/IBMPlexSansArabic-Medium.ttf", weight: "500", style: "normal" },
    { path: "../../fonts/IBMPlexSansArabic-SemiBold.ttf", weight: "600", style: "normal" },
  ],
  variable: "--font-plex-arabic",
  display: "swap",
});

const fontVariables = `${fraunces.variable} ${publicSans.variable} ${plexMono.variable} ${amiri.variable} ${plexArabic.variable}`;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Any path segment other than "fr" or "ar" (e.g. /xyz) should 404 rather
// than render with an undefined dictionary.
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = toLocale(localeParam);
  const dict = getDictionary(locale);
  const title = `${site.name} \u2014 ${dict.site.tagline}`;

  return {
    metadataBase: new URL(site.url),
    title: { default: title, template: `%s \u2014 ${site.name}` },
    description: dict.site.description,
    keywords: ["Tadreej", "Tunisie", "maroquinerie", "sacs en cuir", "Tunis"],
    openGraph: {
      title,
      description: dict.site.description,
      url: `${site.url}/${locale}`,
      siteName: site.name,
      images: ["/og-image.svg"],
      locale: locale === "ar" ? "ar_TN" : "fr_TN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: dict.site.description,
      images: ["/og-image.svg"],
    },
    alternates: {
      canonical: `/${locale}`,
      languages: { fr: "/fr", ar: "/ar" },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = toLocale(localeParam);
  const dict = getDictionary(locale);
  const dir = dirFor(locale);

  return (
    <html lang={dict.htmlLang} dir={dir} className={fontVariables}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          {dict.nav.skipToContent}
        </a>
        <Header locale={locale} dict={dict} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer locale={locale} dict={dict} />
      </body>
    </html>
  );
}
