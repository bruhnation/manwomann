import { CollectionRow } from "@/components/home/CollectionRow";
import { EditorialBlock } from "@/components/home/EditorialBlock";
import { Hero } from "@/components/home/Hero";
import { Newsletter } from "@/components/home/Newsletter";
import { ProductCarousel } from "@/components/home/ProductCarousel";
import { collections } from "@/lib/data/collections";
import { featuredProducts } from "@/lib/data/products";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductCarousel products={featuredProducts} />
      <CollectionRow collections={collections} />
      <EditorialBlock />
      <Newsletter />
    </main>
  );
}
