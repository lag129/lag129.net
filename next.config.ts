import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dowlkzixrufoqswkqors.supabase.co"
      }
    ]
  }
};

export default nextConfig;
