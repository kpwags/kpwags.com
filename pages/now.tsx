import Head from 'next/head';
import now from '@data/now';
import { GetStaticProps } from 'next';
import { CurrentlyDoing } from '@models/currentlyDoing';
import MediaListing from '@components/MediaListing';

import styles from '@css/Now.module.css';

export const getStaticProps: GetStaticProps = async () => ({
    props: {
        currentlyDoing: now,
    },
});

type NowProps = {
    currentlyDoing: CurrentlyDoing;
};

const Now = ({ currentlyDoing }: NowProps): JSX.Element => (
    <>
        <Head><title>Now - Keith Wagner</title></Head>
        <main>
            <div className={styles.container}>
                <h1>What I&apos;m Currently Up To</h1>

                <p className={styles.lastUpdate}>
                    Last Updated:
                    {' '}
                    {currentlyDoing.lastUpdate}
                </p>

                <h2>Reading</h2>

                <div className={styles.itemGrid}>
                    {currentlyDoing.reading.map((book) => (
                        <MediaListing media={book} key={book.cover} />
                    ))}
                </div>

                <h2>Playing</h2>

                <div className={styles.itemGrid}>
                    {currentlyDoing.playing.map((game) => (
                        <MediaListing media={game} key={game.cover} />
                    ))}
                </div>

                <h2>Watching</h2>

                <div className={styles.itemGrid}>
                    {currentlyDoing.watching.map((tvShow) => (
                        <MediaListing media={tvShow} key={tvShow.cover} />
                    ))}
                </div>
            </div>
        </main>
    </>
);

export default Now;
