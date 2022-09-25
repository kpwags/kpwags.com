/* eslint-disable max-len */
import Head from 'next/head';
import styled from 'styled-components';
import games from '@data/videogames';
import { GetStaticProps } from 'next';
import VideoGameListing from '@components/VideoGameListing';
// eslint-disable-next-line @typescript-eslint/no-unused-vars-experimental
import VideoGames from '@models/VideoGames';

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

    &.padded-top {
        margin-top: 2rem;
    }

    @media all and (max-width: 767px) {
        display: block;
    }
`;

export const getStaticProps: GetStaticProps = async () => ({
    props: {
        videoGames: games,
    },
});

type VideoGamesProps = {
    videoGames: VideoGames;
};

const Games = ({ videoGames }: VideoGamesProps): JSX.Element => (
    <Container>
        <Head><title>Video Games - Keith Wagner</title></Head>

        <h1>Video Games</h1>

        <p>I&apos;ve certainly played more than this, but I figured I&apos;d update this list with some of my thoughts for the video games I&apos;ve played and am currently playing.</p>

        <p className="lastUpdate">
            Last Updated: {videoGames.lastUpdate}
        </p>

        <h2>Currently Playing</h2>
        <Grid>
            {videoGames.current.map((g) => (
                <VideoGameListing
                    game={g}
                    key={g.cover}
                />
            ))}
        </Grid>

        <h2>Played</h2>

        <p>
            ✅ - indicates that I finished the game<br />
            ❌ - indicates that I did not finish the game
        </p>

        <Grid className="padded-top">
            {videoGames.played.map((g) => (
                <VideoGameListing
                    game={g}
                    key={g.cover}
                />
            ))}
        </Grid>
    </Container>
);

export default Games;
