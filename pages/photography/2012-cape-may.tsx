import { useState } from 'react';
import Head from 'next/head';
import { SingleRow, DualRow, TripleRow } from '@components/PhotosetRow';
import { CapeMay2012 } from '@data/photosets/2012-cape-may';
import { Photoset, PhotosetDescription } from '@lib/PhotosetStyles';
import PhotosetLightbox from '@components/PhotosetLightbox';
import BackToPhotoset from '@components/BackToPhotosets';

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
            <Photoset>
                <BackToPhotoset />

                <h1>Cape May</h1>
                <div className="meta">April 16 - 17, 2012</div>

                <PhotosetDescription>
                    <p>
                        Lauren and I went to our favorite beach spot in New Jersey. Cape May is a beautiful shore town on the Southern Tip of New Jersey.
                    </p>
                </PhotosetDescription>

                <TripleRow
                    images={[
                        CapeMay2012[0],
                        CapeMay2012[1],
                        CapeMay2012[2],
                    ]}
                    onSelect={selectPhoto}
                />

                <DualRow
                    images={[
                        CapeMay2012[3],
                        CapeMay2012[4],
                    ]}
                    onSelect={selectPhoto}
                />

                <SingleRow
                    images={[
                        CapeMay2012[5],
                    ]}
                    onSelect={selectPhoto}
                />

                <TripleRow
                    images={[
                        CapeMay2012[6],
                        CapeMay2012[7],
                        CapeMay2012[8],
                    ]}
                    onSelect={selectPhoto}
                />

                <SingleRow
                    images={[
                        CapeMay2012[9],
                    ]}
                    onSelect={selectPhoto}
                />

                <SingleRow
                    images={[
                        CapeMay2012[10],
                    ]}
                    onSelect={selectPhoto}
                />

                <DualRow
                    images={[
                        CapeMay2012[11],
                        CapeMay2012[12],
                    ]}
                    onSelect={selectPhoto}
                />

                <SingleRow
                    images={[
                        CapeMay2012[13],
                    ]}
                    onSelect={selectPhoto}
                />

                <TripleRow
                    images={[
                        CapeMay2012[14],
                        CapeMay2012[15],
                        CapeMay2012[16],
                    ]}
                    onSelect={selectPhoto}
                />

                <DualRow
                    images={[
                        CapeMay2012[17],
                        CapeMay2012[18],
                    ]}
                    onSelect={selectPhoto}
                />

                <SingleRow
                    images={[
                        CapeMay2012[19],
                    ]}
                    onSelect={selectPhoto}
                />
            </Photoset>
            <PhotosetLightbox
                photoset={CapeMay2012}
                index={photoIndex}
                visible={isLightboxOpen}
                setIndex={setPhotoIndex}
                setVisible={setIsLightboxOpen}
            />
        </>
    );
};

export default CapeMayApril2012;
