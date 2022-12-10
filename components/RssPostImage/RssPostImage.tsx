import styled from 'styled-components';

const ImageContainer = styled.div`
    margin: 30px 0;
    max-width: 80%;

    &.centered {
        margin: 30px auto;
        text-align: center;
    }

    &.shadowed div {
        box-shadow: 0 12px 24px 0 hsla(0, 0%, 0%, 0.2);
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
    const cssClasses: string[] = [];

    if (centered) {
        cssClasses.push('centered');
    }

    if (shadowed) {
        cssClasses.push('shadowed');
    }
    return (
        <ImageContainer className={cssClasses.join(' ')}>
            <img
                src={src}
                alt={alt}
                width={width}
                height={height}
            />
            {credit && <ImageCaptionCredit>{credit}</ImageCaptionCredit>}
        </ImageContainer>
    );
};

export default PostImage;
