/* eslint-disable @typescript-eslint/no-unused-vars-experimental */
import React from 'react';
import { getSortedPostsData } from '@lib/posts';

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
        <h1>Keith Wagner</h1>
        <p>
            My name is Keith, I’m a 30-something year old web developer living in the suburbs of Philadelphia, Pennsylvania. I graduated from Drexel
            University in 2007 with my Bachelor’s Degree in Computer Science and have since spent my career working on both front-end and back-end
            development. I am fortunate to have found a career where I can do what I love doing. Seeing websites and applications come to life is such
            an awesome thing, even more so when you’re the one building them.
        </p>
    </main>
);

export default Home;
