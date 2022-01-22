import Link from 'next/link';
import styled from 'styled-components';

const Ftr = styled.footer`
    padding: 15px 15px 0 15px;
    height: 50px;
    margin-top: 50px;
    border-top: 1px solid ${({ theme }) => theme.colors.mediumBlue};

    @media all and (max-width: 1280px) {
        padding: 15px 0 0 0;
    }

    @media all and (max-width: 767px) {
        height: auto;
        line-height: 1;
        text-align: center;
        padding: 0;
    }

    ul {
        margin: 0;
        padding-bottom: 15px;
        padding-inline-start: 0;

        @media all and (max-width: 767px) {
            text-align: center;
            height: auto;
            margin: 15px 0;
            padding: 0;
        }

        li {
            display: inline-block;
            list-style-type: none;
            padding: 0 0 0 15px;

            @media all and (max-width: 767px) {
                line-height: 2;
                padding: 0 8px;
            }
        }
    }

    span.copyright {
        font-size: 1rem;
        font-style: italic;
        color: ${({ theme }) => theme.colors.darkGray};
    }
`;

const Footer = (): JSX.Element => (
    <Ftr>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <Link href="/blog">
                    <a title="Blog">Blog</a>
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
        <ul>
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
                <Link href="/feed.xml">
                    <a title="RSS">RSS</a>
                </Link>
            </li>
        </ul>
    </Ftr>
);

export default Footer;
