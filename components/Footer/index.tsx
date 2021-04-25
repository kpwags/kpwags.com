import React from 'react';
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

const Footer: React.FC = () => (
    <Ftr>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/blog">Blog</a>
            </li>
            <li>
                <a href="/photography">Photography</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
            <li>
                <a href="/work">Work</a>
            </li>
            <li>
                <a href="/uses">Uses</a>
            </li>
            <li>
                <a href="/bookshelf">Bookshelf</a>
            </li>
            <li>
                <a href="/current">What I&apos;m Doing</a>
            </li>
            <li>
                <a href="/movies">Movies</a>
            </li>
            <li>
                <a href="/likes">Likes</a>
            </li>
            <li>
                <a href="/listening/">Podcasts</a>
            </li>
        </ul>
        <ul>
            <li>
                {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                <span className="copyright">&copy; {new Date().getFullYear()} Keith Wagner</span>
            </li>
            <li>
                <a href="https://www.github.com/kpwags">GitHub</a>
            </li>
            <li>
                <a href="https://www.twitter.com/kpwags">Twitter</a>
            </li>
            <li>
                <a href="/feed.xml">RSS</a>
            </li>
        </ul>
    </Ftr>
);

export default Footer;
