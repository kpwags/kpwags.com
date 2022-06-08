import Head from 'next/head';
import styled from 'styled-components';
import { GetStaticProps } from 'next';
import likes from '@data/likes';
import { Like } from '@models/like';

const Container = styled.div`

`;

const LikedItemsList = styled.ul`
    margin: 25px 0;
    padding: 0;

    li {
        display: block;
        list-style-type: none;
        margin: 24px 0;

        div.title {
            font-weight: 400;
            font-size: 1.4rem;
        }

        div.source {
            color: var(--meta);
        }
    }
`;

export const getStaticProps: GetStaticProps = async () => ({
    props: {
        // only return most recent 25
        likedItems: likes.slice(0, 25),
    },
});

type LikeProps = {
    likedItems: Like[];
};

const Podcasts = ({ likedItems }: LikeProps): JSX.Element => (
    <>
        <Head><title>Likes - Keith Wagner</title></Head>

        <Container>
            <h1>
                Articles, Podcasts &
                {' '}
                <span>Other Likes</span>
            </h1>

            <p>
                I stumble into a lot of podcasts, articles, blog posts and other content around the internet.
                Here, I&apos;ll share the stuff that really piqued my interest.
            </p>

            <LikedItemsList>
                {likedItems.map((item) => (
                    <li key={item.url}>
                        <div className="title">
                            <a href={item.url} target="_blank" rel="noopener noreferrer">
                                {item.title}
                            </a>
                        </div>
                        <div className="source">
                            {item.source}
                        </div>
                    </li>
                ))}
            </LikedItemsList>
        </Container>
    </>
);

export default Podcasts;
