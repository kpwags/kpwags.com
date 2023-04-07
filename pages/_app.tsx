/* eslint-disable react/jsx-props-no-spreading */
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { BlogContext } from '@contexts/BlogContext';
import { useTheme } from '@hooks/useTheme';
import Header from '@components/Header';
import Footer from '@components/Footer';
// eslint-disable-next-line @typescript-eslint/no-unused-vars-experimental
import Theme, { ColorTheme } from '@models/theme';

import '../styles/fonts.css';
import '../styles/kpwags.css';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
    const {
        theme,
        color,
        themeLoaded,
        changeTheme,
        changeColor,
    } = useTheme();

    const [selectedTheme, setSelectedTheme] = useState<Theme>(theme);
    const [selectedColor, setSelectedColor] = useState<ColorTheme>(color);

    useEffect(() => {
        setSelectedTheme(theme);
        setSelectedColor(color);
    }, [themeLoaded]);

    const toggleTheme = (t: Theme) => {
        changeTheme(t);
        setSelectedTheme(t);
    };

    const toggleColor = (c: ColorTheme) => {
        changeColor(c);
        setSelectedColor(c);
    };

    let description: string | null = null;
    let title: string | null = null;
    let url: string | null = null;
    let imageUrl: string | null = null;
    let hasEmbeddedTweets = false;

    if (pageProps.post) {
        description = pageProps.post.description || null;
        title = pageProps.post.title || null;
        url = pageProps.post.url || null;
        imageUrl = pageProps.post.socialImageUrl || null;
        hasEmbeddedTweets = pageProps.post.hasEmbeddedTweet || false;
    }

    if (pageProps.readingLog) {
        description = pageProps.readingLog.description || null;
        title = pageProps.readingLog.title || null;
        url = pageProps.readingLog.url || null;
        imageUrl = pageProps.readingLog.socialImageUrl || null;
    }

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>{title ? `${title} - Keith Wagner` : 'Keith Wagner'}</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:site_name" content="Keith Wagner" />
                {pageProps.post || pageProps.readingLog ? (
                    <>
                        <meta name="description" content={description || ''} />
                        <meta property="og:type" content="article" />
                        <meta property="og:title" content={title} />
                        <meta property="og:description" content={description || ''} />
                        <meta property="og:url" content={`https://kpwags.com${url}`} />
                        {imageUrl && <meta property="og:image" content={`https://kpwags.com/${imageUrl}`} />}
                        {hasEmbeddedTweets && <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8" />}
                    </>
                ) : null}
            </Head>
            <BlogContext.Provider
                value={{
                    currentTheme: selectedTheme,
                    changeTheme: toggleTheme,
                    currentColor: selectedColor,
                    changeColorTheme: toggleColor,
                }}
            >
                <Header />
                <Component {...pageProps} />
                <Footer />
            </BlogContext.Provider>
        </>
    );
}
