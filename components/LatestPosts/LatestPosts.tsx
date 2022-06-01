import Link from 'next/link';
import { formatDate } from '@lib/utilities';
import { BlogPost } from '@models/blogPost';

interface LatestPostsProps {
    mostRecentPosts: BlogPost[];
}

const LatestPosts = ({ mostRecentPosts }: LatestPostsProps): JSX.Element => (
    <section className="latest-posts">
        <div className="heading">
            <h2>Latest Posts</h2>
            <div className="link">
                <Link href="/blog"><a>View More</a></Link>
            </div>
        </div>
        <div className="content">
            {mostRecentPosts.map(({
                id,
                url,
                date,
                title,
                contentImage,
            }) => (
                <div className="post" key={id}>
                    <div className="image">
                        <img src={`/images/posts/${contentImage}`} alt={title} />
                    </div>
                    <div className="title">
                        <Link href={url}><a>{title}</a></Link>
                    </div>
                    <div className="datetime">{formatDate(date)}</div>
                </div>
            ))}
            <div className="mobile-link">
                <Link href="/blog"><a>View More</a></Link>
            </div>
        </div>
    </section>
);

export default LatestPosts;
