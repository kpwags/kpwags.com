import { useEffect, useState } from 'react';
import _ from 'lodash';
import { Theme } from '@models/theme';
import { themeDefinitions } from '@lib/themeDefinitions';
import { saveToLocalStorage, retrieveFromLocalStorage } from './storage';

export type FontOptions = 'sans' | 'serif' | 'mono';
export type ThemeMode = 'dark' | 'light';

interface UseThemeReturn {
    theme: Theme
    themeLoaded: boolean
    getCurrentTheme: () => Theme
    setMode: (mode: ThemeMode) => Theme
    setFont: (fontStyle: FontOptions) => Theme
}

export const useTheme = (): UseThemeReturn => {
    const [theme, setTheme] = useState<Theme>(themeDefinitions.data.light);
    const [themeLoaded, setThemeLoaded] = useState(false);

    const getPreferredColorMode = (): 'light' | 'dark' => {
        if (typeof window !== 'undefined') {
            const prefferredMode = window.matchMedia('(prefers-color-scheme: dark)');

            if (prefferredMode.matches) {
                return 'dark';
            }
        }

        return 'light';
    };

    const getCurrentTheme = (): Theme => {
        const localTheme = retrieveFromLocalStorage('theme', true) as Theme;

        if (localTheme) {
            return localTheme;
        }

        const preferredColorMode = getPreferredColorMode();

        if (preferredColorMode === 'dark') {
            return themeDefinitions.data.dark;
        }

        return themeDefinitions.data.light;
    };

    const changeTheme = (mode: ThemeMode, fontStyle: FontOptions): Theme => {
        switch (fontStyle) {
            case 'serif':
                if (mode === 'dark') {
                    saveToLocalStorage('theme', JSON.stringify(themeDefinitions.data.darkSerif));
                    setTheme(themeDefinitions.data.darkSerif);
                    return themeDefinitions.data.darkSerif;
                }

                saveToLocalStorage('theme', JSON.stringify(themeDefinitions.data.lightSerif));
                setTheme(themeDefinitions.data.lightSerif);
                return themeDefinitions.data.lightSerif;

            case 'mono':
                if (mode === 'dark') {
                    saveToLocalStorage('theme', JSON.stringify(themeDefinitions.data.darkMono));
                    setTheme(themeDefinitions.data.darkMono);
                    return themeDefinitions.data.darkMono;
                }

                saveToLocalStorage('theme', JSON.stringify(themeDefinitions.data.lightMono));
                setTheme(themeDefinitions.data.lightMono);
                return themeDefinitions.data.lightMono;

            case 'sans':
            default:
                if (mode === 'dark') {
                    saveToLocalStorage('theme', JSON.stringify(themeDefinitions.data.dark));
                    setTheme(themeDefinitions.data.dark);
                    return themeDefinitions.data.dark;
                }

                saveToLocalStorage('theme', JSON.stringify(themeDefinitions.data.light));
                setTheme(themeDefinitions.data.light);
                return themeDefinitions.data.light;
                break;
        }
    };

    const setMode = (mode: ThemeMode): Theme => {
        switch (getCurrentTheme().id) {
            case 'dark_serif_theme':
            case 'light_serif_theme':
                return changeTheme(mode, 'serif');

            case 'dark_mono_theme':
            case 'light_mono_theme':
                return changeTheme(mode, 'mono');

            case 'dark_theme':
            case 'light_theme':
            default:
                return changeTheme(mode, 'sans');
        }
    };

    const setFont = (fontStyle: FontOptions): Theme => {
        switch (getCurrentTheme().id) {
            case 'dark_theme':
            case 'dark_serif_theme':
            case 'dark_mono_theme':
                return changeTheme('dark', fontStyle);

            case 'light_theme':
            case 'light_serif_theme':
            case 'light_mono_theme':
            default:
                return changeTheme('light', fontStyle);
        }
    };

    useEffect(() => {
        const localTheme = retrieveFromLocalStorage('theme', true) as Theme;

        if (localTheme) {
            setTheme(localTheme);
        } else {
            const preferredColorMode = getPreferredColorMode();

            if (preferredColorMode === 'dark') {
                setTheme(themeDefinitions.data.dark);
            } else {
                setTheme(themeDefinitions.data.light);
            }
        }

        setThemeLoaded(true);
    }, []);

    return {
        theme,
        themeLoaded,
        setMode,
        setFont,
        getCurrentTheme,
    };
};
