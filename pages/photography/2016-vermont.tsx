import { useState } from 'react';
import Head from 'next/head';
import PhotosetRow from '@components/PhotosetRow';
import photoset from '@data/photosets/2016-vermont';
import { Photoset, PhotosetDescription } from '@lib/PhotosetStyles';
import PhotosetLightbox from '@components/PhotosetLightbox';
import BackToPhotoset from '@components/BackToPhotosets';

const Vermont2016 = (): JSX.Element => {
    const [photoIndex, setPhotoIndex] = useState<number>(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

    const selectPhoto = (index: number) => {
        setPhotoIndex(index);
        setIsLightboxOpen(true);
    };

    return (
        <>
            <Head><title>Vermont (October 2016) - Keith Wagner</title></Head>
            <Photoset>
                <BackToPhotoset />

                <h1>Vermont</h1>
                <div className="meta">October 6 - 12, 2016</div>

                <PhotosetDescription>
                    <p>
                        To celebrate our 3 year anniversary, Lauren and I went up to Wilmington Vermont to enjoy the fall colors. New England didn&apos;t disappoint.
                        It was absolutely gorgeous up there with the mountains, changing leaves, and peaceful views.
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
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotosetDescription>
                    <p>
                        We ended up staying at a cute AirBnB right in the center of town. Behind the apartment was a stream which gave us a
                        great place to sit and enjoy a nice cup of coffee in the morning.
                    </p>
                </PhotosetDescription>

                <PhotosetRow
                    images={[
                        photoset[3],
                        photoset[4],
                        photoset[5],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotosetDescription>
                    <p>
                        Wilmington was a cute litte town with a few restaurants and little shops. There wasn&apos;t much to it, but that&apos;s what I
                        loved about it. It was quiet, it was peaceful and was definitely a town that sort of shouted &quot;New England&quot; at you (in a good way).
                    </p>
                </PhotosetDescription>

                <PhotosetRow
                    images={[
                        photoset[6],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotosetDescription>
                    <p>The little river that ran through town provided for some great shots.</p>
                    <p>
                        We spent the first full day in Vermont driving around looking for places to stop for pictures.
                        There were so many great spots for pictures, and the ones I took don&apos;t give the beauty its true justice.
                    </p>
                </PhotosetDescription>

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

                <PhotosetDescription>
                    <p>
                        We were even able to find some trails back into the woods. Not much was there in the short distances we hiked,
                        but the colors and the paths provided for some good shots.
                    </p>
                </PhotosetDescription>

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
                        photoset[16],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotosetRow
                    images={[
                        photoset[17],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotosetRow
                    images={[
                        photoset[18],
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

                <PhotosetDescription>
                    <p>
                        On October 8th, we went over to Concord, New Hampshire to meet up with some of Lauren&apos;s best friends.
                        On the way over to New Hampshire, we found a gorgeous overlook. The weather wasn&apos;t the greatest, but the colors were fantastic.
                    </p>
                </PhotosetDescription>

                <PhotosetRow
                    images={[
                        photoset[22],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotosetRow
                    images={[
                        photoset[23],
                        photoset[24],
                        photoset[25],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotosetDescription>
                    <p>
                        Concord seemed like a nice little town. We weren&apos;t there long, but it did have a nice main street and what I think
                        were the grounds for New Hampshire&apos;s State House.
                    </p>
                </PhotosetDescription>

                <PhotosetRow
                    images={[
                        photoset[26],
                        photoset[27],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotosetDescription>
                    <p>
                        Since it was cloudy again the next day, we decided to head over to Bennington, Vermont to check out a little
                        brewpub (Madison Brewing Co.). The center of Bennington reminded me of Phoenixville by me with its main street
                        and little shops and restaurants.
                    </p>
                </PhotosetDescription>

                <PhotosetRow
                    images={[
                        photoset[28],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotosetDescription>
                    <p>
                        The weather cleared up on the 10th so we again went out exploring.
                        There was a little parking lot by the river so we decided to see what was there.
                    </p>
                </PhotosetDescription>

                <PhotosetRow
                    images={[
                        photoset[29],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotosetRow
                    images={[
                        photoset[30],
                        photoset[31],
                        photoset[32],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotosetRow
                    images={[
                        photoset[33],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotosetDescription>
                    <p>We were also able to find our way to the little park on the other side of the reservoir.</p>
                </PhotosetDescription>

                <PhotosetRow
                    images={[
                        photoset[34],
                        photoset[35],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotosetRow
                    images={[
                        photoset[36],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotosetRow
                    images={[
                        photoset[37],
                        photoset[38],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotosetDescription>
                    <p>Since the skies had cleared up, we decided to head back up to the overlook we came upon on the way to New Hampshire.</p>
                </PhotosetDescription>

                <PhotosetRow
                    images={[
                        photoset[39],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotosetRow
                    images={[
                        photoset[40],
                        photoset[41],
                        photoset[42],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotosetRow
                    images={[
                        photoset[43],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotosetDescription>
                    <p>
                        The trip was a lot of fun and we were able to see plenty of amazing views and colors.
                        I&apos;d highly recommend checking out New England in the fall.
                        I&apos;d also suggest Wilmington, Bennington, &amp; Brattleboro Vermont as towns to check out.
                    </p>
                </PhotosetDescription>
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

export default Vermont2016;
