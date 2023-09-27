import dynamic from 'next/dynamic';
import { MDXRemote } from 'next-mdx-remote';
import { ReadingLog } from '@models/ReadingLog';
import Utterances from '@components/Utterances';
import { formatDate } from '@lib/utilities';

// Blog Components
import ExternalLink from '@components/ExternalLink';
import InDepthNotes from '@components/InDepthNotes';
import TagList from '@components/TagList';

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

const ReadingLogEntry = ({ readingLog }: ReadingLogEntryProps): JSX.Element => (
    <>
        <article className="article line-numbers">
            <div className="metadata">
                <div className="post-date">{formatDate(readingLog.date)}</div>
            </div>

            <div className="content reading-log">
                <h1>{readingLog.title}</h1>

                <MDXRemote
                    compiledSource={readingLog.content}
                    components={components}
                    scope={readingLog}
                    frontmatter={readingLog}
                />
            </div>

            <TagList tags={readingLog.tags} />
        </article>

        {readingLog.commentIssueNumber !== null && (
            <div className="comments">
                <Utterances issueNumber={readingLog.commentIssueNumber} />
            </div>
        )}
    </>
);

export default ReadingLogEntry;
