/* eslint-disable max-len */
import Head from 'next/head';
import tv from '@data/tv';
import { GetStaticProps } from 'next';
import MediaListing from '@components/MediaListing';
import { TV } from '@models/tv';

import styles from '@css/Tv.module.css';

export const getStaticProps: GetStaticProps = async () => ({
    props: {
        tvShows: tv,
    },
});

type TVShowsProps = {
    tvShows: TV;
};

const TVShows = ({ tvShows }: TVShowsProps): JSX.Element => (
    <main>
        <div className={styles.container}>
            <Head><title>Television Watch List - Keith Wagner</title></Head>

            <h1>Television Watch List</h1>

            <p>I&apos;ve certainly seen more than this, but I figured I&apos;d update this list with some of my thoughts for the TV series I&apos;ve watched and am currently watching.</p>

            <p className={styles.lastUpdate}>
                Last Updated: {tvShows.lastUpdate}
            </p>

            <h2>Currently Watching</h2>
            <div className={styles.items}>
                {tvShows.current.map((series) => (
                    <MediaListing
                        media={series}
                        key={series.cover}
                        includeReview
                    />
                ))}
            </div>

            <h2>In-Between Seasons</h2>
            <div className={styles.items}>
                {tvShows.continuing.map((series) => (
                    <MediaListing
                        media={series}
                        key={series.cover}
                        includeReview
                    />
                ))}
            </div>

            <h2>Completed</h2>
            <div className={styles.items}>
                {tvShows.completed.map((series) => (
                    <MediaListing
                        media={series}
                        key={series.cover}
                        includeReview
                    />
                ))}
            </div>
        </div>
    </main>
);

export default TVShows;
