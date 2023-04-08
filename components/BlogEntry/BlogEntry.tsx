import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { MDXRemote } from 'next-mdx-remote';
import Prism from 'prismjs';
import { BlogPost } from '@models/blogPost';
import Utterances from '@components/Utterances';

// Blog Components
import PostImage from '@components/PostImage';
import PostVideo from '@components/PostVideo';
import EmbeddedTweet from '@components/EmbeddedTweet';
import TableOfContents from '@components/TableOfContents';
import TableOfContentsPage from '@components/TableOfContentsPage';
import BookRead from '@components/BookRead';
import ExternalLink from '@components/ExternalLink';
import PostHeading from '@components/PostHeading';

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
};

interface BlogEntryProps {
    post: BlogPost
}

const BlogEntry = ({ post }: BlogEntryProps): JSX.Element => {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <>
            <article className="article line-numbers">
                <PostHeading
                    title={post.title}
                    date={post.date}
                    readTime={post.readTime}
                    tags={post.tags}
                />

                <div className="content">
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
