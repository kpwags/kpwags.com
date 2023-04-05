import Head from 'next/head';
import { getPaginatedPostsForTag, getAllTagPages } from '@lib/tags';
import { GetStaticProps, GetStaticPaths } from 'next';
import { BlogPost } from '@models/blogPost';
import PostListing from '@components/PostListing';
import TagHeader from '@components/TagHeader';
import Link from 'next/link';
import RssFeeds from '@components/RssFeeds';

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllTagPages();

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { tag } = params;

    const posts = getPaginatedPostsForTag(tag.toString(), 1);

    let tagName = tag;

    if (posts.posts.length > 0) {
        const postTags = posts.posts[0].tags;
        const specifiedTag = postTags.filter((t) => t.url === tag)[0];

        tagName = specifiedTag?.name || '';
    }

    return {
        props: {
            tag,
            tagName,
            posts: posts.posts,
            pageCount: posts.totalPages,
        },
    };
};

interface TaggedPostProps {
    tag: string
    tagName: string
    posts: BlogPost[]
    pageCount: number
}

const TaggedPosts = ({
    tagName, posts, tag, pageCount,
}: TaggedPostProps): JSX.Element => (
    <>
        <Head>
            <title>{`Posts tagged '${tagName}' - Keith Wagner`}</title>
        </Head>
        <RssFeeds />
        <main>
            <TagHeader name={tagName} />

            {posts.map((p) => (<PostListing key={p.id} post={p} />))}

            {pageCount > 1 && (
                <ul className="pagination">
                    <li className="next">
                        <Link href={`/tag/${tag}/2`} className="paginate-next-a">Older Posts &rarr;</Link>
                    </li>
                </ul>
            )}
        </main>
    </>
);

export default TaggedPosts;
