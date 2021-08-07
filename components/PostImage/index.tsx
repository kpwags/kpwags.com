import { FC } from 'react';
import styled from 'styled-components';

const ImageCaptionCredit = styled.div`
    margin: 10px 0;
    color: hsl(0, 0%, 60%);
    font-style: italic;
`;

interface PostImageProps {
    src: string
    alt: string
    centered?: boolean
    shadowed?: boolean
    credit?: JSX.Element
}

const PostImage: FC<PostImageProps> = ({
    src,
    alt,
    centered = true,
    shadowed = false,
    credit,
}) => (
    <div className={centered ? 'centered-image' : ''}>
        <img
            src={src}
            alt={alt}
            className={shadowed ? 'shadowed' : ''}
        />
        {credit && <ImageCaptionCredit>{credit}</ImageCaptionCredit>}
    </div>
);

export default PostImage;
