import dynamic from 'next/dynamic';
import { MDXRemote } from 'next-mdx-remote';
import { BlogPost } from '@models/blogPost';
import TagList from '@components/TagList';
import { formatDate } from '@lib/utilities';
import Utterances from '@components/Utterances';

// Blog Components
import PostImage from '@components/PostImage';
import PostVideo from '@components/PostVideo';
import EmbeddedPost from '@components/EmbeddedPost';
import TableOfContents from '@components/TableOfContents';
import TableOfContentsPage from '@components/TableOfContentsPage';
import BookRead from '@components/BookRead';
import ExternalLink from '@components/ExternalLink';
import CodeSandbox from '@components/CodeSandbox';
import InDepthNotes from '@components/InDepthNotes';
import { CH } from '@code-hike/mdx/components';

const YouTubeEmbed = dynamic(() => import('@components/YouTubeEmbed'), {
    ssr: false,
});

const components = {
    PostImage,
    PostVideo,
    EmbeddedPost,
    TableOfContents,
    TableOfContentsPage,
    BookRead,
    YouTubeEmbed,
    ExternalLink,
    CodeSandbox,
    InDepthNotes,
    CH,
};

interface BlogEntryProps {
    post: BlogPost
}

const BlogEntry = ({ post }: BlogEntryProps): JSX.Element => (
    <>
        <article className="article">
            <div className="metadata">
                <div className="post-date">{formatDate(post.date)}</div>
                <div>&bull;</div>
                <div className="desktop-version">{post.readTime} Minute Read</div>
                <div className="mobile-version">{post.readTime} {post.readTime > 1 ? 'Minutes' : 'Minute'}</div>
            </div>

            <div className="content">
                <h1>{post.title}</h1>

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

            <TagList tags={post.tags} />
        </article>
        {post.commentIssueNumber !== null && (
            <div className="comments">
                <Utterances issueNumber={post.commentIssueNumber} />
            </div>
        )}
    </>
);

export default BlogEntry;
