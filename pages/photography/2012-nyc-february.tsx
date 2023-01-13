import { useState } from 'react';
import Head from 'next/head';
import PhotoRow from '@components/PhotosetRow';
import photoset from '@data/photosets/2012-nyc-february';
import PhotosetLightbox from '@components/PhotosetLightbox';
import BackToPhotoset from '@components/BackToPhotosets';

import styles from '@css/Photoset.module.css';

const NewYorkCityJanuary2012 = (): JSX.Element => {
    const [photoIndex, setPhotoIndex] = useState<number>(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

    const selectPhoto = (index: number) => {
        setPhotoIndex(index);
        setIsLightboxOpen(true);
    };

    return (
        <>
            <Head><title>New York City (February 2012) - Keith Wagner</title></Head>
            <main className={styles.photoset}>
                <BackToPhotoset />

                <h1>New York City</h1>
                <div className={styles.meta}>February 24 - 25, 2012</div>

                <div className={styles.description}>
                    <p>
                        Lauren and I ended up going to New York City with my good friend LJ and his now-wife Emily. We did some touristy things by
                        visiting Central Park, the Empire State Building and Rockafeller Plaza.
                    </p>
                </div>

                <PhotoRow
                    images={[
                        photoset[0],
                        photoset[1],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotoRow
                    images={[
                        photoset[2],
                        photoset[3],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotoRow
                    images={[
                        photoset[4],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotoRow
                    images={[
                        photoset[5],
                        photoset[6],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotoRow
                    images={[
                        photoset[7],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotoRow
                    images={[
                        photoset[8],
                        photoset[9],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotoRow
                    images={[
                        photoset[10],
                        photoset[11],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotoRow
                    images={[
                        photoset[12],
                        photoset[13],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotoRow
                    images={[
                        photoset[14],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotoRow
                    images={[
                        photoset[15],
                        photoset[16],
                        photoset[17],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotoRow
                    images={[
                        photoset[18],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotoRow
                    images={[
                        photoset[19],
                        photoset[20],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotoRow
                    images={[
                        photoset[21],
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

export default NewYorkCityJanuary2012;
