/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverComponentsExternalPackages: ['@acme/ui'],
    },
  }
   
  module.exports = nextConfig
  
  module.exports = {
      images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'wallpapersmug.com',
              pathname: '**',
            },
            {
              protocol: 'https',
              hostname: 'drive.google.com',
              pathname: '**',
            },
          ],
        },
  }