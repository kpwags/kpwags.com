import { useState } from 'react';
import Head from 'next/head';
import { SingleRow, DualRow, TripleRow } from '@components/PhotosetRow';
import { NYCFebruary2012 } from '@data/photosets/2012-nyc-february';
import { Photoset, PhotosetDescription } from '@lib/PhotosetStyles';
import PhotosetLightbox from '@components/PhotosetLightbox';
import BackToPhotoset from '@components/BackToPhotosets';

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
            <Photoset>
                <BackToPhotoset />

                <h1>New York City</h1>
                <div className="meta">February 24 - 25, 2012</div>

                <PhotosetDescription>
                    <p>
                        Lauren and I ended up going to New York City with my good friend LJ and his now-wife Emily. We did some touristy things by
                        visiting Central Park, the Empire State Building and Rockafeller Plaza.
                    </p>
                </PhotosetDescription>

                <DualRow
                    images={[
                        NYCFebruary2012[0],
                        NYCFebruary2012[1],
                    ]}
                    onSelect={selectPhoto}
                />

                <DualRow
                    images={[
                        NYCFebruary2012[2],
                        NYCFebruary2012[3],
                    ]}
                    onSelect={selectPhoto}
                />

                <SingleRow
                    images={[
                        NYCFebruary2012[4],
                    ]}
                    onSelect={selectPhoto}
                />

                <DualRow
                    images={[
                        NYCFebruary2012[5],
                        NYCFebruary2012[6],
                    ]}
                    onSelect={selectPhoto}
                />

                <SingleRow
                    images={[
                        NYCFebruary2012[7],
                    ]}
                    onSelect={selectPhoto}
                />

                <DualRow
                    images={[
                        NYCFebruary2012[8],
                        NYCFebruary2012[9],
                    ]}
                    onSelect={selectPhoto}
                />

                <DualRow
                    images={[
                        NYCFebruary2012[10],
                        NYCFebruary2012[11],
                    ]}
                    onSelect={selectPhoto}
                />

                <DualRow
                    images={[
                        NYCFebruary2012[12],
                        NYCFebruary2012[13],
                    ]}
                    onSelect={selectPhoto}
                />

                <SingleRow
                    images={[
                        NYCFebruary2012[14],
                    ]}
                    onSelect={selectPhoto}
                />

                <TripleRow
                    images={[
                        NYCFebruary2012[15],
                        NYCFebruary2012[16],
                        NYCFebruary2012[17],
                    ]}
                    onSelect={selectPhoto}
                />

                <SingleRow
                    images={[
                        NYCFebruary2012[18],
                    ]}
                    onSelect={selectPhoto}
                />

                <DualRow
                    images={[
                        NYCFebruary2012[19],
                        NYCFebruary2012[20],
                    ]}
                    onSelect={selectPhoto}
                />

                <SingleRow
                    images={[
                        NYCFebruary2012[21],
                    ]}
                    onSelect={selectPhoto}
                />
            </Photoset>
            <PhotosetLightbox
                photoset={NYCFebruary2012}
                index={photoIndex}
                visible={isLightboxOpen}
                setIndex={setPhotoIndex}
                setVisible={setIsLightboxOpen}
            />
        </>
    );
};

export default NewYorkCityJanuary2012;
