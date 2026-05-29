/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "cdn.loveandlemons.com",
      },
      {
        protocol: "https",
        hostname: "external-content.duckduckgo.com",
      },
    ],
  },
};

module.exports = nextConfig;
