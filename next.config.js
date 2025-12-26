/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Skip ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Exclude phonemize from build traces collection (speeds up build)
  // But still allow it to be bundled for API routes
  experimental: {
    outputFileTracingExcludes: {
      "*": ["node_modules/phonemize/**/*"],
    },
  },
};

module.exports = nextConfig;
