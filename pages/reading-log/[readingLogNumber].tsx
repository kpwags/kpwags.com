import { GetStaticProps, GetStaticPaths } from 'next';
import { getAllReadingLogIds, getReadingLogData } from '@lib/readinglog';
import ReadingLogEntry from '@components/ReadingLogEntry';
import RssFeeds from '@components/RssFeeds';
import { ReadingLog } from '@models/ReadingLog';

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllReadingLogIds();

    return {
        paths,
        fallback: false,
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
    <>
        <RssFeeds />
        <main>
            <ReadingLogEntry readingLog={readingLog} />
        </main>
    </>
);

export default ReadingLogPost;
