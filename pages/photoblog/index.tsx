import Image from 'next/image';
import { GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import photoBlog from '@data/photoBlog';
import { PhotoBlogItem } from '@models/PhotoBlogItem';
import PhotoBlogLightbox from '@components/PhotoBlogLightbox';
import { generatePhotoBlogRssFeed } from '@lib/rss';
import PhotoBlogRssFeeds from '@components/PhotoBlogRssFeeds';

import styles from '@css/PhotoBlog.module.css';

export const getStaticProps: GetStaticProps = () => {
    generatePhotoBlogRssFeed();

    return {
        props: {
            dummy: '',
        },
    };
};

const PhotoBlog = (): JSX.Element => {
    const [photoIndex, setPhotoIndex] = useState<number>(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
    const [photosLoaded, setPhotosLoaded] = useState<number>(photoBlog.length > 20 ? 20 : photoBlog.length);
    const [photos, setPhotos] = useState<PhotoBlogItem[]>([]);

    const selectPhoto = (index: number) => {
        setPhotoIndex(index);
        setIsLightboxOpen(true);
    };

    const loadMore = () => {
        if (photosLoaded + 20 > photoBlog.length) {
            setPhotosLoaded(photoBlog.length);
            setPhotos(photoBlog);
        } else {
            setPhotosLoaded(photosLoaded + 20);
            setPhotos(photoBlog.slice(0, photosLoaded + 20));
        }
    };

    useEffect(() => {
        setPhotos(photoBlog.length > 20 ? photoBlog.slice(0, 20) : photoBlog);
    }, []);

    return (
        <>
            <PhotoBlogRssFeeds />
            <main>
                <h1>Photo Blog</h1>

                <p>Since I&apos;m not on Instagram anymore, I figured I&apos;d add a section to my site
                    that I control to share some of the photos I&apos;ve taken that don&apos;t really fit
                    into anything else.
                </p>

                <div className={styles.photoGrid}>
                    {photos.map((p, idx) => (
                        <button
                            key={p.key}
                            type="button"
                            onClick={() => selectPhoto(idx)}
                        >
                            <Image
                                src={`/images/photoblog/${p.thumbnail}`}
                                alt={p.altText}
                                loading="lazy"
                                width={512}
                                height={512}
                            />
                        </button>
                    ))}
                </div>

                {photos.length < photoBlog.length ? (
                    <div className={styles.loadMore}>
                        <button type="button" onClick={() => loadMore()}>Load More</button>
                    </div>
                ) : null}

                <PhotoBlogLightbox
                    photos={photos}
                    index={photoIndex}
                    visible={isLightboxOpen}
                    setIndex={setPhotoIndex}
                    setVisible={setIsLightboxOpen}
                />
            </main>
        </>
    );
};

export default PhotoBlog;
