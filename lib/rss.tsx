import fs from 'fs';
import path from 'path';
import { Feed, Item } from 'feed';
import { getPostsForRssFeed } from '@lib/posts';
import { MDXRemote } from 'next-mdx-remote';
import ReactDOMServer from 'react-dom/server';
import dynamic from 'next/dynamic';

// Blog Components
import PostImage from '@components/PostImage';
import PostVideo from '@components/PostVideo';
import EmbeddedTweet from '@components/EmbeddedTweet';
import TableOfContents from '@components/TableOfContents';
import TableOfContentsPage from '@components/TableOfContentsPage';
import BookRead from '@components/BookRead';

const YouTubeEmbed = dynamic(() => import('@components/YouTubeEmbed'), {
    ssr: false,
});

const components = {
    PostImage,
    PostVideo,
    EmbeddedTweet,
    TableOfContents,
    TableOfContentsPage,
    BookRead,
    YouTubeEmbed,
};

const getPosts = async (): Promise<Item[]> => {
    const posts = await getPostsForRssFeed();

    const items: Item[] = [];

    posts.forEach((post) => {
        const mdx = (
            <MDXRemote compiledSource={post.content} components={components} />
        );

        const html = ReactDOMServer.renderToStaticMarkup(mdx);

        items.push({
            title: post.title,
            id: `https://kpwags.com${post.url}`,
            link: `https://kpwags.com${post.url}`,
            description: post.excerpt,
            content: html,
            author: [{
                name: 'Keith Wagner',
                email: 'blog@kpwags.com',
                link: 'https://kpwags.com/',
            }],
            date: new Date(post.date),
            image: post.socialImageUrl || null,
        });
    });

    return items;
};

const generateRssFeed = async (): Promise<void> => {
    const baseUrl = 'https://kpwags.com';
    const date = new Date();

    const feed = new Feed({
        title: 'Keith Wagner',
        description: "I'm a software developer, gamer, geek, amateur hockey player, aspiring writer, and a whole lot more. I enjoy tech, baseball, hockey, sci-fi and plenty more.",
        id: baseUrl,
        link: baseUrl,
        language: 'en',
        favicon: `${baseUrl}/favicon.ico`,
        copyright: `${date.getFullYear()} Keith Wagner`,
        updated: date,
        generator: 'Next.js using Feed for Node.js',
        feedLinks: {
            rss2: `${baseUrl}/rss/feed.xml`,
            json: `${baseUrl}/rss/feed.json`,
            atom: `${baseUrl}/rss/atom.xml`,
        },
        author: {
            name: 'Keith Wagner',
            email: 'blog@kpwags.com',
            link: 'https://kpwags.com/',
        },
    });

    const items = await getPosts();

    items.forEach((i) => feed.addItem(i));

    const publicDirectory = path.join(process.cwd(), 'public');

    fs.writeFileSync(`${publicDirectory}/rss/feed.xml`, feed.rss2());
    fs.writeFileSync(`${publicDirectory}/rss/atom.xml`, feed.atom1());
    fs.writeFileSync(`${publicDirectory}/rss/feed.json`, feed.json1());
};

export default generateRssFeed;
