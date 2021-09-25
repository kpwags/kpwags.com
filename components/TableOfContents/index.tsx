import { useState } from 'react';
import { HeadingsData } from '@models/HeadingsData';
import { useHeadingsData } from '@lib/hooks/useHeadingsData';
import styled from 'styled-components';
import { useIntersectionObserver } from '@lib/hooks/useIntersectionObserver';

const ToC = styled.nav`
    position: sticky;
    position: -webkit-sticky; /* For Safari */
    top: 24px; /* How far down the page you want your ToC to live */

    /* Give table of contents a scrollbar */
    max-height: calc(100vh - 40px);
    overflow: auto;
    width: 220px;

    a {
        color: black;
        text-decoration: none;
    }

    ul {
        margin: 0;
        padding-inline-start: 0;

        li {
            ul {
                margin-left: 25px;
            }
        }
    }

    li {
        margin: 8px 0;
        padding: 0;
        list-style-type: none;
    }

    li.active > a {
        color: blue;
    }

    li > a:hover {
        color: blue;
    }

    @media all and (max-width: 600px) {
        display: none;
    }
`;

const Headings = ({ headings, activeId }: { headings: HeadingsData[], activeId: string }) => {
    const handleClick = (id: string) => {
        document.querySelector(`#${id}`).scrollIntoView({
            behavior: 'smooth',
        });
    };

    return (
        <ul>
            {headings.map((heading) => (
                <li key={heading.id} className={heading.id === activeId ? 'active' : ''}>
                    <a
                        href={`#${heading.id}`}
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
                                <li key={child.id} className={child.id === activeId ? 'active' : ''}>
                                    <a
                                        href={`#${child.id}`}
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
        <ToC aria-label="table-of-contents">
            <Headings headings={nestedHeadings} activeId={activeId} />
        </ToC>
    );
};

export default TableOfContents;