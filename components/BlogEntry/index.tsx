import { FC, useEffect } from 'react';
import styled from 'styled-components';
import Prism from 'prismjs';
import { BlogPost } from '@models/blogPost';
import { formatDate } from '@lib/utilities';

import 'prismjs/components';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-tsx';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prism-themes/themes/prism-night-owl.css';

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
        margin: 10px 40px;
    }

    p {
        a {
            font-weight: 700;
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
        <Post className="line-numbers">
            <h1>{post.title}</h1>
            <div className="datetime"><em>{formatDate(post.date)}</em></div>

            {/* eslint-disable-next-line react/no-danger */}
            <div dangerouslySetInnerHTML={{ __html: post.content || 'No content found' }} />
        </Post>
    );
};

export default BlogEntry;
