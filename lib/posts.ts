import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';
import { serialize } from 'next-mdx-remote/serialize';
import { BlogPost } from '@models/blogPost';
import { remarkCodeHike } from '@code-hike/mdx';
import { Archives } from '@models/archives';
import {
    buildUrlFromId,
    removeAnchorLink,
    getPostExcerpt,
    getDateParts,
    formatDate,
} from './utilities';
import { postsPerPage } from './config';
import decodeHtmlEntities from './decodeHtmlEntities';
import generateTagUrl from './generateTagUrl';
import { getAllReadingLogs, convertToPost } from './readinglog';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const theme = require('shiki/themes/github-dark-dimmed.json');

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

type YearPage = {
    params: {
        year: string;
    }
}

type MonthYearPage = {
    params: {
        year: string;
        month: string;
    }
}

type PostQuery = {
    year: string
    month: string
    day: string
    id: string
}

const postsDirectory = path.join(process.cwd(), 'content', 'blog');
const postImagesDirectory = path.join(process.cwd(), 'public', 'images', 'social', 'blog');

export const sortPosts = (posts: BlogPost[]): BlogPost[] => posts.sort((a: BlogPost, b: BlogPost) => {
    if (a.date < b.date) {
        return 1;
    }
    return -1;
});

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

        const tags = data.tags || [] as string[];

        // Combine the data with the id
        const blogPost: BlogPost = {
            id,
            title: data.title,
            excerpt: excerpt || null,
            date: data.date,
            subheading: data.subheading || null,
            url,
            tags: tags.map((t: string) => ({ name: t, url: generateTagUrl(t) })),
            content: html,
            isRssOnly: data.isRssOnly || false,
            wordCount,
            readTime: readingTime,
            socialImageUrl: null,
        };

        return blogPost;
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

    const mdx = await serialize(content, {
        scope: data,
        mdxOptions: {
            remarkPlugins: [[remarkCodeHike, { autoImport: false, theme }]],
            useDynamicImport: true,
        },
    });

    const tags = data.tags || [] as string[];

    let socialImage = null;
    if (fs.existsSync(path.join(postImagesDirectory, `${postId}.jpg`))) {
        socialImage = `images/social/blog/${postId}.jpg`;
    }

    // Combine the data with the id
    return {
        id: postId,
        excerpt: excerpt || null,
        title: data.title,
        date: data.date,
        subheading: data.subheading || null,
        content: mdx.compiledSource,
        isRssOnly: data.isRssOnly || false,
        description: data.description || decodeHtmlEntities(removeAnchorLink(excerpt)) || null,
        url: buildUrlFromId(postId),
        tags: tags.map((t: string) => ({ name: t, url: generateTagUrl(t) })),
        commentIssueNumber: data.commentIssueNumber || null,
        socialImageUrl: socialImage,
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

export const searchPosts = (keywords: string, blogPosts: BlogPost[]): BlogPost[] => {
    const posts: BlogPost[] = [];

    blogPosts.forEach((p) => {
        if (p.content.indexOf(keywords) !== -1) {
            posts.push(p);
        }
    });

    return posts;
};

export const getPostYears = (posts: BlogPost[] = []): number[] => {
    const archiveYears: number[] = [];

    let blogPosts = posts;

    if (blogPosts.length > 0) {
        blogPosts = getAllPosts();
        const logs = getAllReadingLogs();

        blogPosts = sortPosts([
            ...posts,
            ...logs.map((l) => convertToPost(l)),
        ]);
    }

    // get unique years
    blogPosts.forEach((post) => {
        const dateParts = getDateParts(post.date);
        const archiveYear = parseInt(dateParts.year, 10);

        archiveYears.push(archiveYear);
    });

    const years: number[] = [...new Set(archiveYears)];

    return years;
};

export const getArchiveYearPages = (): YearPage[] => {
    const years = getPostYears([]);

    return years.map((y) => ({
        params: {
            year: y.toString(),
        },
    }));
};

export const getArchiveMonthYearPages = (): MonthYearPage[] => {
    const years = getPostYears([]);
    const months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

    const pages: MonthYearPage[] = [];

    years.forEach((year) => {
        months.forEach((month) => {
            pages.push({ params: { year: year.toString(), month } });
        });
    });

    return pages;
};

export const getArchivesList = (): Archives[] => {
    const archives: Archives[] = [];

    const posts = getAllPosts();
    const logs = getAllReadingLogs();

    const allPosts: BlogPost[] = sortPosts([
        ...posts,
        ...logs.map((l) => convertToPost(l)),
    ]);

    const years: number[] = getPostYears(allPosts);

    years.forEach((year) => {
        archives.push({ year, items: [] });
    });

    posts.forEach((post) => {
        const monthYear = formatDate(post.date, 'MMMM YYYY');
        const dateParts = getDateParts(post.date);
        const archiveYear = parseInt(dateParts.year, 10);

        const archive = archives.find((a) => a.year === archiveYear);

        if (archive) {
            if (archive.items.filter((a) => a.monthYear === monthYear).length === 0) {
                archive.items.push({ monthYear, url: `/archives/${dateParts.year}/${dateParts.month}` });
            }
        }
    });

    return archives;
};

export const getPostsForYear = (year: number): BlogPost[] => {
    const posts = getAllPosts();
    const logs = getAllReadingLogs();

    const allPosts: BlogPost[] = sortPosts([
        ...posts,
        ...logs.map((l) => convertToPost(l)),
    ]);

    return allPosts.filter((a) => getDateParts(a.date).year === year.toString());
};

export const getPostsForMonthAndYear = (year: number, month: number): BlogPost[] => {
    const posts = getAllPosts();
    const logs = getAllReadingLogs();

    const allPosts: BlogPost[] = sortPosts([
        ...posts,
        ...logs.map((l) => convertToPost(l)),
    ]);

    return allPosts.filter((a) => {
        const dateParts = getDateParts(a.date);

        return parseInt(dateParts.year, 10) === year && parseInt(dateParts.month, 10) === month;
    });
};
