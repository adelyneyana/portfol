/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    disableStaticImages: false,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|svg)$/i,
      type: 'asset/resource'
    });
    return config;
  },
  // Allow importing images from outside the src directory
  experimental: {
    externalDir: true
  }
}

module.exports = nextConfig 