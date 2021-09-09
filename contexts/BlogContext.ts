import React from 'react';

const BlogContext = React.createContext({
    currentTheme: null,
    changeTheme: null,
});

export { BlogContext };
