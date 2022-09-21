import { useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { MDXRemote } from 'next-mdx-remote';
import styled from 'styled-components';
import Prism from 'prismjs';
import { BlogPost } from '@models/blogPost';
import { formatDate } from '@lib/utilities';
import { BlogTag } from '@models/BlogTag';
import Utterances from '@components/Utterances';
import { ReadOutlined, ClockCircleOutlined } from '@ant-design/icons';

// Blog Components
import PostImage from '@components/PostImage';
import PostVideo from '@components/PostVideo';
import EmbeddedTweet from '@components/EmbeddedTweet';
import TableOfContents from '@components/TableOfContents';
import TableOfContentsPage from '@components/TableOfContentsPage';
import BookRead from '@components/BookRead';
import ExternalLink from '@components/ExternalLink';

// Prism
import 'prismjs/components';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-yaml';
import 'prism-themes/themes/prism-material-dark.css';
// import YouTubeEmbed from '@components/YouTubeEmbed';

const YouTubeEmbed = dynamic(() => import('@components/YouTubeEmbed'), {
    ssr: false,
});

const components = {
    PostImage,
    PostVideo,
    EmbeddedTweet,
    TableOfContents,
    TableOfContentsPage,
    BookRead,
    YouTubeEmbed,
    ExternalLink,
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

    .metadata {
        margin: 0.2rem 0 1.25rem 0;
        font-style: italic;
        font-size: 1.2rem;
        color: var(--meta);
        font-weight: 300;

        svg {
            path {
                fill: var(--meta);
            }
        }
    }

    blockquote {
        border-left: 8px solid var(--green-1);
        padding-left: 40px;
        margin: 30px 0;

        p {
            font-family: var(--alternate-font);
            font-size: 2rem;
            font-style: italic;
            color: var(--green-2);
        }

        @media all and (max-width: 800px) {
            padding-left: 20px;

            p {
                font-size: 1.5rem;
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
            box-shadow: var(--box-shadow);
        }

        .credit {
            margin: 10px 0;
            color: var(--grey-1);
        }

        .caption {
            margin: 15px 0 10px 0;
            font-style: italic;
            color: var(--grey-1);
        }
    }

    pre {
        margin: 25px 40px;

        @media all and (max-width: 1280px) {
            margin:15px 5px;
        }
    }

    p {
        font-size: 1.5rem;
        font-weight: 300;

        code {
            font-size: 1.5rem;
        }

        a {
            font-weight: normal;

            &:hover {
                text-decoration: underline;
            }
        }
    }

    .domain-name {
        font-style: italic;
        color: var(--meta);
    }

    .content {
        ul,
        ol {
            font-size: 1.5rem;
            font-weight: 300;
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
    width: 100%;
`;

const Tag = styled.li`
    display: inline-block;
    list-style-type: none;
    padding: 0 30px 0 0;
    line-height: 2;
    text-transform: uppercase;

    a {
        white-space: nowrap;
    }
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
                <div className="metadata">
                    <ClockCircleOutlined /> {formatDate(post.date)}
                    {post.readTime ? (
                        <> &mdash; <ReadOutlined /> {post.readTime} min read</>
                    ) : null}
                </div>

                <div className="content">
                    {post.isRssOnly ? (
                        <p><em>This post is for the <a href="/posts/2022/08/15/welcome-to-the-rss-club">Secret RSS Club Readers</a>.</em></p>
                    ) : null}
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
