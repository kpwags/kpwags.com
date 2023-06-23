import Head from 'next/head';
import { GetStaticProps } from 'next';
import { Current } from '@models/Current';
import { getCurrentActions } from '@lib/notion';
import TvShowListing from '@components/TvShowListing';
import VideoGameListing from '@components/VideoGameListing';
import BookListing from '@components/BookListing';

import styles from '@css/Now.module.css';

export const getStaticProps: GetStaticProps = async () => {
    const data = await getCurrentActions();

    return ({
        props: {
            currentlyDoing: data,
        },
    });
};

type NowProps = {
    currentlyDoing: Current;
};

const Now = ({ currentlyDoing }: NowProps): JSX.Element => (
    <>
        <Head><title>Now - Keith Wagner</title></Head>
        <main>
            <div className={styles.container}>
                <h1>What I&apos;m Currently Up To</h1>

                <h2>Reading</h2>

                <div className={styles.items}>
                    {currentlyDoing.reading.map((b) => (
                        <BookListing
                            book={b}
                            key={b.id}
                        />
                    ))}
                </div>

                <h2>Playing</h2>

                <div className={styles.items}>
                    {currentlyDoing.playing.map((g) => (
                        <VideoGameListing
                            game={g}
                            key={g.id}
                        />
                    ))}
                </div>

                <h2>Watching</h2>

                <div className={styles.items}>
                    {currentlyDoing.watching.map((tv) => (
                        <TvShowListing
                            tvShow={tv}
                            key={tv.id}
                        />
                    ))}
                </div>
            </div>
        </main>
    </>
);

export default Now;
