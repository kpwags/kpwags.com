import { PostsPerTag } from '@models/Stats';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import styles from './MostPopularTagsChart.module.css';

interface MostPopularTagsChartProps {
    stats: PostsPerTag[];
}

interface MostPopularTagsGraph extends PostsPerTag {
    percentage: number;
    color: string;
}

const MostPopularTagsChart = ({
    stats,
}: MostPopularTagsChartProps): JSX.Element => {
    const [tagData, setTagData] = useState<MostPopularTagsGraph[]>([]);

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

        const chartData: MostPopularTagsGraph[] = [];

        let colorIdx = 0;

        for (let i = 0; i < stats.length; i += 1) {
            const { name: tag, url, count } = stats[i];

            if (colorIdx >= availableColors.length) {
                colorIdx = 0;
            }

            chartData.push({
                name: tag,
                url,
                count,
                color: availableColors[colorIdx],
                percentage: count === maxCount ? 100 : Math.round((count / maxCount) * 100),
            });

            colorIdx += 1;
        }

        setTagData(chartData);
    };

    useEffect(() => {
        calculateData();
    }, []);

    return (
        <div className={styles.mainContainer}>
            {tagData.map((d) => (
                <div key={d.name} className={styles.container}>
                    <p className={styles.barTitle}>
                        <Link href={`/tag/${d.url}`}>{d.name}</Link>
                        <span className={styles.mobileStats}>&nbsp;({d.count})</span>
                    </p>
                    <div className={styles.bar}>
                        <div className={styles.innerBar} style={{ backgroundColor: d.color, width: `${d.percentage}%` }} />
                    </div>
                    <p className={styles.barLegend}>{d.count}</p>
                </div>
            ))}
        </div>
    );
};

export default MostPopularTagsChart;
