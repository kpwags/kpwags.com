import MostPopularTagsChart from '@components/MostPopularTagsChart';
import PostsPerYearCharts from '@components/PostsPerYearChart';
import { getStats } from '@lib/stats';
import { Stats } from '@models/Stats';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import styles from '@css/Stats.module.css';

export const getStaticProps: GetStaticProps = async () => {
    const stats = getStats();

    return {
        props: {
            stats,
        },
    };
};

interface StatsPageProps {
    stats: Stats;
}

const StatsPage = ({ stats }: StatsPageProps): JSX.Element => (
    <>
        <Head><title>Stats - Keith Wagner</title></Head>

        <div>
            <h1>Statistics</h1>

            <p>
                Here&apos;s some of the interesting stats from my blog.
            </p>

            <h2>Posts Per Year</h2>
            <PostsPerYearCharts stats={stats.PostsPerYear} />

            <hr className={styles.statsSeparator} />

            <h2>Most Popular Tags</h2>
            <MostPopularTagsChart stats={stats.MostPopularTags} />
        </div>
    </>
);

export default StatsPage;
