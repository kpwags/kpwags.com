import { useState } from 'react';
import Head from 'next/head';
import PhotosetRow from '@components/PhotosetRow';
import photoset from '@data/photosets/2013-nyc-april';
import { Photoset, PhotosetDescription } from '@lib/PhotosetStyles';
import PhotosetLightbox from '@components/PhotosetLightbox';
import BackToPhotoset from '@components/BackToPhotosets';

const NewYorkCityApril2013 = (): JSX.Element => {
    const [photoIndex, setPhotoIndex] = useState<number>(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

    const selectPhoto = (index: number) => {
        setPhotoIndex(index);
        setIsLightboxOpen(true);
    };

    return (
        <>
            <Head><title>New York City (April 2013) - Keith Wagner</title></Head>
            <Photoset>
                <BackToPhotoset />

                <h1>New York City</h1>
                <div className="meta">April 13 - 14, 2013</div>

                <PhotosetDescription>
                    <p>
                        Lauren and I were finally able to get to New York City in nicer, spring-time weather. We ended
                        up walking across the Brooklyn Bridge and wandering around Central Park.
                    </p>
                </PhotosetDescription>

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
                        photoset[8],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotosetRow
                    images={[
                        photoset[9],
                        photoset[10],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotosetRow
                    images={[
                        photoset[11],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotosetRow
                    images={[
                        photoset[12],
                        photoset[13],
                        photoset[14],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotosetRow
                    images={[
                        photoset[15],
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

export default NewYorkCityApril2013;
