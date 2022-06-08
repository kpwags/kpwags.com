import { useEffect, useState } from 'react';
import _ from 'lodash';
import Theme from '@models/theme';
import { themeDefinitions } from '@lib/themeDefinitions';
import { saveToLocalStorage, retrieveFromLocalStorage } from '../lib/storage';

interface UseThemeReturn {
    theme: Theme
    themeLoaded: boolean
    getCurrentTheme: () => Theme
    changeTheme: (t: Theme) => void
}

export const useTheme = (): UseThemeReturn => {
    const [theme, setTheme] = useState<Theme>(themeDefinitions.data.light);
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

    const getCurrentTheme = (): Theme => {
        const localTheme = retrieveFromLocalStorage('theme') as Theme;

        if (localTheme) {
            return localTheme;
        }

        return getPreferredColorMode();
    };

    useEffect(() => {
        const localTheme = retrieveFromLocalStorage('theme') as Theme;

        if (localTheme) {
            setTheme(localTheme);
            document.documentElement.setAttribute('data-theme', localTheme);
        } else {
            setTheme(getPreferredColorMode());
            document.documentElement.setAttribute('data-theme', getPreferredColorMode());
        }

        setThemeLoaded(true);
    }, []);

    return {
        theme,
        themeLoaded,
        getCurrentTheme,
        changeTheme,
    };
};
