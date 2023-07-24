import Head from 'next/head';
import { Movie } from '@models/movie';
import { getMovies } from '@lib/notion';
import { GetServerSideProps } from 'next';
import getUniqueValues from '@lib/getUniqueValues';
import MovieListing from '@components/MovieListing/MovieListing';

import styles from '@css/Movies.module.css';

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=3600',
    );

    const data = await getMovies();

    return ({
        props: {
            movies: data,
        },
    });
};

type MoviesProps = {
    movies: Movie[];
};

const Movies = ({ movies }: MoviesProps): JSX.Element => {
    const years = movies.map((m) => m.yearWatched);
    const uniqueYears = getUniqueValues<number>(years);

    return (
        <>
            <Head><title>Movies - Keith Wagner</title></Head>
            <main className="full-width">
                <div className={styles.container}>
                    <h1>Movies I&apos;ve Watched</h1>

                    <p>I&apos;ve certainly seen more than this, but I figured I&apos;d update this list with some of my thoughts for the movies I&apos;ve watched more recently.</p>

                    {uniqueYears.map((y) => (
                        <div key={y}>
                            <h2>{y} ({movies.filter((m) => m.yearWatched === y).length})</h2>

                            <div className={`${styles.items} ${styles.paddedTop}`}>
                                {movies.filter((m) => m.yearWatched === y).map((m) => (
                                    <MovieListing
                                        movie={m}
                                        key={m.id}
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

export default Movies;
