/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Skip ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Exclude phonemize from webpack compilation completely
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Exclude phonemize from server-side compilation
      // This prevents webpack from processing it during build
      config.externals = config.externals || [];
      if (Array.isArray(config.externals)) {
        config.externals.push("phonemize");
      } else {
        config.externals = [config.externals, "phonemize"];
      }
    }
    return config;
  },
};

module.exports = nextConfig;
