import { FC } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const ImageContainer = styled.div`
    margin: 30px 0;
    max-width: 80%;

    &.centered {
        margin: 30px auto;
        text-align: center;
    }
`;

const ImageCaptionCredit = styled.div`
    margin: 10px 35px;
    color: hsl(0, 0%, 60%);
    font-style: italic;
`;

interface PostImageProps {
    src: string
    alt: string
    width: number
    height: number
    centered?: boolean
    shadowed?: boolean
    credit?: JSX.Element
}

const PostImage: FC<PostImageProps> = ({
    src,
    alt,
    width,
    height,
    centered = true,
    shadowed = false,
    credit,
}) => (
    <ImageContainer className={centered ? 'centered' : ''}>
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={shadowed ? 'shadowed' : ''}
        />
        {credit && <ImageCaptionCredit>{credit}</ImageCaptionCredit>}
    </ImageContainer>
);

export default PostImage;
