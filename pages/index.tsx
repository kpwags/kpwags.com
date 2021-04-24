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
        <ul>
            {allPostsData.map(({ id, date, title }) => (
                <li key={id}>
                    {title}
                    <br />
                    {id}
                    <br />
                    {date}
                </li>
            ))}
        </ul>
    </main>
);

export default Home;
