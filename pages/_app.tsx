/* eslint-disable react/jsx-props-no-spreading */
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { BlogContext } from '@contexts/BlogContext';
import { useTheme } from '@hooks/useTheme';
import Header from '@components/Header';
import Footer from '@components/Footer';
// eslint-disable-next-line @typescript-eslint/no-unused-vars-experimental
import Theme, { ColorTheme, FontTheme } from '@models/theme';

import '../styles/fonts.css';
import '../styles/kpwags.css';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
    const {
        theme,
        color,
        font,
        themeLoaded,
        changeTheme,
        changeColor,
        changeFont,
    } = useTheme();

    const [selectedTheme, setSelectedTheme] = useState<Theme>(theme);
    const [selectedColor, setSelectedColor] = useState<ColorTheme>(color);
    const [selectedFont, setSelectedFont] = useState<FontTheme>(font);

    useEffect(() => {
        setSelectedTheme(theme);
        setSelectedColor(color);
        setSelectedFont(font);
    }, [themeLoaded]);

    const toggleTheme = (t: Theme) => {
        changeTheme(t);
        setSelectedTheme(t);
    };

    const toggleColor = (c: ColorTheme) => {
        changeColor(c);
        setSelectedColor(c);
    };

    const toggleFont = (f: FontTheme) => {
        changeFont(f);
        setSelectedFont(f);
    };

    let className = '';

    if (['bookshelf', 'movies', 'games', 'podcasts', 'tvshows'].includes(Component.name.toLowerCase())) {
        className = 'wide';
    }

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>{pageProps.post ? `${pageProps.post.title} - Keith Wagner` : 'Keith Wagner'}</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:site_name" content="Keith Wagner" />
                <meta name="twitter:creator" content="@kpwags" />
                {pageProps.post ? (
                    <>
                        <meta name="description" content={pageProps.post.description || ''} />
                        <meta property="og:type" content="article" />
                        <meta property="og:title" content={pageProps.post.title} />
                        <meta property="og:description" content={pageProps.post.description || ''} />
                        <meta property="og:url" content={`https://kpwags.com${pageProps.post.url}`} />
                        {pageProps.post.socialImageUrl && <meta property="og:image" content={`https://kpwags.com/images/posts/${pageProps.post.socialImageUrl}`} />}
                        {pageProps.post.socialImageUrl && (
                            <>
                                <meta name="twitter:card" content="summary" />
                                <meta name="twitter:site" content="@kpwags" />
                                <meta name="twitter:title" content={pageProps.post.title} />
                                <meta name="twitter:description" content={pageProps.post.description} />
                                <meta name="twitter:image" content={`https://kpwags.com/images/posts/${pageProps.post.socialImageUrl}`} />
                            </>
                        )}
                        {pageProps.post.hasEmbeddedTweet && <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8" />}
                    </>
                ) : null}
            </Head>
            <BlogContext.Provider
                value={{
                    currentTheme: selectedTheme,
                    changeTheme: toggleTheme,
                    currentColor: selectedColor,
                    changeColorTheme: toggleColor,
                    currentFont: selectedFont,
                    changeFontTheme: toggleFont,
                }}
            >
                <main className={className}>
                    <Header />
                    <Component {...pageProps} />
                    <Footer />
                </main>
            </BlogContext.Provider>
        </>
    );
}
