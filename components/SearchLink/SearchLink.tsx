import Link from 'next/link';
import styles from './SearchLink.module.css';

const SearchLink = (): JSX.Element => (
    <div className={styles.searchBlock}>
        <Link href="/search">Search Posts</Link>
    </div>
);

export default SearchLink;
