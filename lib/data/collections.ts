import { mwhImage } from "@/lib/images";

export type Collection = {
  slug: string;
  label: string;
  imageUrl: string;
  href: string;
};

/** Collection images from manwomanhome.com homepage HTML */
export const collections: Collection[] = [
  {
    slug: "man",
    label: "Man",
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/collections/IMG_7601_grande.jpg?v=1585876815",
    ),
    href: "/collections/all-mens",
  },
  {
    slug: "woman",
    label: "Woman",
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/collections/IMG_7599_grande.jpg?v=1585876433",
    ),
    href: "/collections/all-womens",
  },
  {
    slug: "home",
    label: "Home",
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/collections/IMG_7604_grande.jpg?v=1728339936",
    ),
    href: "/collections/home-body",
  },
  {
    slug: "accessories",
    label: "Accessories",
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/collections/MWSpring-197_grande.jpg?v=1585877181",
    ),
    href: "/collections/home",
  },
];
