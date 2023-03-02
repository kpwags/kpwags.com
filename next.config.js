/* eslint-disable @typescript-eslint/no-var-requires */
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
});

module.exports = {
    webpack(config) {
        config.module.rules.push({ test: /\.mdx$/, use: 'raw-loader' });
        config.module.rules.push({ test: /\.yml$/, use: 'raw-loader' });

        return config;
    },
};

module.exports = withMDX({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
});

module.exports = {
    async redirects() {
        return [
            {
                source: '/feed.xml',
                destination: '/rss/feed.xml',
                permanent: true,
            },
            {
                source: '/current',
                destination: '/now',
                permanent: true,
            },
        ];
    },
};

// module.exports = {
//     experimental: {
//         images: {
//             unoptimized: true,
//         },
//     },
// };

module.exports = {
    i18n: {
        locales: ['en'],
        defaultLocale: 'en',
    },
};
