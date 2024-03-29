import Link from 'next/link';
import { formatDate } from '@lib/utilities';
import { BlogPost } from '@models/blogPost';

import styles from './PostListing.module.css';

interface PostListingProps {
    post: BlogPost
}

const PostListing = ({
    post,
}: PostListingProps): JSX.Element => (
    <article key={post.id} className={styles.article}>
        <div className={styles.metadata}>
            <div className="post-date">{formatDate(post.date)}</div>
            {post.readTime && post.readTime > 0 ? (
                <>
                    <div>&bull;</div>
                    <div className={styles.desktopVersion}>{post.readTime} Minute Read</div>
                    <div className={styles.mobileVersion}>{post.readTime} {post.readTime > 1 ? 'Minutes' : 'Minute'}</div>
                </>
            ) : null}
        </div>
        <div className={styles.content}>
            <h2><Link href={post.url}>{post.title}</Link></h2>

            {/* eslint-disable-next-line react/no-danger */}
            {post.excerpt !== null ? <div className={styles.excerpt} dangerouslySetInnerHTML={{ __html: post.excerpt || 'No content found' }} /> : null}
        </div>
    </article>
);

export default PostListing;
