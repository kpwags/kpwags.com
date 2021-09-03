/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';

const Hdr = styled.header`
    height: 60px;
    line-height: 60px;
    padding: 0 10px;
    margin: 0 0 50px 0;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;

    @media all and (max-width: 767px) {
        line-height: 1.5;
        padding: 10px 0;
        height: auto;
        text-align: center;
        margin-bottom: 0;
        display: block;
    }

    div.site-title {
        grid-column-start: 1;
        grid-column-end: 1;
        padding: 0 25px 0 10px;
        font-family: ${({ theme }) => theme.fonts.secondary};
        font-weight: 900;

        a:hover {
            text-decoration: none;
        }

        @media all and (max-width: 767px) {
            padding: 0;
            line-height: 60px;
        }

        :hover {
            animation: shake 2.5s linear forwards;

            @keyframes shake {
                5%,
                15%,
                25%,
                35%,
                55%,
                65%,
                75%,
                95% {
                    filter: blur(0.018em);
                    transform: translateY(0.018em) rotate(0deg);
                }

                10%,
                30%,
                40%,
                50%,
                70%,
                80%,
                90% {
                    filter: blur(0.01em);
                    transform: translateY(-0.018em) rotate(0deg);
                }

                20%,
                60% {
                    filter: blur(0.03em);
                    transform: translate(-0.018em, 0.018em) rotate(0deg);
                }

                45%,
                85% {
                    filter: blur(0.03em);
                    transform: translate(0.018em, -0.018em) rotate(0deg);
                }

                100% {
                    filter: blur(0.007em);
                    transform: translate(0) rotate(-0.5deg);
                }
            }
        }

        span.title {
            font-weight: 400;
            font-size: 1.7rem;
            color: ${({ theme }) => theme.colors.blue};
            letter-spacing: 0.08rem;
            float: left;

            @media all and (max-width: 767px) {
                float: none;
                font-size: 2rem;
                line-height: 60px;
            }
        }
    }

    nav {
        display: block;
        grid-column-start: 2;
        grid-column-end: 2;
        justify-self: end;
        font-family: ${({ theme }) => theme.fonts.primary};

        @media all and (max-width: 1023px) {
            padding-right: 10px;
        }

        @media all and (max-width: 767px) {
            display: block;
            margin-top: 12px;
        }

        a,
        a:visited {
            padding: 0 14px;
            font-size: 1.1rem;
            font-weight: 300;
            color: ${({ theme }) => theme.colors.blue};

            @media all and (max-width: 1024px) {
                padding: 0 10px;
            }

            @media all and (max-width: 767px) {
                font-size: 1rem;
                padding: 0 8px;
            }
        }

        a.hide-on-mobile {
            @media all and (max-width: 767px) {
                display: none;
            }
        }

        a:hover {
            color: ${({ theme }) => theme.colors.mediumBlue};
            text-decoration: none;
        }

        a.extra-right {
            padding-right: 40px;

            @media all and (max-width: 1024px) {
                padding-right: 20px;
            }
        }

        a svg#rss-svg {
            max-height: 1.2rem;
            max-width: 1.2rem;
            vertical-align: middle;
        }

        a svg path {
            fill: ${({ theme }) => theme.colors.blue};
        }

        a:hover svg path {
            fill: ${({ theme }) => theme.colors.mediumBlue};
        }
    }
`;

const Header: React.FC = () => (
    <>
        <Hdr>
            <div className="site-title">
                <span className="title">
                    <a href="/">Keith Wagner</a>
                </span>
            </div>
            <nav>
                <a href="/blog">Blog</a>
                <a href="/photography">Photography</a>
                <a href="/about">About</a>
                <a href="/work">Work</a>
                <a href="/bookshelf" className="hide-on-mobile">
                    Bookshelf
                </a>
                <a href="/uses" className="hide-on-mobile">
                    Uses
                </a>
                <a href="/rss/feed.xml" className="hide-on-mobile">
                    <svg width="64" height="64" id="rss-svg">
                        <g id="layer1">
                            <path d="M 2.0107131,16.898109 C 1.5540872,16.825987 1.1348836,16.620589 0.77645125,16.293388 0.16445459,15.734703 -0.11107842,14.895977 0.05432399,14.095225 0.28724657,12.96756 1.2215711,12.201213 2.3659691,12.199163 c 0.665788,-0.0013 1.1909134,0.209924 1.6581812,0.666669 0.4687559,0.458187 0.7045481,1.022353 0.7055744,1.688186 0.00198,1.273212 -0.9722706,2.295975 -2.2480224,2.359988 -0.1545858,0.0076 -0.3665311,5.47e-4 -0.4709892,-0.01594 z M 7.6929873,16.675552 C 7.6221269,15.71167 7.5272631,15.196303 7.2887378,14.479499 6.4721765,12.025618 4.4159663,10.114024 1.9077793,9.4769783 1.4110725,9.350805 0.91024808,9.2737194 0.3737231,9.2407867 L 0.00172597,9.2180118 V 7.6804679 6.1429272 l 0.43813107,0.023459 C 1.0637711,6.1998039 1.6313005,6.2706189 2.1841049,6.3840397 6.5038412,7.2703638 9.879645,10.767103 10.61451,15.116439 c 0.06856,0.405713 0.116987,0.874786 0.150755,1.459981 l 0.02051,0.355457 H 9.2488027 7.7118283 Z M 13.843899,16.460617 C 13.713717,13.73116 12.971101,11.427563 11.51997,9.251749 9.4752087,6.1858353 6.3001101,4.0606261 2.6966327,3.3459598 1.9962085,3.2070477 1.3339839,3.1307167 0.47292173,3.0896474 L 0.00172597,3.0671761 V 1.5345167 0.00185888 h 0.17819738 c 0.38384922,0 1.38553615,0.0709516 1.88844835,0.13374977 3.8680876,0.48307214 7.3010169,2.18614745 10.0370433,4.97937515 2.608062,2.6625936 4.241875,6.0637402 4.691886,9.7672222 0.06218,0.511616 0.134388,1.526211 0.134388,1.887953 v 0.161657 h -1.532658 -1.532659 z" />
                        </g>
                    </svg>
                </a>
            </nav>
        </Hdr>
    </>
);

export default Header;
