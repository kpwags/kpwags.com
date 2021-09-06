import styled from 'styled-components';

const ContactList = styled.ul`
    text-align: center;
    margin: 0;
    padding: 0;

    li {
        display: inline;
        list-style-type: none;
        padding: 0 20px;
    }
`;

const Contact = (): JSX.Element => (
    <main>
        <h1>Contact</h1>

        <p>
            If you ever want to get in touch with me, I&apos;m not that hard to get a hold of.
        </p>

        <ContactList>
            <li><a href="mailto:blog@kpwags.com">blog@kpwags.com</a></li>
            <li><a href="https://twitter.com/kpwags" target="_blank" rel="nofollow noreferrer">Twitter</a></li>
            <li><a href="https://github.com/kpwags" target="_blank" rel="nofollow noreferrer">GitHub</a></li>
        </ContactList>
    </main>
);

export default Contact;
