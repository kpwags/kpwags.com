import styled from 'styled-components';

const WelcomeSection = styled.section`
    width: 100%;
    padding: 40px 25px;
    margin: 3rem 0;
    color: var(--text);
    font-size: 2rem;

    div.content {
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-rows: 1fr;
        grid-column-gap: 50px;
        grid-row-gap: 0px;
        align-items: center;

        div.hello {
            padding: 10px;

            img {
                transition: transform 1.2s ease-in-out;
                filter: drop-shadow(3px 3px 0 var(--primary-color-1))
                        drop-shadow(-3px 3px 0 var(--primary-color-1))
                        drop-shadow(3px -3px 0 var(--primary-color-1))
                        drop-shadow(-3px -3px 0 var(--primary-color-1));

                &:hover {
                    transform: rotate(360deg);
                }

                @media all and (max-width: 809px) {
                    margin-bottom: 2rem;
                }
            }
        }

        @media all and (max-width: 809px) {
            display: block;
            font-size: 1.5rem;
        }
    }
`;

const Welcome = (): JSX.Element => (
    <WelcomeSection>
        <div className="content">
            <div className="hello">
                <img src="/images/keith.png" alt="Keith Wagner" />
            </div>
            <div>Hi! I&apos;m Keith Wagner, a software developer in the Philadelphia area. I am always learning and building new things.</div>
        </div>
    </WelcomeSection>
);

export default Welcome;
