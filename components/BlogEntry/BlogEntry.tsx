import { useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { MDXRemote } from 'next-mdx-remote';
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
import InDepthNotes from '@components/InDepthNotes';

import styles from './BlogEntry.module.css';

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
    InDepthNotes,
};

interface PostTagsProps {
    tags: BlogTag[]
}

const PostTags = ({ tags }: PostTagsProps): JSX.Element => (
    <ul className={styles.tagList}>
        {tags.map((t) => (
            <li key={t.url}><Link href={`/tag/${t.url}`}>{t.name}</Link></li>
        ))}
    </ul>
);

interface BlogEntryProps {
    post: BlogPost
}

const BlogEntry = ({ post }: BlogEntryProps): JSX.Element => {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    // my reading log posts have a few extra CSS rules
    const getPostContentCssClass = (): string => {
        if (post.tags.find((t) => t.url === 'reading-log')) {
            return 'content reading-log';
        }

        return 'content';
    };

    return (
        <>
            <article className="article line-numbers">
                {post.tags.length > 0 && <PostTags tags={post.tags} />}

                <h1>{post.title}</h1>
                <div className="metadata">
                    <div><ClockCircleOutlined /> {formatDate(post.date)}</div>
                    {post.readTime ? (
                        <>
                            <div className="separator" />
                            <div className="read-time">
                                <ReadOutlined /> {post.readTime} min read
                            </div>
                        </>
                    ) : null}
                </div>

                <div className={getPostContentCssClass()}>
                    {post.isRssOnly ? (
                        <p><em>This post is for the <a href="/posts/2022/08/15/welcome-to-the-rss-club">Secret RSS Club Readers</a>.</em></p>
                    ) : null}
                    <MDXRemote
                        compiledSource={post.content}
                        components={components}
                        scope={post}
                        frontmatter={post}
                    />
                </div>

                {post.commentIssueNumber !== null && (
                    <div className="comments">
                        <Utterances issueNumber={post.commentIssueNumber} />
                    </div>
                )}
            </article>
        </>
    );
};

export default BlogEntry;
