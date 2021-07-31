import React from 'react';
import { getPaginatedPosts } from '@lib/posts';
import { GetStaticProps } from 'next';
import { BlogPost } from '@models/blogPost';
import PostListing from '@components/PostListing';

export const getStaticProps: GetStaticProps = async () => {
    const posts = getPaginatedPosts(1);

    return {
        props: {
            posts: posts.posts,
        },
    };
};

interface HomeProps {
    posts: BlogPost[]
}

const Home: React.FC<HomeProps> = ({ posts }) => (
    <main>
        {posts.map((p) => (<PostListing key={p.id} post={p} />))}

        <ul className="pagination">
            <li className="next">
                <a className="paginate-next-a">Newer Posts &rarr;</a>
            </li>
        </ul>
    </main>
);

export default Home;
