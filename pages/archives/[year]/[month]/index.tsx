import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps, GetStaticPaths } from 'next';
import { getArchiveMonthYearPages, getPostsForMonthAndYear } from '@lib/posts';
import { getMonthName } from '@lib/utilities';
import { BlogPost } from '@models/blogPost';
import PostListing from '@components/PostListing';

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getArchiveMonthYearPages();

    return {
        paths,
        fallback: 'blocking',
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { year, month } = params;

    const posts = getPostsForMonthAndYear(parseInt(year.toString(), 10), parseInt(month.toString(), 10));

    return {
        props: {
            posts,
            year: year.toString(),
            month: getMonthName(parseInt(month.toString(), 10)),
        },
    };
};

interface ArchiveMonthProps {
    posts: BlogPost[];
    year: string;
    month: string;
}

const ArchiveMonth = ({ posts, month, year }: ArchiveMonthProps): JSX.Element => (
    <>
        <Head><title>{`Posts in ${month} ${year} - Keith Wagner`}</title></Head>
        <main>
            <h1>{`Posts in ${month} ${year}`}</h1>

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

export default ArchiveMonth;
