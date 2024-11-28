/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["softcitadel.com"],
    unoptimized: false
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
}

module.exports = nextConfig