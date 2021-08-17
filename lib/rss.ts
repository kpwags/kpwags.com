import fs from 'fs';
import path from 'path';
import { Feed } from 'feed';
import { getAllPosts } from '@lib/posts';

const generateRssFeed = (): void => {
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
            link: 'https://kpwags.com',
        },
    });

    const posts = getAllPosts();

    posts.forEach((post) => {
        feed.addItem({
            title: post.title,
            id: post.url,
            link: post.url,
            description: post.excerpt,
            content: post.content,
            author: [{
                name: 'Keith Wagner',
                email: 'blog@kpwags.com',
                link: 'https://kpwags.com',
            }],
            date: new Date(post.date),
            image: post.socialImageUrl || null,
        });
    });

    const publicDirectory = path.join(process.cwd(), 'public');

    fs.writeFileSync(`${publicDirectory}/rss/feed.xml`, feed.rss2());
    fs.writeFileSync(`${publicDirectory}/rss/atom.xml`, feed.atom1());
    fs.writeFileSync(`${publicDirectory}/rss/feed.json`, feed.json1());
};

export default generateRssFeed;
