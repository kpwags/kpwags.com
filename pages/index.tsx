import { getAllPosts } from '@lib/posts';
import { GetStaticProps } from 'next';
import Welcome from '@components/Welcome';
import LatestPosts from '@components/LatestPosts';
import LatestPhotoset from '@components/LatestPhotoset';
import { BlogPost } from '@models/blogPost';
import RssFeeds from '@components/RssFeeds';
import {
    generateRssFeed,
    generatePhotoBlogRssFeed,
    generateReadingLogRssFeed,
    generateBlogPostRssFeed,
} from '@lib/rss';
import PhotoBlogRssFeeds from '@components/PhotoBlogRssFeeds';
import { getAllReadingLogs } from '@lib/readinglog';
import { ReadingLog } from '@models/ReadingLog';
import LatestReadingLogs from '@components/LatestReadingLogs';

export const getStaticProps: GetStaticProps = async () => {
    const blogPosts = getAllPosts();
    const readingLogs = getAllReadingLogs();

    await generateRssFeed();
    await generateBlogPostRssFeed();
    await generateReadingLogRssFeed();
    generatePhotoBlogRssFeed();

    return {
        props: {
            posts: blogPosts.length <= 6 ? blogPosts : blogPosts.slice(0, 6),
            readingLogs: readingLogs.slice(0, 3),
        },
    };
};
interface HomeProps {
    posts: BlogPost[];
    readingLogs: ReadingLog[];
}

const Home = ({ posts, readingLogs }: HomeProps): JSX.Element => (
    <>
        <RssFeeds />
        <PhotoBlogRssFeeds />
        <Welcome />
        <LatestPosts mostRecentPosts={posts} />
        <LatestReadingLogs mostRecentLogs={readingLogs} />
        <LatestPhotoset />
    </>
);

export default Home;
