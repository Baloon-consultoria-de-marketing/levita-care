import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true, // Adicione isso
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
