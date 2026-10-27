import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { site } from "@/lib/config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Fonts are self-hosted (rather than pulled from Google Fonts at request
 * time) so the site has no third-party font CDN dependency — faster,
 * more private, and it keeps working if fonts.googleapis.com is ever
 * blocked or slow on a visitor's network. License files (SIL OFL) for
 * each family live alongside them in src/fonts/.
 */
const fraunces = localFont({
  src: [
    { path: "../fonts/Fraunces-Variable.ttf", style: "normal", weight: "100 900" },
    { path: "../fonts/Fraunces-Italic-Variable.ttf", style: "italic", weight: "100 900" },
  ],
  variable: "--font-fraunces",
  display: "swap",
});

const publicSans = localFont({
  src: [{ path: "../fonts/PublicSans-Variable.ttf", style: "normal", weight: "100 900" }],
  variable: "--font-public-sans",
  display: "swap",
});

const plexMono = localFont({
  src: [
    { path: "../fonts/IBMPlexMono-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/IBMPlexMono-Medium.ttf", weight: "500", style: "normal" },
  ],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: ["Tadreej", "Tunisia", "leather goods", "leather bags", "wallets", "Tunis"],
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: ["/og-image.svg"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ["/og-image.svg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${publicSans.variable} ${plexMono.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
