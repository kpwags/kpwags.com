import React from 'react';
import styled from 'styled-components';

const Hello = styled.div`
    @font-face {
        font-family: 'Special Elite';
        src: url('/fonts/special_elite/SpecialElite-Regular.ttf') format('truetype');
        font-weight: 400;
        font-display: swap;
    }

    margin: 40px 0 50px;

    .content {
        img {
            float: right;
            margin: 0 0 40px 75px;
            transition: transform 1.2s ease-in-out;

            :hover {
                transform: rotate(360deg);
            }
        }

        padding: 15px;

        .welcome-text {
            font-family: 'Special Elite';
            font-size: 2rem;
            line-height: 4rem;
            margin-top: 25px;
            color: ${({ theme }) => theme.colors.blue};
        }
    }

    .clear {
        clear: both;
    }
`;

const Welcome: React.FC = () => (
    <Hello>
        <div className="content">
            <img src="/images/keith.png" alt="Keith Wagner" />
            <div className="welcome-text">
                I&apos;m Keith Wagner, a software developer in the Philadelphia area. I am always learning and building new things.
            </div>
        </div>
        <div className="clear" />
    </Hello>
);

export default Welcome;
