/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['cdn.shopify.com'],
    domains: ['www.burton.com'],
  },
};

module.exports = nextConfig;
