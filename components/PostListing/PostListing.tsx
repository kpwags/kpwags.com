import styled from 'styled-components';
import Link from 'next/link';
import { formatDate } from '@lib/utilities';
import { BlogPost } from '@models/blogPost';

const Post = styled.article`
    list-style-type: none;
    margin: 40px 0;

    h2 {
        color: var(--green-1);
        font-size: 2rem;
        font-weight: 500;
    }

    .datetime {
        margin: 5px 0;
        font-style: italic;
        color: var(--meta);
    }

    p {
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
