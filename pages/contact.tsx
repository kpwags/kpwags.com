import Head from 'next/head';
import styled from 'styled-components';

const ContactList = styled.ul`
    text-align: center;
    font-size: 1.3rem;

    @media all and (max-width: 450px) {
        font-size: 1rem;
    }

    li {
        display: inline;
        padding: 0 1.25rem;

        @media all and (max-width: 450px) {
            display: block;
            padding: 0.5rem 0;
        }
    }
`;

const Contact = (): JSX.Element => (
    <div className="contact">
        <Head><title>Contact - Keith Wagner</title></Head>
        <h1>Contact</h1>

        <p>
            If you ever want to get in touch with me, I&apos;m not that hard to get a hold of.
        </p>

        <ContactList>
            <li><a href="https://twitter.com/kpwags" target="_blank" rel="nofollow noreferrer">Twitter</a></li>
            <li><a href="https://mastodon.social/web/@kpwags" target="_blank" rel="nofollow noreferrer">Mastodon</a></li>
            <li><a href="https://github.com/kpwags" target="_blank" rel="nofollow noreferrer">GitHub</a></li>
        </ContactList>
    </div>
);

export default Contact;
