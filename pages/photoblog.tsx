/* eslint-disable @typescript-eslint/no-unused-vars-experimental */
import styled from 'styled-components';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import photoBlog from '@data/photoBlog';
import { PhotoBlogItem } from '@models/PhotoBlogItem';
import PhotoBlogLightbox from '@components/PhotoBlogLightbox';

const PhotoBlogGrid = styled.div`
    display: grid;
    margin-top: 25px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    justify-items: center;

    button {
        border: none;
        background: transparent;
        cursor: pointer;

        &:focus {
            border: none;
        }
    }
`;

const LoadMore = styled.div`
    text-align: center;
    margin: 40px 0;

    button {
        border: ${({ theme }) => theme.colors.mediumBlue};
        background: ${({ theme }) => theme.colors.blue};
        color: ${({ theme }) => theme.colors.background};
        padding: 8px 16px;
        cursor: pointer;
    }
`;

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
        <main>
            <h1>Photo Blog</h1>

            <p>Since I&apos;m not on Instagram anymore, I figured I&apos;d add a section to my site
                that I control to share some of the photos I&apos;ve taken that don&apos;t really fit
                into anything else.
            </p>

            <PhotoBlogGrid>
                {photos.map((p, idx) => (
                    <button
                        key={p.key}
                        type="button"
                        onClick={() => selectPhoto(idx)}
                    >
                        <Image
                            src={`/images/photoblog/${p.thumbnail}`}
                            alt={p.altText}
                            width={512}
                            height={512}
                        />
                    </button>
                ))}
            </PhotoBlogGrid>

            {photos.length < photoBlog.length ? (
                <LoadMore>
                    <button type="button" onClick={() => loadMore()}>Load More</button>
                </LoadMore>
            ) : null}

            <PhotoBlogLightbox
                photos={photos}
                index={photoIndex}
                visible={isLightboxOpen}
                setIndex={setPhotoIndex}
                setVisible={setIsLightboxOpen}
            />
        </main>
    );
};

export default PhotoBlog;
