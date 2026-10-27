"use client";

import { useState } from "react";
import type { Category, Product } from "@/lib/products";
import { categories } from "@/lib/products";
import ProductGrid from "./ProductGrid";

export default function ShopBrowser({ products }: { products: Product[] }) {
  const [active, setActive] = useState<Category | "all">("all");

  const filtered =
    active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filter by category"
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
          All
        </button>
        {categories.map((c) => (
          <button
            key={c.id}
            role="tab"
            aria-selected={active === c.id}
            onClick={() => setActive(c.id)}
            className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-colors ${
              active === c.id ? "bg-ink text-paper" : "text-ink-soft hover:text-ink"
            }`}
          >
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: active === c.id ? "var(--color-sand-100)" : c.ramp }}
            />
            {c.label}
          </button>
        ))}
      </div>

      <p className="mt-6 font-mono text-xs uppercase tracking-wider text-ink-soft">
        {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
      </p>

      <div className="mt-6">
        <ProductGrid products={filtered} />
      </div>
    </div>
  );
}
