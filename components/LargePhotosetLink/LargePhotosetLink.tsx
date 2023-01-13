import Link from 'next/link';

import styles from './LargePhotosetLink.module.css';

interface PhotosetLinkProps {
    name: string
    date: string
    photoSource: string
    width?: number | string
    height?: number | string
    link: string
    titleColor?: string
    titlePosition?: 'top' | 'bottom'
}

const LargePhotosetLink = ({
    name,
    date,
    photoSource,
    width,
    height,
    link,
    titlePosition = 'bottom',
    titleColor = '#FFF',
}: PhotosetLinkProps): JSX.Element => {
    const altText = `${name} (${date})`;

    return (
        <div className={styles.photoLink}>
            <Link href={link}>
                <a>
                    <img
                        src={photoSource}
                        alt={altText}
                        width={width}
                        height={height}
                    />
                    <div className={styles.overlay}>
                        <div className={styles.title} style={titlePosition === 'top' ? { top: 15 } : { bottom: 15 }}>
                            <h2 style={{ color: titleColor }}>
                                <span style={{ color: titleColor }}>{name}</span>
                            </h2>
                            <h3 style={{ color: titleColor }}>{date}</h3>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    );
};

export default LargePhotosetLink;
