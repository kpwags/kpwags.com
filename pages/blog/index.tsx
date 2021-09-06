import React from 'react';
import Head from 'next/head';
import { getPaginatedPosts } from '@lib/posts';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { BlogPost } from '@models/blogPost';
import PostListing from '@components/PostListing';
import RssFeeds from '@components/RssFeeds';
import SearchLink from '@components/SearchLink';

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
        <main>
            <SearchLink />

            {posts.map((p) => (<PostListing key={p.id} post={p} />))}

            <ul className="pagination">
                <li className="next">
                    <Link href="/blog/2"><a className="paginate-next-a">Older Posts &rarr;</a></Link>
                </li>
            </ul>
        </main>
    </>
);

export default Blog;
