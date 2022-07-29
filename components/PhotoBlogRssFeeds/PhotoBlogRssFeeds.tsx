import Head from 'next/head';

const PhotoBlogRssFeeds = (): JSX.Element => (
    <Head>
        <link rel="alternate" href="/rss/photoblog_atom.xml" type="application/atom+xml" title="Atom 2.0" />
        <link rel="alternate" href="/rss/photoblog.xml" type="application/rss+xml" />
        <link rel="alternate" href="/rss/photoblog.json" type="application/activitystream+json" title="JSON" />
    </Head>
);

export default PhotoBlogRssFeeds;
