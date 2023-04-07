import Link from 'next/link';

import styles from './LatestPosts.module.css';

interface LatestPostsProps {
    title: string;
    posts: { title: string, url: string }[];
    viewMoreLink: string;
}

const LatestPosts = ({
    title,
    posts,
    viewMoreLink,
}: LatestPostsProps): JSX.Element => (
    <section className={styles.mostRecentPosts}>
        <h2>{title}</h2>
        <div>
            {posts.map((p) => (
                <h3 key={p.url}><Link href={p.url}>{p.title}</Link></h3>
            ))}

            <div className={styles.viewMore}>
                <Link href={viewMoreLink}>View More</Link>
            </div>
        </div>
    </section>
);

export default LatestPosts;
