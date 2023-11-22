import { useEffect, useState } from 'react';
import Theme, { ColorTheme, PageWidth } from '@models/theme';
import {
    saveToLocalStorage,
    retrieveFromLocalStorage,
    removeFromLocalStorage,
} from '../lib/storage';

interface UseThemeReturn {
    theme: Theme;
    color: ColorTheme;
    width: PageWidth;
    themeLoaded: boolean;
    getCurrentTheme: () => Theme;
    getCurrentColor: () => ColorTheme;
    getCurrentWidth: () => PageWidth;
    changeTheme: (t: Theme) => void;
    changeColor: (c: ColorTheme) => void;
    changeWidth: (w: PageWidth) => void;
}

export const useTheme = (): UseThemeReturn => {
    const [theme, setTheme] = useState<Theme>('light');
    const [width, setWidth] = useState<PageWidth>('normal');
    const [color, setColor] = useState<ColorTheme>('green');
    const [themeLoaded, setThemeLoaded] = useState(false);

    const getPreferredColorMode = (): Theme => {
        if (typeof window !== 'undefined') {
            const prefferredMode = window.matchMedia('(prefers-color-scheme: dark)');

            if (prefferredMode.matches) {
                return 'dark';
            }
        }

        return 'light';
    };

    const changeTheme = (t: Theme) => {
        if (t === 'system') {
            removeFromLocalStorage('theme');
            document.documentElement.setAttribute('data-theme', getPreferredColorMode());
            return;
        }

        saveToLocalStorage('theme', t);
        document.documentElement.setAttribute('data-theme', t);
        setTheme(t);
    };

    const changeColor = (c: ColorTheme) => {
        saveToLocalStorage('color', c);
        document.documentElement.setAttribute('data-color-theme', c);
        setColor(c);
    };

    const changeWidth = (w: PageWidth) => {
        saveToLocalStorage('width', w);
        document.documentElement.setAttribute('data-width', w);
        setWidth(w);
    };

    const getCurrentTheme = (): Theme => {
        const localTheme = retrieveFromLocalStorage('theme') as Theme;

        if (localTheme) {
            return localTheme;
        }

        return getPreferredColorMode();
    };

    const getCurrentColor = (): ColorTheme => {
        const localStorageColor = retrieveFromLocalStorage('color') as ColorTheme;

        if (localStorageColor) {
            return localStorageColor;
        }

        return color;
    };

    const getCurrentWidth = (): PageWidth => {
        const localStorageWidth = retrieveFromLocalStorage('width') as PageWidth;

        if (localStorageWidth) {
            return localStorageWidth;
        }

        return width;
    };

    useEffect(() => {
        const localTheme = retrieveFromLocalStorage('theme') as Theme;
        const selectedColor = retrieveFromLocalStorage('color') as ColorTheme;
        const selectedWidth = retrieveFromLocalStorage('width') as PageWidth;

        if (localTheme) {
            setTheme(localTheme);
            document.documentElement.setAttribute('data-theme', localTheme);
        } else {
            setTheme(getPreferredColorMode());
            document.documentElement.setAttribute('data-theme', getPreferredColorMode());
        }

        if (selectedColor) {
            setColor(selectedColor);
            document.documentElement.setAttribute('data-color-theme', selectedColor);
        } else {
            setColor('green');
            document.documentElement.setAttribute('data-color-theme', 'green');
        }

        if (selectedWidth) {
            setWidth(selectedWidth);
            document.documentElement.setAttribute('data-width', selectedWidth);
        } else {
            setWidth('normal');
            document.documentElement.setAttribute('data-width', 'normal');
        }

        setThemeLoaded(true);
    }, []);

    return {
        theme,
        color,
        width,
        themeLoaded,
        getCurrentTheme,
        getCurrentColor,
        getCurrentWidth,
        changeTheme,
        changeColor,
        changeWidth,
    };
};
