import React from 'react';
import styled from 'styled-components';
import { getAllPosts } from '@lib/posts';
import { GetStaticProps } from 'next';
import Welcome from '@components/Welcome';
import LatestPosts from '@components/LatestPosts';
import LatestPhotoset from '@components/LatestPhotoset';
import { BlogPost } from '@models/blogPost';
import RssFeeds from '@components/RssFeeds';
import generateRssFeed from '@lib/rss';

export const getStaticProps: GetStaticProps = async () => {
    const blogPosts = getAllPosts();

    generateRssFeed();

    return {
        props: {
            posts: blogPosts.length <= 5 ? blogPosts : blogPosts.slice(0, 5),
        },
    };
};

const Latest = styled.div`
    display:grid;
    grid-column-gap: 10px;
    grid-template-columns: 2fr 1fr;
`;

interface HomeProps {
    posts: BlogPost[];
}

const Home: React.FC<HomeProps> = ({ posts }) => (
    <>
        <RssFeeds />
        <main>
            <Welcome />
            <Latest>
                <LatestPosts mostRecentPosts={posts} />
                <LatestPhotoset />
            </Latest>
        </main>
    </>
);

export default Home;
