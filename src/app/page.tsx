import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import ProductGrid from "@/components/ProductGrid";
import InstagramStrip from "@/components/InstagramStrip";
import RevealOnScroll from "@/components/RevealOnScroll";
import GradationSwatch from "@/components/GradationSwatch";
import { getBestSellers } from "@/lib/products";
import { site, whatsappLink } from "@/lib/config";

const pillars = [
  {
    title: "Made by hand, not printed",
    body: "Every gradient here comes from a hand-brushed dye layer or a burnished edge — not a pattern applied on top. That's why no two pieces match exactly.",
  },
  {
    title: "Ages into its own shade",
    body: "Vegetable-tanned leather darkens and gradates on its own with handling — buy it pale, watch it deepen over months of use.",
  },
  {
    title: "Small batches only",
    body: "Each run is limited by one hide and one dye batch. When a batch sells out, it's gone until the next one — we don't reorder from a factory.",
  },
];

const steps = [
  {
    n: "01",
    title: "Message us on WhatsApp",
    body: "Tap “Order via WhatsApp” on any piece and the message arrives with what you want already written in.",
  },
  {
    n: "02",
    title: "We confirm stock and delivery",
    body: "A real person from the studio replies — usually the same day — to confirm the piece is in stock and quote delivery time.",
  },
  {
    n: "03",
    title: "It ships in small-batch packaging",
    body: "Your piece is wrapped in the studio and sent out, tracked, arriving within 2–4 working days across Tunisia.",
  },
];

export default function HomePage() {
  const featured = getBestSellers();

  return (
    <>
      {/* Hero */}
      <section className="container-editorial grid gap-10 pb-16 pt-10 sm:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:pb-24 lg:pt-16">
        <div>
          <div className="flex items-center gap-3">
            <GradationSwatch className="h-3 w-16 rounded-full" />
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-ink-soft">
              Tunis workshop
            </span>
          </div>

          <h1 className="text-balance mt-6 font-display text-[2.75rem] italic leading-[1.03] text-ink sm:text-[3.6rem] lg:text-[4.1rem]">
            Nothing here
            <br />
            is one color.
          </h1>

          <p className="mt-6 max-w-md text-[1.1rem] leading-relaxed text-ink-soft">
            {site.name} hand-finishes leather bags, wallets and book covers in graduated
            tone — made in small batches in Tunis, ordered straight through WhatsApp.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="/shop" icon={<ArrowRight size={16} strokeWidth={2} aria-hidden="true" />}>
              Shop the collection
            </Button>
            <Button
              href={whatsappLink("Hello Tadreej, I have a question.")}
              external
              variant="secondary"
              icon={<MessageCircle size={16} strokeWidth={1.75} aria-hidden="true" />}
            >
              Order on WhatsApp
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-paper lg:ml-6">
            <Image
              src="/hero/hero-main.svg"
              alt="A graduated set of Tadreej pieces, arranged from deepest to lightest shade"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 hidden aspect-[4/5] w-40 overflow-hidden rounded-lg border-4 border-stone bg-paper shadow-[0_18px_40px_-20px_rgba(32,28,24,0.35)] sm:block">
            <Image
              src="/hero/hero-detail.svg"
              alt="Detail of a hand-dipped gradient finish"
              fill
              sizes="160px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Featured / best sellers */}
      <section className="container-editorial py-16 lg:py-24">
        <RevealOnScroll>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Best sellers"
              title="Start with what people order most."
            />
            <Button href="/shop" variant="ghost" className="shrink-0">
              View full shop
            </Button>
          </div>
        </RevealOnScroll>
        <div className="mt-10">
          <ProductGrid products={featured} />
        </div>
      </section>

      {/* Why Tadreej */}
      <section className="border-y border-line bg-paper/60 py-16 lg:py-24">
        <div className="container-editorial">
          <RevealOnScroll>
            <SectionHeading eyebrow="Why Tadreej" title="A gradient can't be rushed." align="center" />
          </RevealOnScroll>
          <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-3">
            {pillars.map((p, i) => (
              <RevealOnScroll key={p.title} delay={i * 90}>
                <div className="flex flex-col items-start">
                  <GradationSwatch orientation="vertical" className="h-10 w-1.5" />
                  <h3 className="mt-5 font-display text-xl italic text-ink">{p.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{p.body}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Brand story */}
      <section className="container-editorial py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <RevealOnScroll className="order-2 lg:order-1">
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-ink-soft">
              The studio
            </span>
            <h2 className="text-balance mt-4 font-display text-[2rem] italic leading-[1.1] text-ink sm:text-[2.4rem]">
              Tadreej means gradation — that’s the whole idea.
            </h2>
            <p className="mt-5 text-[1.02rem] leading-relaxed text-ink-soft">
              We work in one material — vegetable-tanned leather — and push it through its
              own range of shade rather than mixing in a new color. It’s slower than buying
              finished stock, and it means every batch is genuinely limited. What you see on
              Instagram is what’s actually on the studio table that week.
            </p>
            <p className="mt-4 text-[1.02rem] leading-relaxed text-ink-soft">
              Based in Tunis, sold directly — no wholesalers, no showroom markup.
            </p>
            <Button href="/about" variant="ghost" className="mt-6">
              Read the full story
            </Button>
          </RevealOnScroll>
          <RevealOnScroll className="order-1 lg:order-2" delay={100}>
            <div className="relative aspect-[5/4] overflow-hidden rounded-lg bg-paper">
              <Image
                src="/about/studio-table.svg"
                alt="Materials laid out on the Tadreej studio table"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* How ordering works */}
      <section className="border-y border-line bg-ink py-16 text-stone lg:py-24">
        <div className="container-editorial">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Ordering"
              title="No cart. Just a message."
              description="There's no online payment system yet — every order is confirmed by a person, over WhatsApp."
              className="[&_h2]:text-paper [&_p]:text-stone/70 [&_span]:text-stone/50"
            />
          </RevealOnScroll>
          <div className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-8">
            {steps.map((s, i) => (
              <RevealOnScroll key={s.n} delay={i * 90}>
                <span className="font-mono text-sm text-stone/40">{s.n}</span>
                <h3 className="mt-3 font-display text-xl italic text-paper">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-stone/65">{s.body}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="container-editorial py-16 lg:py-24">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Follow along"
            title="Most of what we make shows up here first."
            align="center"
          />
        </RevealOnScroll>
        <div className="mt-10">
          <InstagramStrip />
        </div>
      </section>

      {/* Final CTA */}
      <section className="container-editorial pb-20 lg:pb-28">
        <div className="flex flex-col items-center gap-6 rounded-lg bg-paper px-6 py-16 text-center sm:px-16">
          <GradationSwatch className="h-2 w-28 rounded-full" />
          <h2 className="text-balance max-w-lg font-display text-[2.2rem] italic leading-[1.08] text-ink sm:text-[2.6rem]">
            Ready to see the range in person?
          </h2>
          <p className="max-w-sm text-ink-soft">
            Browse the collection, or send a message if you’re not sure where to start.
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
            <Button href="/shop" icon={<ArrowRight size={16} strokeWidth={2} aria-hidden="true" />}>
              Shop the collection
            </Button>
            <Button
              href={whatsappLink("Hello Tadreej, I have a question.")}
              external
              variant="secondary"
              icon={<MessageCircle size={16} strokeWidth={1.75} aria-hidden="true" />}
            >
              Ask a question
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
