/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['fimgs.net'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};


module.exports = nextConfig;
