import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { getProduct, getRelated, products, categoryRamp } from "@/lib/products";
import { getDictionary, formatPrice, toLocale } from "@/lib/i18n";
import { locales } from "@/lib/i18n/types";
import ProductGallery from "@/components/ProductGallery";
import ProductActions from "@/components/ProductActions";
import ProductGrid from "@/components/ProductGrid";
import SectionHeading from "@/components/SectionHeading";

export function generateStaticParams() {
  return locales.flatMap((locale) => products.map((p) => ({ locale, slug: p.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  const locale = toLocale(localeParam);
  const product = getProduct(slug);
  if (!product) return {};
  const content = product.content[locale];
  return {
    title: content.name,
    description: content.shortDescription,
    openGraph: {
      title: content.name,
      description: content.shortDescription,
      images: [product.image],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: localeParam, slug } = await params;
  const locale = toLocale(localeParam);
  const dict = getDictionary(locale);
  const product = getProduct(slug);
  if (!product) notFound();

  const content = product.content[locale];
  const ramp = categoryRamp[product.category];
  const categoryLabel = dict.categories[product.category];
  const related = getRelated(product);

  return (
    <>
      <section className="container-editorial py-10 lg:py-14">
        <Link
          href={`/${locale}/shop`}
          className="link-sweep inline-flex items-center gap-1.5 text-sm text-ink-soft"
        >
          <ChevronLeft size={15} strokeWidth={2} className="rtl:rotate-180" aria-hidden="true" />
          {dict.product.backToShop}
        </Link>

        <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <ProductGallery images={product.gallery} alt={content.name} />

          <div>
            <div className="flex items-center gap-2">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full" style={{ background: ramp }} />
              <span className="font-mono text-xs uppercase tracking-wider text-ink-soft">
                {categoryLabel}
              </span>
            </div>

            <h1 className="mt-3 font-display text-[2.1rem] italic leading-[1.1] text-ink sm:text-[2.5rem]">
              {content.name}
            </h1>

            <p className="mt-3 font-mono text-lg text-ink">{formatPrice(product.price, locale)}</p>

            <p className="mt-5 text-[1.02rem] leading-relaxed text-ink-soft">
              {content.description}
            </p>

            <div className="mt-7 border-t border-line pt-7">
              <ProductActions product={product} locale={locale} dict={dict} />
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-line bg-paper/60 py-16 lg:py-20">
          <div className="container-editorial">
            <SectionHeading eyebrow={dict.product.relatedEyebrow} title={dict.product.relatedTitle} />
            <div className="mt-10">
              <ProductGrid products={related} locale={locale} dict={dict} />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
