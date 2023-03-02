import { BlogPost } from '@models/blogPost';
import { ReadingLog } from '@models/ReadingLog';
import { postsPerPage } from './config';
import { getAllPosts, sortPosts } from './posts';
import { convertToPost, getAllReadingLogs } from './readinglog';

type TagPage = {
    params: {
        tag?: string
        page: string
    }
}

export const getPostTagUrls = (post: BlogPost | ReadingLog): string[] => post.tags.map((t) => t.url);

export const getAllPostsForTag = (tag: string): BlogPost[] => {
    const allPosts = getAllPosts();
    const allReadingLogs = getAllReadingLogs();

    const allEntries = [
        ...allPosts,
        ...allReadingLogs.map((rl) => convertToPost(rl)),
    ];

    const filteredPosts = allEntries.filter((p) => getPostTagUrls(p).includes(tag));

    return sortPosts(filteredPosts);
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
