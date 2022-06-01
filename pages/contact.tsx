import Head from 'next/head';

const Contact = (): JSX.Element => (
    <div className="contact">
        <Head><title>Contact - Keith Wagner</title></Head>
        <div className="cover contact" />
        <h1>Contact</h1>

        <p>
            If you ever want to get in touch with me, I&apos;m not that hard to get a hold of.
        </p>

        <ul className="contact-list">
            <li><a href="mailto:blog@kpwags.com">blog@kpwags.com</a></li>
            <li><a href="https://twitter.com/kpwags" target="_blank" rel="nofollow noreferrer">Twitter</a></li>
            <li><a href="https://mastodon.social/web/@kpwags" target="_blank" rel="nofollow noreferrer">Mastodon</a></li>
            <li><a href="https://github.com/kpwags" target="_blank" rel="nofollow noreferrer">GitHub</a></li>
        </ul>
    </div>
);

export default Contact;
