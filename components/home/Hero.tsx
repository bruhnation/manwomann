import Image from "next/image";
import Link from "next/link";
import { mwhImage } from "@/lib/images";

/** Same hero image as manwomanhome.com homepage */
const HERO_IMAGE = mwhImage(
  "//manwomanhome.com/cdn/shop/files/Untitled_design_c06b70ec-3a6e-4716-82f0-a9d96a73f5c1_2048x.png?v=1771960350",
);

export function Hero() {
  return (
    <section className="relative min-h-[72vh] w-full md:min-h-[85vh]">
      <Image
        src={HERO_IMAGE}
        alt="Woman in striped dress against architectural shadow lines"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 px-6 pb-10 md:px-10 md:pb-14">
        <div className="pointer-events-auto mx-auto max-w-[1600px]">
          <h1 className="max-w-lg text-3xl font-bold leading-[1.05] text-inverse md:text-5xl">
            Feel the season.
          </h1>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-inverse/90 md:text-base">
            Easy, naturally airy pieces made to keep you cool. For when it&apos;s
            too hot to think.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="#"
              className="inline-flex items-center bg-inverse px-6 py-3 text-[13px] font-medium text-fg transition-opacity hover:opacity-90"
            >
              Shop Woman +
            </Link>
            <Link
              href="#"
              className="inline-flex items-center border border-inverse bg-transparent px-6 py-3 text-[13px] font-medium text-inverse transition-colors hover:bg-inverse hover:text-fg"
            >
              New arrivals +
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
