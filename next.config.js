/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Skip ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Exclude phonemize from webpack compilation
  // It will be loaded dynamically at runtime via import()
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = config.externals || [];
      if (Array.isArray(config.externals)) {
        config.externals.push("phonemize");
      } else {
        config.externals = [config.externals, "phonemize"];
      }
    }
    return config;
  },
  // Exclude phonemize from build traces collection
  experimental: {
    outputFileTracingExcludes: {
      "*": ["node_modules/phonemize/**/*"],
    },
  },
};

module.exports = nextConfig;
