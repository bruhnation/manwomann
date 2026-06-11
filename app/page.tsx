import { CollectionRow } from "@/components/home/CollectionRow";
import { Hero } from "@/components/home/Hero";
import { Newsletter } from "@/components/home/Newsletter";
import { ProductGrid } from "@/components/home/ProductGrid";
import { collections } from "@/lib/data/collections";
import { featuredProducts } from "@/lib/data/products";

export default function Home() {
  return (
    <main>
      <Hero />
      <Newsletter />
      <ProductGrid products={featuredProducts} />
      <CollectionRow collections={collections} />
    </main>
  );
}
