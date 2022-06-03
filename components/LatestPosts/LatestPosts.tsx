import styled from 'styled-components';
import Link from 'next/link';
import { formatDate } from '@lib/utilities';
import { BlogPost } from '@models/blogPost';

const LatestPostsSection = styled.section`
    margin: 5rem 0;

    div.heading {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;

        @media all and (max-width: 450px) {
            display: block;
        }

        div.link {
            text-align: right;

            @media all and (max-width: 450px) {
                display: none;
            }
        }
    }

    div.mobile-link{
        text-align: center;
        display: none;
        font-size: 1.2rem;

        @media all and (max-width: 450px) {
            display: block;
        }
    }

    h2 {
        margin-bottom: 12px;
    }

    div.content {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;

        div.post {
            border-radius: 10px;
            background-image: linear-gradient(
                145deg,
                hsl(0deg 0% 91%) 0%,
                hsl(344deg 0% 91%) 11%,
                hsl(344deg 0% 90%) 22%,
                hsl(344deg 0% 89%) 33%,
                hsl(344deg 0% 88%) 44%,
                hsl(344deg 0% 88%) 56%,
                hsl(344deg 0% 87%) 67%,
                hsl(344deg 0% 86%) 78%,
                hsl(344deg 0% 86%) 89%,
                hsl(0deg 0% 85%) 100%
            );

            img {
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
            }

            div.title {
                font-size: 1.6rem;
                padding: 16px;

                @media all and (max-width: 809px) {
                    font-size: 1.4rem
                }

                a {
                    color: var(--green-1);

                    &:hover {
                        color: var(--green-2);
                    }
                }
            }

            div.datetime {
                color: var(--black-3);
                padding: 0 16px 12px;
            }
        }
    }
`;

interface LatestPostsProps {
    mostRecentPosts: BlogPost[];
}

const LatestPosts = ({ mostRecentPosts }: LatestPostsProps): JSX.Element => (
    <LatestPostsSection>
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
    </LatestPostsSection>
);

export default LatestPosts;
