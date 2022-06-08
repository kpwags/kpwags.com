import styled from 'styled-components';
import Link from 'next/link';
import { formatDate } from '@lib/utilities';
import { BlogPost } from '@models/BlogPost';

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
            background-image: var(--grey-gradient);

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
                color: var(--text);
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
