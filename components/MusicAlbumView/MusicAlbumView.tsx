import { MusicAlbum } from '@models/MusicAlbum';
import Link from 'next/link';

import styles from './MusicAlbumView.module.css';

type MediaListingProps = {
    album: MusicAlbum;
}

const MusicAlbumView = ({ album }: MediaListingProps): JSX.Element => (
    <div className={styles.item}>
        <div>
            <img src={album.coverUrl} alt={`${album.title} by ${album.artist}`} className={styles.cover} />
        </div>
        <div>
            <div className={styles.albumTitle}><Link href={`/music/album/${album.id}`}>{album.title}</Link></div>
            <div className={styles.meta}>{album.artist}</div>
        </div>
    </div>
);

export default MusicAlbumView;
