import { getAlbumDetails, getAllAlbumIds } from '@lib/notion';
import { MusicAlbum } from '@models/MusicAlbum';
import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import styles from '@css/AlbumDetails.module.css';

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = await getAllAlbumIds();

    return {
        paths,
        fallback: 'blocking',
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const albumDetails = await getAlbumDetails(params.id.toString());

    return {
        props: {
            album: albumDetails,
        },
    };
};

interface AlbumDetailsProps {
    album: MusicAlbum;
}

const AlbumDetails = ({ album }: AlbumDetailsProps): JSX.Element => (
    <>
        <Head><title>{`${album.title} - ${album.artist} - Keith Wagner`}</title></Head>
        <main>
            <div className={styles.backLink}>
                <Link href="/music">&lt; Back to Music Collection</Link>
            </div>
            <div className={styles.album}>

                <div className={styles.albumCover}>
                    <img src={album.coverUrl} alt={`${album.title} by ${album.artist}`} />
                </div>
                <div className={styles.albumDetails}>
                    <h1 className={styles.albumTitle}>{album.title}</h1>
                    <h2 className={styles.artistName}>{album.artist}</h2>
                    <div className={styles.detailLine}>
                        <div className={styles.label}>Genre(s):</div>
                        <div>{album.genres.sort().join(', ')}</div>
                    </div>
                    <div className={styles.detailLine}>
                        <div className={styles.label}>Format(s):</div>
                        <div>{album.formats.sort().join(', ')}</div>
                    </div>
                </div>
            </div>

            {(album.tracks ?? []).length > 0 ? (
                <div className={styles.tracks}>
                    <h3>Tracks</h3>
                    <ol>
                        {album.tracks.map((t) => <li key={t}>{t}</li>)}
                    </ol>
                </div>
            ) : null}
        </main>
    </>
);

export default AlbumDetails;
