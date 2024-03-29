import { useState } from 'react';
import { HeadingsData } from '@models/HeadingsData';
import { useHeadingsData } from '@hooks/useHeadingsData';
import { useIntersectionObserver } from '@hooks/useIntersectionObserver';

import styles from './TableOfContents.module.css';

const Headings = ({ headings, activeId }: { headings: HeadingsData[], activeId: string }) => {
    const handleClick = (id: string) => {
        document.querySelector(`#${id}`).scrollIntoView({
            behavior: 'smooth',
        });
    };

    return (
        <ul className="table-of-contents">
            {headings.map((heading) => (
                <li
                    key={heading.id}
                    aria-label={heading.title}
                    className={heading.id === activeId ? 'active' : ''}
                >
                    <a
                        href={`#${heading.id}`}
                        aria-label={heading.title}
                        onClick={(e) => {
                            e.preventDefault();
                            handleClick(heading.id);
                        }}
                    >
                        {heading.title}
                    </a>
                    {heading.items.length > 0 && (
                        <ul>
                            {heading.items.map((child) => (
                                <li
                                    key={child.id}
                                    aria-label={child.title}
                                    className={child.id === activeId ? 'active' : ''}
                                >
                                    <a
                                        href={`#${child.id}`}
                                        aria-label={child.title}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleClick(child.id);
                                        }}
                                    >
                                        {child.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );
};

const TableOfContents = (): JSX.Element => {
    const [activeId, setActiveId] = useState<string>('');
    const { nestedHeadings } = useHeadingsData();
    useIntersectionObserver(setActiveId);

    return (
        <nav className={styles.tableOfContents} aria-label="table-of-contents">
            <Headings headings={nestedHeadings} activeId={activeId} />
        </nav>
    );
};

export default TableOfContents;
