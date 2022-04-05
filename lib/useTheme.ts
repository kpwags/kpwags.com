import { useEffect, useState } from 'react';
import _ from 'lodash';
import { Theme } from '@models/theme';
import { themeDefinitions } from '@lib/themeDefinitions';
import { saveToLocalStorage, retrieveFromLocalStorage } from './storage';

interface UseThemeReturn {
    theme: Theme;
    themeLoaded: boolean;
    setMode: (mode: Theme) => void;
    getFonts: () => string[];
}

export const useTheme = (): UseThemeReturn => {
    const [theme, setTheme] = useState<Theme>(themeDefinitions.data.lightSerif);
    const [themeLoaded, setThemeLoaded] = useState(false);

    const setMode = (mode: Theme) => {
        saveToLocalStorage('theme', JSON.stringify(mode));
        setTheme(mode);
    };

    const getFonts = (): string[] => {
        const allFonts = _.values(_.mapValues(themeDefinitions.data, 'font')) as string[];

        return allFonts;
    };

    const getPreferredColorMode = (): 'light' | 'dark' => {
        if (typeof window !== 'undefined') {
            const prefferredMode = window.matchMedia('(prefers-color-scheme: dark)');

            if (prefferredMode.matches) {
                return 'dark';
            }
        }

        return 'light';
    };

    useEffect(() => {
        const localTheme = retrieveFromLocalStorage('theme', true) as Theme;

        if (localTheme) {
            setTheme(localTheme);
        } else {
            const preferredColorMode = getPreferredColorMode();

            if (preferredColorMode === 'dark') {
                setTheme(themeDefinitions.data.darkSerif);
            } else {
                setTheme(themeDefinitions.data.lightSerif);
            }
        }

        setThemeLoaded(true);
    }, []);

    return {
        theme,
        themeLoaded,
        setMode,
        getFonts,
    };
};
