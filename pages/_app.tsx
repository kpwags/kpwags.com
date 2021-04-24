/* eslint-disable react/jsx-props-no-spreading */
import { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
import { useTheme } from '@lib/useTheme';
import { GlobalStyles } from '@lib/GlobalStyles';

import '../styles/mavenpro.css';

const Container = styled.div`
  margin: 5px auto 5px auto;
`;

export default function App({ Component, pageProps }: AppProps): JSX.Element {
    const { theme, themeLoaded } = useTheme();
    const [selectedTheme, setSelectedTheme] = useState(theme);

    useEffect(() => {
        setSelectedTheme(theme);
    }, [themeLoaded]);

    return (
        <>
            {
                themeLoaded && (
                    <ThemeProvider theme={selectedTheme}>
                        <GlobalStyles />
                        <Container style={{ fontFamily: selectedTheme.font }}>
                            <Component {...pageProps} />
                        </Container>
                    </ThemeProvider>
                )
            }
        </>
    );
}
