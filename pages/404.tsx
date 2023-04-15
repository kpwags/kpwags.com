import Link from 'next/link';

const NotFoundPage = (): JSX.Element => (
    <main>
        <h1>Uh Oh...</h1>
        <p>Looks like the page you&apos;re looking for was not found.</p>
        <p><Link href="/">Back to Home</Link></p>
    </main>
);

export default NotFoundPage;
