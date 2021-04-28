import styled from 'styled-components';
import React from 'react';
import { GetStaticProps } from 'next';
import podcasts from '@data/podcasts';
import { PodcastCategory } from '@models/podcasts';

const Container = styled.div`
    width: 800px;
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
    margin: 0 25px 40px 25px;
    padding: 0;

    li {
        margin: 10px 0;
        font-size: 1.1rem;
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

const Podcasts: React.FC<PodcastsProps> = ({ listeningTo }) => (
    <main>
        <Container>
            <h1>Podcasts I Listen To</h1>

            <p>Yes, I subscribe to a lot of podcasts. No, I don&apos;t necessarily listen to every episode.</p>

            <Categories>
                {listeningTo.map(({ name: categoryName, podcasts: podcastsInCategory }) => (
                    <React.Fragment key={categoryName}>
                        <Category>{categoryName}</Category>

                        <List>
                            {podcastsInCategory.map(({ name: podcastName, link }) => (
                                <li key={link}>
                                    <a href={link} title={podcastName} target="_blank" rel="noreferrer">
                                        {podcastName}
                                    </a>
                                </li>
                            ))}
                        </List>
                    </React.Fragment>
                ))}
            </Categories>
        </Container>
    </main>
);

export default Podcasts;
