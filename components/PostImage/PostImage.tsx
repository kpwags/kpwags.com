import Image from 'next/image';

import styles from './PostImage.module.css';

interface PostImageProps {
    src: string
    alt: string
    width: number
    height: number
    centered?: boolean
    shadowed?: boolean
    priority?: boolean
    credit?: JSX.Element
}

const PostImage = ({
    src,
    alt,
    width,
    height,
    centered = true,
    shadowed = false,
    priority = false,
    credit,
}: PostImageProps): JSX.Element => {
    let cssClass = styles.imageContainer;

    if (centered) {
        cssClass = `${cssClass} ${styles.centered}`;
    }

    if (shadowed) {
        cssClass = `${cssClass} ${styles.shadowed}`;
    }

    return (
        <div className={cssClass}>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                priority={priority}
            />
            {credit && <div className={styles.credit}>{credit}</div>}
        </div>
    );
};

export default PostImage;
