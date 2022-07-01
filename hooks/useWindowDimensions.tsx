import { useState, useEffect } from 'react';

function getWindowDimensions() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    return {
        width,
        height,
    };
}

const useWindowDimensions = (): { width: number, height: number } => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
};

export default useWindowDimensions;
