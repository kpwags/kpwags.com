import Link from 'next/link';

const Welcome = (): JSX.Element => (
    <section className="welcome">
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
    </section>
);

export default Welcome;
