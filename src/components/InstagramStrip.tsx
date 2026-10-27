import Image from "next/image";
import { AtSign } from "lucide-react";
import { site } from "@/lib/config";

const tiles = [1, 2, 3, 4, 5, 6];

export default function InstagramStrip() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-1.5 sm:grid-cols-6">
        {tiles.map((n) => (
          <a
            key={n}
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-square overflow-hidden bg-paper"
            aria-label={`View @${site.instagramHandle} on Instagram`}
          >
            <Image
              src={`/instagram/tile-${n}.svg`}
              alt=""
              fill
              sizes="16vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors duration-300 group-hover:bg-ink/30">
              <AtSign
                size={18}
                strokeWidth={1.5}
                className="text-paper opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />
            </span>
          </a>
        ))}
      </div>
      <div className="mt-6 text-center">
        <a
          href={site.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="link-sweep inline-flex items-center gap-2 font-sans text-sm text-ink"
        >
          <AtSign size={16} strokeWidth={1.5} aria-hidden="true" />
          Follow @{site.instagramHandle}
        </a>
      </div>
    </div>
  );
}
