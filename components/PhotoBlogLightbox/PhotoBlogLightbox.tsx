import styled from 'styled-components';
import { PhotoBlogItem } from '@models/PhotoBlogItem';
import Lightbox from 'react-image-lightbox';

import 'react-image-lightbox/style.css';

const Caption = styled.span`
    font-size: 1.5rem;
`;

interface PhotoBlogLightboxProps {
    photos: PhotoBlogItem[]
    index: number
    visible: boolean
    setIndex: (index: number) => void
    setVisible: (isVisible: boolean) => void
}

const PhotoBlogLightbox = ({
    photos,
    index,
    setIndex,
    setVisible,
    visible = false,
}: PhotoBlogLightboxProps): JSX.Element => {
    const images = photos.map((i) => ({
        src: `/images/photoblog/${i.src}`,
        description: i.description,
    }));

    return (
        <>
            {visible && (
                <Lightbox
                    // imageTitle={(<>{images[index].description}</>)}
                    imageCaption={(<Caption>{images[index].description}</Caption>)}
                    mainSrc={images[index].src}
                    nextSrc={images[(index + 1) % images.length].src}
                    prevSrc={images[(index + images.length - 1) % images.length].src}
                    onCloseRequest={() => setVisible(false)}
                    onMovePrevRequest={() => setIndex((index + images.length - 1) % images.length)}
                    onMoveNextRequest={() => setIndex((index + 1) % images.length)}
                />
            )}
        </>
    );
};

export default PhotoBlogLightbox;
