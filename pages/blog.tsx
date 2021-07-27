import React from 'react';
import { getSortedPostsData } from '@lib/posts';
import { GetStaticProps } from 'next';
import Welcome from '@components/Welcome';
import LatestPosts from '@components/LatestPosts';

export const getStaticProps: GetStaticProps = async () => {
    const postsData = getSortedPostsData();

    return {
        props: {
            allPostsData: postsData.length <= 5 ? postsData : postsData.slice(0, 5),
        },
    };
};

interface BlogProps {
    allPostsData: Array<{ id: string; date: Date; title: string }>;
}

const Home: React.FC<BlogProps> = ({ allPostsData }) => (
    <main>
        <Welcome />
        <LatestPosts mostRecentPosts={allPostsData} />
    </main>
);

export default Home;
