import styles from './RssFeedSelectionBar.module.css';

type RssFeedSelectionBarProps = {
    visible: boolean;
}

const RssFeedSelectionBar = ({
    visible,
}: RssFeedSelectionBarProps): JSX.Element => (
    <div className={styles.bar} hidden={!visible}>
        <h3 className={styles.barHeader}>RSS Feeds</h3>
        <div className={styles.feedOptions}>
            <div>
                <h3>Everything</h3>
                <ul>
                    <li><a href="/rss/atom.xml">Atom</a></li>
                    <li><a href="/rss/feed.xml">RSS</a></li>
                    <li><a href="/rss/feed.json">JSON</a></li>
                </ul>
            </div>
            <div>
                <h3>Blog Posts</h3>
                <ul>
                    <li><a href="/rss/blogposts_atom.xml">Atom</a></li>
                    <li><a href="/rss/blogposts_feed.xml">RSS</a></li>
                    <li><a href="/rss/blogposts_feed.json">JSON</a></li>
                </ul>
            </div>
            <div>
                <h3>Reading Logs</h3>
                <ul>
                    <li><a href="/rss/readinglog_atom.xml">Atom</a></li>
                    <li><a href="/rss/readinglog_feed.xml">RSS</a></li>
                    <li><a href="/rss/readinglog_feed.json">JSON</a></li>
                </ul>
            </div>
            <div>
                <h3>Book Notes</h3>
                <ul>
                    <li><a href="/rss/booknotes_atom.xml">Atom</a></li>
                    <li><a href="/rss/booknotes_feed.xml">RSS</a></li>
                    <li><a href="/rss/booknotes_feed.json">JSON</a></li>
                </ul>
            </div>
        </div>
    </div>
);

export default RssFeedSelectionBar;
