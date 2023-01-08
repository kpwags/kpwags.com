import Link from 'next/link';
import { formatDate } from '@lib/utilities';
import { BlogPost } from '@models/blogPost';

import styles from './PostListing.module.css';

interface PostListingProps {
    post: BlogPost
    showBorder?: boolean
    showTags?: boolean
}

const PostListing = ({
    post,
    showBorder = false,
    showTags = false,
}: PostListingProps): JSX.Element => (
    <article key={post.id} className={showBorder ? styles.boxedArticle : styles.article}>
        <h2><Link href={post.url}><a>{post.title}</a></Link></h2>
        <div className="metadata">
            {formatDate(post.date)}
            {post.readTime ? <> &mdash; {post.readTime} min read</> : null}
        </div>

        {showTags ? (
            <ul className={styles.tags}>
                {post.tags.map((t) => (
                    <li key={t.url}><Link href={`/tag/${t.url}`}><a>#{t.name}</a></Link></li>
                ))}
            </ul>
        ) : null}

        {/* eslint-disable-next-line react/no-danger */}
        {post.excerpt !== null ? <p dangerouslySetInnerHTML={{ __html: post.excerpt || 'No content found' }} /> : null}
    </article>
);

export default PostListing;
