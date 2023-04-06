import Link from 'next/link';
import { formatDate } from '@lib/utilities';
import { ReadingLog } from '@models/ReadingLog';

import styles from './ReadingLogListing.module.css';

interface ReadingLogListingProps {
    readingLog: ReadingLog
}

const ReadingLogListing = ({
    readingLog,
}: ReadingLogListingProps): JSX.Element => (
    <article key={readingLog.id} className={styles.article}>
        <h2><Link href={readingLog.url}>{readingLog.title}</Link></h2>

        <div className={styles.metadata}>
            <div className="post-date">{formatDate(readingLog.date)}</div>
        </div>

        {/* eslint-disable-next-line react/no-danger */}
        {readingLog.excerpt !== null ? <div className={styles.excerpt} dangerouslySetInnerHTML={{ __html: readingLog.excerpt || 'No content found' }} /> : null}
    </article>
);

export default ReadingLogListing;
