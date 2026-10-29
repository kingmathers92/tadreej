import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { getProduct, getRelated, products, categoryRamp } from "@/lib/products";
import { formatPrice } from "@/lib/i18n";
import ProductGallery from "@/components/ProductGallery";
import ProductActions from "@/components/ProductActions";
import ProductGrid from "@/components/ProductGrid";
import SectionHeading from "@/components/SectionHeading";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: [product.image],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = {
    label: product.category,
    ramp: categoryRamp[product.category],
  };
  const related = getRelated(product);

  return (
    <>
      <section className="container-editorial py-10 lg:py-14">
        <Link
          href="/shop"
          className="link-sweep inline-flex items-center gap-1.5 text-sm text-ink-soft"
        >
          <ChevronLeft size={15} strokeWidth={2} aria-hidden="true" />
          Back to shop
        </Link>

        <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <ProductGallery images={product.gallery} alt={product.name} />

          <div>
            {category && (
              <div className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: category.ramp }}
                />
                <span className="font-mono text-xs uppercase tracking-wider text-ink-soft">
                  {category.label}
                </span>
              </div>
            )}

            <h1 className="mt-3 font-display text-[2.1rem] italic leading-[1.1] text-ink sm:text-[2.5rem]">
              {product.name}
            </h1>

            <p className="mt-3 font-mono text-lg text-ink">
              {formatPrice(product.price)}
            </p>

            <p className="mt-5 text-[1.02rem] leading-relaxed text-ink-soft">
              {product.description}
            </p>

            <div className="mt-7 border-t border-line pt-7">
              <ProductActions product={product} />
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-line bg-paper/60 py-16 lg:py-20">
          <div className="container-editorial">
            <SectionHeading
              eyebrow="You might also like"
              title="More from the studio."
            />
            <div className="mt-10">
              <ProductGrid products={related} />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
