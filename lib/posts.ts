import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';
import { serialize } from 'next-mdx-remote/serialize';
import { BlogPost } from '@models/BlogPost';
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

class Posts {
    static PostsDirectory = path.join(process.cwd(), 'posts');

    static SortPosts = (posts: BlogPost[]): BlogPost[] => posts.sort((a: BlogPost, b: BlogPost) => {
        if (a.date < b.date) {
            return 1;
        }
        return -1;
    });

    static GetPostExcerpt = (html: string): string => {
        const endParagraphIndex = html.indexOf('</p>');
        const snippet = html.substring(0, endParagraphIndex);

        return snippet.replace('<p>', '');
    };

    static GetAllPosts = (includeRssOnly = false): BlogPost[] => {
        const fileNames = fs.readdirSync(this.PostsDirectory);

        const allPostsData = fileNames.map((fileName) => {
            // Remove ".md" from file name to get id
            const id = fileName.replace(/\.mdx$/, '');

            // Read markdown file as string
            const fullPath = path.join(this.PostsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');

            // Use gray-matter to parse the post metadata section
            const { content, data } = matter(fileContents);

            const html = marked(content);
            const url = buildUrlFromId(id);
            const excerpt = this.GetPostExcerpt(html);

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
                contentImage: data.contentImage || null,
            };
        });

        const sortedPosts = this.SortPosts(allPostsData);

        if (includeRssOnly) {
            return sortedPosts;
        }

        return sortedPosts.filter((p) => !p.isRssOnly);
    };

    static GetPostCount = (): number => {
        const posts = this.GetAllPosts();
        return posts.length;
    };

    static GetAllPostIds = (): PostId[] => {
        const fileNames = fs.readdirSync(this.PostsDirectory);

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

    static GetPostPages = (): TagPage[] => {
        const postCount = this.GetPostCount();

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

    static GetPostData = async (query: PostQuery) : Promise<BlogPost> => {
        const {
            year,
            month,
            day,
            id,
        } = query;

        const postId = `${year}-${month}-${day}-${id}`;

        const fullPath = path.join(this.PostsDirectory, `${postId}.mdx`);

        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const { content, data } = matter(fileContents);

        const html = marked(content);
        const excerpt = this.GetPostExcerpt(html);

        const mdx = await serialize(content, { scope: data });

        const tags = data.tags || [] as BlogTag[];

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
            socialImageUrl: data.socialImageUrl || null,
            socialImageWidth: data.socialImageWidth || null,
            socialImageHeight: data.socialImageHeight || null,
        };
    };

    static GetPaginatedPosts = (page: number, count = postsPerPage): { totalPages: number, posts: BlogPost[]} => {
        const posts = this.GetAllPosts();

        const start = (page - 1) * 10;
        const end = start + count;

        const maxPage = Math.ceil(posts.length / postsPerPage);

        return {
            totalPages: maxPage,
            posts: posts.slice(start, end),
        };
    };

    static GetPostTagUrls = (post: BlogPost): string[] => post.tags.map((t) => t.url);

    static GetAllPostsForTag = (tag: string): BlogPost[] => {
        const allPosts = this.GetAllPosts();
        const filteredPosts = allPosts.filter((p) => this.GetPostTagUrls(p).includes(tag));

        return filteredPosts;
    };

    static GetPaginatedPostsForTag = (tag: string, page: number, count = postsPerPage): { totalPages: number, posts: BlogPost[]} => {
        const sortedPosts = this.GetAllPostsForTag(tag);

        const start = (page - 1) * 10;
        const end = start + count;

        const maxPage = Math.ceil(sortedPosts.length / postsPerPage);

        return {
            totalPages: maxPage,
            posts: sortedPosts.slice(start, end),
        };
    };

    static GetTaggedPostPages = (tag: string): TagPage[] => {
        const taggedPosts = this.GetAllPostsForTag(tag);

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

    static GetPageCountForTag = (tag: string): number => {
        const taggedPosts = this.GetAllPostsForTag(tag);

        const postCount = taggedPosts.length;

        return Math.ceil(postCount / postsPerPage);
    };

    static GetAllTagPages = (): TagPage[] => {
        const allPosts = this.GetAllPosts();

        const tags: { name: string, pageCount: number}[] = [];

        allPosts.forEach((p) => {
            p.tags.forEach((t) => {
                if (!tags.map((tag) => tag.name).includes(t.url)) {
                    tags.push({ name: t.url, pageCount: this.GetPageCountForTag(t.url) });
                }
            });
        });

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

    static GetUrlTag = (tag: string): string => tag.toString().toLowerCase().replace(/\./g, '').replace(/-/g, '');

    static SearchPosts = (keywords: string, blogPosts: BlogPost[]): BlogPost[] => {
        const posts: BlogPost[] = [];

        blogPosts.forEach((p) => {
            if (p.content.indexOf(keywords) !== -1) {
                posts.push(p);
            }
        });

        return posts;
    };

    static GetPostsForRssFeed = async () : Promise<BlogPost[]> => {
        // Get file names under /posts
        const fileNames = fs.readdirSync(this.PostsDirectory);

        const posts = await Promise.all(fileNames.map(async (fileName) => {
            // Remove ".md" from file name to get id
            const id = fileName.replace(/\.mdx$/, '');

            // Read markdown file as string
            const fullPath = path.join(this.PostsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');

            // Use gray-matter to parse the post metadata section
            const { content, data } = matter(fileContents);
            const html = marked(content);
            const excerpt = this.GetPostExcerpt(html);

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
                content: mdx.compiledSource,
            };
        }));

        return this.SortPosts(posts);
    };
}

export default Posts;
