import type { Metadata } from "next";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import GradationSwatch from "@/components/GradationSwatch";
import RevealOnScroll from "@/components/RevealOnScroll";
import { site, whatsappLink } from "@/lib/config";

export const metadata: Metadata = {
  title: "About",
  description: `The story behind ${site.name} — a Tunis studio making hand-finished, small-batch leather goods in graduated shade.`,
};

const materials = [
  {
    title: "Leather",
    body: "Vegetable-tanned hide that darkens and gradates on its own with handling — the material keeps finishing itself for months after it leaves the studio.",
  },
  {
    title: "Dye",
    body: "Hand-brushed or dipped in graduated layers before a piece ever leaves the studio, from pale at the seam to deep at the edge.",
  },
  {
    title: "Thread",
    body: "Waxed linen, hand-stitched with a saddle stitch — slower than a machine, but it won't unravel if one stitch breaks.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="container-editorial py-12 lg:py-16">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <GradationSwatch className="h-3 w-16 rounded-full" />
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-ink-soft">
              About
            </span>
          </div>
          <h1 className="text-balance mt-5 font-display text-[2.4rem] italic leading-[1.08] text-ink sm:text-[3.1rem]">
            One idea, worked through three materials.
          </h1>
          <p className="mt-6 text-[1.05rem] leading-relaxed text-ink-soft">
            Tadreej — تدريج — is the Arabic word for gradation: a gradual shift from one
            shade to the next. It’s also the only rule the studio follows. Every piece we make
            moves through a range of one color rather than mixing several, built by hand,
            one pass at a time.
          </p>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-soft">
            We work from a small studio in Tunis, cutting and stitching vegetable-tanned
            leather by hand. Nothing is outsourced to a factory, so batches are genuinely
            limited to what one hide and one dye batch can hold — usually a few dozen pieces
            at a time.
          </p>
        </div>
      </section>

      <section className="container-editorial pb-16 lg:pb-20">
        <RevealOnScroll>
          <div className="relative aspect-[16/8] w-full overflow-hidden rounded-lg bg-paper">
            <Image
              src="/about/studio-wide.svg"
              alt="The Tadreej studio table with materials in progress"
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
            <SectionHeading eyebrow="What we work in" title="Three materials, one process." />
          </RevealOnScroll>
          <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-3">
            {materials.map((m, i) => (
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
            Questions before you order?
          </h2>
          <p className="text-ink-soft">
            We’re a small studio, not a call center — but we do answer WhatsApp messages
            ourselves, usually the same day.
          </p>
          <Button
            href={whatsappLink("Hello Tadreej, I have a question before ordering.")}
            external
            icon={<MessageCircle size={16} strokeWidth={1.75} aria-hidden="true" />}
          >
            Message the studio
          </Button>
        </div>
      </section>
    </>
  );
}
