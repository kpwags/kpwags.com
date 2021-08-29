import { useState } from 'react';
import Head from 'next/head';
import { SingleRow, DualRow } from '@components/PhotosetRow';
import { NYCJanuary2012 } from '@data/photosets/2012-nyc-january';
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

                <SingleRow
                    images={[
                        NYCJanuary2012[0],
                    ]}
                    onSelect={selectPhoto}
                />

                <DualRow
                    images={[
                        NYCJanuary2012[1],
                        NYCJanuary2012[2],
                    ]}
                    onSelect={selectPhoto}
                />

                <SingleRow
                    images={[
                        NYCJanuary2012[3],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotosetDescription>
                    <p>
                        On Saturday, Lauren and I walked around Central Park. We ended up finding some rather brave squirrels.
                    </p>
                </PhotosetDescription>

                <DualRow
                    images={[
                        NYCJanuary2012[4],
                        NYCJanuary2012[5],
                    ]}
                    onSelect={selectPhoto}
                />

                <SingleRow
                    images={[
                        NYCJanuary2012[6],
                    ]}
                    onSelect={selectPhoto}
                />

                <DualRow
                    images={[
                        NYCJanuary2012[7],
                        NYCJanuary2012[8],
                    ]}
                    onSelect={selectPhoto}
                />

                <SingleRow
                    images={[
                        NYCJanuary2012[9],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotosetDescription>
                    <p>
                        We ended up going back to the park opposite Manhattan Sunday morning since it was a little nicer out. It was cold, but the blue
                        sky made it worth it.
                    </p>
                </PhotosetDescription>

                <SingleRow
                    images={[
                        NYCJanuary2012[10],
                    ]}
                    onSelect={selectPhoto}
                />

                <DualRow
                    images={[
                        NYCJanuary2012[11],
                        NYCJanuary2012[12],
                    ]}
                    onSelect={selectPhoto}
                />

                <SingleRow
                    images={[
                        NYCJanuary2012[13],
                    ]}
                    onSelect={selectPhoto}
                />

                <SingleRow
                    images={[
                        NYCJanuary2012[14],
                    ]}
                    onSelect={selectPhoto}
                />

                <DualRow
                    images={[
                        NYCJanuary2012[15],
                        NYCJanuary2012[16],
                    ]}
                    onSelect={selectPhoto}
                />
            </Photoset>
            <PhotosetLightbox
                photoset={NYCJanuary2012}
                index={photoIndex}
                visible={isLightboxOpen}
                setIndex={setPhotoIndex}
                setVisible={setIsLightboxOpen}
            />
        </>
    );
};

export default NewYorkCityJanuary2012;
