import { FC } from 'react';

interface PostImageProps {
    src: string
    alt: string
    centered?: boolean
    shadowed?: boolean
}

const PostImage: FC<PostImageProps> = ({
    src,
    alt,
    centered = true,
    shadowed = false,
}) => (
    <div className={centered ? 'centered-image' : ''}>
        <img
            src={src}
            alt={alt}
            className={shadowed ? 'shadowed' : ''}
        />
    </div>
);

export default PostImage;
