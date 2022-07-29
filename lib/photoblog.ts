import photoBlog from '@data/photoBlog';

type PagePaths = {
    params: {
        key: string
    }
}

export const getPhotoBlogPages = (): PagePaths[] => photoBlog.map((p) => ({ params: { key: p.key } }));
