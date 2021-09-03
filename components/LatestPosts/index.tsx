import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { formatDate } from '@lib/utilities';
import { BlogPost } from '@models/blogPost';

const Latest = styled.div`
    margin: 40px 0;

    h2 {
        margin-bottom: 30px;
        font-size: 2.2rem;
    }
`;

const Posts = styled.ul`
    margin: 0;
    padding: 0;
`;

const Post = styled.li`
    list-style-type: none;
    margin: 15px 0;

    .title {
        font-family: ${({ theme }) => theme.fonts.secondary};
        color: ${({ theme }) => theme.colors.blue};
        font-size: 1.4rem;
        font-weight: 500;

        a:hover {
            text-decoration: none;
        }
    }

    .datetime {
        font-family: ${({ theme }) => theme.fonts.primary};
    }
`;

interface LatestPostsProps {
    mostRecentPosts: BlogPost[];
}

const LatestPosts: React.FC<LatestPostsProps> = ({ mostRecentPosts }) => (
    <Latest>
        <h2>Latest Posts</h2>
        <Posts>
            {mostRecentPosts.map(({
                id, url, date, title,
            }) => (
                <Post key={id}>
                    <div className="title">
                        <Link href={url}><a>{title}</a></Link>
                    </div>
                    <div className="datetime">{formatDate(date)}</div>
                </Post>
            ))}
        </Posts>
    </Latest>
);

export default LatestPosts;
