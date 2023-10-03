import Link from 'next/link';
import { PostsPerYear } from '@models/Stats';
import { useEffect, useState } from 'react';

import styles from './PostsPerYearCharts.module.css';

interface PostsPerYearChartsProps {
    stats: PostsPerYear[];
}

interface PostsPerYearGraph extends PostsPerYear {
    percentage: number;
    color: string;
}

const PostsPerYearChart = ({
    stats,
}: PostsPerYearChartsProps): JSX.Element => {
    const [yearData, setYearData] = useState<PostsPerYearGraph[]>([]);

    const availableColors = [
        '#ff0000',
        '#e76000',
        '#ddb400',
        '#15931a',
        '#2659e5',
        '#aa00ff',
    ];

    const getMaxCount = (): number => {
        let max = 0;

        for (let i = 0; i < stats.length; i += 1) {
            const { count } = stats[i];

            if (count > max) {
                max = count;
            }
        }

        return max;
    };

    const calculateData = () => {
        const maxCount = getMaxCount();

        const chartData: PostsPerYearGraph[] = [];

        let colorIdx = 0;

        for (let i = 0; i < stats.length; i += 1) {
            const { year, count } = stats[i];

            if (colorIdx >= availableColors.length) {
                colorIdx = 0;
            }

            chartData.push({
                year,
                count,
                color: availableColors[colorIdx],
                percentage: count === maxCount ? 100 : Math.round((count / maxCount) * 100),
            });

            colorIdx += 1;
        }

        setYearData(chartData);
    };

    useEffect(() => {
        calculateData();
    }, []);

    return (
        <div className={styles.mainContainer}>
            {yearData.map((d) => (
                <div key={d.year} className={styles.container}>
                    <p className={styles.barTitle}><Link href={`/archives/${d.year}`}>{d.year}</Link><span className={styles.mobileStats}>&nbsp;({d.count})</span></p>
                    <div className={styles.bar}>
                        <div className={styles.innerBar} style={{ backgroundColor: d.color, width: `${d.percentage}%` }} />
                    </div>
                    <p className={styles.barLegend}>{d.count}</p>
                </div>
            ))}
        </div>
    );
};

export default PostsPerYearChart;
