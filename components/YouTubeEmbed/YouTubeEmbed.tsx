type YouTubeEmbedProps = {
    id: string
    title: string
    width?: number
    height?: number
}

const YouTubeEmbed = ({
    id,
    title,
    width = 560,
    height = 315,
}: YouTubeEmbedProps): JSX.Element => (
    <iframe
        width={width}
        height={height}
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
    />
);

export default YouTubeEmbed;
