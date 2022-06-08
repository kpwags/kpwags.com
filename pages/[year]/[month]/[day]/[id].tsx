import { GetStaticProps, GetStaticPaths } from 'next';
import Posts from '@lib/Posts';
import { BlogPost } from '@models/BlogPost';
import BlogEntry from '@components/BlogEntry';
import RssFeeds from '@components/RssFeeds';

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = Posts.GetAllPostIds();

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const blogPost = await Posts.GetPostData({
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
