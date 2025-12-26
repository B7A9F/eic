/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Skip ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Exclude text-to-ipa from webpack bundling to allow it to load dictionary from node_modules
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = config.externals || [];
      if (Array.isArray(config.externals)) {
        config.externals.push("text-to-ipa");
      } else {
        config.externals = [config.externals, "text-to-ipa"];
      }
    }
    return config;
  },
};

module.exports = nextConfig;
