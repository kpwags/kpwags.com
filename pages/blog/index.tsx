import React from 'react';
import Head from 'next/head';
import { getPaginatedPosts } from '@lib/Posts';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { BlogPost } from '@models/BlogPost';
import PostListing from '@components/PostListing';
import RssFeeds from '@components/RssFeeds';

export const getStaticProps: GetStaticProps = async () => {
    const posts = getPaginatedPosts(1);

    return {
        props: {
            posts: posts.posts,
        },
    };
};

interface BlogProps {
    posts: BlogPost[]
}

const Blog = ({ posts }: BlogProps): JSX.Element => (
    <>
        <Head><title>Blog - Keith Wagner</title></Head>
        <RssFeeds />

        <h1>Blog</h1>

        {posts.map((p) => (<PostListing key={p.id} post={p} />))}

        <ul className="pagination">
            <li className="next">
                <Link href="/blog/2"><a className="paginate-next-a">Older Posts &rarr;</a></Link>
            </li>
        </ul>
    </>
);

export default Blog;
