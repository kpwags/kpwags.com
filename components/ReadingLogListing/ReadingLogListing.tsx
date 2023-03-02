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
    <article key={readingLog.id} className={styles.boxedArticle}>
        <h2><Link href={readingLog.url}><a>{readingLog.title}</a></Link></h2>
        <div className={styles.metadata}>
            {formatDate(readingLog.date)}
        </div>

        <ul className={styles.tags}>
            {readingLog.tags.map((t) => (
                <li key={t.url}><Link href={`/tag/${t.url}`}><a>#{t.name}</a></Link></li>
            ))}
        </ul>

        {/* eslint-disable-next-line react/no-danger */}
        {readingLog.excerpt !== null ? <p dangerouslySetInnerHTML={{ __html: readingLog.excerpt || 'No content found' }} /> : null}
    </article>
);

export default ReadingLogListing;
