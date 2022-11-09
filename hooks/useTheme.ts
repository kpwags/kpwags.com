import { useEffect, useState } from 'react';
import Theme, { ColorTheme, FontTheme } from '@models/theme';
import { saveToLocalStorage, retrieveFromLocalStorage } from '../lib/storage';

interface UseThemeReturn {
    theme: Theme;
    color: ColorTheme;
    font: FontTheme;
    themeLoaded: boolean;
    getCurrentTheme: () => Theme;
    getCurrentColor: () => ColorTheme;
    getCurrentFont: () => FontTheme;
    changeTheme: (t: Theme) => void;
    changeColor: (c: ColorTheme) => void;
    changeFont: (f: FontTheme) => void;
}

export const useTheme = (): UseThemeReturn => {
    const [theme, setTheme] = useState<Theme>('light');
    const [color, setColor] = useState<ColorTheme>('green');
    const [font, setFont] = useState<FontTheme>('sans');
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
        saveToLocalStorage('theme', t);
        document.documentElement.setAttribute('data-theme', t);
        setTheme(t);
    };

    const changeColor = (c: ColorTheme) => {
        saveToLocalStorage('color', c);
        document.documentElement.setAttribute('data-color-theme', c);
        setColor(c);
    };

    const changeFont = (f: FontTheme) => {
        saveToLocalStorage('font', f);
        document.documentElement.setAttribute('data-font-theme', f);
        setFont(f);
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

    const getCurrentFont = (): FontTheme => {
        const localStorageFont = retrieveFromLocalStorage('font') as FontTheme;

        if (localStorageFont) {
            return localStorageFont;
        }

        return font;
    };

    useEffect(() => {
        const localTheme = retrieveFromLocalStorage('theme') as Theme;
        const selectedColor = retrieveFromLocalStorage('color') as ColorTheme;
        const selectedFont = retrieveFromLocalStorage('font') as FontTheme;

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

        if (selectedFont) {
            setFont(selectedFont);
            document.documentElement.setAttribute('data-font-theme', selectedFont);
        } else {
            setFont('sans');
            document.documentElement.setAttribute('data-font-theme', 'sans');
        }

        setThemeLoaded(true);
    }, []);

    return {
        theme,
        color,
        font,
        themeLoaded,
        getCurrentTheme,
        getCurrentColor,
        getCurrentFont,
        changeTheme,
        changeColor,
        changeFont,
    };
};
