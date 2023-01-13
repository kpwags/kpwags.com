import styles from './TagHeader.module.css';

interface TagHeaderProps {
    name: string
}

const TagHeader = ({ name }: TagHeaderProps): JSX.Element => (
    <h1 className={styles.tagHeaderLine}>
        <div className={styles.prefix}>Posts Tagged</div>
        {name}
    </h1>
);

export default TagHeader;
