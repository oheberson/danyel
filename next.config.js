/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Set Turbopack root to avoid lockfile warnings
  turbopack: {
    root: __dirname,
  },
}

module.exports = nextConfig

