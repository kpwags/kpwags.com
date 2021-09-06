import { FC } from 'react';
import { BlogPost } from '@models/blogPost';
import BlogEntry from '@components/BlogEntry';
import { GetStaticProps, GetStaticPaths } from 'next';
import { getAllPostIds, getPostData } from '@lib/posts';
import PageScrollIndicator from '@components/PageScrollIndicator';
import RssFeeds from '@components/RssFeeds';

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds();

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const blogPost = await getPostData({
        year: params.year.toString(),
        month: params.month.toString(),
        day: params.day.toString(),
        id: params.id.toString(),
    });

    return {
        props: {
            post: blogPost,
        },
    };
};

interface PostProps {
    post: BlogPost
}

const Post: FC<PostProps> = ({ post }) => (
    <>
        <RssFeeds />
        <PageScrollIndicator />
        <main>
            <BlogEntry post={post} />
        </main>
    </>
);

export default Post;
