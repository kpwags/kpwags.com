// import Link from 'next/link';
import { getAllPosts, sortPosts } from '@lib/posts';
import { GetStaticProps } from 'next';
import LatestPosts from '@components/LatestPosts';
import { BlogPost } from '@models/blogPost';
import RssFeeds from '@components/RssFeeds';
import { generateAllRssFeeds } from '@lib/rss';
import { convertToPost, getAllReadingLogs } from '@lib/readinglog';

import styles from '@css/Landing.module.css';

export const getStaticProps: GetStaticProps = async () => {
    const blogPosts = getAllPosts();
    const readingLogs = getAllReadingLogs();

    const recentPosts: BlogPost[] = sortPosts([
        ...blogPosts,
        ...readingLogs.map((rl) => convertToPost(rl)),
    ]);

    await generateAllRssFeeds();

    return {
        props: {
            posts: recentPosts.slice(0, 6),
        },
    };
};
interface HomeProps {
    posts: BlogPost[];
}

const Home = ({ posts }: HomeProps): JSX.Element => (
    <main className="slim">
        <RssFeeds />

        <div className={styles.landing}>
            <div className={styles.welcome}>
                <div className={styles.image}>
                    <img src="/images/keith.jpg" alt="Me in a Phillies hat and shirt drinking a beer" />
                </div>
                <div className={styles.contentBox}>
                    <div className={styles.meta}>Welcome!</div>
                    <p>
                        Hi! I&apos;m Keith Wagner, a software developer in the Philadelphia area.
                        I have a wide variety of interests and will often write about them here.
                    </p>
                </div>
            </div>

            <div className={styles.posts}>
                <LatestPosts posts={posts} />
            </div>
        </div>

    </main>
);

export default Home;
