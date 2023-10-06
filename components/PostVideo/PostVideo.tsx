/* eslint-disable jsx-a11y/media-has-caption */
import styles from './PostVideo.module.css';

type PostVideoProps = {
    src: string
    width?: number
    height?: number
    centered?: boolean
    shadowed?: boolean
    credit?: JSX.Element
}

const PostVideo = ({
    src,
    width,
    height,
    credit,
    centered = true,
    shadowed = false,
}: PostVideoProps): JSX.Element => {
    let cssClass = styles.videoContainer;

    if (centered) {
        cssClass = `${cssClass} ${styles.centered}`;
    }

    if (shadowed) {
        cssClass = `${cssClass} ${styles.shadowed}`;
    }

    return (
        <div className={cssClass}>
            <video
                controls
                width={width}
                height={height}
                autoPlay={false}
            >
                <source
                    src={`/videos/${src}`}
                    type="video/mp4"
                />
                Not Supported
            </video>
            {credit && <div className={styles.credit}>{credit}</div>}
        </div>
    );
};

export default PostVideo;
