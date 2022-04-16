/* eslint-disable @typescript-eslint/no-empty-function */
import { themeDefinitions } from '@lib/themeDefinitions';
import { FontOptions, ThemeMode } from '@lib/useTheme';
import { Theme } from '@models/theme';
import React from 'react';

type BlogContextProps = {
    currentTheme: Theme
    changeThemeMode: (mode: ThemeMode) => void
    changeFont: (fontStyle: FontOptions) => void
}

const BlogContext = React.createContext<BlogContextProps>({
    currentTheme: themeDefinitions.data.light,
    changeThemeMode: () => { },
    changeFont: () => { },
});

export { BlogContext };
