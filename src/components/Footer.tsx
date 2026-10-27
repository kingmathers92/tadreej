import Link from "next/link";
import { AtSign, MessageCircle } from "lucide-react";
import { nav, site, whatsappLink } from "@/lib/config";
import GradationSwatch from "./GradationSwatch";

export default function Footer() {
  return (
    <footer className="bg-ink text-stone">
      <GradationSwatch className="h-1.5 w-full" />
      <div className="container-editorial grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr] md:py-20">
        <div className="max-w-sm">
          <span className="font-display text-2xl italic leading-none text-paper">
            {site.name}
          </span>
          <p className="mt-4 text-sm leading-relaxed text-stone/70">{site.description}</p>
          <div className="mt-6 flex items-center gap-4">
            <a
              href={whatsappLink("Hello Tadreej, I have a question.")}
              target="_blank"
              rel="noopener noreferrer"
              className="link-sweep flex items-center gap-2 text-sm text-paper"
            >
              <MessageCircle size={16} strokeWidth={1.75} aria-hidden="true" />
              WhatsApp
            </a>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-sweep flex items-center gap-2 text-sm text-paper"
            >
              <AtSign size={16} strokeWidth={1.5} aria-hidden="true" />
              Instagram
            </a>
          </div>
        </div>

        <div>
          <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-stone/50">
            Shop
          </h2>
          <ul className="mt-4 flex flex-col gap-3">
            {nav.map((item) => (
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
            Studio hours
          </h2>
          <ul className="mt-4 flex flex-col gap-2">
            {site.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-6 text-sm text-stone/85">
                <span className="text-stone/60">{h.day}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-stone/60">{site.city}</p>
        </div>
      </div>

      <div className="container-editorial flex flex-col-reverse items-start gap-3 border-t border-stone/15 py-6 text-xs text-stone/45 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {site.legalName}. Made in small batches.</p>
        <p>{site.deliveryNote}</p>
      </div>
    </footer>
  );
}
