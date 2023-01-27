import { BlogPost } from '@models/blogPost';
import { BlogTag } from '@models/BlogTag';
import { PostsPerTag, PostsPerYear, Stats } from '@models/Stats';
import { getAllPosts } from './posts';

const getPostYear = (postDate: string): number => parseInt(postDate.substring(0, 4), 10);

export const getPostsPerYear = (posts: BlogPost[]): PostsPerYear[] => {
    const allYears = posts.map((p) => getPostYear(p.date.toString()));

    const years = [...new Set(allYears)];

    const postsPerYear: PostsPerYear[] = [];

    for (let i = 0; i < years.length; i += 1) {
        postsPerYear.push({
            year: years[i],
            count: posts.filter((p) => getPostYear(p.date.toString()) === years[i]).length,
        });
    }

    return postsPerYear;
};

export const getPopularTags = (posts: BlogPost[], limit = 10): PostsPerTag[] => {
    const postsPerTag: PostsPerTag[] = [];
    let tagArray: BlogTag[] = [];

    for (let i = 0; i < posts.length; i += 1) {
        const { tags } = posts[i];

        tagArray = [...tagArray, ...tags];
    }

    const uniqueTags = [...new Set(tagArray.map((t) => t.url))];

    uniqueTags.forEach((tagUrl) => {
        postsPerTag.push({
            name: tagArray.find((t) => t.url === tagUrl).name,
            url: tagUrl,
            count: tagArray.filter((t) => t.url === tagUrl).length,
        });
    });

    return postsPerTag.length <= limit
        ? postsPerTag
            .sort((a, b) => b.count - a.count)
        : postsPerTag
            .sort((a, b) => b.count - a.count)
            .slice(0, limit);
};

export const getStats = (): Stats => {
    const posts = getAllPosts(true);

    return {
        PostsPerYear: getPostsPerYear(posts),
        MostPopularTags: getPopularTags(posts),
    };
};
