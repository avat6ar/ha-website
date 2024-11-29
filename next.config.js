/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["hatcacademy.com"],
    unoptimized: false
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
}

module.exports = nextConfig