/* eslint-disable @typescript-eslint/no-empty-function */
import Theme, { ColorTheme } from '@models/theme';
import React from 'react';

type BlogContextProps = {
    currentTheme: Theme;
    currentColor: ColorTheme;
    changeTheme: (theme: Theme) => void
    changeColorTheme: (theme: ColorTheme) => void
}

const BlogContext = React.createContext<BlogContextProps>({
    currentTheme: 'light',
    currentColor: 'green',
    changeTheme: () => { },
    changeColorTheme: () => { },
});

export { BlogContext };
