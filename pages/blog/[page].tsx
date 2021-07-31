import { FC, useState, useEffect } from 'react';
import { BlogPost } from '@models/blogPost';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import { getPostPages, getPaginatedPosts } from '@lib/posts';
import PostListing from '@components/PostListing';
import ReactPaginate from 'react-paginate';

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getPostPages();

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { page } = params;

    let pageNumber = 1;

    if (typeof page === 'string') {
        pageNumber = parseInt(page, 10);
    }

    const posts = getPaginatedPosts(pageNumber);

    return {
        props: {
            posts: posts.posts,
            lastPage: posts.totalPages,
            currentPage: pageNumber,
        },
    };
};

interface PostProps {
    posts: BlogPost[]
    lastPage: number
    currentPage: number
}

const Post: FC<PostProps> = ({ posts, lastPage, currentPage }) => {
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
        <main>
            {blogPosts.map((p) => (<PostListing key={p.id} post={p} />))}

            <ReactPaginate
                marginPagesDisplayed={0}
                pageRangeDisplayed={0}
                previousLabel="&larr; Older Posts"
                nextLabel="Newer Posts &rarr;"
                initialPage={currentPage - 1}
                pageCount={lastPage}
                onPageChange={handlePagination}
                containerClassName="pagination"
                activeClassName="paginate-active"
                nextLinkClassName="paginate-next-a"
                previousLinkClassName="paginate-prev-a"
            />
        </main>
    );
};

export default Post;
