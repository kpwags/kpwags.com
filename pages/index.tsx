import React from 'react';
import { getAllPosts } from '@lib/posts';
import { GetStaticProps } from 'next';
import Welcome from '@components/Welcome';
import LatestPosts from '@components/LatestPosts';
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

interface HomeProps {
    posts: BlogPost[];
}

const Home: React.FC<HomeProps> = ({ posts }) => (
    <>
        <RssFeeds />
        <main>
            <Welcome />
            <LatestPosts mostRecentPosts={posts} />
        </main>
    </>
);

export default Home;
