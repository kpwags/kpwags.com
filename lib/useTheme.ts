import { useEffect, useState } from 'react';
import _ from 'lodash';
import { Theme } from '@models/theme';
import { themeDefinitions } from '@lib/themeDefinitions';
import { saveToLocalStorage, retrieveFromLocalStorage } from './storage';

interface UseThemeReturn {
    theme: Theme,
    themeLoaded: boolean,
    setMode: (mode: Theme) => void,
    getFonts: () => string[]
}

export const useTheme = (): UseThemeReturn => {
    const [theme, setTheme] = useState<Theme>(themeDefinitions.data.light);
    const [themeLoaded, setThemeLoaded] = useState(false);

    const setMode = (mode: Theme) => {
        saveToLocalStorage('theme', JSON.stringify(mode));
        setTheme(mode);
    };

    const getFonts = (): string[] => {
        const allFonts = _.values(_.mapValues(themeDefinitions.data, 'font')) as string[];

        return allFonts;
    };

    useEffect(() => {
        const localTheme = retrieveFromLocalStorage('theme', true) as Theme;

        if (localTheme) {
            setTheme(localTheme);
        } else {
            setTheme(themeDefinitions.data.light);
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
