import useWindowDimensions from '@hooks/useWindowDimensions';

type YouTubeEmbedProps = {
    id: string
    title: string
}

const YouTubeEmbed = ({
    id,
    title,
}: YouTubeEmbedProps): JSX.Element => {
    const { width: windowWidth } = useWindowDimensions();

    return (
        <iframe
            width={windowWidth > 600 ? 560 : 300}
            height={windowWidth > 600 ? 315 : 169}
            src={`https://www.youtube.com/embed/${id}`}
            title={title}
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        />
    );
};

export default YouTubeEmbed;
