import { createGlobalStyle } from 'styled-components';
import { Theme } from '@models/theme';

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }: { theme: Theme }) => theme.colors.background};
        color: ${({ theme }: { theme: Theme }) => theme.colors.text};
        font-family: ${({ theme }: { theme: Theme }) => theme.font};
        transition: all 0.50s linear;
    }

    a {
        color: ${({ theme }) => theme.colors.link};
        cursor: pointer;
        text-decoration: none;
    }
`;
