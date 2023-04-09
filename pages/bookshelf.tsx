import Head from 'next/head';
import BooksRead, { BookList } from '@data/bookshelf';
import { GetStaticProps } from 'next';
import BookshelfContainer from '@components/BookshelfContainer';

export const getStaticProps: GetStaticProps = async () => ({
    props: {
        books: BooksRead,
    },
});

type BookshelfProps = {
    books: BookList;
};

const Bookshelf = ({ books }: BookshelfProps): JSX.Element => (
    <>
        <Head><title>Bookshelf - Keith Wagner</title></Head>
        <main className="full-width">
            <BookshelfContainer books={books} />
        </main>
    </>
);

export default Bookshelf;
