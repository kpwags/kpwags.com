import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';
import { serialize } from 'next-mdx-remote/serialize';
import { BlogPost } from '@models/blogPost';
import { BlogTag } from '@models/BlogTag';
import { buildUrlFromId } from './utilities';
import { postsPerPage } from './config';
import decodeHtmlEntities from './decodeHtmlEntities';

type PostId = {
    params: {
        year: string
        month: string
        day: string
        id: string
    }
}

type TagPage = {
    params: {
        tag?: string
        page: string
    }
}

type PostQuery = {
    year: string
    month: string
    day: string
    id: string
}

const postsDirectory = path.join(process.cwd(), 'posts');
const postImagesDirectory = path.join(process.cwd(), 'public', 'images', 'posts');

export const sortPosts = (posts: BlogPost[]): BlogPost[] => posts.sort((a: BlogPost, b: BlogPost) => {
    if (a.date < b.date) {
        return 1;
    }
    return -1;
});

export const getPostExcerpt = (html: string): string => {
    const endParagraphIndex = html.indexOf('</p>');
    const snippet = html.substring(0, endParagraphIndex);

    return snippet.replace('<p>', '');
};

export const getAllPosts = (includeRssOnly = false): BlogPost[] => {
    const fileNames = fs.readdirSync(postsDirectory);

    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.mdx$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const { content, data } = matter(fileContents);

        let wordCount = null;
        let readingTime = null;

        if (!data.ignoreWordCount) {
            wordCount = content.split(' ').length - 1;
            readingTime = Math.round(wordCount / 200);

            if (readingTime === 0) {
                readingTime = 1;
            }
        }

        const html = marked(content);
        const url = buildUrlFromId(id);
        const excerpt = getPostExcerpt(html);

        const tags = data.tags || [] as BlogTag[];

        // Combine the data with the id
        return {
            id,
            title: data.title,
            excerpt: excerpt || null,
            date: data.date,
            url,
            hasEmbeddedTweet: false,
            tags,
            content: html,
            isRssOnly: data.isRssOnly || false,
            wordCount,
            readTime: readingTime,
        };
    });

    const sortedPosts = sortPosts(allPostsData);

    if (includeRssOnly) {
        return sortedPosts.filter((p) => new Date(p.date) <= new Date());
    }

    return sortedPosts.filter((p) => !p.isRssOnly && new Date(p.date) <= new Date());
};

export const getPostCount = (): number => {
    const posts = getAllPosts();
    return posts.length;
};

export const getAllPostIds = (): PostId[] => {
    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames.map((filename) => {
        const arr = filename.replace(/\.mdx$/, '').split('-');
        const id = arr.splice(3).join('-');

        return ({
            params: {
                year: arr[0].toString(),
                month: arr[1].toString(),
                day: arr[2].toString(),
                id,
            },
        });
    });
};

export const getPostPages = (): TagPage[] => {
    const postCount = getPostCount();

    const maxPage = Math.ceil(postCount / postsPerPage);

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

export const getPostData = async (query: PostQuery) : Promise<BlogPost> => {
    const {
        year,
        month,
        day,
        id,
    } = query;

    const postId = `${year}-${month}-${day}-${id}`;

    const fullPath = path.join(postsDirectory, `${postId}.mdx`);

    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const { content, data } = matter(fileContents);

    let wordCount = null;
    let readingTime = null;

    if (!data.ignoreWordCount) {
        wordCount = content.split(' ').length - 1;
        readingTime = Math.round(wordCount / 200);

        if (readingTime === 0) {
            readingTime = 1;
        }
    }

    const html = marked(content);
    const excerpt = getPostExcerpt(html);

    const mdx = await serialize(content, { scope: data });

    const tags = data.tags || [] as BlogTag[];

    let socialImage = null;
    if (fs.existsSync(path.join(postImagesDirectory, postId, 'social-image.jpg'))) {
        socialImage = `${postId}/social-image.jpg`;
    }

    // Combine the data with the id
    return {
        id: postId,
        excerpt: excerpt || data.excerpt || null,
        title: data.title,
        date: data.date,
        content: mdx.compiledSource,
        isRssOnly: data.isRssOnly || false,
        description: decodeHtmlEntities(excerpt) || data.description || null,
        url: buildUrlFromId(postId),
        hasEmbeddedTweet: data.hasEmbeddedTweet || false,
        tags,
        commentIssueNumber: data.commentIssueNumber || null,
        socialImageUrl: socialImage,
        socialImageWidth: data.socialImageWidth || null,
        socialImageHeight: data.socialImageHeight || null,
        wordCount,
        readTime: readingTime,
    };
};

export const getPaginatedPosts = (page: number, count = postsPerPage): { totalPages: number, posts: BlogPost[]} => {
    const posts = getAllPosts();

    const start = (page - 1) * 10;
    const end = start + count;

    const maxPage = Math.ceil(posts.length / postsPerPage);

    return {
        totalPages: maxPage,
        posts: posts.slice(start, end),
    };
};

export const getPostTagUrls = (post: BlogPost): string[] => post.tags.map((t) => t.url);

export const getAllPostsForTag = (tag: string): BlogPost[] => {
    const allPosts = getAllPosts();
    const filteredPosts = allPosts.filter((p) => getPostTagUrls(p).includes(tag));

    return filteredPosts;
};

export const getPaginatedPostsForTag = (tag: string, page: number, count = postsPerPage): { totalPages: number, posts: BlogPost[]} => {
    const sortedPosts = getAllPostsForTag(tag);

    const start = (page - 1) * 10;
    const end = start + count;

    const maxPage = Math.ceil(sortedPosts.length / postsPerPage);

    return {
        totalPages: maxPage,
        posts: sortedPosts.slice(start, end),
    };
};

export const getTaggedPostPages = (tag: string): TagPage[] => {
    const taggedPosts = getAllPostsForTag(tag);

    const postCount = taggedPosts.length;

    const maxPage = Math.ceil(postCount / postsPerPage);

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

export const getPageCountForTag = (tag: string): number => {
    const taggedPosts = getAllPostsForTag(tag);

    const postCount = taggedPosts.length;

    return Math.ceil(postCount / postsPerPage);
};

export const getAllTagPages = (): TagPage[] => {
    const allPosts = getAllPosts();

    const tags: { name: string, pageCount: number}[] = [];

    allPosts.forEach((p) => {
        p.tags.forEach((t) => {
            if (!tags.map((tag) => tag.name).includes(t.url)) {
                tags.push({ name: t.url, pageCount: getPageCountForTag(t.url) });
            }
        });
    });

    const pages: TagPage[] = [];

    tags.forEach((tag) => {
        if (tag.pageCount === 1) {
            pages.push({
                params: {
                    tag: tag.name,
                    page: '1',
                },
            });
        } else {
            for (let x = 1; x <= tag.pageCount; x += 1) {
                pages.push({
                    params: {
                        tag: tag.name,
                        page: x.toString(),
                    },
                });
            }
        }
    });

    return pages;
};

export const getUrlTag = (tag: string): string => tag.toString().toLowerCase().replace(/\./g, '').replace(/-/g, '');

export const searchPosts = (keywords: string, blogPosts: BlogPost[]): BlogPost[] => {
    const posts: BlogPost[] = [];

    blogPosts.forEach((p) => {
        if (p.content.indexOf(keywords) !== -1) {
            posts.push(p);
        }
    });

    return posts;
};

export const getPostsForRssFeed = async () : Promise<BlogPost[]> => {
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

        const mdx = await serialize(content, { scope: data });
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
