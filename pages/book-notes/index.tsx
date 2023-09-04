import { Fragment } from 'react';
import Head from 'next/head';
import { getBookNoteCount, getPaginatedBookNotes } from '@lib/books';
import { GetStaticProps } from 'next';
import { BookNote } from '@models/BookNote';
import Link from 'next/link';
import RssFeeds from '@components/RssFeeds/RssFeeds';
import { postsPerPage } from '@lib/config';
import BookNoteListing from '@components/BookNoteListing';

export const getStaticProps: GetStaticProps = async () => {
    const bookNotes = getPaginatedBookNotes(1);
    const bookNoteCount = getBookNoteCount();

    return {
        props: {
            bookNotes: bookNotes.bookNotes,
            bookNoteCount,
        },
    };
};

interface BookNotesProps {
    bookNotes: BookNote[];
    bookNoteCount: number;
}

const BookNotes = ({ bookNotes, bookNoteCount }: BookNotesProps): JSX.Element => (
    <>
        <Head><title>Book Notes - Keith Wagner</title></Head>
        <RssFeeds />

        <main>
            <h1>Book Notes</h1>
            <p>
                For books that I really enjoy and want to share more than just a short note, I created
                this page. This list is not at all a complete list of what I&apos;ve read. To see
                all the books I&apos;ve read, see my <Link href="/bookshelf">bookshelf page</Link>.
            </p>

            {bookNotes.map((b) => (
                <Fragment key={b.slug}>
                    <hr />
                    <BookNoteListing bookNote={b} />
                </Fragment>
            ))}

            {bookNoteCount > postsPerPage ? (
                <>
                    <hr />
                    <ul className="pagination">
                        <li className="next">
                            <Link href="/book-notes/2" className="paginate-next-a">Older &rarr;</Link>
                        </li>
                    </ul>
                </>
            ) : null}
        </main>
    </>
);

export default BookNotes;
