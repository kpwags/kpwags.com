import styles from './EmbeddedPost.module.css';

interface EmbeddedPostProps {
    content: string;
    name: string;
    username: string;
    date: string;
    link: string;
    profileLink: string;
}

const EmbeddedPost = ({
    content,
    name,
    username,
    date,
    link,
    profileLink,
}: EmbeddedPostProps): JSX.Element => (
    <div className={styles.embeddedPost}>
        <blockquote className={styles.post}>
            <p>{content}</p>
            - {name} (<a href={profileLink} target="_blank" rel="noreferrer noopener">{username}</a>) <a href={link} target="_blank" rel="noreferrer noopener">{date}</a>
        </blockquote>
    </div>
);

export default EmbeddedPost;
