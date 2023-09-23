import Head from 'next/head';
import { getPaginatedReadingLogs } from '@lib/readinglog';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import ReadingLogListing from '@components/ReadingLogListing';
import RssFeeds from '@components/RssFeeds';
import { ReadingLog } from '@models/ReadingLog';

export const getStaticProps: GetStaticProps = async () => {
    const readingLogs = getPaginatedReadingLogs(1);

    return {
        props: {
            readingLogs: readingLogs.posts,
        },
    };
};

interface ReadingLogProps {
    readingLogs: ReadingLog[]
}

const ReadingLogs = ({ readingLogs }: ReadingLogProps): JSX.Element => (
    <div className="page-content">
        <Head><title>Reading Logs - Keith Wagner</title></Head>
        <RssFeeds />

        <h1>Reading Logs</h1>

        {readingLogs.map((rl) => (<ReadingLogListing key={rl.id} readingLog={rl} />))}

        <ul className="pagination">
            <li className="next">
                <Link href="/reading-logs/2" className="paginate-next-a">Older &rarr;</Link>
            </li>
        </ul>
    </div>
);

export default ReadingLogs;
