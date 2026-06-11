import Link from "next/link";
import { ProductCard } from "@/components/ui/ProductCard";
import type { Product } from "@/lib/data/products";

type ProductGridProps = {
  products: Product[];
};

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <section className="px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10 flex items-end justify-between gap-6 md:mb-14">
          <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
            Dresses for any occasion
          </h2>
          <Link
            href="#"
            className="hidden text-[11px] uppercase tracking-[0.12em] text-muted transition-colors hover:text-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg md:inline-block"
          >
            View all
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-6 md:gap-8 lg:grid-cols-4 lg:gap-10">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              imageUrl={product.imageUrl}
              href={product.href}
              large={product.featured}
            />
          ))}
        </div>
        <Link
          href="#"
          className="mt-10 inline-block text-[11px] uppercase tracking-[0.12em] text-muted transition-colors hover:text-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg md:hidden"
        >
          View all
        </Link>
      </div>
    </section>
  );
}
