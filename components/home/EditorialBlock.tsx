import Image from "next/image";
import Link from "next/link";
import { mwhImage } from "@/lib/images";

/** Product photo from the live catalog — Sabrina Mini Dress */
const EDITORIAL_IMAGE = mwhImage(
  "//manwomanhome.com/cdn/shop/files/SWL-Sabrina-Mini-Dress_1024x.jpg?v=1781034050",
);

export function EditorialBlock() {
  return (
    <section className="grid md:grid-cols-2">
      <div className="flex flex-col justify-center bg-fg px-8 py-16 text-inverse md:px-14 md:py-24">
        <p className="font-serif text-4xl font-bold italic md:text-5xl">
          Man + Woman
        </p>
        <p className="mt-2 text-sm uppercase tracking-[0.2em] text-inverse/80">
          Home &amp; life
        </p>
        <p className="mt-8 max-w-md text-sm leading-relaxed text-inverse/85">
          Curated fashion and objects for the way you actually live — not the
          way a catalog thinks you should.
        </p>
        <Link
          href="#"
          className="mt-8 inline-flex w-fit border border-inverse px-7 py-3 text-[13px] font-medium transition-colors hover:bg-inverse hover:text-fg"
        >
          Explore the collection
        </Link>
      </div>
      <div className="relative min-h-[60vh] md:min-h-0">
        <Image
          src={EDITORIAL_IMAGE}
          alt="Sabrina Mini Dress"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-top"
        />
      </div>
    </section>
  );
}
