/* eslint-disable @typescript-eslint/no-var-requires */
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
});

module.exports = {
    target: 'serverless',
    webpack(config) {
        config.module.rules.push({ test: /\.mdx$/, use: 'raw-loader' });
        config.module.rules.push({ test: /\.yml$/, use: 'raw-loader' });
        return config;
    },
};

module.exports = withMDX({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
});
