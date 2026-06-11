import Image from "next/image";
import Link from "next/link";
import { mwhImage } from "@/lib/images";

const HERO_IMAGE = mwhImage(
  "//manwomanhome.com/cdn/shop/files/Untitled_design_c06b70ec-3a6e-4716-82f0-a9d96a73f5c1_2048x.png?v=1771960350",
);

export function Hero() {
  return (
    <section className="relative -mt-[97px] min-h-[calc(70vh+97px)] w-full pt-[97px] md:min-h-[calc(85vh+97px)]">
      <Image
        src={HERO_IMAGE}
        alt="Editorial fashion — woman in striped dress against architectural light and shadow"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
      <div className="absolute inset-x-0 bottom-0 px-6 pb-12 md:px-10 md:pb-16">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-serif text-2xl italic text-inverse md:text-3xl">
            Spring, considered.
          </p>
          <Link
            href="#"
            className="mt-4 inline-block text-[11px] uppercase tracking-[0.14em] text-inverse transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-inverse"
          >
            Shop Woman &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
