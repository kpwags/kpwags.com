import styled from 'styled-components';
import React from 'react';
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

const List = styled.ul`
    margin: 0 0 40px;
    padding: 0;
`;

export const getStaticProps: GetStaticProps = async () => ({
    props: {
        listeningTo: podcasts,
    },
});

type PodcastsProps = {
    listeningTo: PodcastCategory[];
};

const Podcasts: React.FC<PodcastsProps> = ({ listeningTo }) => (
    <main className="wider">
        <Container>
            <h1>Podcasts I Listen To</h1>

            <p>Yes, I subscribe to a lot of podcasts. No, I don&apos;t necessarily listen to every episode.</p>

            <Categories>
                {listeningTo.map(({ name: categoryName, podcasts: podcastsInCategory }) => (
                    <React.Fragment key={categoryName}>
                        <Category>{categoryName}</Category>

                        <List>
                            {podcastsInCategory
                                .filter((p) => p.artwork !== undefined)
                                .map(({ name: podcastName, link, artwork }) => (
                                    <Podcast podcastName={podcastName} link={link} artwork={artwork} key={link} />
                                ))}
                        </List>
                    </React.Fragment>
                ))}
            </Categories>
        </Container>
    </main>
);

export default Podcasts;
