/* eslint-disable react/jsx-props-no-spreading */
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { BlogContext } from '@contexts/BlogContext';
import { useTheme, ThemeMode, FontOptions } from '@lib/useTheme';
import Header from '@components/Header';
import Footer from '@components/Footer';

import '../styles/fonts.css';
import '../styles/kpwags.css';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
    const {
        theme,
        themeLoaded,
        setMode,
        setFont,
    } = useTheme();
    const [selectedTheme, setSelectedTheme] = useState(theme);

    useEffect(() => {
        setSelectedTheme(theme);
    }, [themeLoaded]);

    const changeThemeMode = (t: ThemeMode) => {
        const newTheme = setMode(t);
        setSelectedTheme(newTheme);
    };

    const changeFont = (f: FontOptions) => {
        const newTheme = setFont(f);
        setSelectedTheme(newTheme);
    };

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>{pageProps.post ? `${pageProps.post.title} - Keith Wagner` : 'Keith Wagner'}</title>
                <link rel="shortcut icon" href="/favicon.ico" />
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
                        {pageProps.post.socialImageWidth && <meta property="og:image:width" content={pageProps.post.socialImageWidth.toString()} />}
                        {pageProps.post.socialImageHeight && <meta property="og:image:height" content={pageProps.post.socialImageHeight.toString()} />}
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
                    changeThemeMode,
                    changeFont,
                }}
            >
                <main>
                    <Header />
                    <Component {...pageProps} />
                    <Footer />
                </main>
            </BlogContext.Provider>
        </>
    );
}
