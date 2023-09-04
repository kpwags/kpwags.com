import Head from 'next/head';

const RssFeeds = (): JSX.Element => (
    <Head>
        <link rel="alternate" href="/rss/atom.xml" type="application/atom+xml" title="Keith Wagner (Atom)" />
        <link rel="alternate" href="/rss/feed.xml" type="application/rss+xml" title="Keith Wagner (RSS)" />
        <link rel="alternate" href="/rss/feed.json" type="application/activitystream+json" title="Keith Wagner (JSON)" />
        <link rel="alternate" href="/rss/readinglog_atom.xml" type="application/atom+xml" title="Reading Logs (Atom)" />
        <link rel="alternate" href="/rss/readinglog_feed.xml" type="application/rss+xml" title="Reading Logs (RSS)" />
        <link rel="alternate" href="/rss/readinglog_feed.json" type="application/activitystream+json" title="Reading Logs (JSON)" />
        <link rel="alternate" href="/rss/blogposts_atom.xml" type="application/atom+xml" title="Blog Posts (Atom)" />
        <link rel="alternate" href="/rss/blogposts_feed.xml" type="application/rss+xml" title="Blog Posts (RSS)" />
        <link rel="alternate" href="/rss/blogposts_feed.json" type="application/activitystream+json" title="Blog Posts (JSON)" />
        <link rel="alternate" href="/rss/booknotes_atom.xml" type="application/atom+xml" title="Book Notes (Atom)" />
        <link rel="alternate" href="/rss/booknotes_feed.xml" type="application/rss+xml" title="Book Notes (RSS)" />
        <link rel="alternate" href="/rss/booknotes_feed.json" type="application/activitystream+json" title="Book Notes (JSON)" />
    </Head>
);

export default RssFeeds;
