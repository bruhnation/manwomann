import { mwhImage } from "@/lib/images";

export type Product = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  href: string;
  featured?: boolean;
};

/** Product names, prices, and images from manwomanhome.com homepage HTML */
export const featuredProducts: Product[] = [
  {
    id: "sabrina-mini-dress",
    name: "Sabrina Mini Dress",
    price: 205,
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/SWL-Sabrina-Mini-Dress_1024x.jpg?v=1781034050",
    ),
    href: "/products/sabrina-mini-dress",
    featured: true,
  },
  {
    id: "augustina-mini-dress",
    name: "Augustina Mini Dress",
    price: 184,
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/saltwaterluxeAugustinaSaltMiniDress_1024x.webp?v=1781034088",
    ),
    href: "/products/augustina-mini-dress",
    featured: true,
  },
  {
    id: "pcjessa-ankle-dress",
    name: "Pcjessa Ankle Dress",
    price: 65,
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/0a5cb5f90d5e437c2d461a8baa2b07ca_1024x.jpg?v=1778711107",
    ),
    href: "/products/pcjessa-ankle-dress",
  },
  {
    id: "nmasta-mid-dress",
    name: "Nmasta Mid Dress",
    price: 89,
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/27037383_Black_003_1024x.jpg?v=1776977582",
    ),
    href: "/products/nmasta-mid-dress",
  },
  {
    id: "tahlia-midi-dress",
    name: "Tahlia Midi Dress",
    price: 189,
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/MINKPINK-Leopard-Tie-Front-Midi-Dress_1024x.jpg?v=1776960387",
    ),
    href: "/products/tahlia-midi-dress",
  },
  {
    id: "jxzoe-seersucker-dress",
    name: "Jxzoe Seersucker Dress",
    price: 85,
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/Screenshot2026-06-06191547_1024x.jpg?v=1780798559",
    ),
    href: "/products/jxzoe-seersucker-dress",
  },
  {
    id: "jxalmira-linen-dress",
    name: "Jxalmira Linen Dress",
    price: 80,
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/jjxx-jxalmiralinenblendlongdresswvn-white_1_1024x.webp?v=1775061982",
    ),
    href: "/products/jxalmira-linen-dress",
  },
  {
    id: "onlgoa-linen-dress",
    name: "Onlgoa Linen Dress",
    price: 85,
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/9CCDEFBB-55FA-4CF1-B72F-B4122FB6A2E7_900x_13ff0175-caf6-47e7-b096-31876a36069f_1024x.webp?v=1774463180",
    ),
    href: "/products/onlgoa-linen-dress",
  },
  {
    id: "tie-dress-adreneline-rush",
    name: "Tie Dress Adreneline Rush",
    price: 125,
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/hlin1yp3dpydwnpd20oy_1024x.webp?v=1773330718",
    ),
    href: "/products/tie-dress-adreneline-rush",
  },
  {
    id: "sunset-tie-slip-dress",
    name: "Sunset Tie Slip Dress",
    price: 125,
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/d6zsmr99xxohx4kouvzo_1024x.webp?v=1775062767",
    ),
    href: "/products/sunset-tie-slip-dress",
  },
  {
    id: "coastline",
    name: "coastline",
    price: 61,
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/ZD251306_AVO_FB_740x_159408f1-6d90-4269-ad0e-dd271c3f6dc7_1024x.jpg?v=1769544951",
    ),
    href: "/products/coastline",
  },
  {
    id: "jazmyn-mini-dress",
    name: "Jazmyn Mini Dress",
    price: 150,
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/S3519-W661-SALT_1_1024x.jpg?v=1764364514",
    ),
    href: "/products/jazmyn-mini-dress",
  },
];
