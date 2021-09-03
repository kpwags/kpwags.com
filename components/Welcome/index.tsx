import React from 'react';
import styled from 'styled-components';

const Hello = styled.div`
    margin: 40px 0 50px;

    .content {
        img {
            float: right;
            margin: 0 0 40px 75px;
            transition: transform 1.2s ease-in-out;
            filter: drop-shadow(2px 4px 8px #585858);

            :hover {
                transform: rotate(360deg);
            }
        }

        padding: 15px;

        .welcome-text {
            font-family: ${({ theme }) => theme.fonts.serif};
            font-size: 2rem;
            line-height: 3.5rem;
            margin-top: 25px;
            color: ${({ theme }) => theme.colors.blue};
        }
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
