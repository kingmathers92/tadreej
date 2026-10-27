import type { Product } from "@/lib/products";
import type { Dictionary, Locale } from "@/lib/i18n/types";
import ProductCard from "./ProductCard";

export default function ProductGrid({
  products,
  locale,
  dict,
}: {
  products: Product[];
  locale: Locale;
  dict: Dictionary;
}) {
  if (products.length === 0) {
    return <p className="py-16 text-center text-sm text-ink-soft">{dict.shop.emptyCategory}</p>;
  }

  return (
    <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} locale={locale} dict={dict} />
      ))}
    </div>
  );
}
