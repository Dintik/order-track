import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**' // it is convenient to allow all hostnames as part of the test task
      }
    ]
  },
  output: 'standalone'
}

export default nextConfig
