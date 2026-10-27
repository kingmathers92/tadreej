import type { Metadata } from "next";
import { AtSign, MessageCircle, Clock, Truck } from "lucide-react";
import Button from "@/components/Button";
import GradationSwatch from "@/components/GradationSwatch";
import FaqAccordion from "@/components/FaqAccordion";
import { site, whatsappLink } from "@/lib/config";
import { getDictionary, toLocale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const dict = getDictionary(toLocale(localeParam));
  return { title: dict.contact.eyebrow, description: dict.contact.body };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale = toLocale(localeParam);
  const dict = getDictionary(locale);

  return (
    <>
      <section className="container-editorial py-12 lg:py-16">
        <div className="max-w-xl">
          <div className="flex items-center gap-3">
            <GradationSwatch className="h-3 w-16 rounded-full" />
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-ink-soft">
              {dict.contact.eyebrow}
            </span>
          </div>
          <h1 className="text-balance mt-5 font-display text-[2.4rem] italic leading-[1.08] text-ink sm:text-[3.1rem]">
            {dict.contact.title}
          </h1>
          <p className="mt-5 text-[1.02rem] leading-relaxed text-ink-soft">{dict.contact.body}</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <a
            href={whatsappLink(dict.whatsapp.genericQuestion)}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-4 rounded-lg border border-line p-6 transition-colors hover:border-ink"
          >
            <MessageCircle size={22} strokeWidth={1.5} className="text-ink" aria-hidden="true" />
            <div>
              <h2 className="font-display text-lg italic text-ink">{dict.contact.whatsappCardTitle}</h2>
              <p className="mt-1 text-sm text-ink-soft">{dict.contact.whatsappCardBody}</p>
            </div>
            <span className="link-sweep mt-auto text-sm text-ink">{dict.contact.startChat}</span>
          </a>

          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-4 rounded-lg border border-line p-6 transition-colors hover:border-ink"
          >
            <AtSign size={22} strokeWidth={1.5} className="text-ink" aria-hidden="true" />
            <div>
              <h2 className="font-display text-lg italic text-ink">{dict.contact.instagramCardTitle}</h2>
              <p className="mt-1 text-sm text-ink-soft">{dict.contact.instagramCardBody}</p>
            </div>
            <span className="link-sweep mt-auto text-sm text-ink">@{site.instagramHandle}</span>
          </a>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="flex gap-4 rounded-lg bg-paper p-6">
            <Clock size={20} strokeWidth={1.5} className="mt-0.5 shrink-0 text-ink-soft" aria-hidden="true" />
            <div>
              <h2 className="font-mono text-xs uppercase tracking-wider text-ink-soft">
                {dict.contact.hoursLabel}
              </h2>
              <ul className="mt-2 flex flex-col gap-1">
                {dict.site.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-6 text-sm text-ink">
                    <span className="text-ink-soft">{h.day}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-sm text-ink-soft">{dict.site.city}</p>
            </div>
          </div>

          <div className="flex gap-4 rounded-lg bg-paper p-6">
            <Truck size={20} strokeWidth={1.5} className="mt-0.5 shrink-0 text-ink-soft" aria-hidden="true" />
            <div>
              <h2 className="font-mono text-xs uppercase tracking-wider text-ink-soft">
                {dict.contact.deliveryLabel}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink">{dict.site.deliveryNote}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-editorial pb-20 lg:pb-28">
        <h2 className="font-display text-2xl italic text-ink">{dict.contact.faqHeading}</h2>
        <div className="mt-6">
          <FaqAccordion items={dict.contact.faqs} />
        </div>
        <div className="mt-10 flex justify-center">
          <Button
            href={whatsappLink(dict.whatsapp.genericQuestion)}
            external
            variant="secondary"
            icon={<MessageCircle size={16} strokeWidth={1.75} aria-hidden="true" />}
          >
            {dict.contact.stillHaveQuestion}
          </Button>
        </div>
      </section>
    </>
  );
}
