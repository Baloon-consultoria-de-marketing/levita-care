import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Adicione esta linha
  // Se você usa imagens do Next.js (<Image />),
  // pode precisar desativar a otimização nativa, pois ela requer um servidor Node.js:
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
