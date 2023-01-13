/* eslint-disable max-len */
import Head from 'next/head';
import games from '@data/videogames';
import { GetStaticProps } from 'next';
import VideoGameListing from '@components/VideoGameListing';
import { VideoGames } from '@models/VideoGames';

import styles from '@css/VideoGames.module.css';

export const getStaticProps: GetStaticProps = async () => ({
    props: {
        videoGames: games,
    },
});

type VideoGamesProps = {
    videoGames: VideoGames;
};

const Games = ({ videoGames }: VideoGamesProps): JSX.Element => (
    <div className={styles.container}>
        <Head><title>Video Games - Keith Wagner</title></Head>

        <h1>Video Games</h1>

        <p>I&apos;ve certainly played more than this, but I figured I&apos;d update this list with some of my thoughts for the video games I&apos;ve played and am currently playing.</p>

        <p className={styles.lastUpdate}>
            Last Updated: {videoGames.lastUpdate}
        </p>

        <h2>Currently Playing</h2>
        <div className={styles.items}>
            {videoGames.current.map((g) => (
                <VideoGameListing
                    game={g}
                    key={g.cover}
                />
            ))}
        </div>

        <h2>Played</h2>

        <p>
            ✅ - indicates that I finished the game<br />
            ❌ - indicates that I did not finish the game
        </p>

        <div className={`${styles.items} ${styles.paddedTop}`}>
            {videoGames.played.map((g) => (
                <VideoGameListing
                    game={g}
                    key={g.cover}
                />
            ))}
        </div>
    </div>
);

export default Games;
