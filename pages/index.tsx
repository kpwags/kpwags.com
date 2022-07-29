import { getAllPosts } from '@lib/posts';
import { GetStaticProps } from 'next';
import Welcome from '@components/Welcome';
import LatestPosts from '@components/LatestPosts';
import LatestPhotoset from '@components/LatestPhotoset';
import { BlogPost } from '@models/blogPost';
import RssFeeds from '@components/RssFeeds';
import { generateRssFeed, generatePhotoBlogRssFeed } from '@lib/rss';
import PhotoBlogRssFeeds from '@components/PhotoBlogRssFeeds';

export const getStaticProps: GetStaticProps = async () => {
    const blogPosts = getAllPosts();

    await generateRssFeed();
    generatePhotoBlogRssFeed();

    return {
        props: {
            posts: blogPosts.length <= 6 ? blogPosts : blogPosts.slice(0, 6),
        },
    };
};
interface HomeProps {
    posts: BlogPost[];
}

const Home = ({ posts }: HomeProps): JSX.Element => (
    <>
        <RssFeeds />
        <PhotoBlogRssFeeds />
        <Welcome />
        <LatestPosts mostRecentPosts={posts} />
        <LatestPhotoset />
    </>
);

export default Home;
