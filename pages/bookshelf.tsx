import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { getBooks } from '@lib/notion';
import { Book } from '@models/Book';
import BookListing from '@components/BookListing';
import getUniqueValues from '@lib/getUniqueValues';

import styles from '@css/Bookshelf.module.css';

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=3600',
    );

    const data = await getBooks();

    return ({
        props: {
            books: data,
        },
    });
};

type BookshelfProps = {
    books: Book[];
};

const Bookshelf = ({ books }: BookshelfProps): JSX.Element => {
    const years = books.map((b) => b.yearRead);
    const uniqueYears = getUniqueValues<number>(years);

    return (
        <>
            <Head><title>Bookshelf - Keith Wagner</title></Head>
            <main className="full-width">
                <div className={styles.container}>
                    <h1>My Bookshelf</h1>

                    {uniqueYears.map((y) => (
                        <div key={y}>
                            <h2>{y} ({books.filter((b) => b.yearRead === y).length})</h2>

                            <div className={`${styles.items} ${styles.paddedTop}`}>
                                {books.filter((b) => b.yearRead === y).map((b) => (
                                    <BookListing
                                        book={b}
                                        key={b.id}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
};

export default Bookshelf;
