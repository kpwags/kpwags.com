import Head from 'next/head';
import styled from 'styled-components';
import BooksRead, { BookList } from '@data/bookshelf';
import { GetStaticProps } from 'next';
import MediaListing from '@components/MediaListing';

const Container = styled.div`
    h2 {
        margin: 3rem 0 2rem 0;
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
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
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

const Bookshelf = ({ books }: BookshelfProps): JSX.Element => (
    <Container>
        <Head><title>Bookshelf - Keith Wagner</title></Head>

        <h1>My Bookshelf</h1>

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
                        <MediaListing
                            media={book}
                            key={book.cover}
                            includeReview
                        />
                    ))}
                </Grid>
            </div>
        ))}
    </Container>
);

export default Bookshelf;
