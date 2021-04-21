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

const Home = ({ allPostsData }) => {
    return (
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
    );
};

export default Home;
