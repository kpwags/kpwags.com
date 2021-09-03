import { createGlobalStyle } from 'styled-components';
import { Theme } from '@models/theme';

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }: { theme: Theme }) => theme.colors.background};
        color: ${({ theme }: { theme: Theme }) => theme.colors.text};
        font-family: ${({ theme }: { theme: Theme }) => theme.fonts.primary};
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
        font-weight: 900;
        color: ${({ theme }: { theme: Theme }) => theme.colors.h1};
        font-size: 3rem;
        margin: 0;
        padding: 0;

        span {
            white-space: nowrap;
        }
    }

    h2 {
        font-weight: 700;
        color: ${({ theme }: { theme: Theme }) => theme.colors.h2};
        font-size: 1.75rem;
        margin: 0;
        padding: 0;

        span {
            white-space: nowrap;
        }

        a:hover {
            text-decoration: none;
        }
    }

    h3 {
        color: ${({ theme }) => theme.colors.mediumBlue};
        font-family: ${({ theme }) => theme.fonts.secondary};
        font-size: 1.5rem;
        font-weight: 500;
        margin: 0;

        span {
            white-space: nowrap;
        }

        a:hover {
            text-decoration: none;
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
        text-decoration: underline;
    }

    a img {
        border: none;
    }

    main {
        width: 800px;
        margin: 0 auto;
        padding: 0 10px;

        @media all and (max-width: 1280px) {
            padding: 0;
        }

        @media all and (max-width: 1023px) {
            width: 100%;
            padding: 0 20px;
            margin: 0;
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

    .pagination {
        text-align: center;
        list-style: none;

        li {
            display: inline;
            padding: 0 25px;
        }

        .paginate-next-a,
        .paginate-prev-a {
            color: ${({ theme }) => theme.colors.blue};
            margin: 0 0.3rem;

            &:hover {
                color: ${({ theme }) => theme.colors.mediumBlue};
            }
        }

        .break {
            display: none;
        }

        .paginate-active {
            display: none;
        }
    }

    .twitter-tweet-rendered {
        margin: 30px auto !important;
    }

    .utterances-frame {
        position: relative;
    }

    .utterances {
        max-width: 100%;
    }
`;
