/* eslint-disable jsx-a11y/media-has-caption */
import styled from 'styled-components';

const VideoContainer = styled.div`
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

type PostVideoProps = {
    src: string
    width: number
    height?: number
    centered?: boolean
    shadowed?: boolean
}

const PostVideo = ({
    src,
    width,
    height,
    centered = true,
    shadowed = false,
}: PostVideoProps): JSX.Element => {
    const cssClasses: string[] = [];

    if (centered) {
        cssClasses.push('centered');
    }

    if (shadowed) {
        cssClasses.push('shadowed');
    }
    return (
        <VideoContainer className={cssClasses.join(' ')}>
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
        </VideoContainer>
    );
};

export default PostVideo;
