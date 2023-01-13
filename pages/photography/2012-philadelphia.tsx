import { useState } from 'react';
import Head from 'next/head';
import PhotosetRow from '@components/PhotosetRow';
import photoset from '@data/photosets/2012-philadelphia';
import PhotosetLightbox from '@components/PhotosetLightbox';
import BackToPhotoset from '@components/BackToPhotosets';

import styles from '@css/Photoset.module.css';

const Philadelphia2012 = (): JSX.Element => {
    const [photoIndex, setPhotoIndex] = useState<number>(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

    const selectPhoto = (index: number) => {
        setPhotoIndex(index);
        setIsLightboxOpen(true);
    };

    return (
        <>
            <Head><title>Philadelphia (June 2012) - Keith Wagner</title></Head>
            <main className={styles.photoset}>
                <BackToPhotoset />

                <h1>Philadelphia</h1>
                <div className={styles.meta}>June 16, 2012</div>

                <div className={styles.description}>
                    <p>
                        It was a beautiful day, so Lauren and I wandered into Philadelphia and walked around.
                    </p>
                </div>

                <PhotosetRow
                    images={[
                        photoset[0],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotosetRow
                    images={[
                        photoset[1],
                        photoset[2],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotosetRow
                    images={[
                        photoset[3],
                        photoset[4],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotosetRow
                    images={[
                        photoset[5],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotosetRow
                    images={[
                        photoset[6],
                        photoset[7],
                        photoset[8],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotosetRow
                    images={[
                        photoset[9],
                    ]}
                    onSelect={selectPhoto}
                />
            </main>
            <PhotosetLightbox
                photoset={photoset}
                index={photoIndex}
                visible={isLightboxOpen}
                setIndex={setPhotoIndex}
                setVisible={setIsLightboxOpen}
            />
        </>
    );
};

export default Philadelphia2012;
