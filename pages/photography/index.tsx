import Head from 'next/head';
import LargePhotosetLink from '@components/LargePhotosetLink';
import PhotosetListLinks from '@components/PhotosetListLinks';

const PhotographyHome = (): JSX.Element => (
    <>
        <Head><title>Photography - Keith Wagner</title></Head>
        <main>
            <h1>Photography</h1>

            <p>
                Photography has always been something I was interested in, but never really got around to
                exploring it. Seldom did I ever seem to have my camera on me when I wanted it. Things slowly
                changed when I got my current point and shoot, a Sony DSC-H55 which has a much slimmer form factor
                making it easier to stick in my pocket. As I started taking more pictures and spent time with my
                wife, who happened to have a fancy new Canon 60D DSLR camera, I decided I wanted one as well.
            </p>
            <p>
                Lauren having the 60D definitely gave me a starting point at where to look for a DSLR camera. In
                the end I chose the 60D as well since it gave me an amazing camera with room to grow into it.
                Even still I haven&apos;t had the chance to play with all the different features it has, but I&apos;m
                learning quickly. It also now allows her and I to share lenses as needed, and since lenses are
                so expensive, it&apos;s definitely nice to have the ability.

            </p>
            <p>Not all my shots may be perfect, but I think I&apos;m getting there.</p>

            <LargePhotosetLink
                name="Vermont"
                date="October 6 - 12, 2016"
                width={800}
                height={533}
                photoSource="/photography/thumbnails/2016-vermont.jpg"
                link="/"
            />

            <PhotosetListLinks
                photosets={[
                    {
                        name: 'New York City',
                        date: 'April 24 - 27, 2014',
                        thumbnailSrc: '/photography/thumbnails/2014-nyc-april.jpg',
                        width: 600,
                        height: 400,
                        link: '/',
                        description: 'I probably go to New York City too much.',
                    },
                    {
                        name: 'Snow',
                        date: 'January 2, 2014',
                        thumbnailSrc: '/photography/thumbnails/2014-snow.jpg',
                        width: 600,
                        height: 400,
                        link: '/',
                        description: 'Enjoying a peaceful snowy night.',
                    },
                    {
                        name: 'Aruba',
                        date: 'October 21 - 28, 2013',
                        thumbnailSrc: '/photography/thumbnails/2013-aruba.jpg',
                        width: 600,
                        height: 400,
                        link: '/',
                        description: 'Aruba was the perfect spot for my honeymoon.',
                    },
                    {
                        name: 'New York City',
                        date: 'April 13 - 14, 2013',
                        thumbnailSrc: '/photography/thumbnails/2013-nyc-april.jpg',
                        width: 600,
                        height: 400,
                        link: '/',
                        description: 'Another trip to New York City, this time in the spring.',
                    },
                    {
                        name: 'New York City',
                        date: 'January 26, 2013',
                        thumbnailSrc: '/photography/thumbnails/2013-nyc-january.jpg',
                        width: 600,
                        height: 400,
                        link: '/',
                        description: 'A trip to New York City after a snowstorm.',
                    },
                ]}
            />

            <LargePhotosetLink
                name="Rickett's Glen"
                date="October 18, 2012"
                width={800}
                height={533}
                photoSource="/photography/thumbnails/2012-ricketts-glen.jpg"
                link="/"
            />

            <LargePhotosetLink
                name="Washington DC"
                date="September 28-30, 2012"
                width={800}
                height={533}
                photoSource="/photography/thumbnails/2012-washington-dc.jpg"
                link="/"
            />

            <LargePhotosetLink
                name="New York City"
                date="August 10 - 11, 2012"
                width={800}
                height={533}
                titlePosition="top"
                photoSource="/photography/thumbnails/2012-nyc-august.jpg"
                link="/"
            />

            <PhotosetListLinks
                photosets={[
                    {
                        name: 'Philadelphia',
                        date: 'June 16, 2012',
                        thumbnailSrc: '/photography/thumbnails/2012-philadelphia.jpg',
                        width: 600,
                        height: 400,
                        link: '/',
                        description: 'Lauren & I walked around on a nice day in Philly.',
                    },
                    {
                        name: 'Cape May',
                        date: 'April 16 - 17, 2012',
                        thumbnailSrc: '/photography/thumbnails/2012-cape-may.jpg',
                        width: 600,
                        height: 400,
                        link: '/',
                        description: 'Lauren & I spent a weekend in Cape May, New Jersey',
                    },
                    {
                        name: 'New York City',
                        date: 'February 24 - 25, 2012',
                        thumbnailSrc: '/photography/thumbnails/2012-nyc-february.jpg',
                        width: 600,
                        height: 400,
                        link: '/photography/2012-nyc-february',
                        description: 'Another trip to New York City',
                    },
                ]}
            />

            <LargePhotosetLink
                name="New York City"
                date="January 13-15, 2021"
                width={800}
                height={533}
                titlePosition="top"
                photoSource="/photography/thumbnails/2012-nyc-january.jpg"
                link="/photography/2012-nyc-january"
            />
        </main>
    </>
);

export default PhotographyHome;
