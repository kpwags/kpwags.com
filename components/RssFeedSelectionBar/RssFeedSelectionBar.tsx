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
                <h3>All Posts</h3>
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
                <h3>Photo Blog</h3>
                <ul>
                    <li><a href="/rss/photoblog_atom.xml">Atom</a></li>
                    <li><a href="/rss/photoblog.xml">RSS</a></li>
                    <li><a href="/rss/photoblog.json">JSON</a></li>
                </ul>
            </div>
        </div>
    </div>
);

export default RssFeedSelectionBar;
