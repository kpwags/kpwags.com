import React from 'react';
import Header from '@components/Header'
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
    allPostsData: Array<{ id: string, date: Date, title: string }>
}

const Home: React.FC<HomeProps> = ({ allPostsData }) => {
    return (
        <>
            <Header />
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
        </>
    );
};

export default Home;
