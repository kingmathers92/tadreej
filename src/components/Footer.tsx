import Link from "next/link";
import { AtSign, MessageCircle } from "lucide-react";
import { site, whatsappLink } from "@/lib/config";
import type { Dictionary, Locale } from "@/lib/i18n/types";
import GradationSwatch from "./GradationSwatch";

export default function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const navItems = [
    { href: `/${locale}/shop`, label: dict.nav.shop },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  return (
    <footer className="bg-ink text-stone">
      <GradationSwatch className="h-1.5 w-full" />
      <div className="container-editorial grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr] md:py-20">
        <div className="max-w-sm">
          <span
            className="text-2xl leading-none text-paper"
            style={{ fontFamily: "var(--font-fraunces)", fontStyle: "italic" }}
          >
            {site.name}
          </span>
          <p className="mt-4 text-sm leading-relaxed text-stone/70">{dict.site.description}</p>
          <div className="mt-6 flex items-center gap-4">
            <a
              href={whatsappLink(dict.whatsapp.genericQuestion)}
              target="_blank"
              rel="noopener noreferrer"
              className="link-sweep flex items-center gap-2 text-sm text-paper"
            >
              <MessageCircle size={16} strokeWidth={1.75} aria-hidden="true" />
              {dict.contact.whatsappCardTitle}
            </a>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-sweep flex items-center gap-2 text-sm text-paper"
            >
              <AtSign size={16} strokeWidth={1.5} aria-hidden="true" />
              {dict.contact.instagramCardTitle}
            </a>
          </div>
        </div>

        <div>
          <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-stone/50">
            {dict.footer.shopHeading}
          </h2>
          <ul className="mt-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-sweep text-sm text-stone/85">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-stone/50">
            {dict.footer.hoursHeading}
          </h2>
          <ul className="mt-4 flex flex-col gap-2">
            {dict.site.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-6 text-sm text-stone/85">
                <span className="text-stone/60">{h.day}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-stone/60">{dict.site.city}</p>
        </div>
      </div>

      <div className="container-editorial flex flex-col-reverse items-start gap-3 border-t border-stone/15 py-6 text-xs text-stone/45 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {site.legalName}. {dict.footer.madeInSmallBatches}
        </p>
        <p>{dict.site.deliveryNote}</p>
      </div>
    </footer>
  );
}
