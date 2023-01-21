import { BlogPost } from '@models/blogPost';
import { PostsPerTag, PostsPerYear, Stats } from '@models/Stats';
import { getAllPosts } from './posts';

export const getPostsPerYear = (posts: BlogPost[]): PostsPerYear[] => {
    const allYears = posts.map((p) => parseInt(p.date.toString().substring(0, 4), 10));

    const years = [...new Set(allYears)];

    const postsPerYear: PostsPerYear[] = [];

    for (let i = 0; i < years.length; i += 1) {
        postsPerYear.push({
            year: years[i],
            count: posts.filter((p) => p.date.toString().substring(0, 4) === years[i].toString()).length,
        });
    }

    return postsPerYear;
};

export const getPopularTags = (posts: BlogPost[], limit = 10): PostsPerTag[] => {
    const postsPerTag: PostsPerTag[] = [];

    for (let i = 0; i < posts.length; i += 1) {
        const { tags } = posts[i];

        tags.forEach((tag) => {
            const tagRecord = postsPerTag.find((p) => p.tag === tag.name);
            if (tagRecord) {
                postsPerTag.find((p) => p.tag === tag.name).count += 1;
            } else {
                postsPerTag.push({
                    tag: tag.name,
                    url: tag.url,
                    count: 1,
                });
            }
        });
    }

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
