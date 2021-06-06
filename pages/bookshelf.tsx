import styled from 'styled-components';
import { FC } from 'react';
import BooksRead, { BookList } from '@data/bookshelf';
import { GetStaticProps } from 'next';
import BookListing from '@components/BookListing';

const Container = styled.div`
    margin: 50px auto 30px auto;

    @media all and (max-width: 900px) {
        width: 600px;
    }

    @media all and (max-width: 767px) {
        width: 100%;
        margin: 25px 0;
    }

    h1 {
        @media all and (max-width: 767px) {
            font-size: 1.8rem;
            padding-left: 10px;
            padding-right: 10px;
        }
    }

    h2 {
        margin: 25px 0 20px;
    }

    p {
        @media all and (max-width: 767px) {
            padding-left: 10px;
            padding-right: 10px;
        }
    }

    .lastUpdate,
    .notes {
        margin: 12px 0;
        font-style: italic;
    }
`;

const Grid = styled.div`
    margin: 0 0 40px;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
    grid-column-gap: 10px;
    grid-row-gap: 40px;
    justify-items: center;

    @media all and (max-width: 767px) {
        display: block;
    }
`;

export const getStaticProps: GetStaticProps = async () => ({
    props: {
        books: BooksRead,
    },
});

type BookshelfProps = {
    books: BookList;
};

const Bookshelf: FC<BookshelfProps> = ({ books }) => (
    <main className="wider">
        <Container>
            <h1>My Bookshelf</h1>

            <p className="notes">Most recent at top.</p>

            <p className="lastUpdate">
                Last Updated:
                {' '}
                {books.lastUpdate}
            </p>

            {books.years.map((year) => (
                <div key={year.year}>
                    <h2>{year.year}</h2>

                    <Grid>
                        {year.books.map((book) => (
                            <BookListing
                                book={book}
                                key={book.cover}
                                includeReview
                            />
                        ))}
                    </Grid>
                </div>
            ))}
        </Container>
    </main>
);

export default Bookshelf;
