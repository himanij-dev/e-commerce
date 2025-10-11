import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '147.93.27.12',
        port: '5001',
        pathname: '/uploads/categories/**',
      },
    ],
    // OR simpler:
    // domains: ['147.93.27.12'],
  },
};

export default nextConfig;
