import { MovieList } from '@data/movies';
import MediaListing from '@components/MediaListing';
import styles from './MoviesContainer.module.css';

interface MoviesContainerProps {
    movies: MovieList;
}

const MoviesContainer = ({
    movies,
}: MoviesContainerProps): JSX.Element => (
    <div className={styles.container}>

        <h1>Movies I&apos;ve Watched</h1>

        <p>I&apos;ve certainly seen more than this, but I figured I&apos;d update this list with some of my thoughts for the movies I&apos;ve watched more recently.</p>

        <p className={styles.notes}>Most recent at top.</p>

        <p className={styles.lastUpdate}>
            Last Updated:
            {' '}
            {movies.lastUpdate}
        </p>

        {movies.years.map((year) => (
            <div key={year.year}>
                <h2>{year.year} ({year.movies.length})</h2>

                <div className={styles.movieGrid}>
                    {year.movies.map((movie) => (
                        <MediaListing
                            media={movie}
                            key={movie.cover}
                            includeReview
                        />
                    ))}
                </div>
            </div>
        ))}
    </div>
);

export default MoviesContainer;
