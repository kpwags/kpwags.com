import Head from 'next/head';

type YouTubeEmbedProps = {
    id: string
    title: string
}

const YouTubeEmbed = ({
    id,
    title,
}: YouTubeEmbedProps): JSX.Element => (
    <>
        <Head>
            <script type="module" src="/scripts/fit-vids.js" />
        </Head>
        <fit-vids>
            <iframe
                width={560}
                height={315}
                src={`https://www.youtube.com/embed/${id}`}
                title={title}
            />
        </fit-vids>
    </>
);

export default YouTubeEmbed;
