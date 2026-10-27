import type { Metadata } from "next";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import GradationSwatch from "@/components/GradationSwatch";
import RevealOnScroll from "@/components/RevealOnScroll";
import { whatsappLink } from "@/lib/config";
import { getDictionary, toLocale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const dict = getDictionary(toLocale(localeParam));
  return { title: dict.about.eyebrow, description: dict.about.title };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale = toLocale(localeParam);
  const dict = getDictionary(locale);

  return (
    <>
      <section className="container-editorial py-12 lg:py-16">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <GradationSwatch className="h-3 w-16 rounded-full" />
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-ink-soft">
              {dict.about.eyebrow}
            </span>
          </div>
          <h1 className="text-balance mt-5 font-display text-[2.4rem] italic leading-[1.08] text-ink sm:text-[3.1rem]">
            {dict.about.title}
          </h1>
          <p className="mt-6 text-[1.05rem] leading-relaxed text-ink-soft">{dict.about.p1}</p>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-soft">{dict.about.p2}</p>
        </div>
      </section>

      <section className="container-editorial pb-16 lg:pb-20">
        <RevealOnScroll>
          <div className="relative aspect-[16/8] w-full overflow-hidden rounded-lg bg-paper">
            <Image
              src="/about/studio-wide.svg"
              alt={dict.about.wideImgAlt}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </RevealOnScroll>
      </section>

      <section className="border-y border-line bg-paper/60 py-16 lg:py-24">
        <div className="container-editorial">
          <RevealOnScroll>
            <SectionHeading eyebrow={dict.about.materialsEyebrow} title={dict.about.materialsTitle} />
          </RevealOnScroll>
          <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-3">
            {dict.about.materials.map((m, i) => (
              <RevealOnScroll key={m.title} delay={i * 90}>
                <GradationSwatch orientation="vertical" className="h-10 w-1.5" />
                <h3 className="mt-5 font-display text-xl italic text-ink">{m.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{m.body}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="container-editorial py-16 lg:py-24">
        <div className="mx-auto flex max-w-lg flex-col items-center gap-6 text-center">
          <h2 className="font-display text-[2rem] italic leading-[1.1] text-ink sm:text-[2.4rem]">
            {dict.about.closingTitle}
          </h2>
          <p className="text-ink-soft">{dict.about.closingBody}</p>
          <Button
            href={whatsappLink(dict.whatsapp.questionBeforeOrdering)}
            external
            icon={<MessageCircle size={16} strokeWidth={1.75} aria-hidden="true" />}
          >
            {dict.about.messageStudio}
          </Button>
        </div>
      </section>
    </>
  );
}
