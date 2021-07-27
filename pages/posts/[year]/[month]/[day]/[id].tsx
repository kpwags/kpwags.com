import { ReactNode } from 'react';
import DefaultLayout from '@components/DefaultLayout/DefaultLayout';
import { GetStaticProps, GetStaticPaths } from 'next';
import { getAllPostIds, getPostData } from '@lib/posts';

const Post = ({ postData }: { postData: { title: string, id: string, date: Date } }): ReactNode => (
    <DefaultLayout>
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
    </DefaultLayout>
);

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds();

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = getPostData(params.year.toString(), params.month.toString(), params.day.toString(), params.id.toString());

    return {
        props: {
            postData,
        },
    };
};

export default Post;
