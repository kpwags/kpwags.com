import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { getMusic } from '@lib/notion';
import { MusicAlbum } from '@models/MusicAlbum';
import MusicAlbumView from '@components/MusicAlbumView/MusicAlbumView';

import styles from '@css/Music.module.css';

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=3600',
    );

    const data = await getMusic();

    return {
        props: {
            music: data,
        },
    };
};

type MusicProps = {
    music: MusicAlbum[];
};

const Music = ({ music }: MusicProps): JSX.Element => (
    <>
        <Head><title>Music Collection - Keith Wagner</title></Head>
        <main className="full-width">
            <div className={styles.container}>
                <h1>Music</h1>

                <p>I&apos;ve amassed a fairly large music collection of various tastes over the years.</p>

                <div className={styles.musicGrid}>
                    {music.map((album) => (
                        <MusicAlbumView
                            album={album}
                            key={album.id}
                        />
                    ))}
                </div>
            </div>
        </main>
    </>
);

export default Music;
