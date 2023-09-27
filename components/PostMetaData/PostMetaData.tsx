import { formatDate } from '@lib/utilities';

import styles from './PostMetaData.module.css';

interface PostMetaDataProps {
    date: Date;
    readTime?: number;
}

const PostMetaData = ({ date, readTime }: PostMetaDataProps): JSX.Element => (
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

export default PostMetaData;
