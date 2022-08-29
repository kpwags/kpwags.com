import Head from 'next/head';
import styled from 'styled-components';
import current from '@data/current';
import { GetStaticProps } from 'next';
import { CurrentlyDoing } from '@models/currentlyDoing';
import MediaListing from '@components/MediaListing';

const Container = styled.div`
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
        display: block;
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

const Current = ({ currentlyDoing }: CurrentProps): JSX.Element => (
    <>
        <Head><title>Now - Keith Wagner</title></Head>
        <main>
            <Container>
                <h1>What I&apos;m Currently Up To</h1>

                <p className="lastUpdate">
                    Last Updated:
                    {' '}
                    {currentlyDoing.lastUpdate}
                </p>

                <h2>Reading</h2>

                <Grid>
                    {currentlyDoing.reading.map((book) => (
                        <MediaListing media={book} key={book.cover} />
                    ))}
                </Grid>

                <h2>Playing</h2>

                <Grid>
                    {currentlyDoing.playing.map((game) => (
                        <MediaListing media={game} key={game.cover} />
                    ))}
                </Grid>

                <h2>Watching</h2>

                <Grid>
                    {currentlyDoing.watching.map((tvShow) => (
                        <MediaListing media={tvShow} key={tvShow.cover} />
                    ))}
                </Grid>
            </Container>
        </main>
    </>
);

export default Current;
