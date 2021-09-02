import { useState } from 'react';
import Head from 'next/head';
import PhotosetRow from '@components/PhotosetRow';
import photoset from '@data/photosets/2014-nyc';
import { Photoset, PhotosetDescription } from '@lib/PhotosetStyles';
import PhotosetLightbox from '@components/PhotosetLightbox';
import BackToPhotoset from '@components/BackToPhotosets';

const NewYorkCityApril2014 = (): JSX.Element => {
    const [photoIndex, setPhotoIndex] = useState<number>(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

    const selectPhoto = (index: number) => {
        setPhotoIndex(index);
        setIsLightboxOpen(true);
    };

    return (
        <>
            <Head><title>New York City (April 2014) - Keith Wagner</title></Head>
            <Photoset>
                <BackToPhotoset />

                <h1>New York City</h1>
                <div className="meta">April 24 - 27, 2013</div>

                <PhotosetDescription>
                    <p>
                        After a few rough weeks at work for both Lauren and I, we decided it would be a good idea for us to take a little mini-vacation.
                        So we decided to take a nice 5 day weekend to New York City.  The weather was absolutely gorgeous as we walked around the city visiting
                        the Brooklyn Bridge and various places in Manhattan.
                        We even ventured into Brooklyn to view the Brooklyn Bridge from a different angle.
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
                        photoset[7],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotosetRow
                    images={[
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

                <PhotosetRow
                    images={[
                        photoset[10],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotosetRow
                    images={[
                        photoset[11],
                        photoset[12],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotosetRow
                    images={[
                        photoset[13],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotosetRow
                    images={[
                        photoset[14],
                        photoset[15],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotosetRow
                    images={[
                        photoset[16],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotosetRow
                    images={[
                        photoset[17],
                        photoset[18],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotosetRow
                    images={[
                        photoset[19],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotosetRow
                    images={[
                        photoset[20],
                        photoset[21],
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

export default NewYorkCityApril2014;
