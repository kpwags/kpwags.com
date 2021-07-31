import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { formatDate, buildUrlFromId } from '@lib/utilities';
import { BlogPost } from '@models/blogPost';

const Post = styled.article`
    list-style-type: none;
    margin: 40px 0;

    h2 {
        color: ${({ theme }) => theme.colors.blue};
        font-size: 1.7rem;
        font-weight: 500;
    }

    .datetime {
        margin: 5px 0;
        font-style: italic;
        color: ${({ theme }) => theme.colors.darkGray};
    }
`;

interface PostListingProps {
    post: BlogPost
}

const PostListing: React.FC<PostListingProps> = ({
    post,
}) => (
    <Post key={post.id}>
        <h2><Link href={buildUrlFromId(post.id)}><a>{post.title}</a></Link></h2>
        <div className="datetime">{formatDate(post.date)}</div>

        {/* eslint-disable-next-line react/no-danger */}
        <p dangerouslySetInnerHTML={{ __html: post.excerpt || 'No content found' }} />
    </Post>
);

export default PostListing;
