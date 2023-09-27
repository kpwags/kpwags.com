import Link from 'next/link';
import { getAllPosts, sortPosts } from '@lib/posts';
import { GetStaticProps } from 'next';
import LatestPosts from '@components/LatestPosts';
import { BlogPost } from '@models/blogPost';
import RssFeeds from '@components/RssFeeds';
import { generateAllRssFeeds } from '@lib/rss';
import { convertToPost, getAllReadingLogs } from '@lib/readinglog';
import { getPaginatedBookNotes } from '@lib/books';
import { BookNote } from '@models/BookNote';
import BookNoteListing from '@components/BookNoteListing';

import styles from '@css/Landing.module.css';

export const getStaticProps: GetStaticProps = async () => {
    const blogPosts = getAllPosts();
    const readingLogs = getAllReadingLogs();
    const bookNotes = getPaginatedBookNotes(1, 1);

    const recentPosts: BlogPost[] = sortPosts([
        ...blogPosts,
        ...readingLogs.map((rl) => convertToPost(rl)),
    ]);

    await generateAllRssFeeds();

    return {
        props: {
            posts: recentPosts.slice(0, 6),
            bookNote: bookNotes.bookNotes[0],
        },
    };
};
interface HomeProps {
    posts: BlogPost[];
    bookNote: BookNote;
}

const Home = ({ posts, bookNote }: HomeProps): JSX.Element => (
    <main>
        <RssFeeds />

        <div className={styles.landing}>
            <section className={styles.welcome}>
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
            </section>

            <section className={styles.posts}>
                <LatestPosts posts={posts} />
            </section>

            <section className={styles.posts}>
                <BookNoteListing bookNote={bookNote} />
            </section>

            <section className={styles.more}>
                <Link href="/blog">Blog</Link>
                <Link href="/reading-logs">Reading Logs</Link>
                <Link href="/book-notes">Book Notes</Link>
            </section>
        </div>

    </main>
);

export default Home;
