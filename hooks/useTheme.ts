import { useEffect, useState } from 'react';
import Theme, { ColorTheme } from '@models/theme';
import {
    saveToLocalStorage,
    retrieveFromLocalStorage,
    removeFromStorage,
} from '../lib/storage';

interface UseThemeReturn {
    theme: Theme;
    color: ColorTheme;
    themeLoaded: boolean;
    getCurrentTheme: () => Theme;
    getCurrentColor: () => ColorTheme;
    changeTheme: (t: Theme) => void;
    changeColor: (c: ColorTheme) => void;
}

export const useTheme = (): UseThemeReturn => {
    const [theme, setTheme] = useState<Theme>('light');
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
            removeFromStorage('theme');
            setTheme(getPreferredColorMode());
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

    useEffect(() => {
        const localTheme = retrieveFromLocalStorage('theme') as Theme;
        const selectedColor = retrieveFromLocalStorage('color') as ColorTheme;

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

        setThemeLoaded(true);
    }, []);

    return {
        theme,
        color,
        themeLoaded,
        getCurrentTheme,
        getCurrentColor,
        changeTheme,
        changeColor,
    };
};
