import Head from 'next/head';
import styled from 'styled-components';
import { Fragment } from 'react';
import { GetStaticProps } from 'next';
import Podcast from '@components/Podcast';
import podcasts from '@data/podcasts';
import { PodcastCategory } from '@models/podcasts';

const Container = styled.div`
    margin: 50px auto 30px auto;

    @media all and (max-width: 900px) {
        width: 600px;
    }

    @media all and (max-width: 767px) {
        width: 100%;
        margin: 25px 0;
    }

    h1 {
        @media all and (max-width: 767px) {
            font-size: 1.8rem;
            padding-left: 10px;
            padding-right: 10px;
        }
    }

    p {
        @media all and (max-width: 767px) {
            padding-left: 10px;
            padding-right: 10px;
        }
    }
`;

const Categories = styled.ul`
    margin: 0;
    padding: 0;

    @media all and (max-width: 767px) {
        padding-left: 10px;
        padding-right: 10px;
    }
`;

const Category = styled.li`
    list-style-type: none;
    margin: 25px 0 12px 0;
    font-weight: bold;
    font-size: 1.3rem;
`;

const Grid = styled.div`
    margin: 0 0 40px;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-column-gap: 10px;
    grid-row-gap: 20px;

    @media all and (max-width: 767px) {
        display:block;
    }
`;

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
        <main>
            <Container>
                <h1>Podcasts I Listen To</h1>

                <p>Yes, I subscribe to a lot of podcasts. No, I don&apos;t necessarily listen to every episode.</p>

                <Categories>
                    {listeningTo.map(({ name: categoryName, podcasts: podcastsInCategory }) => (
                        <Fragment key={categoryName}>
                            <Category>{categoryName}</Category>

                            <Grid>
                                {podcastsInCategory
                                    .filter((p) => p.artwork !== undefined)
                                    .map(({ name: podcastName, link, artwork }) => (
                                        <Podcast podcastName={podcastName} link={link} artwork={artwork} key={link} />
                                    ))}
                            </Grid>
                        </Fragment>
                    ))}
                </Categories>
            </Container>
        </main>
    </>
);

export default Podcasts;
