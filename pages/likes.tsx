import styled from 'styled-components';
import React from 'react';
import { GetStaticProps } from 'next';
import likes from '@data/likes';
import { Like } from '@models/like';

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
            color: ${({ theme }) => theme.colors.darkGray};
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

const Podcasts: React.FC<LikeProps> = ({ likedItems }) => (
    <main>
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
    </main>
);

export default Podcasts;
