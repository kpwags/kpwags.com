import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { serialize } from 'next-mdx-remote/serialize';
import { ReadingLog } from '@models/ReadingLog';
import { BlogPost } from '@models/blogPost';
import generateTagUrl from './generateTagUrl';
import { postsPerPage } from './config';
import { getPostExcerpt } from './utilities';

const readingLogDirectory = path.join(process.cwd(), 'content', 'reading-logs');

export const sortPosts = (posts: ReadingLog[]): ReadingLog[] => posts.sort((a: ReadingLog, b: ReadingLog) => {
    if (a.date < b.date) {
        return 1;
    }
    return -1;
});

export const getAllReadingLogs = (): ReadingLog[] => {
    const fileNames = fs.readdirSync(readingLogDirectory);

    const allPostsData: ReadingLog[] = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.mdx$/, '');

        // Read markdown file as string
        const fullPath = path.join(readingLogDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const { content, data } = matter(fileContents);

        const html = marked.parse(content);
        const url = `/reading-log/${id}`;
        const excerpt = getPostExcerpt(html);

        const tags = data.tags || [] as string[];

        // Combine the data with the id
        return {
            id,
            title: data.title,
            number: parseInt(id, 10),
            excerpt: excerpt || null,
            description: excerpt || null,
            date: data.date,
            url,
            tags: tags.map((t: string) => ({ name: t, url: generateTagUrl(t) })),
            content: html,
            commentIssueNumber: data.commentIssueNumber,
            socialImageUrl: null,
        };
    });

    const sortedPosts = sortPosts(allPostsData);

    return sortedPosts.filter((p) => new Date(p.date) <= new Date());
};

export const getReadingLogData = async (readingLogNumber: number) : Promise<ReadingLog> => {
    const fullPath = path.join(readingLogDirectory, `${readingLogNumber}.mdx`);

    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const { content, data } = matter(fileContents);

    const html = marked.parse(content);
    const excerpt = getPostExcerpt(html);
    const description = data.description ?? excerpt;

    const mdx = await serialize(content, { scope: data });

    const tags = data.tags || [] as string[];

    return {
        id: readingLogNumber.toString(),
        title: data.title,
        number: readingLogNumber,
        description,
        excerpt,
        date: data.date,
        url: `/reading-log/${readingLogNumber}`,
        tags: tags.map((t: string) => ({ name: t, url: generateTagUrl(t) })),
        content: mdx.compiledSource,
        commentIssueNumber: data.commentIssueNumber,
        socialImageUrl: `images/social/reading-logs/${readingLogNumber}.jpg`,
    };
};

export const getPaginatedReadingLogs = (page: number, count = postsPerPage): { totalPages: number, posts: ReadingLog[]} => {
    const posts = getAllReadingLogs();

    const start = (page - 1) * 10;
    const end = start + count;

    const maxPage = Math.ceil(posts.length / postsPerPage);

    return {
        totalPages: maxPage,
        posts: posts.slice(start, end),
    };
};

export const getReadingLogCount = (): number => {
    const posts = getAllReadingLogs();
    return posts.length;
};

export const getReadingLogPages = (): { params: { page: string }}[] => {
    const readingLogCount = getReadingLogCount();

    const maxPage = Math.ceil(readingLogCount / postsPerPage);

    const paths = [];

    for (let x = 1; x <= maxPage; x += 1) {
        paths.push(x);
    }

    return paths.map((p) => ({
        params: {
            page: p.toString(),
        },
    }));
};

export const getAllReadingLogIds = (): { params: { readingLogNumber: string }}[] => {
    const fileNames = fs.readdirSync(readingLogDirectory);

    return fileNames.map((filename) => {
        const readingLogNumber = filename.replace(/\.mdx$/, '');

        return ({
            params: {
                readingLogNumber,
            },
        });
    });
};

export const convertToPost = (log: ReadingLog): BlogPost => {
    const post: BlogPost = {
        id: log.id,
        title: log.title,
        date: log.date,
        isRssOnly: false,
        excerpt: log.excerpt,
        url: log.url,
        content: log.content,
        description: log.excerpt,
        tags: log.tags,
        commentIssueNumber: log.commentIssueNumber,
        wordCount: 0,
        readTime: 0,
        socialImageUrl: log.socialImageUrl,
    };

    return post;
};
