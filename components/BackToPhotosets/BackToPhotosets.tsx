import Link from 'next/link';
import styles from './BackToPhotosets.module.css';

const BackToPhotoset = (): JSX.Element => (
    <div className={styles.backButton}>
        <Link href="/photography">
            <a>&larr; Back to Photo Sets</a>
        </Link>
    </div>
);

export default BackToPhotoset;
