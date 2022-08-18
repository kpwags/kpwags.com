import styled from 'styled-components';
import Link from 'next/link';

const Ftr = styled.footer`
    margin: 6rem 0 3rem;
    padding-top: 1.4rem;
    text-align: center;
    border-top: 1px solid var(--grey-1);

    ul {
        margin-bottom: 1rem;

        li {
            list-style-type: none;
            display: inline-block;
            padding: 0.25rem 1rem;
        }
    }

    span.copyright {
        font-size: 1rem;
        font-style: italic;
    }
`;

const Footer = (): JSX.Element => (
    <Ftr>
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
                <Link href="/tv/">
                    <a title="TV">TV</a>
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
    </Ftr>
);

export default Footer;
