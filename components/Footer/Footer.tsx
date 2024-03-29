import Link from 'next/link';

import styles from './Footer.module.css';

const Footer = (): JSX.Element => (
    <footer className={styles.footer}>
        <ul className="links">
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <Link href="/blog" title="Blog">Blog</Link>
            </li>
            <li>
                <Link href="/reading-logs" title="Reading Logs">Reading Logs</Link>
            </li>
            <li>
                <Link href="/about" title="About">About</Link>
            </li>
            <li>
                <Link href="/work" title="Work">Work</Link>
            </li>
            <li>
                <Link href="/uses" title="Uses">Uses</Link>
            </li>
            <li>
                <Link href="/archives" title="Archives">Archives</Link>
            </li>
            <li>
                <Link href="/search" title="Search">Search</Link>
            </li>
            <li>
                <Link href="/bookshelf" title="Bookshelf">Bookshelf</Link>
            </li>
            <li>
                <Link href="/now" title="Now">Now</Link>
            </li>
            <li>
                <Link href="/movies" title="Movies">Movies</Link>
            </li>
            <li>
                <Link href="/likes" title="Likes">Likes</Link>
            </li>
            <li>
                <Link href="/listening" title="Podcasts">Podcasts</Link>
            </li>
            <li>
                <Link href="/tv/" title="TV">TV</Link>
            </li>
            <li>
                <Link href="/music" title="Music">Music</Link>
            </li>
            <li>
                <Link href="/video-games/" title="Video Games">Video Games</Link>
            </li>
            <li>
                <Link href="/stats" title="Stats">Stats</Link>
            </li>
            <li>
                <Link href="/progress/2023" title="2023 Goals Progress">2023 Goals Progress</Link>
            </li>
        </ul>
        <ul className="info">
            <li className={styles.copyright}>
                &copy; {new Date().getFullYear()} Keith Wagner
            </li>
            <li className={styles.email}>
                <a href="mailto:hello@kpwags.com">hello@kpwags.com</a>
            </li>
            <li>
                <a href="https://www.github.com/kpwags">GitHub</a>
            </li>
            <li>
                <a href="https://hachyderm.io/@kpwags">Mastodon</a>
            </li>
            <li>
                <a href="https://bsky.app/profile/kpwags.com">Bluesky</a>
            </li>
            <li>
                <Link href="/feed.xml" title="RSS">RSS</Link>
            </li>
        </ul>
    </footer>
);

export default Footer;
