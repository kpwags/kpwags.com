import { formatDate } from '@lib/utilities';

import styles from './PostHeading.module.css';

interface MetaDataProps {
    date: Date;
    readTime?: number;
}

const MetaData = ({ date, readTime }: MetaDataProps): JSX.Element => (
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

export default MetaData;
