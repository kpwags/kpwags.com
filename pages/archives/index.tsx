import { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { Archives } from '@models/archives';

import styles from '@css/Archives.module.css';
import { getArchivesList } from '@lib/posts';

export const getStaticProps: GetStaticProps = async () => {
    const posts = getArchivesList();

    return {
        props: {
            archives: posts,
        },
    };
};

interface ArchiveProps {
    archives: Archives[];
}

const ArchivesPage = ({ archives }: ArchiveProps): JSX.Element => (
    <>
        <Head><title>Archives - Keith Wagner</title></Head>
        <main>
            <h1>Archives</h1>

            {archives.map((a) => (
                <Fragment key={a.year}>
                    <h2><Link href={`/archives/${a.year}`}>{a.year}</Link></h2>

                    <ul className={styles.archivesList}>
                        {a.items.map((item) => (
                            <li key={item.url}><Link href={item.url}>{item.monthYear}</Link></li>
                        ))}
                    </ul>
                </Fragment>
            ))}
        </main>
    </>
);

export default ArchivesPage;
