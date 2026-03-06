import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.rawpixel.com",
      },
      {
        protocol: "https",
        hostname: "thumb.silhouette-ac.com",
      },
    ],
  },
};

export default nextConfig;
