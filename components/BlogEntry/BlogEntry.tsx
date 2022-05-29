import { useEffect } from 'react';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote';
import styled from 'styled-components';
import Prism from 'prismjs';
import { BlogPost } from '@models/blogPost';
import { formatDate } from '@lib/utilities';
import { BlogTag } from '@models/BlogTag';
import Utterances from '@components/Utterances';

// Blog Components
import PostImage from '@components/PostImage';
import PostVideo from '@components/PostVideo';
import EmbeddedTweet from '@components/EmbeddedTweet';
import TableOfContents from '@components/TableOfContents';
import TableOfContentsPage from '@components/TableOfContentsPage';
import BookRead from '@components/BookRead';

// Prism
import 'prismjs/components';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-yaml';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prism-themes/themes/prism-night-owl.css';

const components = {
    PostImage,
    PostVideo,
    EmbeddedTweet,
    TableOfContents,
    TableOfContentsPage,
    BookRead,
};

const Post = styled.article`
    h2 {
        margin: 20px 0;
    }

    h3 {
        margin: 20px 0;
    }

    h4 {
        code {
            font-size: 1.1rem;
            font-weight: normal;
        }
    }

    .datetime {
        margin: 5px 0;
        font-style: italic;
        font-size: 1.2rem;
        color: ${({ theme }) => theme.colors.darkGray};
        font-family: ${({ theme }) => theme.fonts.primary};
        font-weight: 100;
    }

    blockquote {
        border-left: 4px solid ${({ theme }) => theme.colors.blue};
        padding-left: 40px;
        margin: 30px 0;

        p {
            font-family: ${({ theme }) => theme.fonts.alternate};
            font-size: 1.5rem;
            font-style: italic;
            color: ${({ theme }) => theme.colors.mediumBlue};
        }

        @media all and (max-width: 800px) {
            padding-left: 20px;

            p {
                font-size: 1.2rem;
            }
        }
    }

    hr {
        width: 250px;
        margin: 40px auto;
        border-bottom: 1px solid hsl(0, 0%, 87.1%);
        background-color: transparent;
    }

    div.centered-image {
        text-align: center;
        margin: 30px 0;

        img {
            max-width: 80%;
        }

        img.shadowed {
            box-shadow: ${({ theme }) => theme.boxShadow};
        }

        .credit {
            margin: 10px 0;
            color: hsl(0, 0%, 60%);
        }

        .caption {
            margin: 15px 0 10px 0;
            font-style: italic;
            color: hsl(0, 0%, 51%);
        }
    }

    pre {
        margin: 25px 40px;

        @media all and (max-width: 1280px) {
            margin:15px 5px;
        }
    }

    p {
        font-family: ${({ theme }) => theme.fonts.primary};
        font-size: 1.5rem;
        font-weight: 300;

        a {
            font-weight: normal;
        }
    }

    .domain-name {
        font-style: italic;
        color: hsl(0, 1%, 60%);

        @media (prefers-color-scheme: light) {
            color: hsl(0, 0%, 50%);
        }
    }

    .content {
        ul,
        ol {
            font-size: 1.5rem;
            margin: 0 25px 40px 25px;

            li {
                padding-left: 12px;
            }
        }
    }
`;

const TagList = styled.ul`
    margin: 36px 0 20px;
    padding: 0;
`;

const Tag = styled.li`
    display: inline;
    list-style-type: none;
    padding: 0 30px 0 0;
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fonts.variable};

`;

interface PostTagsProps {
    tags: BlogTag[]
}

const PostTags = ({ tags }: PostTagsProps): JSX.Element => (
    <TagList>
        {tags.map((t) => (
            <Tag key={t.url}><Link href={`/tag/${t.url}`}><a>{t.name}</a></Link></Tag>
        ))}
    </TagList>
);

interface BlogEntryProps {
    post: BlogPost
}

const BlogEntry = ({ post }: BlogEntryProps): JSX.Element => {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <>
            <Post className="line-numbers">
                {post.tags.length > 0 && <PostTags tags={post.tags} />}

                <h1>{post.title}</h1>
                <div className="datetime"><em>{formatDate(post.date)}</em></div>

                <div className="content">
                    <MDXRemote compiledSource={post.content} components={components} />
                </div>

                {post.commentIssueNumber !== null && (
                    <div className="comments">
                        <Utterances issueNumber={post.commentIssueNumber} />
                    </div>
                )}
            </Post>
        </>
    );
};

export default BlogEntry;
