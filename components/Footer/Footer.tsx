import Link from 'next/link';

const Footer = (): JSX.Element => (
    <footer>
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
                <Link href="/current">
                    <a title="What I&apos;m Doing">What I&apos;m Doing</a>
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
                <Link href="/progress/2022">
                    <a title="2022 Goals Progress">2022 Goals Progress</a>
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
                <a href="https://www.twitter.com/kpwags">Twitter</a>
            </li>
            <li>
                <a rel="me" href="https://mastodon.social/@kpwags">Mastodon</a>
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
