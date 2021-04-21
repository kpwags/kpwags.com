import DefaultLayout from '@components/DefaultLayout/DefaultLayout';
import { getAllPostIds, getPostData } from '@lib/posts';

const Post = ({ postData }) => {
    return (
        <DefaultLayout>
            {postData.title}
            <br />
            {postData.id}
            <br />
            {postData.date}
        </DefaultLayout>
    );
};

export async function getStaticPaths() {
    const paths = getAllPostIds();

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const postData = getPostData(params.id);

    return {
        props: {
            postData,
        },
    };
}

export default Post;
