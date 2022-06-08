/* eslint-disable @typescript-eslint/no-empty-function */
import Theme from '@models/theme';
import React from 'react';

type BlogContextProps = {
    currentTheme: Theme;
    changeTheme: (theme: Theme) => void
}

const BlogContext = React.createContext<BlogContextProps>({
    currentTheme: 'light',
    changeTheme: () => { },
});

export { BlogContext };
