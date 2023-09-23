import { useState, useEffect, Fragment } from 'react';
import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import { getBookNotePages, getPaginatedBookNotes } from '@lib/books';
import { BookNote } from '@models/BookNote';
import ReactPaginate from 'react-paginate';
import RssFeeds from '@components/RssFeeds';
import BookNoteListing from '@components/BookNoteListing';

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getBookNotePages();

    return {
        paths,
        fallback: 'blocking',
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { page } = params;

    let pageNumber = 1;

    if (typeof page === 'string') {
        pageNumber = parseInt(page, 10);
    }

    const bookNotes = getPaginatedBookNotes(pageNumber);

    return {
        props: {
            bookNotes: bookNotes.bookNotes,
            lastPage: bookNotes.totalPages,
            currentPage: pageNumber,
        },
    };
};

interface BookNoteProps {
    bookNotes: BookNote[]
    lastPage: number
    currentPage: number
}

const BookNotes = ({ bookNotes, lastPage, currentPage }: BookNoteProps): JSX.Element => {
    const [notes, setNotes] = useState<BookNote[]>(bookNotes);
    const router = useRouter();

    useEffect(() => {
        setNotes(bookNotes);
    }, [bookNotes]);

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
        <div className="page-content">
            <Head><title>Book Notes - Keith Wagner</title></Head>
            <RssFeeds />

            <h1>Book Notes</h1>

            {notes.map((b) => (
                <Fragment key={b.slug}>
                    <BookNoteListing bookNote={b} />
                </Fragment>
            ))}

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
        </div>
    );
};

export default BookNotes;
