import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const Photoset = styled.div`
    margin: 40px 0;

    h2 {
        margin-bottom: 30px;
        font-size: 2.2rem;
    }

    h3 {
        color: ${({ theme }) => theme.colors.blue};
        font-size: 1.6rem;
        font-weight: 500;
        margin: 10px 0 20px 0;
    }

    .image {
        div {
            box-shadow: 0 12px 12px 0 hsla(0, 0%, 0%, 0.2);
        }
    }

    p {
        margin-top: 25px;

        a {
            font-weight: normal;
        }
    }
`;

const LatestPhotoset = (): JSX.Element => (
    <Photoset>
        <h2>Latest Photoset</h2>
        <div>
            <h3>
                <Link href="/photography/2016-vermont">
                    <a>Vermont</a>
                </Link>
            </h3>
            <div className="image">
                <Image
                    src="/photography/thumbnails/2016-vermont.jpg"
                    alt="My trip to Vermont in October 2016"
                    width={800}
                    height={533}
                />
            </div>
            <p>
                To celebrate our 3 year anniversary, Lauren and I went up to Wilmington Vermont
                to enjoy the fall colors.<br />
                <Link href="/photography/2016-vermont"><a>View Photos</a></Link>
            </p>
        </div>
    </Photoset>
);

export default LatestPhotoset;
