import Head from 'next/head';
import { GetStaticProps } from 'next';
import podcasts from '@data/podcasts';
import { PodcastCategory } from '@models/podcasts';
import PodcastContainer from '@components/PodcastContainer';

export const getStaticProps: GetStaticProps = async () => ({
    props: {
        listeningTo: podcasts,
    },
});

type PodcastsProps = {
    listeningTo: PodcastCategory[];
};

const Podcasts = ({ listeningTo }: PodcastsProps): JSX.Element => (
    <>
        <Head><title>Podcasts - Keith Wagner</title></Head>
        <main className="wide">
            <PodcastContainer podcasts={listeningTo} />
        </main>
    </>
);

export default Podcasts;
