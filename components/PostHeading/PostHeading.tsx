import { formatDate } from '@lib/utilities';
import { BlogTag } from '@models/BlogTag';

import Link from 'next/link';
import styles from './PostHeading.module.css';

interface PostHeadingProps {
    title: string;
    tags: BlogTag[];
    date: Date;
    readTime?: number;
    subheading?: string | null;
}

const PostHeading = ({
    title,
    tags,
    date,
    readTime,
    subheading = null,
}: PostHeadingProps): JSX.Element => {
    const MetaData = (): JSX.Element => (
        <div className={styles.metadata}>
            <div>{formatDate(date)}</div>
            {
                readTime ? (
                    <>
                        <div>&bull;</div>
                        <div className={styles.readTime}>{readTime} min read</div>
                    </>
                ) : null
            }
        </div>
    );

    const Tags = (): JSX.Element => (
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

    return (
        <>
            <MetaData />

            <h1>{title}</h1>

            {subheading ? <h2 className="subheading">{subheading}</h2> : null}

            {tags.length > 0 ? <Tags /> : null}
        </>
    );
};

export default PostHeading;
