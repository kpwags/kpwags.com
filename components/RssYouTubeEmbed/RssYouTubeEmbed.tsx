type YouTubeEmbedProps = {
    id: string
    title: string
}

const RssYouTubeEmbed = ({
    id,
    title,
}: YouTubeEmbedProps): JSX.Element => (
    <p><a href={`https://www.youtube.com/watch?v=${id}`} title={title}>View on YouTube</a></p>
);

export default RssYouTubeEmbed;
