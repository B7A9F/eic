/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Skip ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Exclude phonemize from build traces collection (speeds up build)
  // This prevents Next.js from scanning phonemize dependencies during build
  experimental: {
    outputFileTracingExcludes: {
      "*": ["node_modules/phonemize/**/*"],
    },
  },
};

module.exports = nextConfig;
