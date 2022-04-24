import styled from 'styled-components';
import Link from 'next/link';
import { formatDate } from '@lib/utilities';
import { BlogPost } from '@models/blogPost';

const Post = styled.article`
    list-style-type: none;
    font-family: ${({ theme }) => theme.fonts.primary};
    margin: 40px 0;

    h2 {
        color: ${({ theme }) => theme.colors.blue};
        font-size: 2rem;
        font-weight: 500;
    }

    .datetime {
        margin: 5px 0;
        font-style: italic;
        color: ${({ theme }) => theme.colors.darkGray};
    }

    p {
        font-family: ${({ theme }) => theme.fonts.primary};
        font-weight: 300;
    }
`;

interface PostListingProps {
    post: BlogPost
}

const PostListing = ({
    post,
}: PostListingProps): JSX.Element => (
    <Post key={post.id}>
        <h2><Link href={post.url}><a>{post.title}</a></Link></h2>
        <div className="datetime">{formatDate(post.date)}</div>

        {/* eslint-disable-next-line react/no-danger */}
        {post.excerpt !== null ? <p dangerouslySetInnerHTML={{ __html: post.excerpt || 'No content found' }} /> : null}
    </Post>
);

export default PostListing;
