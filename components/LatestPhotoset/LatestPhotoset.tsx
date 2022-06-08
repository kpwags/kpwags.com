import Link from 'next/link';
import styled from 'styled-components';

const LatestPhotosetSection = styled.section`
    margin: 5rem 0;

    div.heading {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;

        div.link {
            text-align: right;

            @media all and (max-width: 450px) {
                display: none;
            }
        }

        @media all and (max-width: 450px) {
            display: block;
        }
    }

    div.mobile-link {
        text-align: center;
        display: none;
        font-size: 1.2rem;
        margin: 15px 0 0;

        @media all and (max-width: 450px) {
            display: block;
        }
    }

    h2 {
        margin-bottom: 12px;
    }

    div.photoset {
        border-radius: 10px;
        background-image: var(--grey-gradient);
        display: grid;
        grid-template-columns: 2fr 3fr;
        grid-template-rows: 1fr;
        grid-column-gap: 25px;
        grid-row-gap: 0px;

        @media all and (max-width: 450px) {
            display: block;
        }

        div.image {
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            min-width: 100%;
            min-height: 100%;
            object-fit: cover;
            background-position: 50% 50%;

            @media all and (max-width: 450px) {
                min-height: 300px;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
                border-bottom-left-radius: 0;
            }
        }

        div.content {
            padding: 20px 20px 20px 0;

            @media all and (max-width: 450px) {
                padding: 12px;
            }

            h3 {
                font-size: 1.6rem;
                margin-bottom: 1rem;
            }

            p {
                font-size: 1.2rem;
                margin-bottom: 1rem;
            }
        }
    }
`;

const LatestPhotoset = (): JSX.Element => (
    <LatestPhotosetSection>
        <div className="heading">
            <h2>Latest Photoset</h2>
            <div className="link">
                <Link href="/photography"><a>View More</a></Link>
            </div>
        </div>
        <div className="photoset">
            <div className="image" style={{ backgroundImage: "url('/photography/thumbnails/2016-vermont.jpg')" }} />
            <div className="content">
                <h3>
                    <Link href="/photography/2016-vermont">
                        <a>Vermont</a>
                    </Link>
                </h3>
                <p>
                    To celebrate our 3 year anniversary, Lauren and I went up to Wilmington Vermont
                    to enjoy the fall colors.
                </p>
                <p>
                    <Link href="/photography/2016-vermont"><a>View Photos</a></Link>
                </p>
            </div>
        </div>
        <div className="mobile-link">
            <Link href="/photography"><a>View More</a></Link>
        </div>
    </LatestPhotosetSection>
);

export default LatestPhotoset;
