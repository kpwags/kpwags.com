import { Series } from '@models/Series';

import styles from './BlogSeries.module.css';

interface BlogSeriesProps {
    series: Series
}

const BlogSeries = ({
    series,
}: BlogSeriesProps): JSX.Element => {
    if (series.posts.length === 0) {
        return null;
    }

    return (
        <div className={styles.blogSeries}>
            <div className={styles.seriesTitle}>Series: {series.title}</div>
            <ul className={styles.posts}>
                {series.posts.sort((a, b) => a.sortOrder - b.sortOrder).map((p) => (
                    <li key={p.url} className={styles.post}>
                        {p.isCurrent ? (
                            <span className={styles.current}>{p.title}</span>
                        ) : (
                            <a href={p.url}>{p.title}</a>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogSeries;
