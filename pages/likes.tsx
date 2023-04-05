import Head from 'next/head';
import { GetStaticProps } from 'next';
import { getFeedbinItems } from '@lib/feedbin';
import { FeedbinItem } from '@models/FeedbinItem';

export const getServerSideProps: GetStaticProps = async () => {
    const data = await getFeedbinItems();

    return {
        props: {
            // only return most recent 25
            likedItems: data.slice(0, 25),
        },
    };
};

type LikeProps = {
    likedItems: FeedbinItem[];
};

const Podcasts = ({ likedItems }: LikeProps): JSX.Element => (
    <>
        <Head><title>Likes - Keith Wagner</title></Head>

        <main>
            <h1>
                Articles, Podcasts & <span>Other Likes</span>
            </h1>

            <p>
                One of my biggest sources of finding interesting articles is through my RSS feeds. Feedbin allows me to star items and gives
                me the starred items in a feed. These are my starred items.
            </p>

            <ul className="likes">
                {likedItems.map((item) => (
                    <li key={item.link}>
                        <div className="title">
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                {item.title}
                            </a>
                        </div>
                        <div className="source">
                            {item.domain}
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    </>
);

export default Podcasts;
