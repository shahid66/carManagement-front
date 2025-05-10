import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "20mb",
    },
  },
};

export default nextConfig;

// /** @type {import('next').NextConfig} */

// module.exports = {
//   experimental: {
//     serverActions: {
//       bodySizeLimit: '2mb',
//     },
//   },
// }
