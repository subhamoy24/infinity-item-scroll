/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'jpassets.jobplanet.co.kr'
          },
        ],
    },
}

module.exports = nextConfig
