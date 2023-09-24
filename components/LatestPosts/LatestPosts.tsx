import Link from 'next/link';
import { BlogPost } from '@models/blogPost';
import { formatDate } from '@lib/utilities';

import styles from './LatestPosts.module.css';

interface LatestPostsProps {
    posts: BlogPost[];
}

const LatestPosts = ({
    posts,
}: LatestPostsProps): JSX.Element => (
    <section className={styles.mostRecentPosts}>
        {posts.map((p) => (
            <article key={p.id} className={styles.article}>
                <div className={styles.metadata}>
                    <div className="post-date">{formatDate(p.date)}</div>
                </div>
                <div className={styles.content}>
                    <h2><Link href={p.url}>{p.title}</Link></h2>

                    {/* eslint-disable-next-line react/no-danger */}
                    {p.excerpt !== null ? <div className={styles.excerpt} dangerouslySetInnerHTML={{ __html: p.excerpt || 'No content found' }} /> : null}
                </div>
            </article>
        ))}
    </section>
);

export default LatestPosts;
