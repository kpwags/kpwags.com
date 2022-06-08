import styled from 'styled-components';
import Image from 'next/image';
import { PhotosetPhoto } from '@models/PhotosetPhoto';

const ImageRow = styled.div`
    display: grid;
    margin-bottom: 10px;
    grid-column-gap: 10px;
    max-width: 1280px;
    margin: 0 auto 10px;
    grid-template-columns: 1fr;

    &.double {
        grid-template-columns: 1fr 1fr;
    }

    &.triple {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media all and (max-width: 425px) {
        display: block;
        max-width: 100%;
        width: 100%;
    }

    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }
`;

interface PhotosetRowProps {
    images: PhotosetPhoto[],
    onSelect: (index: number) => void,
}

const PhotosetRow = ({ images, onSelect }: PhotosetRowProps): JSX.Element => {
    switch (images.length) {
        case 1:
            return (
                <ImageRow>
                    <button type="button" onClick={() => onSelect(images[0].index)}>
                        <Image
                            src={images[0].thumbnail}
                            alt={images[0].alt}
                            loading="lazy"
                            width={images[0].width}
                            height={images[0].height}
                        />
                    </button>
                </ImageRow>
            );

        case 2:
        case 3:
            return (
                <ImageRow className={images.length === 2 ? 'double' : 'triple'}>
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
                </ImageRow>
            );
        default:
            return <></>;
    }
};

export default PhotosetRow;
