import { createGlobalStyle } from 'styled-components';
import { Theme } from '@models/theme';

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }: { theme: Theme }) => theme.colors.background};
        color: ${({ theme }: { theme: Theme }) => theme.colors.text};
        font-family: ${({ theme }: { theme: Theme }) => theme.font};
        transition: all 0.50s linear;
        margin: 0;
        padding: 0;
        font-size: 100%;
        line-height: 1;
        font-weight: 300;
        -webkit-text-size-adjust: 100%;
    }

    blockquote,
    pre,
    ul,
    ol,
    dl,
    figure {
        margin-bottom: 15px;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        line-height: 1.2;
        margin: 0 0 15px 0;
        padding: 0;
        font-weight: 300;
    }

    h1 {
        font-weight: bold;
        color: ${({ theme }: { theme: Theme }) => theme.colors.h1};
        font-size: 2.1rem;
        margin: 0;
        padding: 0;

        span {
            white-space: nowrap;
        }
    }

    h2 {
        font-weight: bold;
        color: ${({ theme }: { theme: Theme }) => theme.colors.h2};
        font-size: 1.75rem;
        margin: 0;
        padding: 0;

        span {
            white-space: nowrap;
        }
    }

    img {
        max-width: 100%;
        vertical-align: middle;
    }

    p {
        line-height: 1.8;
        margin-bottom: 25px;
    }

    ul,
    ol {
        margin-left: 30px;
    }

    li {
        margin-bottom: 10px;
        line-height: 1.5;
    }

    a {
        color: ${({ theme }) => theme.colors.blue};
        cursor: pointer;
        text-decoration: none;
    }

    a:visited {
        color: ${({ theme }) => theme.colors.blue};
    }

    a:hover {
        color: ${({ theme }) => theme.colors.mediumBlue};
        text-decoration: none;
    }

    a img {
        border: none;
    }

    main {
        width: 1024px;
        margin: 0 auto;
        padding: 0 10px;

        @media all and (max-width: 1280px) {
            margin: 0 auto;
            width: 960px;
            padding: 0;
        }

        @media all and (max-width: 1023px) {
            width: 100%;
            padding: 0;
        }
    }

    main.wider {
        width: 1280px;

        @media all and (max-width: 1280px) {
            width: 1024px;
        }

        @media all and (max-width: 1060px) {
            width: 960px;
        }

        @media all and (max-width: 1023px) {
            width: 100%;
        }
    }

    .clear {
        clear: both;
    }
`;
