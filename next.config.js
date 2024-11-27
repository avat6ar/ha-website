/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["hatcacademy.com"],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
}

module.exports = nextConfig