import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import ProductGrid from "@/components/ProductGrid";
import InstagramStrip from "@/components/InstagramStrip";
import RevealOnScroll from "@/components/RevealOnScroll";
import GradationSwatch from "@/components/GradationSwatch";
import { getBestSellers } from "@/lib/products";
import { whatsappLink } from "@/lib/config";
import { getDictionary, toLocale } from "@/lib/i18n";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale = toLocale(localeParam);
  const dict = getDictionary(locale);
  const featured = getBestSellers();
  const base = `/${locale}`;

  return (
    <>
      {/* Hero */}
      <section className="container-editorial grid gap-10 pb-16 pt-10 sm:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:pb-24 lg:pt-16">
        <div>
          <div className="flex items-center gap-3">
            <GradationSwatch className="h-3 w-16 rounded-full" />
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-ink-soft">
              {dict.home.eyebrowWorkshop}
            </span>
          </div>

          <h1 className="text-balance mt-6 font-display text-[2.75rem] italic leading-[1.03] text-ink sm:text-[3.6rem] lg:text-[4.1rem]">
            {dict.home.heroLine1}
            <br />
            {dict.home.heroLine2}
          </h1>

          <p className="mt-6 max-w-md text-[1.1rem] leading-relaxed text-ink-soft">
            {dict.home.heroSub}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button
              href={`${base}/shop`}
              icon={<ArrowRight size={16} strokeWidth={2} className="rtl:rotate-180" aria-hidden="true" />}
            >
              {dict.home.ctaShop}
            </Button>
            <Button
              href={whatsappLink(dict.whatsapp.genericQuestion)}
              external
              variant="secondary"
              icon={<MessageCircle size={16} strokeWidth={1.75} aria-hidden="true" />}
            >
              {dict.home.ctaOrderWhatsapp}
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-paper lg:ms-6">
            <Image
              src="/hero/hero-main.svg"
              alt={dict.home.heroImgMainAlt}
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -start-4 hidden aspect-[4/5] w-40 overflow-hidden rounded-lg border-4 border-stone bg-paper shadow-[0_18px_40px_-20px_rgba(32,28,24,0.35)] sm:block">
            <Image
              src="/hero/hero-detail.svg"
              alt={dict.home.heroImgDetailAlt}
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
            <SectionHeading eyebrow={dict.home.bestSellersEyebrow} title={dict.home.bestSellersTitle} />
            <Button href={`${base}/shop`} variant="ghost" className="shrink-0">
              {dict.home.viewFullShop}
            </Button>
          </div>
        </RevealOnScroll>
        <div className="mt-10">
          <ProductGrid products={featured} locale={locale} dict={dict} />
        </div>
      </section>

      {/* Why Tadreej */}
      <section className="border-y border-line bg-paper/60 py-16 lg:py-24">
        <div className="container-editorial">
          <RevealOnScroll>
            <SectionHeading eyebrow={dict.home.whyEyebrow} title={dict.home.whyTitle} align="center" />
          </RevealOnScroll>
          <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-3">
            {dict.home.pillars.map((p, i) => (
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
              {dict.home.studioEyebrow}
            </span>
            <h2 className="text-balance mt-4 font-display text-[2rem] italic leading-[1.1] text-ink sm:text-[2.4rem]">
              {dict.home.studioTitle}
            </h2>
            <p className="mt-5 text-[1.02rem] leading-relaxed text-ink-soft">{dict.home.studioP1}</p>
            <p className="mt-4 text-[1.02rem] leading-relaxed text-ink-soft">{dict.home.studioP2}</p>
            <Button href={`${base}/about`} variant="ghost" className="mt-6">
              {dict.home.readFullStory}
            </Button>
          </RevealOnScroll>
          <RevealOnScroll className="order-1 lg:order-2" delay={100}>
            <div className="relative aspect-[5/4] overflow-hidden rounded-lg bg-paper">
              <Image
                src="/about/studio-table.svg"
                alt={dict.home.studioImgAlt}
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
              eyebrow={dict.home.orderingEyebrow}
              title={dict.home.orderingTitle}
              description={dict.home.orderingDescription}
              className="[&_h2]:text-paper [&_p]:text-stone/70 [&_span]:text-stone/50"
            />
          </RevealOnScroll>
          <div className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-8">
            {dict.home.steps.map((s, i) => (
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
          <SectionHeading eyebrow={dict.home.followEyebrow} title={dict.home.followTitle} align="center" />
        </RevealOnScroll>
        <div className="mt-10">
          <InstagramStrip dict={dict} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="container-editorial pb-20 lg:pb-28">
        <div className="flex flex-col items-center gap-6 rounded-lg bg-paper px-6 py-16 text-center sm:px-16">
          <GradationSwatch className="h-2 w-28 rounded-full" />
          <h2 className="text-balance max-w-lg font-display text-[2.2rem] italic leading-[1.08] text-ink sm:text-[2.6rem]">
            {dict.home.finalTitle}
          </h2>
          <p className="max-w-sm text-ink-soft">{dict.home.finalBody}</p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
            <Button
              href={`${base}/shop`}
              icon={<ArrowRight size={16} strokeWidth={2} className="rtl:rotate-180" aria-hidden="true" />}
            >
              {dict.home.ctaShop}
            </Button>
            <Button
              href={whatsappLink(dict.whatsapp.genericQuestion)}
              external
              variant="secondary"
              icon={<MessageCircle size={16} strokeWidth={1.75} aria-hidden="true" />}
            >
              {dict.home.askQuestion}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
