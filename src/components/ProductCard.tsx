import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import type { Product } from "@/lib/products";
import { categories } from "@/lib/products";
import { formatPrice, whatsappLink, whatsappOrderMessage } from "@/lib/config";

export default function ProductCard({ product }: { product: Product }) {
  const category = categories.find((c) => c.id === product.category);

  return (
    <div className="group relative flex flex-col">
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-paper">
        <Link
          href={`/shop/${product.slug}`}
          className="absolute inset-0 z-10"
          aria-label={product.name}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
            className={`object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] ${
              product.available ? "" : "grayscale"
            }`}
          />
        </Link>

        <div className="pointer-events-none absolute left-3 top-3 z-20 flex flex-wrap gap-1.5">
          {product.bestSeller && (
            <span className="rounded-sm bg-ink/90 px-2 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-paper">
              Best seller
            </span>
          )}
          {product.new && (
            <span className="rounded-sm bg-paper/95 px-2 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-ink">
              New
            </span>
          )}
        </div>

        {!product.available && (
          <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-ink/25">
            <span className="rounded-sm bg-stone px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-ink">
              Sold out
            </span>
          </div>
        )}

        {product.available && (
          <a
            href={whatsappLink(whatsappOrderMessage({ productName: product.name }))}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-x-3 bottom-3 z-30 flex translate-y-2 items-center justify-center gap-2 rounded-md bg-paper/95 py-2.5 text-xs font-medium uppercase tracking-wide text-ink opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:translate-y-0 motion-reduce:opacity-100"
          >
            <MessageCircle size={14} strokeWidth={2} aria-hidden="true" />
            Order via WhatsApp
          </a>
        )}
      </div>

      <div className="mt-3.5 flex items-start justify-between gap-3">
        <div>
          <Link href={`/shop/${product.slug}`} className="link-sweep">
            <h3 className="font-sans text-[0.95rem] font-medium text-ink">{product.name}</h3>
          </Link>
          {category && (
            <div className="mt-1.5 flex items-center gap-1.5">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: category.ramp }}
              />
              <span className="font-mono text-[0.7rem] uppercase tracking-wider text-ink-soft">
                {category.label}
              </span>
            </div>
          )}
        </div>
        <span className="whitespace-nowrap font-mono text-sm text-ink">
          {formatPrice(product.price)}
        </span>
      </div>
    </div>
  );
}
