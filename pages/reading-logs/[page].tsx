import { useState, useEffect } from 'react';
import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import { getPaginatedReadingLogs, getReadingLogPages } from '@lib/readinglog';
import ReadingLogListing from '@components/ReadingLogListing';
import ReactPaginate from 'react-paginate';
import RssFeeds from '@components/RssFeeds';
import { ReadingLog } from '@models/ReadingLog';

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getReadingLogPages();

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { page } = params;

    let pageNumber = 1;

    if (typeof page === 'string') {
        pageNumber = parseInt(page, 10);
    }

    const logs = getPaginatedReadingLogs(pageNumber);

    return {
        props: {
            logs: logs.posts,
            lastPage: logs.totalPages,
            currentPage: pageNumber,
        },
    };
};

interface ReadingLogProps {
    logs: ReadingLog[]
    lastPage: number
    currentPage: number
}

const Post = ({ logs, lastPage, currentPage }: ReadingLogProps): JSX.Element => {
    const [readingLogs, setReadingLogs] = useState(logs);
    const router = useRouter();

    useEffect(() => {
        setReadingLogs(logs);
    }, [logs]);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handlePagination = (page: any) => {
        const path = router.pathname;
        const { query } = router;

        query.page = page.selected + 1;

        router.push({
            pathname: path,
            query,
        });
    };

    return (
        <>
            <Head><title>Reading Logs - Keith Wagner</title></Head>
            <RssFeeds />

            <h1>Reading Logs</h1>

            {readingLogs.map((rl) => (<ReadingLogListing key={rl.id} readingLog={rl} />))}

            <ReactPaginate
                marginPagesDisplayed={0}
                pageRangeDisplayed={0}
                previousLabel="&larr; Newer"
                nextLabel="Older &rarr;"
                initialPage={currentPage - 1}
                pageCount={lastPage}
                onPageChange={handlePagination}
                containerClassName="pagination"
                activeClassName="paginate-active"
                nextLinkClassName={currentPage === lastPage ? 'hidden' : 'paginate-next-a'}
                previousLinkClassName={currentPage === 1 ? 'hidden' : 'paginate-prev-a'}
            />
        </>
    );
};

export default Post;
