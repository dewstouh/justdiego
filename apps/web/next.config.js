/** @type {import('next').NextConfig} */
const nextConfig = {
  /*i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    localeDetection: true,
  },*/
  experimental: {
    useCache: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  trailingSlash: true,
};

export default nextConfig;
