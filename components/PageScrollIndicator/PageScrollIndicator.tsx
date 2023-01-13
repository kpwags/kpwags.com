import { useEffect } from 'react';

import styles from './PageScrollIndicator.module.css';

const PageScrollIndicator = (): JSX.Element => {
    const handleScroll = () => {
        const scrollCalculate = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (scrollCalculate / height) * 100;

        const progressBar = document.querySelector('.progress-bar') as HTMLElement;

        if (progressBar && progressBar.style) {
            progressBar.style.width = `${scrolled}%`;
        }
    };

    useEffect(() => {
        if (window && document) {
            window.addEventListener('scroll', handleScroll, true);
        }
    }, []);

    return (
        <div className={styles.scroller}>
            <div className="progress-bar" />
        </div>
    );
};

export default PageScrollIndicator;
