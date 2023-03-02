import Link from 'next/link';
import dynamic from 'next/dynamic';
import { MDXRemote } from 'next-mdx-remote';
import { ReadingLog } from '@models/ReadingLog';
import { formatDate } from '@lib/utilities';
import { BlogTag } from '@models/BlogTag';
import Utterances from '@components/Utterances';
import { ClockCircleOutlined } from '@ant-design/icons';

// Blog Components
import ExternalLink from '@components/ExternalLink';
import InDepthNotes from '@components/InDepthNotes';

import styles from './ReadingLogEntry.module.css';

const YouTubeEmbed = dynamic(() => import('@components/YouTubeEmbed'), {
    ssr: false,
});

const components = {
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
            <li key={t.url}><Link href={`/tag/${t.url}`}><a>{t.name}</a></Link></li>
        ))}
    </ul>
);

interface ReadingLogEntryProps {
    readingLog: ReadingLog
}

const BlogEntry = ({ readingLog }: ReadingLogEntryProps): JSX.Element => (
    <>
        <article className="article line-numbers">
            {readingLog.tags.length > 0 && <PostTags tags={readingLog.tags} />}

            <h1>{readingLog.title}</h1>
            <div className="metadata">
                <div><ClockCircleOutlined /> {formatDate(readingLog.date)}</div>
            </div>

            <div className="content reading-log">
                <MDXRemote compiledSource={readingLog.content} components={components} />
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
