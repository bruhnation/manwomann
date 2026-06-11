import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "manwomanhome.com",
        pathname: "/cdn/**",
      },
    ],
  },
};

export default nextConfig;
