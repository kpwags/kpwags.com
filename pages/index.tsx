import React from 'react';
import { getAllPosts } from '@lib/posts';
import { GetStaticProps } from 'next';
import Welcome from '@components/Welcome';
import LatestPosts from '@components/LatestPosts';
import { BlogPost } from '@models/blogPost';

export const getStaticProps: GetStaticProps = async () => {
    const blogPosts = getAllPosts();

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
    <main>
        <Welcome />
        <LatestPosts mostRecentPosts={posts} />
    </main>
);

export default Home;
