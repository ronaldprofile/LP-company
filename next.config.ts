import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  logging: {
    fetches: {
      fullUrl: true
    }
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'podiotech.com.br'
      }
    ]
  }
}

export default nextConfig
