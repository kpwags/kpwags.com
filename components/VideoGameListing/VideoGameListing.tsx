import StarRating from '@components/StarRating';
import { VideoGame } from '@models/VideoGame';
import { useState } from 'react';
import styles from './VideoGameListing.module.css';

type VideoGameListingProps = {
    game: VideoGame;
}

const VideoGameListing = ({ game }: VideoGameListingProps): JSX.Element => {
    const [showThoughts, setShowThoughts] = useState(false);

    const getPlayedIcon = (g: VideoGame): string | null => {
        switch (g.finished) {
            case 'yes':
                return ' ✅';
            case 'no':
                return ' ❌';
            case 'n/a':
            default:
                return null;
        }
    };

    return (
        <div className={styles.item}>
            <div>
                <a href={game.link} target="_blank" rel="noreferrer">
                    <img src={`/images/${game.imageFolder}/${game.cover}`} alt={game.title} className={styles.cover} />
                </a>
            </div>
            <div>
                <a href={game.link} target="_blank" rel="noreferrer">
                    {game.title}
                </a>

                {getPlayedIcon(game)}

                {game.author ? <div className={styles.meta}>{game.author}</div> : null}

                {game.dateWatched ? <div className={styles.meta}>{game.dateWatched}</div> : null}

                {game.system ? <div className={styles.meta}>{game.system}</div> : null}

                {(game.rating !== null || game.thoughts !== null) ? (
                    <>
                        {game.rating !== null ? <StarRating rating={game.rating} /> : null}

                        {game.thoughts !== null && (
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
                                <div className={styles.thoughts} hidden={!showThoughts}>{game.thoughts}</div>
                            </div>
                        )}
                    </>
                ) : null}
            </div>
        </div>
    );
};

export default VideoGameListing;
