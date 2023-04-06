import Link from 'next/link';
import { BlogPost } from '@models/blogPost';
import PostListing from '@components/PostListing';

import styles from './LatestPosts.module.css';

interface LatestPostsProps {
    mostRecentPosts: BlogPost[];
}

const LatestPosts = ({ mostRecentPosts }: LatestPostsProps): JSX.Element => (
    <section className={styles.mostRecentPosts}>
        <div className={styles.heading}>
            <h2>Latest Posts</h2>
            <div className={styles.link}>
                <Link href="/blog">View More</Link>
            </div>
        </div>
        <div>
            {mostRecentPosts.map((p) => (<PostListing key={p.id} post={p} />))}

            <div className={styles.mobileLink}>
                <Link href="/blog">View More</Link>
            </div>
        </div>
    </section>
);

export default LatestPosts;
