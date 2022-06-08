import Link from 'next/link';
import styled from 'styled-components';

const WelcomeSection = styled.section`
    width: 100%;
    border-radius: 10px;
    background-image: var(--green-gradient);
    padding: 40px 25px;
    margin: 3rem 0;
    color: var(--white-1);
    font-size: 2rem;

    div.content {
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-rows: 1fr;
        grid-column-gap: 50px;
        grid-row-gap: 0px;
        align-items: center;

        img {
            transition: transform 1.2s ease-in-out;

            &:hover {
                transform: rotate(360deg);
            }

            @media all and (max-width: 809px) {
                margin-bottom: 2rem;
            }
        }

        @media all and (max-width: 809px) {
            display: block;
            font-size: 1.5rem;
        }
    }

    div.buttons {
        margin-top: 3rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        grid-column-gap: 15px;
        grid-row-gap: 15px;

        a {
            display:block;
            background-color: var(--welcome-button-bg);
            color: var(--welcome-button-text);
            padding: 12px;
            align-items: center;
            text-align: center;
            border-radius: 10px;
            font-size: 1.4rem;
            border: 1px solid var(--welcome-button-border);

            @media all and (max-width: 450px) {
                padding: 8px;
                font-size: 1.15rem;
            }

            &:hover {
                background-color: var(--welcome-button-hover-bg);
                color: var(--welcome-button-hover-text);
                border-color: var(--welcome-button-hover-border);
                text-decoration: none;
            }
        }
    }
`;

const Welcome = (): JSX.Element => (
    <WelcomeSection>
        <div className="content">
            <img src="/images/keith.png" alt="Keith Wagner" />
            <div>Hi! I&apos;m Keith Wagner, a software developer in the Philadelphia area. I am always learning and building new things.</div>
        </div>
        <div className="buttons">
            <Link href="/work"><a>Work</a></Link>
            <Link href="/uses"><a>Uses</a></Link>
            <Link href="/contact"><a>Contact</a></Link>
            <Link href="/current"><a>What I&apos;m Up To</a></Link>
            <Link href="/bookshelf"><a>Bookshelf</a></Link>
            <Link href="/likes"><a>Likes</a></Link>
        </div>
    </WelcomeSection>
);

export default Welcome;
