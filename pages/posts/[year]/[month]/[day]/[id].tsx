import Head from 'next/head';
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

const Post = ({ post }: PostProps): JSX.Element => (
    <>
        <Head>
            <title>{`${post.title} - Keith Wagner`}</title>
            <meta name="description" content={post.description || ''} />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={post.title} />
            <meta property="og:description" content={post.description || ''} />
            <meta property="og:url" content={`https://kpwags.com${post.url}`} />
            {post.socialImageUrl && <meta property="og:image" content={`https://kpwags.com/images/posts/${post.socialImageUrl}`} />}
            {post.socialImageWidth && <meta property="og:image:width" content={post.socialImageWidth.toString()} />}
            {post.socialImageHeight && <meta property="og:image:height" content={post.socialImageHeight.toString()} />}
            {post.socialImageUrl && (
                <>
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:site" content="@kpwags" />
                    <meta name="twitter:title" content={post.title} />
                    <meta name="twitter:description" content={post.description} />
                    <meta name="twitter:image" content={`https://kpwags.com/images/posts/${post.socialImageUrl}`} />
                </>
            )}
            {post.hasEmbeddedTweet && <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8" />}
        </Head>
        <RssFeeds />
        <PageScrollIndicator />
        <main>
            <BlogEntry post={post} />
        </main>
    </>
);

export default Post;
