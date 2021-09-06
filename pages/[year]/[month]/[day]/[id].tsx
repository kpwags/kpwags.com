import { GetStaticProps, GetStaticPaths } from 'next';
import { getAllPostIds, getPostData } from '@lib/posts';
import { BlogPost } from '@models/blogPost';
import BlogEntry from '@components/BlogEntry';
import RssFeeds from '@components/RssFeeds';

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds(true);

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
        id: params.id.toString().replace(/\.html$/, ''),
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

const Post = ({ post }: PostProps): JSX.Element => (
    <>
        <RssFeeds />
        <main>
            <BlogEntry post={post} />
        </main>
    </>
);

export default Post;
