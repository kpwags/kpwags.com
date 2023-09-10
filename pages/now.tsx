import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { Current } from '@models/Current';
import { getCurrentActions } from '@lib/notion';
import TvShowListing from '@components/TvShowListing';
import VideoGameListing from '@components/VideoGameListing';
import BookListing from '@components/BookListing';

import styles from '@css/Now.module.css';

export const getServerSideProps: GetServerSideProps = async () => {
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

                {currentlyDoing.reading.length > 0 ? (
                    <>
                        <h2>Reading</h2>

                        <div className={styles.items}>
                            {currentlyDoing.reading.map((b) => (
                                <BookListing
                                    book={b}
                                    key={b.id}
                                />
                            ))}
                        </div>
                    </>
                ) : null}

                {currentlyDoing.playing.length > 0 ? (
                    <>
                        <h2>Playing</h2>

                        <div className={styles.items}>
                            {currentlyDoing.playing.map((g) => (
                                <VideoGameListing
                                    game={g}
                                    key={g.id}
                                />
                            ))}
                        </div>
                    </>
                ) : null}

                {currentlyDoing.watching.length > 0 ? (
                    <>
                        <h2>Watching</h2>

                        <div className={styles.items}>
                            {currentlyDoing.watching.map((tv) => (
                                <TvShowListing
                                    tvShow={tv}
                                    key={tv.id}
                                />
                            ))}
                        </div>
                    </>
                ) : null}
            </div>
        </main>
    </>
);

export default Now;
