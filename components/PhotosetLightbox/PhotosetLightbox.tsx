import { PhotosetPhoto } from '@models/PhotosetPhoto';
import Lightbox from 'react-image-lightbox';

import 'react-image-lightbox/style.css';

interface PhotosetLightboxProps {
    photoset: PhotosetPhoto[]
    index: number
    visible: boolean
    setIndex: (index: number) => void
    setVisible: (isVisible: boolean) => void
}

const PhotosetLightbox = ({
    photoset,
    index,
    setIndex,
    setVisible,
    visible = false,
}: PhotosetLightboxProps): JSX.Element => {
    const images = photoset.map((i) => i.src);

    return (
        <>
            {visible && (
                <Lightbox
                    mainSrc={images[index]}
                    nextSrc={images[(index + 1) % images.length]}
                    prevSrc={images[(index + images.length - 1) % images.length]}
                    onCloseRequest={() => setVisible(false)}
                    onMovePrevRequest={() => setIndex((index + images.length - 1) % images.length)}
                    onMoveNextRequest={() => setIndex((index + 1) % images.length)}
                />
            )}
        </>
    );
};

export default PhotosetLightbox;
