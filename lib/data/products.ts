import { mwhImage } from "@/lib/images";

export type Product = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  href: string;
  featured?: boolean;
};

/** All 50 products scraped from the manwomanhome.com homepage grid. */
export const featuredProducts: Product[] = [
  {
    id: "sabrina-mini-dress",
    name: "Sabrina Mini Dress",
    price: 205,
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/SWL-Sabrina-Mini-Dress_1024x.jpg?v=1781034050",
    ),
    href: "/products/sabrina-mini-dress",
  },
  {
    id: "augustina-mini-dress",
    name: "Augustina Mini Dress",
    price: 184,
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/saltwaterluxeAugustinaSaltMiniDress_1024x.webp?v=1781034088",
    ),
    href: "/products/augustina-mini-dress",
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
    name: "Coastline",
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
  {
    id: "alessia-twist-midi-dress",
    name: "Alessia Twist Midi Dress",
    price: 180,
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/ScreenShot2025-11-19at5.49.53PM_1400x_663e2176-cab0-4b69-b4cb-6b7870d3f80c_1024x.png?v=1764364686",
    ),
    href: "/products/alessia-twist-midi-dress",
  },
  {
    id: "alba-skirt",
    name: "Alba Skirt",
    price: 164,
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/9_60077c89-973a-42b5-ab5a-2c407c1c2550_1024x.webp?v=1761762380",
    ),
    href: "/products/alba-skirt",
  },
  {
    id: "natalie-jumpsuit",
    name: "Natalie Jumpsuit",
    price: 225,
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/27_8c6a2969-60e4-49fc-8012-f34f2cd4e7fb_1024x.webp?v=1780936536",
    ),
    href: "/products/natalie-jumpsuit",
  },
  {
    id: "lana-v-neck-satin-dress",
    name: "Lana V Neck Satin Dress",
    price: 184,
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/shopify_-_image_resize_10_1024x.webp?v=1780935713",
    ),
    href: "/products/lana-v-neck-satin-dress",
  },
  {
    id: "mika-gingham-dress",
    name: "Mika Gingham Dress",
    price: 202,
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/resized_Charli_Mika_Dress_3_1024x.jpg?v=1772064346",
    ),
    href: "/products/mika-gingham-dress",
  },
  {
    id: "maia-skirt",
    name: "Maia Skirt",
    price: 202,
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/Maia-MiddnightBlue_5_1024x.webp?v=1761764371",
    ),
    href: "/products/maia-skirt",
  },
  {
    id: "marnie-dress",
    name: "Marnie Dress",
    price: 175,
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/2_4a98f327-1adc-4bd2-bc9f-bcaa0d6be41d_1024x.webp?v=1780935992",
    ),
    href: "/products/marnie-dress",
  },
  {
    id: "chiara-idra-midi-dress",
    name: "Chiara Idra Midi Dress",
    price: 148,
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/ZD261478_ECP_FRONT_740x_4f0e01b2-98bb-4548-924d-e2bba573c0be_1024x.jpg?v=1777327548",
    ),
    href: "/products/chiara-idra-midi-dress",
  },
  {
    id: "esperanza-midi-dress",
    name: "Esperanza Midi Dress",
    price: 119.99,
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/121525_MarEcomm_ZD261382E_1808_1_1024x.jpg?v=1772067059",
    ),
    href: "/products/esperanza-midi-dress",
  },
  {
    id: "lexa-sweater-skirt",
    name: "Lexa Sweater Skirt",
    price: 148,
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/ZK261537_KMR_FRONT_740x_ca5cdedd-4a02-40ee-bcf3-da7f5df1eb81_1024x.jpg?v=1771524425",
    ),
    href: "/products/lexa-sweater-skirt",
  },
  {
    id: "hariette-midi-dress",
    name: "Hariette Midi Dress",
    price: 180,
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/S3952-W746-BLK_1_1024x.webp?v=1779324614",
    ),
    href: "/products/hariette-midi-dress",
  },
  {
    id: "leon-midi-dress",
    name: "Leon Midi Dress",
    price: 205,
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/S4052-W733-CLBL_1_1024x.webp?v=1779324413",
    ),
    href: "/products/leon-midi-dress",
  },
  {
    id: "carleigh-midi-dress",
    name: "Carleigh Midi Dress",
    price: 164,
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/S3951-W746-BLK_1_1024x.webp?v=1779323815",
    ),
    href: "/products/carleigh-midi-dress",
  },
  {
    id: "laurent-mini-dress",
    name: "Laurent Mini Dress",
    price: 193,
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/Screenshot2026-01-19at12.39.46PM_1024x.png?v=1772068424",
    ),
    href: "/products/laurent-mini-dress",
  },
  {
    id: "genevieve-mini-dress",
    name: "Genevieve Mini Dress",
    price: 150,
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/S3957-W750-CLV_1_1024x.webp?v=1779323976",
    ),
    href: "/products/genevieve-mini-dress",
  },
  {
    id: "samsoe-dress",
    name: "Samsoe Dress",
    price: 300,
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/21840_F26100222-CLR000021-01-2400_1024x.jpg?v=1772071430",
    ),
    href: "/products/samsoe-dress",
  },
  {
    id: "twyla",
    name: "Twyla",
    price: 139,
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/Screenshot2026-04-15123031_1024x.png?v=1776281608",
    ),
    href: "/products/twyla",
  },
  {
    id: "colbie",
    name: "Colbie",
    price: 126,
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/GF2602-8797_NAVY-STRIPE_1_1024x.webp?v=1772040034",
    ),
    href: "/products/colbie",
  },
  {
    id: "liana-tie-dress",
    name: "Liana Tie Dress",
    price: 189,
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/MINKPINK-Liana-Blue-Cotton-Tie-Detail-Midi-Dress_1200x_98585b87-4540-4b9c-ab7b-f239223eb916_1024x.jpg?v=1772071910",
    ),
    href: "/products/liana-tie-dress",
  },
  {
    id: "liana-mini-dress",
    name: "Liana Mini Dress",
    price: 159,
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/MINKPINK-Liana-Blue-One-Shoulder-Fitted-Mini-Dress_1200x_2c1c0f4a-2188-422b-ac55-c89350690dfa_1024x.jpg?v=1772071879",
    ),
    href: "/products/liana-mini-dress",
  },
  {
    id: "alessia-lace-maxi",
    name: "Alessia Lace Maxi",
    price: 199,
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/MINKPINK-Alessia-White-Cotton-Floral-Applique-Lace-Back-Maxi-Dress_1200x_ec51d361-6d0e-472f-bde7-193da5e48cf9_1024x.jpg?v=1772049354",
    ),
    href: "/products/alessia-lace-maxi",
  },
  {
    id: "alessia-smock-mini",
    name: "Alessia Smock Mini",
    price: 169,
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/ScreenShot2025-09-24at5.16.15PM_1400x_743a78de-7fed-4957-8502-823ed63274f3_1024x.png?v=1764382206",
    ),
    href: "/products/alessia-smock-mini",
  },
  {
    id: "isla-halter-maxi-dress",
    name: "Isla Halter Maxi Dress",
    price: 199,
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/MINKPINK-Peach-Hibiscus-Halter-Midi-Dress_800x_6dd8e6b2-636c-452f-818e-a31254c45fb5_1024x.webp?v=1777060856",
    ),
    href: "/products/isla-halter-maxi-dress",
  },
  {
    id: "camille-mesh-bustier-dress",
    name: "Camille Mesh Bustier Dress",
    price: 159,
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/MINKPINK-Camille-Pink-Floral-Bustier-Mesh-Midi-Dress_1200x_cdf30591-22b7-4797-bea9-43892b0170ff_1024x.jpg?v=1772072053",
    ),
    href: "/products/camille-mesh-bustier-dress",
  },
  {
    id: "tahlia-mini-dress",
    name: "Tahlia Mini Dress",
    price: 159,
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/MINKPINK-Leopard-Smock-Mini-Dress_1200x_33bb7f89-26c1-4e24-8030-f38e5723b1a6_1024x.jpg?v=1772072093",
    ),
    href: "/products/tahlia-mini-dress",
  },
  {
    id: "arabella-bias-dress",
    name: "Arabella Bias Dress",
    price: 189,
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/MINKPINK-Pink-Floral-Bias-Midi-Dress-Flattering-Fun_1200x_339b9360-bce4-43e4-b613-fdccfda6ec6e_1024x.jpg?v=1772049390",
    ),
    href: "/products/arabella-bias-dress",
  },
  {
    id: "via-lace-midi",
    name: "Via Lace Midi",
    price: 114.99,
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/Screenshot2025-10-21202757_1024x.png?v=1761103904",
    ),
    href: "/products/via-lace-midi",
  },
  {
    id: "gail-midi-skirt",
    name: "Gail Midi Skirt",
    price: 81.99,
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/ZK251318_TBK_SIDE_740x_52383f06-e629-404b-b196-80ae90953108_1024x.webp?v=1751505555",
    ),
    href: "/products/gail-midi-skirt",
  },
  {
    id: "bubble-skirt-1",
    name: "Bubble Skirt",
    price: 145.99,
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/MARIGOLD_WHITE_2_590x_9d33ab6a-099f-4888-b23a-281383a3b1f2_1024x.webp?v=1751039688",
    ),
    href: "/products/bubble-skirt-1",
  },
  {
    id: "giovanna-rib-dress",
    name: "Giovanna Rib Dress",
    price: 136.99,
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/GIOVANNA_BLACK_1_6d7a1b62-2025-4899-a9a4-b0614bef618a_1024x.webp?v=1744130002",
    ),
    href: "/products/giovanna-rib-dress",
  },
  {
    id: "after-hour",
    name: "After Hour",
    price: 61,
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/ZD253190_GRG_CAMPAIGN_A_740x_66a20602-3a2e-436a-bc10-1482e899f8d1_1024x.jpg?v=1764409677",
    ),
    href: "/products/after-hour",
  },
  {
    id: "dress-2564",
    name: "Dress 2564",
    price: 49.99,
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/Screenshot2025-04-10102411_1024x.png?v=1744306121",
    ),
    href: "/products/dress-2564",
  },
  {
    id: "grover-ss-jumpsuit",
    name: "Grover SS Jumpsuit",
    price: 269.99,
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/GROVER_DISORIENTED_17589_2_1200x_567dad85-6cbf-4903-982c-f141e5c0d912_1024x.webp?v=1741622775",
    ),
    href: "/products/grover-ss-jumpsuit",
  },
  {
    id: "pretty-in-mini",
    name: "Pretty in Mini",
    price: 112.99,
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/Tezza-1701_1_44ec05ad-9cca-4714-8a8d-8795f9f6cecd_1024x.jpg?v=1744304713",
    ),
    href: "/products/pretty-in-mini",
  },
  {
    id: "sasha-skirt",
    name: "Sasha Skirt",
    price: 191,
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/2_25698d92-f7c6-438f-80d6-42ed39c7ae1a_1024x.webp?v=1763615357",
    ),
    href: "/products/sasha-skirt",
  },
  {
    id: "alma-pencil-skirt",
    name: "Alma Pencil Skirt",
    price: 136.99,
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/6_1080x_f2763e85-272d-47c0-af50-74150b1e472e_1024x.webp?v=1727881753",
    ),
    href: "/products/alma-pencil-skirt",
  },
  {
    id: "alina-long-dress",
    name: "Alina Long Dress",
    price: 294.99,
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/Screenshot2024-10-12082734_1024x.png?v=1728746946",
    ),
    href: "/products/alina-long-dress",
  },
  {
    id: "rpet-unitard",
    name: "RPET Unitard",
    price: 29.99,
    imageUrl: mwhImage(
      "//manwomanhome.com/cdn/shop/files/CamiUnitard_Earth_03_1024x.jpg?v=1695062300",
    ),
    href: "/products/rpet-unitard",
  },
];
