import Link from 'next/link';

import styles from './LatestPhotoset.module.css';

const LatestPhotoset = (): JSX.Element => (
    <section className={styles.latestPhotosetSection}>
        <div className={styles.heading}>
            <h2>Latest Photoset</h2>
            <div className={styles.link}>
                <Link href="/photography">View More</Link>
            </div>
        </div>
        <div className={styles.photoset}>
            <div
                className={styles.image}
                style={{ backgroundImage: "url('https://kpwags.com/photography/thumbnails/2016-vermont.jpg')" }}
            />
            <div className={styles.content}>
                <h3>
                    <Link href="/photography/2016-vermont">Vermont</Link>
                </h3>
                <p>
                    To celebrate our 3 year anniversary, Lauren and I went up to Wilmington Vermont
                    to enjoy the fall colors.
                </p>
                <p>
                    <Link href="/photography/2016-vermont">View Photos</Link>
                </p>
            </div>
        </div>
        <div className={styles.mobileLink}>
            <Link href="/photography">View More</Link>
        </div>
    </section>
);

export default LatestPhotoset;
