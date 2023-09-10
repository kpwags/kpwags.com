/* eslint-disable max-len */
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import TvShowListing from '@components/TvShowListing';
import { TV } from '@models/tv';
import { getTvShows } from '@lib/notion';

import styles from '@css/Tv.module.css';

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=3600',
    );

    const data = await getTvShows();

    return ({
        props: {
            tvShows: data,
        },
    });
};

type TVShowsProps = {
    tvShows: TV[];
};

const TVShows = ({ tvShows }: TVShowsProps): JSX.Element => (
    <main className="full-width">
        <div className={styles.container}>
            <Head><title>Television Watch List - Keith Wagner</title></Head>

            <h1>Television Watch List</h1>

            <p>I&apos;ve certainly seen more than this, but I figured I&apos;d update this list with some of my thoughts for the TV series I&apos;ve watched and am currently watching.</p>

            {tvShows.filter((tv) => tv.status === 'current').length > 0 ? (
                <>
                    <h2>Currently Watching</h2>
                    <div className={styles.items}>
                        {tvShows.filter((tv) => tv.status === 'current').map((tv) => (
                            <TvShowListing
                                tvShow={tv}
                                key={tv.id}
                            />
                        ))}
                    </div>
                </>
            ) : null}

            <h2>In-Between Seasons</h2>
            <div className={styles.items}>
                {tvShows.filter((tv) => tv.status === 'between-seasons').map((tv) => (
                    <TvShowListing
                        tvShow={tv}
                        key={tv.id}
                    />
                ))}
            </div>

            <h2>Completed</h2>
            <div className={styles.items}>
                {tvShows.filter((tv) => tv.status === 'completed').map((tv) => (
                    <TvShowListing
                        tvShow={tv}
                        key={tv.id}
                    />
                ))}
            </div>
        </div>
    </main>
);

export default TVShows;
