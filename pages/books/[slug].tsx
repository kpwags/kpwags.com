import BookMetadata from '@components/BookMetadata/BookMetadata';
import { getAllBookSlugs, getBookData } from '@lib/books';
import { formatDate } from '@lib/utilities';
import { BookNote } from '@models/BookNote';
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
    book: BookNote
}

const Post = ({ book }: BookPageProps): JSX.Element => (
    <main>
        <Head><title>{`${book.title} - Keith Wagner`}</title></Head>

        <article className="book-note">
            <div className="metadata">{formatDate(book.dateFinished)}</div>

            <div className="content">
                <BookMetadata book={book} />

                <hr />

                <div className="book-notes">
                    <MDXRemote
                        compiledSource={book.content}
                        scope={book}
                        frontmatter={book}
                    />
                </div>
            </div>
        </article>

    </main>
);

export default Post;
