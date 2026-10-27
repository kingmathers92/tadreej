import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { site, whatsappLink } from "@/lib/config";
import type { Dictionary, Locale } from "@/lib/i18n/types";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const navItems = [
    { href: `/${locale}/shop`, label: dict.nav.shop },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-stone/90 backdrop-blur-sm">
      <div className="container-editorial flex h-18 items-center justify-between py-4 md:h-20">
        <Link href={`/${locale}`} aria-label={`${site.name} home`} className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-9">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="link-sweep font-sans text-[0.95rem] text-ink-soft transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden shrink-0 items-center gap-5 md:flex">
          <LanguageSwitcher locale={locale} navLabel={dict.nav.language} />
          <a
            href={whatsappLink(dict.whatsapp.genericQuestion)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md bg-ink px-5 py-2.5 text-sm font-medium tracking-wide text-paper transition-opacity hover:opacity-85"
          >
            <MessageCircle size={16} strokeWidth={1.75} aria-hidden="true" />
            {dict.nav.orderWhatsapp}
          </a>
        </div>

        <MobileMenu locale={locale} dict={dict} navItems={navItems} />
      </div>
    </header>
  );
}
