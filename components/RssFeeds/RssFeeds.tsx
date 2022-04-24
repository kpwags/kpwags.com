import Head from 'next/head';

const RssFeeds = (): JSX.Element => (
    <Head>
        <link rel="alternate" href="/rss/atom.xml" type="application/atom+xml" title="Atom 2.0" />
        <link rel="alternate" href="/rss/feed.xml" type="application/rss+xml" />
        <link rel="alternate" href="/rss/feed.json" type="application/activitystream+json" title="JSON" />
    </Head>
);

export default RssFeeds;
