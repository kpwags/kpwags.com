import StarRating from '@components/StarRating';
import { Movie } from '@models/movie';
import { useState } from 'react';

import styles from './MovieListing.module.css';

type MovieListingProps = {
    movie: Movie;
}

const MovieListing = ({ movie }: MovieListingProps): JSX.Element => {
    const [showThoughts, setShowThoughts] = useState(false);

    return (
        <div className={styles.item}>
            <div>
                <a href={movie.link} target="_blank" rel="noreferrer">
                    <img src={movie.cover} alt={movie.title} className={styles.cover} height={300} width={200} />
                </a>
            </div>
            <div>
                <a href={movie.link} target="_blank" rel="noreferrer">
                    {movie.title}
                </a>

                {movie.dateWatched ? <div className={styles.meta}>{movie.dateWatched}</div> : null}

                {(movie.rating !== null || movie.thoughts !== null) ? (
                    <>
                        {movie.rating !== null ? <StarRating rating={movie.rating} /> : null}

                        {movie.thoughts !== null && (
                            <div className={styles.viewThoughts}>
                                <button
                                    className={styles.toggleThoughts}
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setShowThoughts(!showThoughts);
                                    }}
                                >
                                    {showThoughts ? 'Hide Thoughts' : 'View Thoughts'}
                                </button>
                                <div className={styles.thoughts} hidden={!showThoughts}>{movie.thoughts}</div>
                            </div>
                        )}
                    </>
                ) : null}
            </div>
        </div>
    );
};

export default MovieListing;
