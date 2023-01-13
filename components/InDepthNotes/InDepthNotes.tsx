import { ReactNode } from 'react';

import styles from './InDepthNote.module.css';

type InDepthNotesProps = {
    url: string;
    title: string;
    source: string;
    children: ReactNode;
}

const InDepthNotes = ({
    source,
    url,
    title,
    children,
}: InDepthNotesProps): JSX.Element => (
    <div className={styles.inDepthNotes}>
        <h3><span className="source">{source}:</span> <a href={url}>{title}</a></h3>
        {children}
    </div>
);

export default InDepthNotes;
