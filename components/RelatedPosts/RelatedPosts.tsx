import { RelatedPost } from '@models/RelatedPost';

import styles from './RelatedPosts.module.css';

interface RelatedPostsProps {
    posts: RelatedPost[];
}

const RelatedPosts = ({ posts }: RelatedPostsProps): JSX.Element => {
    if (posts.length === 0) {
        return null;
    }

    return (
        <section className="related-posts">
            <div className={styles.lead}>Related Posts</div>
            {posts.map((p) => (
                <div key={p.url} className={styles.post}>
                    <a href={p.url}>{p.title}</a>
                </div>
            ))}
        </section>
    );
};

export default RelatedPosts;
