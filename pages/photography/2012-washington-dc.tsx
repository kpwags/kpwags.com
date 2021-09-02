import { useState } from 'react';
import Head from 'next/head';
import PhotosetRow from '@components/PhotosetRow';
import photoset from '@data/photosets/2012-washington-dc';
import { Photoset, PhotosetDescription } from '@lib/PhotosetStyles';
import PhotosetLightbox from '@components/PhotosetLightbox';
import BackToPhotoset from '@components/BackToPhotosets';

const WashingtonDC2012 = (): JSX.Element => {
    const [photoIndex, setPhotoIndex] = useState<number>(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

    const selectPhoto = (index: number) => {
        setPhotoIndex(index);
        setIsLightboxOpen(true);
    };

    return (
        <>
            <Head><title>Washington D.C. (September 2012) - Keith Wagner</title></Head>
            <Photoset>
                <BackToPhotoset />

                <h1>Washington D.C.</h1>
                <div className="meta">September 28 - 30, 2012</div>

                <PhotosetDescription>
                    <p>
                        For my birthday, Lauren took me to Washington D.C. to primarily see the Space Shuttle <em>Discovery</em>, but we wandered around the National Mall as well.
                    </p>
                </PhotosetDescription>

                <PhotosetRow
                    images={[
                        photoset[0],
                        photoset[1],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotosetRow
                    images={[
                        photoset[2],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotosetRow
                    images={[
                        photoset[3],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotosetRow
                    images={[
                        photoset[4],
                        photoset[5],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotosetRow
                    images={[
                        photoset[6],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotosetRow
                    images={[
                        photoset[7],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotosetRow
                    images={[
                        photoset[8],
                        photoset[9],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotosetRow
                    images={[
                        photoset[10],
                        photoset[11],
                    ]}
                    onSelect={selectPhoto}
                />
            </Photoset>
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

export default WashingtonDC2012;
