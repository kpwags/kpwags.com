import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { formatDate, buildUrlFromId } from '@lib/utilities';
import { BlogPost } from '@models/blogPost';

const Post = styled.article`
    list-style-type: none;
    margin: 15px 0;

    .title {
        color: ${({ theme }) => theme.colors.blue};
        font-size: 1.4rem;
        font-weight: 500;
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
        <p>{post.excerpt}</p>
    </Post>
);

export default PostListing;
