import { getAllPosts } from '@lib/Posts';
import { GetStaticProps } from 'next';
import Welcome from '@components/Welcome';
import LatestPosts from '@components/LatestPosts';
import LatestPhotoset from '@components/LatestPhotoset';
import { BlogPost } from '@models/BlogPost';
import RssFeeds from '@components/RssFeeds';
import generateRssFeed from '@lib/rss';

export const getStaticProps: GetStaticProps = async () => {
    const blogPosts = getAllPosts();

    await generateRssFeed();

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
        <Welcome />
        <LatestPosts mostRecentPosts={posts} />
        <LatestPhotoset />
    </>
);

export default Home;
