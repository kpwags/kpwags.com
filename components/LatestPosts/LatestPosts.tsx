import styled from 'styled-components';
import Link from 'next/link';
import { BlogPost } from '@models/blogPost';
import PostListing from '@components/PostListing';

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
            {mostRecentPosts.map((p) => (<PostListing key={p.id} post={p} showBorder showTags />))}

            <div className="mobile-link">
                <Link href="/blog"><a>View More</a></Link>
            </div>
        </div>
    </LatestPostsSection>
);

export default LatestPosts;
