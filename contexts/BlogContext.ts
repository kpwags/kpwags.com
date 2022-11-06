/* eslint-disable @typescript-eslint/no-empty-function */
import Theme, { ColorTheme, FontTheme } from '@models/theme';
import React from 'react';

type BlogContextProps = {
    currentTheme: Theme;
    currentColor: ColorTheme;
    currentFont: FontTheme;
    changeTheme: (theme: Theme) => void
    changeColorTheme: (theme: ColorTheme) => void
    changeFontTheme: (theme: FontTheme) => void
}

const BlogContext = React.createContext<BlogContextProps>({
    currentTheme: 'light',
    currentColor: 'green',
    currentFont: 'sans',
    changeTheme: () => { },
    changeColorTheme: () => { },
    changeFontTheme: () => { },
});

export { BlogContext };
