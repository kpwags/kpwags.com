import Link from 'next/link';
import { getAllPosts } from '@lib/posts';
import { GetStaticProps } from 'next';
import Welcome from '@components/Welcome';
import LatestPosts from '@components/LatestPosts';
import { BlogPost } from '@models/blogPost';
import RssFeeds from '@components/RssFeeds';
import { generateAllRssFeeds } from '@lib/rss';
import { getAllReadingLogs } from '@lib/readinglog';
import { ReadingLog } from '@models/ReadingLog';
import { getAllBookNotes } from '@lib/books';
import { BookNote } from '@models/BookNote';
import BookNoteListing from '@components/BookNoteListing';

import styles from '@css/Landing.module.css';

export const getStaticProps: GetStaticProps = async () => {
    const blogPosts = getAllPosts();
    const readingLogs = getAllReadingLogs();
    const bookNotes = getAllBookNotes();

    await generateAllRssFeeds();

    return {
        props: {
            posts: blogPosts.length <= 6 ? blogPosts : blogPosts.slice(0, 6),
            readingLogs: readingLogs.slice(0, 3),
            bookNote: bookNotes[0],
        },
    };
};
interface HomeProps {
    posts: BlogPost[];
    readingLogs: ReadingLog[];
    bookNote: BookNote;
}

const Home = ({ posts, readingLogs, bookNote }: HomeProps): JSX.Element => (
    <>
        <RssFeeds />
        <Welcome />

        <LatestPosts
            title="Latest Posts"
            posts={posts.map((p) => ({ title: p.title, url: p.url }))}
            viewMoreLink="/blog"
        />

        <LatestPosts
            title="Latest Reading Logs"
            posts={readingLogs.map((p) => ({ title: p.title.replace('Reading Log - ', ''), url: p.url }))}
            viewMoreLink="/reading-logs"
        />

        <h2 className={styles.latestBookNote}>Latest Book Note</h2>
        <BookNoteListing bookNote={bookNote} />
        <div className={styles.viewMore}>
            <Link href="/book-notes">View More</Link>
        </div>
    </>
);

export default Home;
