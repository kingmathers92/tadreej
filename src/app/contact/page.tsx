import type { Metadata } from "next";
import { AtSign, MessageCircle, Clock, Truck } from "lucide-react";
import Button from "@/components/Button";
import GradationSwatch from "@/components/GradationSwatch";
import FaqAccordion from "@/components/FaqAccordion";
import { site, whatsappLink } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact",
  description: `Reach ${site.name} on WhatsApp or Instagram — studio hours, delivery and frequently asked questions.`,
};

const faqs = [
  {
    question: "How do I actually place an order?",
    answer:
      "There's no online checkout. Tap “Order via WhatsApp” on any product and we'll take it from there — confirming stock, shade and delivery in the chat.",
  },
  {
    question: "Do you deliver outside Tunis?",
    answer: site.deliveryNote,
  },
  {
    question: "How is payment handled?",
    answer:
      "We'll confirm the details when we confirm your order on WhatsApp, before anything ships.",
  },
  {
    question: "Will my piece look exactly like the photo?",
    answer:
      "Close, but not pixel-identical — everything is hand-finished, so the exact line of the gradient varies slightly piece to piece.",
  },
  {
    question: "Something arrived damaged or wrong — what now?",
    answer:
      "Message us with a photo as soon as you can and we'll sort it out. We'd rather fix it than have you keep something you're not happy with.",
  },
  {
    question: "Do you ship outside Tunisia?",
    answer:
      "Not currently. If you're elsewhere and interested, message us and we'll see what's possible.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="container-editorial py-12 lg:py-16">
        <div className="max-w-xl">
          <div className="flex items-center gap-3">
            <GradationSwatch className="h-3 w-16 rounded-full" />
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-ink-soft">
              Contact
            </span>
          </div>
          <h1 className="text-balance mt-5 font-display text-[2.4rem] italic leading-[1.08] text-ink sm:text-[3.1rem]">
            Talk to the studio directly.
          </h1>
          <p className="mt-5 text-[1.02rem] leading-relaxed text-ink-soft">
            No ticketing system, no bot — messages go straight to the people making the
            pieces.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <a
            href={whatsappLink("Hello Tadreej, I have a question.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-4 rounded-lg border border-line p-6 transition-colors hover:border-ink"
          >
            <MessageCircle size={22} strokeWidth={1.5} className="text-ink" aria-hidden="true" />
            <div>
              <h2 className="font-display text-lg italic text-ink">WhatsApp</h2>
              <p className="mt-1 text-sm text-ink-soft">
                The fastest way to reach us — usually a same-day reply.
              </p>
            </div>
            <span className="link-sweep mt-auto text-sm text-ink">Start a chat</span>
          </a>

          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-4 rounded-lg border border-line p-6 transition-colors hover:border-ink"
          >
            <AtSign size={22} strokeWidth={1.5} className="text-ink" aria-hidden="true" />
            <div>
              <h2 className="font-display text-lg italic text-ink">Instagram</h2>
              <p className="mt-1 text-sm text-ink-soft">
                New pieces and restocks show up here first.
              </p>
            </div>
            <span className="link-sweep mt-auto text-sm text-ink">
              @{site.instagramHandle}
            </span>
          </a>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="flex gap-4 rounded-lg bg-paper p-6">
            <Clock size={20} strokeWidth={1.5} className="mt-0.5 shrink-0 text-ink-soft" aria-hidden="true" />
            <div>
              <h2 className="font-mono text-xs uppercase tracking-wider text-ink-soft">
                Studio hours
              </h2>
              <ul className="mt-2 flex flex-col gap-1">
                {site.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-6 text-sm text-ink">
                    <span className="text-ink-soft">{h.day}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-sm text-ink-soft">{site.city}</p>
            </div>
          </div>

          <div className="flex gap-4 rounded-lg bg-paper p-6">
            <Truck size={20} strokeWidth={1.5} className="mt-0.5 shrink-0 text-ink-soft" aria-hidden="true" />
            <div>
              <h2 className="font-mono text-xs uppercase tracking-wider text-ink-soft">
                Delivery
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink">{site.deliveryNote}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-editorial pb-20 lg:pb-28">
        <h2 className="font-display text-2xl italic text-ink">Frequently asked</h2>
        <div className="mt-6">
          <FaqAccordion items={faqs} />
        </div>
        <div className="mt-10 flex justify-center">
          <Button
            href={whatsappLink("Hello Tadreej, I have a question.")}
            external
            variant="secondary"
            icon={<MessageCircle size={16} strokeWidth={1.75} aria-hidden="true" />}
          >
            Still have a question? Message us
          </Button>
        </div>
      </section>
    </>
  );
}
