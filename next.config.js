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

module.exports = {
    i18n: {
        locales: ['en'],
        defaultLocale: 'en',
    },
};

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
            {
                source: '/posts/2022/10/14/reading-log-october-14-1',
                destination: '/reading-log/1',
                permanent: true,
            },
            {
                source: '/posts/2022/10/21/reading-log-october-21-2',
                destination: '/reading-log/2',
                permanent: true,
            },
            {
                source: '/posts/2022/10/28/reading-log-october-28-3',
                destination: '/reading-log/3',
                permanent: true,
            },
            {
                source: '/posts/2022/11/04/reading-log-november-4-4',
                destination: '/reading-log/4',
                permanent: true,
            },
            {
                source: '/posts/2022/11/11/reading-log-november-11-5',
                destination: '/reading-log/5',
                permanent: true,
            },
            {
                source: '/posts/2022/11/18/reading-log-november-18-6',
                destination: '/reading-log/6',
                permanent: true,
            },
            {
                source: '/posts/2022/11/25/reading-log-november-25-7',
                destination: '/reading-log/7',
                permanent: true,
            },
            {
                source: '/posts/2022/12/02/reading-log-december-2-8',
                destination: '/reading-log/8',
                permanent: true,
            },
            {
                source: '/posts/2022/12/09/reading-log-december-9-9',
                destination: '/reading-log/9',
                permanent: true,
            },
            {
                source: '/posts/2022/12/16/reading-log-december-16-10',
                destination: '/reading-log/10',
                permanent: true,
            },
            {
                source: '/posts/2022/12/23/reading-log-december-23-11',
                destination: '/reading-log/11',
                permanent: true,
            },
            {
                source: '/posts/2022/12/30/reading-log-december-30-12',
                destination: '/reading-log/12',
                permanent: true,
            },
            {
                source: '/posts/2023/01/06/reading-log-january-6-13',
                destination: '/reading-log/13',
                permanent: true,
            },
            {
                source: '/posts/2023/01/13/reading-log-january-13-14',
                destination: '/reading-log/14',
                permanent: true,
            },
            {
                source: '/posts/2023/01/20/reading-log-january-20-15',
                destination: '/reading-log/15',
                permanent: true,
            },
            {
                source: '/posts/2023/01/27/reading-log-january-27-16',
                destination: '/reading-log/16',
                permanent: true,
            },
            {
                source: '/posts/2023/02/03/reading-log-february-3-17',
                destination: '/reading-log/17',
                permanent: true,
            },
            {
                source: '/posts/2023/02/10/reading-log-february-10-18',
                destination: '/reading-log/18',
                permanent: true,
            },
            {
                source: '/posts/2023/02/17/reading-log-february-17-19',
                destination: '/reading-log/19',
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
