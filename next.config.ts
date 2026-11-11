import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.jsdelivr.net', pathname: '/**' },
    ],
  },
}

export default nextConfig
