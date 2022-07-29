import styled from 'styled-components';
import { GetStaticProps, GetStaticPaths } from 'next';
import { PhotoBlogItem } from '@models/PhotoBlogItem';
import photoBlog from '@data/photoBlog';
import { formatDate } from '@lib/utilities';
import { getPhotoBlogPages } from '@lib/photoblog';

const PhotoBlogArticle = styled.article`
    margin: 2rem 0;

    .caption {
        text-align: center;
        margin: 1rem 0;
        padding: 0;
    }

    .date {
        text-align: center;
        margin: 0;
        padding: 0;
        font-style: italic;
        color: var(--meta);
    }
`;

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
    <PhotoBlogArticle>
        <img
            src={`/images/photoblog/${photo.src}`}
            width="100%"
            alt={photo.altText}
        />
        <p className="caption">{photo.description} ({photo.location})</p>
        <p className="date">{formatDate(photo.date)}</p>
    </PhotoBlogArticle>
);

export default Photo;
