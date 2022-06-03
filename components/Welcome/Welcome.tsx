import Link from 'next/link';
import styled from 'styled-components';

const WelcomeSection = styled.section`
    width: 100%;
    border-radius: 10px;
    background-image: linear-gradient(
        45deg,
        hsl(124deg 95% 32%) 0%,
        hsl(128deg 100% 29%) 11%,
        hsl(131deg 100% 27%) 22%,
        hsl(133deg 100% 26%) 33%,
        hsl(135deg 100% 24%) 44%,
        hsl(137deg 100% 22%) 56%,
        hsl(139deg 100% 20%) 67%,
        hsl(141deg 100% 19%) 78%,
        hsl(142deg 100% 17%) 89%,
        hsl(144deg 100% 15%) 100%
    );
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
            background-color: var(--white-2);
            color: var(--green-1);
            padding: 12px;
            align-items: center;
            text-align: center;
            border-radius: 10px;
            font-size: 1.4rem;
            border: 1px solid var(--white-2);

            @media all and (max-width: 450px) {
                padding: 8px;
                font-size: 1.15rem;
            }

            &:hover {
                background-color: var(--green-3);
                color: var(--white-2);
                border-color: var(--green-1);
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
