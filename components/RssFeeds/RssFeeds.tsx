import Head from 'next/head';

const RssFeeds = (): JSX.Element => (
    <Head>
        <link rel="alternate" href="/rss/atom.xml" type="application/atom+xml" title="Posts & Reading Logs (Atom)" />
        <link rel="alternate" href="/rss/feed.xml" type="application/rss+xml" title="Posts & Reading Logs (RSS)" />
        <link rel="alternate" href="/rss/feed.json" type="application/activitystream+json" title="Posts & Reading Logs (JSON)" />
        <link rel="alternate" href="/rss/readinglog_atom.xml" type="application/atom+xml" title="Reading Logs (Atom)" />
        <link rel="alternate" href="/rss/readinglog_feed.xml" type="application/rss+xml" title="Reading Logs (RSS)" />
        <link rel="alternate" href="/rss/readinglog_feed.json" type="application/activitystream+json" title="Reading Logs (JSON)" />
        <link rel="alternate" href="/rss/blogposts_atom.xml" type="application/atom+xml" title="Blog Posts Only (Atom)" />
        <link rel="alternate" href="/rss/blogposts_feed.xml" type="application/rss+xml" title="Blog Posts Only (RSS)" />
        <link rel="alternate" href="/rss/blogposts_feed.json" type="application/activitystream+json" title="Blog Posts Only (JSON)" />
    </Head>
);

export default RssFeeds;
