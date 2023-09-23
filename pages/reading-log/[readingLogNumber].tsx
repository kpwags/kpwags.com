import { GetStaticProps, GetStaticPaths } from 'next';
import { getAllReadingLogIds, getReadingLogData } from '@lib/readinglog';
import ReadingLogEntry from '@components/ReadingLogEntry';
import RssFeeds from '@components/RssFeeds';
import { ReadingLog } from '@models/ReadingLog';
import { Head } from 'next/document';

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllReadingLogIds();

    return {
        paths,
        fallback: 'blocking',
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const readingLog = await getReadingLogData(parseInt(params.readingLogNumber.toString(), 10));

    return {
        props: {
            readingLog,
        },
    };
};

interface PostProps {
    readingLog: ReadingLog
}

const ReadingLogPost = ({ readingLog }: PostProps): JSX.Element => (
    <div className="page-content">
        <Head><title>{`${readingLog.title} - Keith Wagner`}</title></Head>
        <RssFeeds />
        <ReadingLogEntry readingLog={readingLog} />
    </div>
);

export default ReadingLogPost;
