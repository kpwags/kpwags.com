import Head from 'next/head';
import MoviesWatched, { MovieList } from '@data/movies';
import { GetStaticProps } from 'next';
import MoviesContainer from '@components/MoviesContainer';

export const getStaticProps: GetStaticProps = async () => ({
    props: {
        movies: MoviesWatched,
    },
});

type MoviesProps = {
    movies: MovieList;
};

const Movies = ({ movies }: MoviesProps): JSX.Element => (
    <>
        <Head><title>Movies - Keith Wagner</title></Head>
        <main className="wide">
            <MoviesContainer movies={movies} />
        </main>
    </>
);

export default Movies;
