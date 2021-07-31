import { FC } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { getAllPostIds, getPostData } from '@lib/posts';
import { BlogPost } from '@models/blogPost';
import BlogEntry from '@components/BlogEntry';

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds(true);

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = getPostData(params.year.toString(), params.month.toString(), params.day.toString(), params.id.toString().replace(/\.html$/, ''));

    return {
        props: {
            post: postData,
        },
    };
};

interface PostProps {
    post: BlogPost
}

const Post: FC<PostProps> = ({ post }) => (
    <main className="wider">
        <BlogEntry post={post} />
    </main>
);

export default Post;
