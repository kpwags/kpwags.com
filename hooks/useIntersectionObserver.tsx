/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from 'react';

const useIntersectionObserver = (setActiveId: (val: string) => void): any => {
    const headingElementsRef = useRef<any>({});

    useEffect(() => {
        const headingElements = Array.from(document.querySelectorAll('h2, h3')) as HTMLHeadingElement[];

        const callback = (headings: IntersectionObserverEntry[]) => {
            headingElementsRef.current = headings.reduce((map, headingElement) => {
                // eslint-disable-next-line no-param-reassign
                map[headingElement.target.id] = headingElement;

                return map;
            }, headingElementsRef.current);

            const visibleHeadings: any = [];

            Object.keys(headingElementsRef.current).forEach((key) => {
                const headingElement = headingElementsRef.current[key];
                if (headingElement.isIntersecting) {
                    visibleHeadings.push(headingElement);
                }
            });

            const getIndexFromId = (id: string): number => headingElements.findIndex((heading) => heading.id === id);

            if (visibleHeadings.length === 1) {
                setActiveId(visibleHeadings[0].target.id);
            } else if (visibleHeadings.length > 1) {
                const sortedVisibleHeadings = visibleHeadings.sort(
                    (a: any, b: any) => getIndexFromId(a.target.id) > getIndexFromId(b.target.id),
                );
                setActiveId(sortedVisibleHeadings[0].target.id);
            }
        };

        const observer = new IntersectionObserver(callback, {
            rootMargin: '-110px 0px -40% 0px',
        });

        headingElements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);
};

export { useIntersectionObserver };
