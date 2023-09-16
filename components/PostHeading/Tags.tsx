import Link from 'next/link';
import { BlogTag } from '@models/BlogTag';

import styles from './PostHeading.module.css';

interface TagsProps {
    tags: BlogTag[];
}

const Tags = ({ tags }: TagsProps): JSX.Element => (
    <ul className={styles.tagList}>
        {
            tags.map((tag) => (
                <li key={tag.url}>
                    <Link href={`/tag/${tag.url}`}>{tag.name}</Link>
                </li>
            ))
        }
    </ul>
);

export default Tags;
