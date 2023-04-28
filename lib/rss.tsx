/* eslint-disable max-len */
import fs from 'fs';
import path from 'path';
import { Feed, Item } from 'feed';
import { MDXRemote } from 'next-mdx-remote';
import ReactDOMServer from 'react-dom/server';
import { BlogTag } from '@models/BlogTag';
import { BlogPost } from '@models/blogPost';
import marked from 'marked';
import matter from 'gray-matter';
import { remarkCodeHike } from '@code-hike/mdx';
import { serialize } from 'next-mdx-remote/serialize';
import { ReadingLog } from '@models/ReadingLog';
import { CH } from '@code-hike/mdx/components';

// Blog Components
import PostImage from '@components/RssPostImage';
import PostVideo from '@components/PostVideo';
import EmbeddedTweet from '@components/EmbeddedTweet';
import TableOfContents from '@components/TableOfContents';
import TableOfContentsPage from '@components/TableOfContentsPage';
import BookRead from '@components/BookRead';
import ExternalLink from '@components/ExternalLink';
import InDepthNotes from '@components/InDepthNotes';
import YouTubeEmbed from '@components/RssYouTubeEmbed';
import CodeSandbox from '@components/CodeSandbox/CodeSandbox';

import { buildUrlFromId } from './utilities';
import { getPostExcerpt } from './posts';
import { convertToPost } from './readinglog';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const theme = require('shiki/themes/github-dark-dimmed.json');

const components = {
    PostImage,
    PostVideo,
    EmbeddedTweet,
    TableOfContents,
    TableOfContentsPage,
    BookRead,
    YouTubeEmbed,
    ExternalLink,
    CodeSandbox,
    InDepthNotes,
    CH,
};

const postsDirectory = path.join(process.cwd(), 'posts');
const readingLogDirectory = path.join(process.cwd(), 'reading-logs');

export const sortPosts = (posts: BlogPost[]): BlogPost[] => posts.sort((a: BlogPost, b: BlogPost) => {
    if (a.date < b.date) {
        return 1;
    }
    return -1;
});

export const sortReadingLogs = (posts: ReadingLog[]): ReadingLog[] => posts.sort((a: ReadingLog, b: ReadingLog) => {
    if (a.date < b.date) {
        return 1;
    }
    return -1;
});

const getPostsForRssFeed = async (): Promise<BlogPost[]> => {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);

    const posts = await Promise.all(fileNames.map(async (fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.mdx$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const { content, data } = matter(fileContents);
        const html = marked(content);
        const excerpt = getPostExcerpt(html);

        const mdx = await serialize(content, {
            scope: data,
            mdxOptions: {
                remarkPlugins: [[remarkCodeHike, { autoImport: false, theme }]],
                useDynamicImport: true,
            },
        });

        const url = buildUrlFromId(id);

        const tags = data.tags || [] as BlogTag[];

        // Combine the data with the id
        return {
            id,
            title: data.title,
            excerpt: excerpt || data.excerpt || null,
            date: data.date,
            url,
            hasEmbeddedTweet: false,
            tags,
            isRssOnly: data.isRssOnly || false,
            content: mdx.compiledSource,
        };
    }));

    return sortPosts(posts);
};

const getReadingLogsForRssFeed = async (): Promise<ReadingLog[]> => {
    // Get file names under /posts
    const fileNames = fs.readdirSync(readingLogDirectory);

    const posts: ReadingLog[] = await Promise.all(fileNames.map(async (fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.mdx$/, '');

        // Read markdown file as string
        const fullPath = path.join(readingLogDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const { content, data } = matter(fileContents);
        const html = marked(content);
        const excerpt = getPostExcerpt(html);

        const mdx = await serialize(content, { scope: data });
        const url = `/reading-log/${id}`;

        const tags = data.tags || [] as BlogTag[];

        // Combine the data with the id
        return {
            id,
            title: data.title,
            number: parseInt(id, 10),
            excerpt: excerpt || data.excerpt || null,
            date: data.date,
            url,
            tags,
            commentIssueNumber: data.commentIssueNumber,
            content: mdx.compiledSource,
        } as ReadingLog;
    }));

    return sortReadingLogs(posts);
};

const getAllPosts = async (): Promise<Item[]> => {
    const posts = await getPostsForRssFeed();
    const logs = await getReadingLogsForRssFeed();

    const allPosts: BlogPost[] = sortPosts([
        ...posts,
        ...logs.map((l) => convertToPost(l)),
    ]);

    const items: Item[] = [];

    allPosts.forEach((post) => {
        const mdx = (
            <MDXRemote
                compiledSource={post.content}
                components={components}
                scope={post}
                frontmatter={post}
            />
        );

        const html = ReactDOMServer.renderToStaticMarkup(mdx);

        const htmlContent = `
            <div>
                ${post.isRssOnly ? '<p><em>This post is for the <a href="https://kpwags.com/posts/2022/08/15/welcome-to-the-rss-club">Secret RSS Club Readers</a>.</em></p>' : ''}
                ${html}
            </div>
        `;

        items.push({
            title: post.title,
            id: `https://kpwags.com${post.url}`,
            link: `https://kpwags.com${post.url}`,
            description: post.excerpt,
            content: htmlContent,
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

const getPosts = async (): Promise<Item[]> => {
    const posts = await getPostsForRssFeed();

    const items: Item[] = [];

    posts.forEach((post) => {
        const mdx = (
            <MDXRemote
                compiledSource={post.content}
                components={components}
                scope={post}
                frontmatter={post}
            />
        );

        const html = ReactDOMServer.renderToStaticMarkup(mdx);

        const htmlContent = `
            <div>
                ${post.isRssOnly ? '<p><em>This post is for the <a href="https://kpwags.com/posts/2022/08/15/welcome-to-the-rss-club">Secret RSS Club Readers</a>.</em></p>' : ''}
                ${html}
            </div>
        `;

        items.push({
            title: post.title,
            id: `https://kpwags.com${post.url}`,
            link: `https://kpwags.com${post.url}`,
            description: post.excerpt,
            content: htmlContent,
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

const getReadingLogs = async (): Promise<Item[]> => {
    const logs = await getReadingLogsForRssFeed();

    const items: Item[] = [];

    logs.forEach((log) => {
        const mdx = (
            <MDXRemote
                compiledSource={log.content}
                components={components}
                scope={log}
                frontmatter={log}
            />
        );

        const html = ReactDOMServer.renderToStaticMarkup(mdx);

        const htmlContent = `
            <div>
                ${html}
            </div>
        `;

        items.push({
            title: log.title,
            id: `https://kpwags.com${log.url}`,
            link: `https://kpwags.com${log.url}`,
            description: log.excerpt,
            content: htmlContent,
            author: [{
                name: 'Keith Wagner',
                email: 'blog@kpwags.com',
                link: 'https://kpwags.com/',
            }],
            date: new Date(log.date),
            image: log.socialImageUrl || null,
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
        updated: new Date(),
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

    const items = await getAllPosts();

    items.forEach((i) => feed.addItem(i));

    const publicDirectory = path.join(process.cwd(), 'public');

    fs.writeFileSync(`${publicDirectory}/rss/feed.xml`, feed.rss2());
    fs.writeFileSync(`${publicDirectory}/rss/atom.xml`, feed.atom1());
    fs.writeFileSync(`${publicDirectory}/rss/feed.json`, feed.json1());
};

const generateBlogPostRssFeed = async (): Promise<void> => {
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
            rss2: `${baseUrl}/rss/blogposts_feed.xml`,
            json: `${baseUrl}/rss/blogposts_feed.json`,
            atom: `${baseUrl}/rss/blogposts_atom.xml`,
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

    fs.writeFileSync(`${publicDirectory}/rss/blogposts_feed.xml`, feed.rss2());
    fs.writeFileSync(`${publicDirectory}/rss/blogposts_atom.xml`, feed.atom1());
    fs.writeFileSync(`${publicDirectory}/rss/blogposts_feed.json`, feed.json1());
};

const generateReadingLogRssFeed = async (): Promise<void> => {
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
            rss2: `${baseUrl}/rss/readinglog_feed.xml`,
            json: `${baseUrl}/rss/readinglog_atom.json`,
            atom: `${baseUrl}/rss/readinglog_feed.xml`,
        },
        author: {
            name: 'Keith Wagner',
            email: 'blog@kpwags.com',
            link: 'https://kpwags.com/',
        },
    });

    const items = await getReadingLogs();

    items.forEach((i) => feed.addItem(i));

    const publicDirectory = path.join(process.cwd(), 'public');

    fs.writeFileSync(`${publicDirectory}/rss/readinglog_feed.xml`, feed.rss2());
    fs.writeFileSync(`${publicDirectory}/rss/readinglog_atom.xml`, feed.atom1());
    fs.writeFileSync(`${publicDirectory}/rss/readinglog_feed.json`, feed.json1());
};

export {
    generateRssFeed,
    generateReadingLogRssFeed,
    generateBlogPostRssFeed,
};
