import TableOfContents from '@components/TableOfContents';
import styles from './TableOfContentsPage.module.css';

type TableOfContentsPageProps = {
    children: React.ReactNode
}

const TableOfContentsPage = ({ children }: TableOfContentsPageProps): JSX.Element => (
    <div className={styles.container}>
        <TableOfContents />
        <div className={styles.mainContent}>
            {children}
        </div>
    </div>
);

export default TableOfContentsPage;
