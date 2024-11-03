/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'media.licdn.com',
      'cdn.sanity.io'  // Keep this if you're using Sanity for other images
    ],
  },
  experimental: {
    appDir: true,
  }
}

module.exports = nextConfig
