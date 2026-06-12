import { mwhImage } from "@/lib/images";

export type Collection = {
  slug: string;
  label: string;
  imageUrl: string;
  href: string;
};

/** Man / Woman / Home / Accessories — product photos from manwomanhome.com */
export const collections: Collection[] = [
  {
    slug: "man",
    label: "Man",
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/ZD251306_AVO_FB_740x_159408f1-6d90-4269-ad0e-dd271c3f6dc7_1024x.jpg?v=1769544951",
    ),
    href: "/collections/all-mens",
  },
  {
    slug: "woman",
    label: "Woman",
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/SWL-Sabrina-Mini-Dress_1024x.jpg?v=1781034050",
    ),
    href: "/collections/all-womens",
  },
  {
    slug: "home",
    label: "Home",
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/jjxx-jxalmiralinenblendlongdresswvn-white_1_1024x.webp?v=1775061982",
    ),
    href: "/collections/home-body",
  },
  {
    slug: "accessories",
    label: "Accessories",
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/saltwaterluxeAugustinaSaltMiniDress_1024x.webp?v=1781034088",
    ),
    href: "/collections/home",
  },
];
