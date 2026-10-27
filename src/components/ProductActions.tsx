"use client";

import { useState } from "react";
import { Minus, Plus, MessageCircle } from "lucide-react";
import type { Product } from "@/lib/products";
import { formatPrice, whatsappLink, whatsappOrderMessage } from "@/lib/config";

export default function ProductActions({ product }: { product: Product }) {
  const [variant, setVariant] = useState(product.variants?.[0]);
  const [qty, setQty] = useState(1);

  const orderHref = whatsappLink(
    whatsappOrderMessage({ productName: product.name, variant, quantity: qty })
  );

  return (
    <div>
      {product.variants && product.variants.length > 0 && (
        <div className="mt-2">
          <span className="font-mono text-xs uppercase tracking-wider text-ink-soft">
            Shade
          </span>
          <div className="mt-2.5 flex flex-wrap gap-2">
            {product.variants.map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setVariant(v)}
                aria-pressed={variant === v}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  variant === v
                    ? "border-ink bg-ink text-paper"
                    : "border-line text-ink-soft hover:border-ink hover:text-ink"
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="mt-6">
        <span className="font-mono text-xs uppercase tracking-wider text-ink-soft">
          Quantity
        </span>
        <div className="mt-2.5 inline-flex items-center rounded-md border border-line">
          <button
            type="button"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            aria-label="Decrease quantity"
            disabled={!product.available}
            className="flex h-11 w-11 items-center justify-center text-ink-soft transition-colors hover:text-ink disabled:opacity-40"
          >
            <Minus size={15} strokeWidth={2} aria-hidden="true" />
          </button>
          <span className="w-8 text-center font-mono text-sm text-ink" aria-live="polite">
            {qty}
          </span>
          <button
            type="button"
            onClick={() => setQty((q) => Math.min(9, q + 1))}
            aria-label="Increase quantity"
            disabled={!product.available}
            className="flex h-11 w-11 items-center justify-center text-ink-soft transition-colors hover:text-ink disabled:opacity-40"
          >
            <Plus size={15} strokeWidth={2} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="mt-8 hidden sm:block">
        {product.available ? (
          <a
            href={orderHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-md bg-ink px-6 py-4 text-sm font-medium tracking-wide text-paper transition-opacity hover:opacity-85"
          >
            <MessageCircle size={17} strokeWidth={1.75} aria-hidden="true" />
            Order via WhatsApp — {formatPrice(product.price * qty)}
          </a>
        ) : (
          <div className="rounded-md border border-line px-6 py-4 text-center text-sm text-ink-soft">
            This batch has sold out. Follow Instagram for restock notices.
          </div>
        )}
      </div>

      {/* Sticky mobile order bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-stone/95 p-3 backdrop-blur-sm sm:hidden">
        {product.available ? (
          <a
            href={orderHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-md bg-ink px-6 py-3.5 text-sm font-medium tracking-wide text-paper"
          >
            <MessageCircle size={16} strokeWidth={1.75} aria-hidden="true" />
            Order — {formatPrice(product.price * qty)}
          </a>
        ) : (
          <div className="rounded-md border border-line px-6 py-3.5 text-center text-sm text-ink-soft">
            Sold out this batch
          </div>
        )}
      </div>
      {/* Spacer so the sticky bar never covers content on mobile */}
      <div className="h-20 sm:hidden" aria-hidden="true" />
    </div>
  );
}
