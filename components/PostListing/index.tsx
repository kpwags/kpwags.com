import React from 'react';
import styled from 'styled-components';
import { formatDate } from '@lib/utilities';

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
    id: string
    date: Date
    title: string
    excerpt: string
}

const PostListing: React.FC<PostListingProps> = ({
    id,
    date,
    title,
    excerpt,
}) => (
    <Post key={id}>
        <h2>{title}</h2>
        <div className="datetime">{formatDate(date)}</div>
        <p>{excerpt}</p>
    </Post>
);

export default PostListing;
