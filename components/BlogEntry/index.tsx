import { FC, useEffect } from 'react';
import Head from 'next/head';
import { MDXRemote } from 'next-mdx-remote';
import styled from 'styled-components';
import Prism from 'prismjs';
import { BlogPost } from '@models/blogPost';
import { formatDate } from '@lib/utilities';

// Blog Components
import PostImage from '@components/PostImage';
import EmbeddedTweet from '@components/EmbeddedTweet';

// Prism
import 'prismjs/components';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-tsx';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prism-themes/themes/prism-night-owl.css';

const components = { PostImage, EmbeddedTweet };

const Post = styled.article`
    h1 {
        color: ${({ theme }) => theme.colors.blue};
        font-size: 2rem;
        font-weight: 700;
    }

    h2 {
        color: ${({ theme }) => theme.colors.blue};
        font-size: 1.7rem;
        font-weight: 500;
    }

    h3 {
        color: ${({ theme }) => theme.colors.mediumBlue};
        font-size: 1.35rem;
        font-weight: 500;
        margin: 20px 0;
    }

    h4 {
        code {
            font-size: 1.1rem;
            font-weight: 500;
        }
    }

    .datetime {
        margin: 5px 0;
        font-style: italic;
        color: ${({ theme }) => theme.colors.darkGray};
    }

    blockquote {
        border-left: 4px solid ${({ theme }) => theme.colors.blue};
        padding-left: 40px;
        font-size: 1.5rem;
        font-style: italic;
        margin: 30px 0;

        @media all and (max-width: 800px) {
            padding-left: 20px;
            font-size: 1.2rem;
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
        a {
            font-weight: 700;
        }
    }

    ul,
    ol {
        margin: 0 25px 40px 25px;

        li {
            padding-left: 12px;
        }
    }
`;

interface BlogEntryProps {
    post: BlogPost
}

const BlogEntry: FC<BlogEntryProps> = ({ post }) => {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <>
            <Head>
                <title>{`${post.title} - Keith Wagner`}</title>
                <meta name="description" content={post.description || ''} />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.description || ''} />
                <meta property="og:url" content={`https://kpwags.com${post.url}`} />
                {post.socialImageUrl && <meta property="og:image" content={`https://kpwags.com${post.socialImageUrl}`} />}
                {post.socialImageWidth && <meta property="og:image:width" content={post.socialImageWidth.toString()} />}
                {post.socialImageUrl && <meta property="og:image:height" content={post.socialImageHeight.toString()} />}
                {post.socialImageUrl && <meta property="twitter:image" content={`https://kpwags.com${post.socialImageUrl}`} />}
                {post.hasEmbeddedTweet && <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8" />}
            </Head>
            <Post className="line-numbers">
                <h1>{post.title}</h1>
                <div className="datetime"><em>{formatDate(post.date)}</em></div>

                <MDXRemote compiledSource={post.content} components={components} />
            </Post>
        </>
    );
};

export default BlogEntry;
