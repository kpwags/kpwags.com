import StarRating from '@components/StarRating';
import { Media } from '@models/media';
import { useState } from 'react';

import styles from './MediaListing.module.css';

type MediaListingProps = {
    media: Media,
    includeReview?: boolean,
}

const MediaListing = ({ media, includeReview = false }: MediaListingProps): JSX.Element => {
    const [showThoughts, setShowThoughts] = useState(false);

    return (
        <div className={styles.item}>
            <div>
                <a href={media.link} target="_blank" rel="noreferrer">
                    <img src={`/images/${media.imageFolder}/${media.cover}`} alt={media.title} className={styles.cover} />
                </a>
            </div>
            <div>
                <a href={media.link} target="_blank" rel="noreferrer">
                    {media.title}
                </a>

                {media.author ? <div className={styles.meta}>{media.author}</div> : null}

                {media.dateWatched ? <div className={styles.meta}>{media.dateWatched}</div> : null}

                {media.system ? <div className={styles.meta}>{media.system}</div> : null}

                {includeReview && media.rating !== null && (
                    <>
                        <StarRating rating={media.rating} />

                        {media.thoughts !== null && (
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
                                <div className={styles.thoughts} hidden={!showThoughts}>{media.thoughts}</div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default MediaListing;
