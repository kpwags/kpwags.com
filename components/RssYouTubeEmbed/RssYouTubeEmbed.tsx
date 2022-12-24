type YouTubeEmbedProps = {
    id: string
    title: string
}

const RssYouTubeEmbed = ({
    id,
    title,
}: YouTubeEmbedProps): JSX.Element => (
    <iframe
        width={300}
        height={169}
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
    />
);

export default RssYouTubeEmbed;
