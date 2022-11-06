import { useEffect } from 'react';
import styled from 'styled-components';

const ScrollIndicator = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 20px;
    background: transparent;
    z-index: 100;

    div {
        height: 5px;
        background: var(--primary-color-3);
        width: 0%;
    }
`;

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
        <ScrollIndicator>
            <div className="progress-bar" />
        </ScrollIndicator>
    );
};

export default PageScrollIndicator;
