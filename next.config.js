/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
});

module.exports = {
    target: 'serverless',
    webpack(config) {
        const webpack = require('webpack');

        config.module.rules.push({ test: /\.mdx$/, use: 'raw-loader' });
        config.module.rules.push({ test: /\.yml$/, use: 'raw-loader' });

        // eslint-disable-next-line no-param-reassign
        config.plugins = config.plugins || [];
        config.plugins.push(new webpack.IgnorePlugin(/canvas/, /jsdom$/));
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
        ];
    },
};
