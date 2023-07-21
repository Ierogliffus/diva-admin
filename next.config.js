/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    ...nextConfig,
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'divadubai.s3.eu-central-1.amazonaws.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
    webpack(config) {
        config.module.rules.push({
            loader: '@svgr/webpack',
                options: {
                    prettier: false,
                    svgo: true,
                    svgoConfig: {
                        plugins: [
                            {
                                name: 'preset-default',
                                params: {
                                    overrides: { removeViewBox: false },
                                },
                            },
                        ],
                    },
                titleProp: true,
            },
            test: /\.svg$/, 
        })
    
        return config
    },
}