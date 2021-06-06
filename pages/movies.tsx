import styled from 'styled-components';
import { FC } from 'react';
import MoviesWatched, { MovieList } from '@data/movies';
import { GetStaticProps } from 'next';
import MovieListing from '@components/MovieListing';

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
        movies: MoviesWatched,
    },
});

type MoviesProps = {
    movies: MovieList;
};

const Movies: FC<MoviesProps> = ({ movies }) => (
    <main className="wider">
        <Container>
            <h1>Movies I&apos;ve Watched</h1>

            <p>I&apos;ve certainly seen more than this, but I figured I&apos;d update this list with some of my thoughts for the movies I&apos;ve watched more recently.</p>

            <p className="notes">Most recent at top.</p>

            <p className="lastUpdate">
                Last Updated:
                {' '}
                {movies.lastUpdate}
            </p>

            {movies.years.map((year) => (
                <div key={year.year}>
                    <h2>{year.year}</h2>

                    <Grid>
                        {year.movies.map((movie) => (
                            <MovieListing movie={movie} key={movie.cover} />
                        ))}
                    </Grid>
                </div>
            ))}
        </Container>
    </main>
);

export default Movies;
