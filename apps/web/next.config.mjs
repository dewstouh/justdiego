// @ts-check
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        optimizePackageImports: ['lucide-react'],
    },
    transpilePackages: [
        '@justdiego/core',
        '@justdiego/db',
        '@justdiego/logger',
        '@justdiego/utils',
        '@justdiego/types',
        '@justdiego/config',
        '@justdiego/auth',
    ],
    // Improved image optimization for Next.js 15
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
};

export default nextConfig;