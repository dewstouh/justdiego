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
    ],
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
