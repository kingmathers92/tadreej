import type { Metadata } from "next";
import ShopBrowser from "@/components/ShopBrowser";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Leather bags, wallets and book covers hand-finished in graduated shade. Ordered directly through WhatsApp.",
};

export default function ShopPage() {
  return (
    <section className="container-editorial py-12 lg:py-16">
      <div className="max-w-xl">
        <span className="font-mono text-xs uppercase tracking-[0.16em] text-ink-soft">
          Shop
        </span>
        <h1 className="mt-4 font-display text-[2.4rem] italic leading-[1.05] text-ink sm:text-[3rem]">
          The full collection.
        </h1>
        <p className="mt-4 text-[1.02rem] leading-relaxed text-ink-soft">
          Everything is made in small, dated batches. When a piece says sold out, it means the
          batch is finished — not that we’ve stopped making it.
        </p>
      </div>

      <div className="mt-10">
        <ShopBrowser products={products} />
      </div>
    </section>
  );
}
