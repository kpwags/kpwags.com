import BookMetadata from '@components/BookMetadata/BookMetadata';
import { getAllBookSlugs, getBookData } from '@lib/books';
import { BookPage } from '@models/BookPage';
import { GetStaticProps, GetStaticPaths } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllBookSlugs();

    return {
        paths,
        fallback: 'blocking',
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const book = await getBookData(params.slug.toString());

    return {
        props: {
            book,
        },
    };
};

interface BookPageProps {
    book: BookPage
}

const Post = ({ book }: BookPageProps): JSX.Element => (
    <>

        <main>
            <Head><title>{`${book.title} - Keith Wagner`}</title></Head>

            <BookMetadata book={book} />

            <hr />

            <article className="book-notes">
                <MDXRemote
                    compiledSource={book.content}
                    scope={book}
                    frontmatter={book}
                />
            </article>
        </main>
    </>
);

export default Post;
