import { useState } from 'react';
import Head from 'next/head';
import PhotoRow from '@components/PhotosetRow';
import photoset from '@data/photosets/2012-cape-may';
import PhotosetLightbox from '@components/PhotosetLightbox';
import BackToPhotoset from '@components/BackToPhotosets';

import styles from '@css/Photoset.module.css';

const CapeMayApril2012 = (): JSX.Element => {
    const [photoIndex, setPhotoIndex] = useState<number>(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

    const selectPhoto = (index: number) => {
        setPhotoIndex(index);
        setIsLightboxOpen(true);
    };

    return (
        <>
            <Head><title>Cape May (2012) - Keith Wagner</title></Head>
            <main className={styles.photoset}>
                <BackToPhotoset />

                <h1>Cape May</h1>
                <div className={styles.meta}>April 16 - 17, 2012</div>

                <div className={styles.description}>
                    <p>
                        Lauren and I went to our favorite beach spot in New Jersey. Cape May is a beautiful shore town on the Southern Tip of New Jersey.
                    </p>
                </div>

                <PhotoRow
                    images={[
                        photoset[0],
                        photoset[1],
                        photoset[2],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotoRow
                    images={[
                        photoset[3],
                        photoset[4],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotoRow
                    images={[
                        photoset[5],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotoRow
                    images={[
                        photoset[6],
                        photoset[7],
                        photoset[8],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotoRow
                    images={[
                        photoset[9],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotoRow
                    images={[
                        photoset[10],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotoRow
                    images={[
                        photoset[11],
                        photoset[12],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotoRow
                    images={[
                        photoset[13],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotoRow
                    images={[
                        photoset[14],
                        photoset[15],
                        photoset[16],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotoRow
                    images={[
                        photoset[17],
                        photoset[18],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotoRow
                    images={[
                        photoset[19],
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

export default CapeMayApril2012;
