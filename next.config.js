/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  images: {
    domains: ['source.unsplash.com'],
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
};