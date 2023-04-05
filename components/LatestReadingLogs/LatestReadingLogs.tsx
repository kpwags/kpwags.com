import Link from 'next/link';
import { ReadingLog } from '@models/ReadingLog';
import ReadingLogListing from '@components/ReadingLogListing';

import styles from './LatestReadingLogs.module.css';

interface LatestReadingLogsProps {
    mostRecentLogs: ReadingLog[];
}

const LatestReadingLogs = ({ mostRecentLogs }: LatestReadingLogsProps): JSX.Element => (
    <section className={styles.mostRecentPosts}>
        <div className={styles.heading}>
            <h2>Latest Reading Logs</h2>
            <div className={styles.link}>
                <Link href="/reading-logs">View More</Link>
            </div>
        </div>
        <div>
            {mostRecentLogs.map((rl) => (<ReadingLogListing key={rl.id} readingLog={rl} />))}

            <div className={styles.mobileLink}>
                <Link href="/reading-logs">View More</Link>
            </div>
        </div>
    </section>
);

export default LatestReadingLogs;
