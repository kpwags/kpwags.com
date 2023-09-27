import { BlogTag } from '@models/BlogTag';
import Link from 'next/link';

import styles from './TagList.module.css';

interface TagListProps {
    tags: BlogTag[];
}

const TagList = ({
    tags = [],
}: TagListProps): JSX.Element => (
    <section className="tags">
        <ul className={styles.tagList}>
            <li className={styles.lead}>Tagged:</li>
            {tags.map((t) => (
                <li key={t.url}><Link href={`/tag/${t.url}`}>{t.name}</Link></li>
            ))}
        </ul>
    </section>
);

export default TagList;
