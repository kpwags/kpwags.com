import { FC } from 'react';
import DefaultLayout from '@components/DefaultLayout/DefaultLayout';
import { BlogPost } from '@models/blogPost';

interface BlogEntryProps {
    post: BlogPost
}

const BlogEntry: FC<BlogEntryProps> = ({ post }) => {
    console.log({ post });

    return (
        <DefaultLayout>
            <h2>{post.title}</h2>
            <div><em>{post.date}</em></div>
            {/* eslint-disable-next-line react/no-danger */}
            <div dangerouslySetInnerHTML={{ __html: post.content || 'No content found' }} />
        </DefaultLayout>
    );
};

export default BlogEntry;
