/* eslint-disable react/jsx-props-no-spreading */
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
import { BlogContext } from '@contexts/BlogContext';
import { useTheme } from '@lib/useTheme';
import { Theme } from '@models/theme';
import { GlobalStyles } from '@lib/GlobalStyles';
import Header from '@components/Header';
import Footer from '@components/Footer';

import '../styles/fonts.css';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
    const { theme, themeLoaded, setMode } = useTheme();
    const [selectedTheme, setSelectedTheme] = useState(theme);

    useEffect(() => {
        setSelectedTheme(theme);
    }, [themeLoaded]);

    const changeTheme = (t: Theme) => {
        setSelectedTheme(t);
        setMode(t);
    };

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Keith Wagner</title>
                <link rel="shortcut icon" href="/favicon.ico" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:site_name" content="Keith Wagner" />
                <meta name="twitter:creator" content="@kpwags" />
            </Head>
            {themeLoaded && (
                <BlogContext.Provider
                    value={{
                        currentTheme: selectedTheme,
                        changeTheme,
                    }}
                >
                    <ThemeProvider theme={selectedTheme}>
                        <GlobalStyles />
                        <div style={{ fontFamily: selectedTheme.fonts.primary }}>
                            <Header />
                            <Component {...pageProps} />
                            <Footer />
                        </div>
                    </ThemeProvider>
                </BlogContext.Provider>
            )}
        </>
    );
}
