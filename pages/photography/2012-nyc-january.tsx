import { useState } from 'react';
import Head from 'next/head';
import PhotoRow from '@components/PhotosetRow';
import photoset from '@data/photosets/2012-nyc-january';
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
            <Head><title>New York City (January 2012) - Keith Wagner</title></Head>
            <Photoset>
                <BackToPhotoset />

                <h1>New York City</h1>
                <div className="meta">January 13 - 15, 2012</div>

                <PhotosetDescription>
                    <p>
                        Lauren and I found a Groupon or LivingSocial deal to a hotel just over the Queensboro bridge so we decided to stay in Queens for
                        a long weekend. One benefit of staying there is that we found a great view over the East River in Long Island City of the Manhattan
                        skyline.
                    </p>
                </PhotosetDescription>

                <PhotoRow
                    images={[
                        photoset[0],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotoRow
                    images={[
                        photoset[1],
                        photoset[2],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotoRow
                    images={[
                        photoset[3],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotosetDescription>
                    <p>
                        On Saturday, Lauren and I walked around Central Park. We ended up finding some rather brave squirrels.
                    </p>
                </PhotosetDescription>

                <PhotoRow
                    images={[
                        photoset[4],
                        photoset[5],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotoRow
                    images={[
                        photoset[6],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotoRow
                    images={[
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

                <PhotosetDescription>
                    <p>
                        We ended up going back to the park opposite Manhattan Sunday morning since it was a little nicer out. It was cold, but the blue
                        sky made it worth it.
                    </p>
                </PhotosetDescription>

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
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotoRow
                    images={[
                        photoset[15],
                        photoset[16],
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

export default NewYorkCityJanuary2012;
