import Image from "next/image";
import Link from "next/link";
import type { Collection } from "@/lib/data/collections";

type CollectionRowProps = {
  collections: Collection[];
};

export function CollectionRow({ collections }: CollectionRowProps) {
  return (
    <section className="px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-[1600px]">
        <h2 className="text-2xl font-bold tracking-tight md:text-[28px]">
          Shop by category.
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-5">
          {collections.map((collection) => (
            <div key={collection.slug}>
              <Link href={collection.href} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden bg-[#f0f0f0]">
                  <Image
                    src={collection.imageUrl}
                    alt={collection.label}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.02]"
                  />
                </div>
                <p className="mt-3 text-[15px] font-medium">
                  <span className="border-b border-fg pb-0.5">{collection.label}</span>
                  <span className="ml-0.5">+</span>
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
