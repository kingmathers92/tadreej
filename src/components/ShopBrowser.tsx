"use client";

import { useState } from "react";
import type { Category, Product } from "@/lib/products";
import { categoryRamp } from "@/lib/products";
import type { Dictionary, Locale } from "@/lib/i18n/types";
import ProductGrid from "./ProductGrid";

const categoryOrder: Category[] = ["bags", "wallets", "covers"];

export default function ShopBrowser({
  products,
  locale,
  dict,
}: {
  products: Product[];
  locale: Locale;
  dict: Dictionary;
}) {
  const [active, setActive] = useState<Category | "all">("all");

  const filtered = active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <div>
      <div
        role="tablist"
        aria-label={dict.shop.title}
        className="flex flex-wrap items-center gap-2 border-b border-line pb-6"
      >
        <button
          role="tab"
          aria-selected={active === "all"}
          onClick={() => setActive("all")}
          className={`rounded-full px-4 py-2 text-sm transition-colors ${
            active === "all" ? "bg-ink text-paper" : "text-ink-soft hover:text-ink"
          }`}
        >
          {dict.shop.filterAll}
        </button>
        {categoryOrder.map((id) => (
          <button
            key={id}
            role="tab"
            aria-selected={active === id}
            onClick={() => setActive(id)}
            className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-colors ${
              active === id ? "bg-ink text-paper" : "text-ink-soft hover:text-ink"
            }`}
          >
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: active === id ? "var(--color-sand-100)" : categoryRamp[id] }}
            />
            {dict.categories[id]}
          </button>
        ))}
      </div>

      <p className="mt-6 font-mono text-xs uppercase tracking-wider text-ink-soft">
        {filtered.length} {filtered.length === 1 ? dict.common.piece : dict.common.pieces}
      </p>

      <div className="mt-6">
        <ProductGrid products={filtered} locale={locale} dict={dict} />
      </div>
    </div>
  );
}
