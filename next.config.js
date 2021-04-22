const withMDX = require("@next/mdx") ({
    extension: /\.mdx?$/
});

module.exports = {
    target: 'serverless',
    webpack: function (config) {
        config.module.rules.push({ test: /\.md$/, use: 'raw-loader' });
        config.module.rules.push({ test: /\.yml$/, use: 'raw-loader' });
        return config;
    },
};

module.exports = withMDX({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
});
