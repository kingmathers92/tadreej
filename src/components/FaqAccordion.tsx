"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

type Item = { question: string; answer: string };

export default function FaqAccordion({ items }: { items: Item[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="font-sans text-[1.02rem] text-ink">{item.question}</span>
              <Plus
                size={18}
                strokeWidth={1.75}
                aria-hidden="true"
                className={`shrink-0 text-ink-soft transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              />
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <p className="min-h-0 text-sm leading-relaxed text-ink-soft">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
