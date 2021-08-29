import styled from 'styled-components';
import Image from 'next/image';
import { PhotosetPhoto } from '@models/PhotosetPhoto';

const SingleImage = styled.div`
    display: grid;
    margin-bottom: 10px;
    grid-column-gap: 10px;
    max-width: 1280px;
    margin: 0 auto 10px;
    grid-template-columns: 1fr;

    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }
`;

const TwoImage = styled.div`
    display: grid;
    margin-bottom: 10px;
    grid-column-gap: 10px;
    max-width: 1280px;
    margin: 0 auto 10px;
    grid-template-columns: 1fr 1fr;

    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }
`;

const ThreeImage = styled.div`
    display: grid;
    margin-bottom: 10px;
    grid-column-gap: 10px;
    max-width: 1280px;
    margin: 0 auto 10px;
    grid-template-columns: 1fr 1fr 1fr;

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

export const SingleRow = ({ images, onSelect }: PhotosetRowProps): JSX.Element => (
    <SingleImage>
        <button type="button" onClick={() => onSelect(images[0].index)}>
            <Image
                src={images[0].thumbnail}
                alt={images[0].alt}
                width={images[0].width}
                height={images[0].height}
            />
        </button>
    </SingleImage>
);

export const DualRow = ({ images, onSelect }: PhotosetRowProps): JSX.Element => (
    <TwoImage>
        {images.map((i) => (
            <button key={i.src} type="button" onClick={() => onSelect(i.index)}>
                <Image
                    src={i.thumbnail}
                    alt={i.alt}
                    width={i.width}
                    height={i.height}
                />
            </button>
        ))}
    </TwoImage>
);

export const TripleRow = ({ images, onSelect }: PhotosetRowProps): JSX.Element => (
    <ThreeImage>
        {images.map((i) => (
            <button key={i.src} type="button" onClick={() => onSelect(i.index)}>
                <Image
                    src={i.thumbnail}
                    alt={i.alt}
                    width={i.width}
                    height={i.height}
                />
            </button>
        ))}
    </ThreeImage>
);
