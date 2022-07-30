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

    .metadata {
        margin: 5px 0;
        font-style: italic;
        color: var(--meta);
        font-size: 1.1rem
    }

    p {
        font-weight: 300;
        font-size: 1.25rem;
    }

    &.boxed {
        border: 1px solid var(--meta);
        padding: 1rem;
        box-shadow: var(--box-shadow);

        p {
            margin: 0;
        }
    }
`;

const Tags = styled.ul`
    display: inline-block;
    margin: 0;
    padding: 0;

    li {
        margin: 0 0.8rem 0 0;
        list-item-type: none;
        display: inline-block;
        font-size: 1.1rem;
    }
`;

interface PostListingProps {
    post: BlogPost
    showBorder?: boolean
    showTags?: boolean
}

const PostListing = ({
    post,
    showBorder = false,
    showTags = false,
}: PostListingProps): JSX.Element => (
    <Post key={post.id} className={showBorder ? 'boxed' : ''}>
        <h2><Link href={post.url}><a>{post.title}</a></Link></h2>
        <div className="metadata">
            {formatDate(post.date)}
            {post.readTime ? <> &mdash; {post.readTime} min read</> : null}
        </div>

        {showTags ? (
            <Tags>
                {post.tags.map((t) => (
                    <li key={t.url}><Link href={`/tag/${t.url}`}><a>#{t.name}</a></Link></li>
                ))}
            </Tags>
        ) : null}

        {/* eslint-disable-next-line react/no-danger */}
        {post.excerpt !== null ? <p dangerouslySetInnerHTML={{ __html: post.excerpt || 'No content found' }} /> : null}
    </Post>
);

export default PostListing;
