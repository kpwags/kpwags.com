import { useState, useEffect } from 'react';
import { HeadingsData } from '@models/HeadingsData';
import getNestedHeadings
    from '@lib/getNestedHeadings';

const useHeadingsData = (): { nestedHeadings: HeadingsData[] } => {
    const [nestedHeadings, setNestedHeadings] = useState<HeadingsData[]>([]);

    useEffect(() => {
        const headingElements = Array.from(
            document.querySelectorAll('h2, h3'),
        ) as HTMLHeadingElement[];

        const newNestedHeadings = getNestedHeadings(headingElements);
        setNestedHeadings(newNestedHeadings);
    }, []);

    return { nestedHeadings };
};

export { useHeadingsData };
