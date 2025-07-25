import type { NextConfig } from "next";

const isMobile = process.env.NEXT_PUBLIC_IS_MOBILE === "true";
const nextConfig: NextConfig = {
  ...(isMobile ? { output: "export" } : {}),
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true, // This is not recommended for production, but useful for development
  },
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
