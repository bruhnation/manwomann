import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  name: string;
  price: number;
  imageUrl: string;
  href: string;
};

export function ProductCard({ name, price, imageUrl, href }: ProductCardProps) {
  return (
    <article>
      <Link href={href} className="group block">
        <div className="relative aspect-[3/4] overflow-hidden bg-[#efefef]">
          <Image
            src={imageUrl}
            alt={name}
            fill
            sizes="240px"
            className="object-cover object-top transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.02]"
          />
        </div>
        <p className="mt-3 text-[14px] leading-snug text-fg">{name}</p>
        <p className="mt-1 text-[14px] font-medium tabular-nums text-muted">
          ${price}
        </p>
      </Link>
    </article>
  );
}
