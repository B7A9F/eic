/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Skip ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Ensure phonemize is only loaded on client side
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Exclude phonemize from server bundle completely
      config.externals = config.externals || [];
      if (Array.isArray(config.externals)) {
        config.externals.push("phonemize");
      } else {
        config.externals = [config.externals, "phonemize"];
      }
    } else {
      // Client-side fallbacks
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        crypto: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
