/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Disable SWC minify to avoid binary loading issues
  swcMinify: false,
  // Use webpack for compilation if SWC fails
  webpack: (config, { isServer }) => {
    return config;
  },
}

module.exports = nextConfig

