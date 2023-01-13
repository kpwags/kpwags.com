import Podcast from '@components/Podcast/Podcast';
import { PodcastCategory } from '@models/podcasts';
import { Fragment } from 'react';

import styles from './PodcastContainer.module.css';

interface PodcastContainerProps {
    podcasts: PodcastCategory[];
}

const PodcastContainer = ({
    podcasts,
}: PodcastContainerProps): JSX.Element => (
    <div className={styles.container}>
        <h1>Podcasts I Listen To</h1>

        <p>Yes, I subscribe to a lot of podcasts. No, I don&apos;t necessarily listen to every episode.</p>

        <ul className={styles.categories}>
            {podcasts.map(({ name: categoryName, podcasts: podcastsInCategory }) => (
                <Fragment key={categoryName}>
                    <li>{categoryName}</li>

                    <div className={styles.podcastGrid}>
                        {podcastsInCategory
                            .filter((p) => p.artwork !== undefined)
                            .map(({ name: podcastName, link, artwork }) => (
                                <Podcast podcastName={podcastName} link={link} artwork={artwork} key={link} />
                            ))}
                    </div>
                </Fragment>
            ))}
        </ul>
    </div>
);

export default PodcastContainer;
