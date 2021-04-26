/* eslint-disable @typescript-eslint/no-unused-vars-experimental */
import React from 'react';
import { getSortedPostsData } from '@lib/posts';
import Welcome from '@components/Welcome';
import LatestPosts from '@components/LatestPosts';

export async function getStaticProps() {
    const postsData = getSortedPostsData();

    return {
        props: {
            allPostsData: postsData.length <= 5 ? postsData : postsData.slice(0, 5),
        },
    };
}

interface HomeProps {
    allPostsData: Array<{ id: string; date: Date; title: string }>;
}

const Home: React.FC<HomeProps> = ({ allPostsData }) => (
    <main>
        <Welcome />
        <LatestPosts mostRecentPosts={allPostsData} />
    </main>
);

export default Home;
