import Link from 'next/link';

import styles from './PhotosetListLinks.module.css';

interface PhotosetListLinksProps {
    photosets: {
        name: string
        date: string
        link: string
        thumbnailSrc: string
        width: number
        height: number
        description?: string
    }[]
}

const PhotosetListLinks = ({ photosets }: PhotosetListLinksProps): JSX.Element => (
    <ul className={styles.photosetList}>
        {photosets.map((p) => (
            <li key={`${p.name} (${p.date})`}>
                <Link href={p.link}>
                    <div className="photoset-thumbnail">
                        <img
                            src={p.thumbnailSrc}
                            alt={`${p.name} (${p.date})`}
                            width="100%"
                        />
                    </div>
                    <div className={styles.info}>
                        <h2>{p.name}</h2>
                        <div className="date"><em>{p.date}</em></div>
                        {p.description ? <p className="description">{p.description}</p> : null}
                    </div>
                </Link>
            </li>
        ))}
    </ul>
);

export default PhotosetListLinks;
