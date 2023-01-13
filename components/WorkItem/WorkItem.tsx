import { ReactNode } from 'react';
import styles from './WorkItem.module.css';

interface WorkItemProps {
    name: string
    image: ReactNode
    content: ReactNode
    bordered?: boolean
}

const WorkItem = ({
    name,
    image,
    content,
    bordered = true,
}: WorkItemProps): JSX.Element => (
    <div className={styles.portfolioItem} style={bordered ? { borderBottom: '1px solid black' } : {}}>
        <div className={styles.portfolioImage}>{image}</div>
        <div>
            <h2>{name}</h2>
            <div>{content}</div>
        </div>
    </div>
);

export default WorkItem;
