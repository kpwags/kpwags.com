import Link from 'next/link';

import styles from './Footer.module.css';

const Footer = (): JSX.Element => (
    <footer className={styles.footer}>
        <ul className="links">
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <Link href="/blog">
                    <a title="Blog">Blog</a>
                </Link>
            </li>
            <li>
                <Link href="/photoblog">
                    <a title="Photo Blog">Photo Blog</a>
                </Link>
            </li>
            <li>
                <Link href="/photography">
                    <a title="Photography">Photography</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a title="About">About</a>
                </Link>
            </li>
            <li>
                <Link href="/work">
                    <a title="Work">Work</a>
                </Link>
            </li>
            <li>
                <Link href="/contact">
                    <a title="Contact">Contact</a>
                </Link>
            </li>
            <li>
                <Link href="/uses">
                    <a title="Uses">Uses</a>
                </Link>
            </li>
            <li>
                <Link href="/search">
                    <a title="Search">Search</a>
                </Link>
            </li>
            <li>
                <Link href="/bookshelf">
                    <a title="Bookshelf">Bookshelf</a>
                </Link>
            </li>
            <li>
                <Link href="/now">
                    <a title="Now">Now</a>
                </Link>
            </li>
            <li>
                <Link href="/movies">
                    <a title="Movies">Movies</a>
                </Link>
            </li>
            <li>
                <Link href="/likes">
                    <a title="Likes">Likes</a>
                </Link>
            </li>
            <li>
                <Link href="/listening/">
                    <a title="Podcasts">Podcasts</a>
                </Link>
            </li>
            <li>
                <Link href="/tv/">
                    <a title="TV">TV</a>
                </Link>
            </li>
            <li>
                <Link href="/video-games/">
                    <a title="Video Games">Video Games</a>
                </Link>
            </li>
            <li>
                <Link href="/progress/2023">
                    <a title="2023 Goals Progress">2023 Goals Progress</a>
                </Link>
            </li>
        </ul>
        <ul className="info">
            <li>
                <span className="copyright">&copy; {new Date().getFullYear()} Keith Wagner</span>
            </li>
            <li>
                <a href="https://www.github.com/kpwags">GitHub</a>
            </li>
            <li>
                <a rel="me" href="https://hachyderm.io/@kpwags">Mastodon</a>
            </li>
            <li>
                <Link href="/feed.xml">
                    <a title="RSS">RSS</a>
                </Link>
            </li>
        </ul>
    </footer>
);

export default Footer;
