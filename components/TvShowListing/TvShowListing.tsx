import StarRating from '@components/StarRating';
import { useState } from 'react';
import { TV } from '@models/tv';

import styles from './TvShowListing.module.css';

type TvShowListingProps = {
    tvShow: TV;
}

const VideoGameListing = ({ tvShow }: TvShowListingProps): JSX.Element => {
    const [showThoughts, setShowThoughts] = useState(false);

    return (
        <div className={styles.item}>
            <div>
                <a href={tvShow.link} target="_blank" rel="noreferrer">
                    <img src={tvShow.coverUrl} alt={tvShow.title} className={styles.cover} height={300} width={200} />
                </a>
            </div>
            <div>
                <a href={tvShow.link} target="_blank" rel="noreferrer">
                    {tvShow.title}
                </a>

                {(tvShow.rating !== null || tvShow.thoughts !== null) ? (
                    <>
                        {tvShow.rating !== null ? <StarRating rating={tvShow.rating} /> : null}

                        {tvShow.thoughts !== null && (
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
                                <div className={styles.thoughts} hidden={!showThoughts}>{tvShow.thoughts}</div>
                            </div>
                        )}
                    </>
                ) : null}
            </div>
        </div>
    );
};

export default VideoGameListing;
