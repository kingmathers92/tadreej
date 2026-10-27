"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, AtSign, MessageCircle } from "lucide-react";
import { site, whatsappLink } from "@/lib/config";
import type { Dictionary, Locale } from "@/lib/i18n/types";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";

export default function MobileMenu({
  locale,
  dict,
  navItems,
}: {
  locale: Locale;
  dict: Dictionary;
  navItems: { href: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={dict.nav.openMenu}
        aria-expanded={open}
        className="-me-2 flex h-11 w-11 items-center justify-center text-ink"
      >
        <Menu size={22} strokeWidth={1.5} aria-hidden="true" />
      </button>

      {open && (
        <div className="fixed inset-0 z-[90] flex flex-col bg-stone">
          <div className="container-editorial flex h-20 items-center justify-between">
            <Link href={`/${locale}`} onClick={() => setOpen(false)} aria-label={`${site.name} home`}>
              <Logo />
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={dict.nav.closeMenu}
              className="-me-2 flex h-11 w-11 items-center justify-center text-ink"
            >
              <X size={22} strokeWidth={1.5} aria-hidden="true" />
            </button>
          </div>

          <nav className="container-editorial mt-6 flex flex-1 flex-col justify-between pb-10">
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.href} className="border-b border-line">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center py-5 font-display text-[2rem] italic leading-none text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-5">
              <LanguageSwitcher locale={locale} navLabel={dict.nav.language} className="justify-center" />
              <a
                href={whatsappLink(dict.whatsapp.genericQuestion)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-md bg-ink px-6 py-4 text-sm font-medium tracking-wide text-paper"
              >
                <MessageCircle size={17} strokeWidth={1.75} aria-hidden="true" />
                {dict.nav.orderWhatsapp}
              </a>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 py-2 text-sm text-ink-soft"
              >
                <AtSign size={16} strokeWidth={1.5} aria-hidden="true" />
                @{site.instagramHandle}
              </a>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
