import type { Metadata } from "next";
import ShopBrowser from "@/components/ShopBrowser";
import { products } from "@/lib/products";
import { getDictionary, toLocale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const dict = getDictionary(toLocale(localeParam));
  return { title: dict.shop.eyebrow, description: dict.site.description };
}

export default async function ShopPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale = toLocale(localeParam);
  const dict = getDictionary(locale);

  return (
    <section className="container-editorial py-12 lg:py-16">
      <div className="max-w-xl">
        <span className="font-mono text-xs uppercase tracking-[0.16em] text-ink-soft">
          {dict.shop.eyebrow}
        </span>
        <h1 className="mt-4 font-display text-[2.4rem] italic leading-[1.05] text-ink sm:text-[3rem]">
          {dict.shop.title}
        </h1>
        <p className="mt-4 text-[1.02rem] leading-relaxed text-ink-soft">{dict.shop.body}</p>
      </div>

      <div className="mt-10">
        <ShopBrowser products={products} locale={locale} dict={dict} />
      </div>
    </section>
  );
}
