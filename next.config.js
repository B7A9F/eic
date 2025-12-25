/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Skip ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Phonemize is now server-side only (API route), no need for client bundle exclusions
  webpack: (config) => {
    return config;
  },
};

module.exports = nextConfig;
