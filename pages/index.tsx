/* eslint-disable @typescript-eslint/no-unused-vars-experimental */
import React from 'react';
import { getSortedPostsData } from '@lib/posts';
import Welcome from '@components/Welcome';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

interface HomeProps {
    allPostsData: Array<{ id: string; date: Date; title: string }>;
}

const Home: React.FC<HomeProps> = ({ allPostsData }) => (
    <main>
        <Welcome />
    </main>
);

export default Home;
