import Image from "next/image";
import Link from "next/link";
import type { Collection } from "@/lib/data/collections";

type CollectionRowProps = {
  collections: Collection[];
};

export function CollectionRow({ collections }: CollectionRowProps) {
  return (
    <section className="border-t border-border px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {collections.map((collection) => (
            <Link
              key={collection.slug}
              href={collection.href}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <Image
                src={collection.imageUrl}
                alt={collection.label}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 text-[11px] uppercase tracking-[0.14em] text-inverse">
                {collection.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
