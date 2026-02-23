/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: '/e-file-reviews/',
  basePath: '/e-file-reviews',
}

module.exports = nextConfig
