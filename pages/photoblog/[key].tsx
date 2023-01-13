import { GetStaticProps, GetStaticPaths } from 'next';
import { PhotoBlogItem } from '@models/PhotoBlogItem';
import photoBlog from '@data/photoBlog';
import { formatDate } from '@lib/utilities';
import { getPhotoBlogPages } from '@lib/photoblog';

import styles from '@css/PhotoBlog.module.css';

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getPhotoBlogPages();

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { key } = params;

    const photo = photoBlog.find((p) => p.key === key);

    return {
        props: {
            photo,
        },
    };
};

interface PhotoProps {
    photo: PhotoBlogItem
}

const Photo = ({ photo }: PhotoProps): JSX.Element => (
    <article className={styles.photo}>
        <img
            src={`/images/photoblog/${photo.src}`}
            width="100%"
            alt={photo.altText}
        />
        <p className={styles.caption}>{photo.description} ({photo.location})</p>
        <p className={styles.date}>{formatDate(photo.date)}</p>
    </article>
);

export default Photo;
