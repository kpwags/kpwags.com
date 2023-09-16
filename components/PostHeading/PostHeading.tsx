import { BlogTag } from '@models/BlogTag';
import MetaData from './MetaData';
import Tags from './Tags';

interface PostHeadingProps {
    title: string;
    tags: BlogTag[];
    date: Date;
    readTime?: number;
    subheading?: string | null;
}

const PostHeading = ({
    title,
    tags,
    date,
    readTime,
    subheading = null,
}: PostHeadingProps): JSX.Element => (
    <>
        <MetaData date={date} readTime={readTime} />

        <h1>{title}</h1>

        {subheading ? <h2 className="subheading">{subheading}</h2> : null}

        {tags.length > 0 ? <Tags tags={tags} /> : null}
    </>
);

export default PostHeading;
