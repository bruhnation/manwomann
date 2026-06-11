import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  name: string;
  price: number;
  imageUrl: string;
  href: string;
  large?: boolean;
};

export function ProductCard({
  name,
  price,
  imageUrl,
  href,
  large = false,
}: ProductCardProps) {
  return (
    <article className={large ? "lg:col-span-2" : undefined}>
      <Link href={href} className="group block">
        <div
          className={`relative overflow-hidden bg-border/40 ${
            large ? "aspect-[4/5] lg:aspect-[16/10]" : "aspect-[4/5]"
          }`}
        >
          <Image
            src={imageUrl}
            alt={name}
            fill
            sizes={
              large
                ? "(max-width: 1024px) 50vw, 40vw"
                : "(max-width: 640px) 50vw, 25vw"
            }
            className="object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.02]"
          />
        </div>
        <div className="mt-3 flex items-baseline justify-between gap-2">
          <h3 className="text-[13px] leading-snug text-fg">{name}</h3>
          <p className="shrink-0 text-[13px] font-medium tabular-nums">
            ${price}
          </p>
        </div>
      </Link>
    </article>
  );
}
