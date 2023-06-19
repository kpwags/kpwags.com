/* eslint-disable max-len */
import Head from 'next/head';
import { GetStaticProps } from 'next';
import VideoGameListing from '@components/VideoGameListing';
import { VideoGame } from '@models/VideoGame';
import { getVideoGames } from '@lib/notion';

import styles from '@css/VideoGames.module.css';

export const getStaticProps: GetStaticProps = async () => {
    const data = await getVideoGames();

    return ({
        props: {
            videoGames: data,
        },
    });
};

type VideoGamesProps = {
    videoGames: VideoGame[];
};

const Games = ({ videoGames }: VideoGamesProps): JSX.Element => (
    <main className="full-width">
        <div className={styles.container}>
            <Head><title>Video Games - Keith Wagner</title></Head>

            <h1>Video Games</h1>

            <p>I&apos;ve certainly played more than this, but I figured I&apos;d update this list with some of my thoughts for the video games I&apos;ve played and am currently playing.</p>

            <h2>Currently Playing</h2>
            <div className={styles.items}>
                {videoGames.filter((g) => g.status === 'current').map((g) => (
                    <VideoGameListing
                        game={g}
                        key={g.id}
                    />
                ))}
            </div>

            <h2>Played</h2>

            <p>
                ✅ - indicates that I finished the game<br />
                ❌ - indicates that I did not finish the game
            </p>

            <div className={`${styles.items} ${styles.paddedTop}`}>
                {videoGames.filter((g) => g.status !== 'current').map((g) => (
                    <VideoGameListing
                        game={g}
                        key={g.id}
                    />
                ))}
            </div>
        </div>
    </main>
);

export default Games;
