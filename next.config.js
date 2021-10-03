/* eslint-disable @typescript-eslint/no-var-requires */
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
});

module.exports = {
    target: 'serverless',
    webpack(config) {
        config.module.rules.push({ test: /\.mdx$/, use: 'raw-loader' });
        config.module.rules.push({ test: /\.yml$/, use: 'raw-loader' });
        config.module.rules.push({ test: /\.node$/, use: 'node-loader' });

        // eslint-disable-next-line no-param-reassign
        config.resolve.extensions = ['', '.js', '.jsx', '.json', '.node', '.ts', '.tsx'];

        return config;
    },
    externals: {
        canvas: 'canvas',
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
        ];
    },
};
