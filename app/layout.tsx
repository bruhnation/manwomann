import type { Metadata } from "next";
import { DM_Sans, Libre_Baskerville } from "next/font/google";
import { SiteChrome } from "@/components/layout/SiteChrome";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "MAN + WOMAN — Home",
  description:
    "Curated fashion and home — Man, Woman, Home, and Accessories.",
  openGraph: {
    title: "MAN + WOMAN — Home",
    description:
      "Curated fashion and home — Man, Woman, Home, and Accessories.",
    images: [
      {
        url: "https://manwomanhome.com/cdn/shop/files/Untitled_design_c06b70ec-3a6e-4716-82f0-a9d96a73f5c1_2048x.png?v=1771960350",
        width: 2048,
        height: 1024,
        alt: "MAN + WOMAN Home editorial",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${libreBaskerville.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
