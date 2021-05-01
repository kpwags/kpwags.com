/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin: 40px 0;

    .content {
        display: grid;
        grid-template-columns: 1fr 3fr;
        grid-template-rows: 1fr;
        gap: 0px 75px;
        grid-template-areas: '. .';

        img {
            transition: transform 1.2s ease-in-out;
            filter: drop-shadow(2px 4px 8px #585858);

            :hover {
                transform: rotate(360deg);
            }
        }

        p {
            margin-block-start: 0;
            font-size: 1.15rem;
        }
    }
`;

const About: React.FC = () => (
    <main>
        <h1>About Me</h1>
        <Container>
            <div className="content">
                <div>
                    <img src="/images/keith.png" alt="Keith Wagner" />
                </div>
                <div>
                    <p>
                        My name is Keith, I’m a 30-something year old web developer living in the suburbs of Philadelphia, Pennsylvania. I graduated
                        from Drexel University in 2007 with my Bachelor’s Degree in Computer Science and have since spent my career working on both
                        front-end and back-end development. I am fortunate to have found a career where I can do what I love doing. Seeing websites
                        and applications come to life is such an awesome thing, even more so when you’re the one building them.
                    </p>
                    <p>
                        I have a wide variety of interests which always keeps me busy. Some of them include: software development, photography,
                        writing, hockey, running, cooking, drawing, video games, and more. In reality, it&apos;s too much to constantly keep up with,
                        but I stumble through.
                    </p>
                </div>
            </div>
        </Container>
    </main>
);

export default About;
