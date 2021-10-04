/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';
import { serialize } from 'next-mdx-remote/serialize';
import { BlogPost } from '@models/blogPost';
import { BlogTag } from '@models/BlogTag';
import { postsPerPage } from './config';
import { buildUrlFromId } from './utilities';

const postsDirectory = path.join(process.cwd(), 'posts');

export const getUrlTag = (tag: string): string => tag.toString().toLowerCase().replace(/\./g, '').replace(/-/g, '');

// TODO: See about eventually auto-generating the excerpt in a way that works on Netlify
// export const getPostExcerpt = (html: string): string => {
//     const dom = new JSDOM(html);

//     const paragraphs = dom.window.document.getElementsByTagName('p');

//     if (paragraphs.length === 0) {
//         return html;
//     }

//     return paragraphs[0].innerHTML;
// };

export const getAllPosts = (sorted = true) : BlogPost[] => {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);

    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.mdx$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const { content, data } = matter(fileContents);

        const html = marked(content);
        const url = buildUrlFromId(id);

        const tags = data.tags || [] as BlogTag[];

        // Combine the data with the id
        return {
            id,
            title: data.title,
            excerpt: data.excerpt || null,
            date: data.date,
            url,
            hasEmbeddedTweet: false,
            tags,
            content: html,
        };
    });

    if (sorted) {
    // Sort posts by date
        return allPostsData.sort((a: BlogPost, b: BlogPost) => {
            if (a.date < b.date) {
                return 1;
            }
            return -1;
        });
    }

    return allPostsData;
};

export function getAllPostIds() {
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
}

export const getPostCount = (): number => {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.length;
};

export const getPostPages = () => {
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

interface PostQuery {
    year: string
    month: string
    day: string
    id: string
}

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

    const mdx = await serialize(content, { scope: data });

    const tags = data.tags || [] as BlogTag[];

    // Combine the data with the id
    return {
        id: postId,
        excerpt: data.excerpt || null,
        title: data.title,
        date: data.date,
        content: mdx.compiledSource,
        description: data.description || null,
        url: buildUrlFromId(postId),
        hasEmbeddedTweet: data.hasEmbeddedTweet || false,
        tags,
        commentIssueNumber: data.commentIssueNumber || null,
    };
};

export const getPaginatedPosts = (page: number, count = postsPerPage) => {
    const sortedPosts = getAllPosts();

    const start = (page - 1) * 10;
    const end = start + count;

    const maxPage = Math.ceil(sortedPosts.length / postsPerPage);

    return {
        totalPages: maxPage,
        posts: sortedPosts.slice(start, end),
    };
};

export const getPostTagUrls = (post: BlogPost): string[] => post.tags.map((t) => t.url);

export const getAllPostsForTag = (tag: string): BlogPost[] => {
    const allPosts = getAllPosts();
    const filteredPosts = allPosts.filter((p) => getPostTagUrls(p).includes(tag));

    return filteredPosts;
};

export const getPaginatedPostsForTag = (tag: string, page: number, count = postsPerPage) => {
    const sortedPosts = getAllPostsForTag(tag);

    const start = (page - 1) * 10;
    const end = start + count;

    const maxPage = Math.ceil(sortedPosts.length / postsPerPage);

    return {
        totalPages: maxPage,
        posts: sortedPosts.slice(start, end),
    };
};

export const getTaggedPostPages = (tag: string) => {
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

export const getPageCountForTag = (tag: string) => {
    const taggedPosts = getAllPostsForTag(tag);

    const postCount = taggedPosts.length;

    return Math.ceil(postCount / postsPerPage);
};

export const getAllTagPages = () => {
    const allPosts = getAllPosts();

    const tags: { name: string, pageCount: number}[] = [];

    allPosts.forEach((p) => {
        p.tags.forEach((t) => {
            if (!tags.map((tag) => tag.name).includes(t.url)) {
                tags.push({ name: t.url, pageCount: getPageCountForTag(t.url) });
            }
        });
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const pages: any[] = [];

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

export const searchBlogPosts = (keywords: string, blogPosts: BlogPost[]): BlogPost[] => {
    const posts: BlogPost[] = [];

    blogPosts.forEach((p) => {
        if (p.content.indexOf(keywords) !== -1) {
            posts.push(p);
        }
    });

    return posts;
};
