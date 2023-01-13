import styles from './RssPostImage.module.css';

interface PostImageProps {
    src: string
    alt: string
    width: number
    height: number
    centered?: boolean
    shadowed?: boolean
    // eslint-disable-next-line react/no-unused-prop-types
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
    credit,
}: PostImageProps): JSX.Element => {
    let cssClass = styles.imageContainer;

    if (centered && !shadowed) {
        cssClass = styles.imageContainerCentered;
    } else if (shadowed && !shadowed) {
        cssClass = styles.imageContainerShadowed;
    } else if (shadowed && centered) {
        cssClass = styles.imageContainerCenteredShadowed;
    }

    return (
        <div className={cssClass}>
            <img
                src={src}
                alt={alt}
                width={width}
                height={height}
            />
            {credit && <div className={styles.credit}>{credit}</div>}
        </div>
    );
};

export default PostImage;
