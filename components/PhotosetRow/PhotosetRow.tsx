import Image from 'next/image';
import { PhotosetPhoto } from '@models/PhotosetPhoto';

import styles from './PhotosetRow.module.css';

interface PhotosetRowProps {
    images: PhotosetPhoto[],
    onSelect: (index: number) => void,
}

const PhotosetRow = ({ images, onSelect }: PhotosetRowProps): JSX.Element => (
    <>
        <div className={styles.imageRow}>
            {images.map((i) => (
                <button key={i.src} type="button" onClick={() => onSelect(i.index)}>
                    <Image
                        src={i.thumbnail}
                        alt={i.alt}
                        loading="lazy"
                        width={i.width}
                        height={i.height}
                    />
                </button>
            ))}
        </div>
    </>
);

export default PhotosetRow;
