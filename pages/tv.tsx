/* eslint-disable max-len */
import Head from 'next/head';
import styled from 'styled-components';
import tv from '@data/tv';
import { GetStaticProps } from 'next';
import MediaListing from '@components/MediaListing';
import { TV } from '@models/tv';

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

    h2 {
        margin: 25px 0 20px;
    }

    p {
        @media all and (max-width: 767px) {
            padding-left: 10px;
            padding-right: 10px;
        }
    }

    .lastUpdate,
    .notes {
        margin: 12px 0;
        font-style: italic;
    }
`;

const Grid = styled.div`
    margin: 0 0 40px;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-column-gap: 10px;
    grid-row-gap: 40px;
    justify-items: center;

    @media all and (max-width: 767px) {
        display: block;
    }
`;

export const getStaticProps: GetStaticProps = async () => ({
    props: {
        tvShows: tv,
    },
});

type TVShowsProps = {
    tvShows: TV;
};

const TVShows = ({ tvShows }: TVShowsProps): JSX.Element => (
    <Container>
        <Head><title>Television Watch List - Keith Wagner</title></Head>

        <h1>Television Watch List</h1>

        <p>I&apos;ve certainly seen more than this, but I figured I&apos;d update this list with some of my thoughts for the TV series I&apos;ve watched and am currently watching.</p>

        <p className="lastUpdate">
            Last Updated: {tvShows.lastUpdate}
        </p>

        <h2>Currently Watching</h2>
        <Grid>
            {tvShows.current.map((series) => (
                <MediaListing
                    media={series}
                    key={series.cover}
                    includeReview
                />
            ))}
        </Grid>

        <h2>In-Between Seasons</h2>
        <Grid>
            {tvShows.continuing.map((series) => (
                <MediaListing
                    media={series}
                    key={series.cover}
                    includeReview
                />
            ))}
        </Grid>

        <h2>Completed</h2>
        <Grid>
            {tvShows.completed.map((series) => (
                <MediaListing
                    media={series}
                    key={series.cover}
                    includeReview
                />
            ))}
        </Grid>
    </Container>
);

export default TVShows;
