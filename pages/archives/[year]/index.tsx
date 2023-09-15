import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps, GetStaticPaths } from 'next';
import { getArchiveYearPages, getPostsForYear } from '@lib/posts';
import { BlogPost } from '@models/blogPost';
import PostListing from '@components/PostListing';

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getArchiveYearPages();

    return {
        paths,
        fallback: 'blocking',
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { year } = params;

    const posts = getPostsForYear(parseInt(year.toString(), 10));

    return {
        props: {
            posts,
            year: year.toString(),
        },
    };
};

interface ArchiveYearProps {
    posts: BlogPost[];
    year: string;
}

const ArchiveYear = ({ posts, year }: ArchiveYearProps): JSX.Element => (
    <>
        <Head><title>{`Posts in ${year} - Keith Wagner`}</title></Head>
        <main>
            <h1>{`Posts in ${year}`}</h1>

            {posts.map((p) => (<PostListing key={p.id} post={p} />))}

            {posts.length === 0 ? (
                <>
                    <p>No Posts Found</p>
                    <p><Link href="/archives">&larr; Back to Archives</Link></p>
                </>
            ) : null}
        </main>
    </>
);

export default ArchiveYear;
