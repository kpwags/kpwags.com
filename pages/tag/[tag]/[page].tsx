import { useState, useEffect } from 'react';
import Head from 'next/head';
import { getPaginatedPostsForTag, getAllTagPages } from '@lib/Posts';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import { BlogPost } from '@models/BlogPost';
import PostListing from '@components/PostListing';
import TagHeader from '@components/TagHeader';
import ReactPaginate from 'react-paginate';
import RssFeeds from '@components/RssFeeds';

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllTagPages();

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { tag, page } = params;

    let pageNumber = 1;

    if (typeof page === 'string') {
        pageNumber = parseInt(page, 10);
    }

    const posts = getPaginatedPostsForTag(tag.toString(), pageNumber);

    let tagName = tag;

    if (posts.posts.length > 0) {
        const postTags = posts.posts[0].tags;
        const specifiedTag = postTags.filter((t) => t.url === tag)[0];

        tagName = specifiedTag?.name || '';
    }

    return {
        props: {
            tagName,
            posts: posts.posts,
            lastPage: posts.totalPages,
            currentPage: pageNumber,
        },
    };
};

interface TaggedPostsProps {
    tagName: string
    posts: BlogPost[]
    lastPage: number
    currentPage: number
}

const TaggedPosts = ({
    tagName, posts, lastPage, currentPage,
}: TaggedPostsProps): JSX.Element => {
    const [blogPosts, setBlogPosts] = useState(posts);
    const router = useRouter();

    useEffect(() => {
        setBlogPosts(posts);
    }, [posts]);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handlePagination = (page: any) => {
        const path = router.pathname;
        const { query } = router;

        query.page = page.selected + 1;

        router.push({
            pathname: path,
            query,
        });
    };

    return (
        <>
            <Head>
                <title>
                    {tagName}
                    {' '}
                    - Keith Wagner
                </title>
            </Head>
            <RssFeeds />
            <main>
                <TagHeader name={tagName} />

                {blogPosts.map((p) => (<PostListing key={p.id} post={p} />))}

                <ReactPaginate
                    marginPagesDisplayed={0}
                    pageRangeDisplayed={0}
                    previousLabel="&larr; Newer Posts"
                    nextLabel="Older Posts &rarr;"
                    initialPage={currentPage - 1}
                    pageCount={lastPage}
                    onPageChange={handlePagination}
                    containerClassName="pagination"
                    activeClassName="paginate-active"
                    nextLinkClassName="paginate-next-a"
                    previousLinkClassName="paginate-prev-a"
                />
            </main>
        </>
    );
};

export default TaggedPosts;
