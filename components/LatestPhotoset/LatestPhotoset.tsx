import Link from 'next/link';

const LatestPhotoset = (): JSX.Element => (
    <section className="latest-photoset">
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
    </section>
);

export default LatestPhotoset;
