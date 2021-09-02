import { useState } from 'react';
import Head from 'next/head';
import PhotosetRow from '@components/PhotosetRow';
import photoset from '@data/photosets/2013-nyc-january';
import { Photoset, PhotosetDescription } from '@lib/PhotosetStyles';
import PhotosetLightbox from '@components/PhotosetLightbox';
import BackToPhotoset from '@components/BackToPhotosets';

const NewYorkCityJanuary2013 = (): JSX.Element => {
    const [photoIndex, setPhotoIndex] = useState<number>(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

    const selectPhoto = (index: number) => {
        setPhotoIndex(index);
        setIsLightboxOpen(true);
    };

    return (
        <>
            <Head><title>New York City (January 2013) - Keith Wagner</title></Head>
            <Photoset>
                <BackToPhotoset />

                <h1>New York City</h1>
                <div className="meta">January 26, 2013</div>

                <PhotosetDescription>
                    <p>
                        Lauren and I started the year going to New York City just after a small snowstorm.
                        Central Park was peaceful and beautiful with a light layer of snow on the ground.
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

export default NewYorkCityJanuary2013;
