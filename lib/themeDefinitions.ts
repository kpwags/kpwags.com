import { ThemeData } from '@models/theme';

export const themeDefinitions: ThemeData = {
    data: {
        light: {
            id: 'light_theme',
            name: 'Light',
            colors: {
                background: '#FEFEFE',
                text: '#343434',
                link: 'hsl(225, 93%, 32%)',
                h1: 'hsl(225, 93%, 32%)',
                h2: 'hsl(216, 100%, 20%)',
                blue: 'hsl(225, 93%, 32%)',
                mediumBlue: 'hsl(216, 100%, 20%)',
                darkGray: 'hsl(0, 0%, 40%)',
            },
            font: 'Maven Pro',
        },
        dark: {
            id: 'dark_theme',
            name: 'Dark',
            colors: {
                background: 'hsl(0, 0%, 13%)',
                text: 'hsl(0, 0%, 94%)',
                link: 'hsl(199, 99%, 46%)',
                h1: 'hsl(199, 99%, 46%)',
                h2: 'hsl(209, 79%, 44%)',
                blue: 'hsl(199, 99%, 46%)',
                mediumBlue: 'hsl(209, 79%, 44%)',
                darkGray: 'hsl(0, 0%, 40%)',
            },
            font: 'Maven Pro',
        },
    },
};
