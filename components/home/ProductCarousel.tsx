"use client";

import { useRef } from "react";
import { ProductCard } from "@/components/ui/ProductCard";
import type { Product } from "@/lib/data/products";

type ProductCarouselProps = {
  products: Product[];
};

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      {direction === "left" ? (
        <path d="M15 6l-6 6 6 6" />
      ) : (
        <path d="M9 6l6 6-6 6" />
      )}
    </svg>
  );
}

export function ProductCarousel({ products }: ProductCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  function scroll(direction: "left" | "right") {
    const track = trackRef.current;
    if (!track) return;
    const amount = track.clientWidth * 0.8;
    track.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  }

  return (
    <section className="border-t border-border px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold tracking-tight md:text-[28px]">
            More new arrivals.
          </h2>
          <div className="hidden gap-2 md:flex">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Scroll products left"
              className="flex h-10 w-10 items-center justify-center border border-border transition-colors hover:border-fg"
            >
              <Chevron direction="left" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Scroll products right"
              className="flex h-10 w-10 items-center justify-center border border-border transition-colors hover:border-fg"
            >
              <Chevron direction="right" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="-mx-5 flex gap-4 overflow-x-auto px-5 pb-2 scroll-smooth md:-mx-0 md:gap-5 md:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {products.slice(0, 16).map((product) => (
            <div
              key={product.id}
              className="w-[42vw] shrink-0 sm:w-[32vw] md:w-[22vw] lg:w-[18vw] xl:w-[240px]"
            >
              <ProductCard
                name={product.name}
                price={product.price}
                imageUrl={product.imageUrl}
                href={product.href}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
