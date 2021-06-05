import styled from 'styled-components';
import { FC } from 'react';
import current from '@data/current';
import { GetStaticProps } from 'next';
import { CurrentlyDoing } from '@models/currentlyDoing';
import VideoGame from '@components/VideoGame';

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

    .lastUpdate {
        margin: 12px 0;
        font-style: italic;
    }
`;

const Grid = styled.div`
    margin: 0 0 40px;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-column-gap: 10px;
    grid-row-gap: 20px;
    align-items: center;
    justify-items: center;

    @media all and (max-width: 767px) {
        display:block;
    }
`;

export const getStaticProps: GetStaticProps = async () => ({
    props: {
        currentlyDoing: current,
    },
});

type CurrentProps = {
    currentlyDoing: CurrentlyDoing;
};

const Current: FC<CurrentProps> = ({ currentlyDoing }) => (
    <main className="wider">
        <Container>
            <h1>What I&apos;m Currently Up To</h1>

            <p className="lastUpdate">
                Last Updated:
                {' '}
                {currentlyDoing.lastUpdate}
            </p>

            <h2>Playing</h2>

            <Grid>
                {currentlyDoing.playing.map((game) => (
                    <VideoGame game={game} key={game.cover} />
                ))}
            </Grid>
        </Container>
    </main>
);

export default Current;
