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
        switch (g.completed) {
            case 'Yes':
                return ' ✅';
            case 'No':
                return ' ❌';
            case 'N/A':
            default:
                return null;
        }
    };

    return (
        <div className={styles.item}>
            <div>
                <a href={game.link} target="_blank" rel="noreferrer">
                    <img src={game.coverUrl} alt={game.title} className={styles.cover} height={300} width={200} />
                </a>
            </div>
            <div>
                <a href={game.link} target="_blank" rel="noreferrer">
                    {game.title}
                </a>

                {getPlayedIcon(game)}

                {game.platform ? <div className={styles.meta}>{game.platform}</div> : null}

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
