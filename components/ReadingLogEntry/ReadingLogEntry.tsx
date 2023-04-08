import dynamic from 'next/dynamic';
import { MDXRemote } from 'next-mdx-remote';
import { ReadingLog } from '@models/ReadingLog';
import Utterances from '@components/Utterances';

// Blog Components
import ExternalLink from '@components/ExternalLink';
import InDepthNotes from '@components/InDepthNotes';
import PostHeading from '@components/PostHeading';

const YouTubeEmbed = dynamic(() => import('@components/YouTubeEmbed'), {
    ssr: false,
});

const components = {
    YouTubeEmbed,
    ExternalLink,
    InDepthNotes,
};

interface ReadingLogEntryProps {
    readingLog: ReadingLog
}

const BlogEntry = ({ readingLog }: ReadingLogEntryProps): JSX.Element => (
    <>
        <article className="article line-numbers">
            <PostHeading
                title={readingLog.title}
                date={readingLog.date}
                tags={readingLog.tags}
            />

            <div className="content reading-log">
                <MDXRemote
                    compiledSource={readingLog.content}
                    components={components}
                    scope={readingLog}
                    frontmatter={readingLog}
                />
            </div>

            {readingLog.commentIssueNumber !== null && (
                <div className="comments">
                    <Utterances issueNumber={readingLog.commentIssueNumber} />
                </div>
            )}
        </article>
    </>
);

export default BlogEntry;
