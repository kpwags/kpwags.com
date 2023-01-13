import styles from './Podcast.module.css';

type PodcastProps = {
    podcastName: string;
    link: string;
    artwork: string;
};

const Podcast = ({ podcastName, link, artwork }: PodcastProps): JSX.Element => (
    <div className={styles.item}>
        <a href={link} title={podcastName} target="_blank" rel="noreferrer">
            <picture>
                <source srcSet={`/images/podcasts/${artwork}`} media="(min-width: 767px)" />
                <img src="/images/1x1.png" alt={podcastName} />
            </picture>
        </a>
        <a href={link} title={podcastName} target="_blank" rel="noreferrer">
            {podcastName}
        </a>
    </div>
);

export default Podcast;
