/* eslint-disable max-len */
import Link from 'next/link';
import { useState } from 'react';
import SearchHeaderButton from '@components/SearchHeaderButton';
import SearchBar from '@components/SearchBar';
import ThemeSwitchButton from '@components/ThemeSwitchButton';
import ThemeSwitcher from '@components/ThemeSwitcher';
import RssFeedSelectionBar from '@components/RssFeedSelectionBar';
import RssFeedButton from '@components/RssFeedButton/RssFeedButton';

import styles from './Header.module.css';

const Header = (): JSX.Element => {
    const [searchBarVisible, setSearchBarVisible] = useState<boolean>(false);
    const [themeSwitcherVisible, setThemeSwitcherVisible] = useState<boolean>(false);
    const [rssFeedsVisible, setRssFeedsVisible] = useState<boolean>(false);

    return (
        <>
            <header className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <img src="/images/logo.png" alt="Keith Wagner" />
                        <a href="/">Keith Wagner</a>
                    </div>
                </div>
                <div className={styles.config}>
                    <nav className={styles.nav}>
                        <Link aria-label="Blog" href="/blog">Blog</Link>
                        <Link aria-label="Reading Logs" href="/reading-logs">Reading Logs</Link>
                        <Link aria-label="Book Notes" href="/book-notes">Book Notes</Link>
                        <Link aria-label="About" href="/about">About</Link>
                        <Link aria-label="Uses" href="/uses">Uses</Link>
                    </nav>
                    <SearchHeaderButton onClick={() => setSearchBarVisible(!searchBarVisible)} />
                    <RssFeedButton onClick={() => setRssFeedsVisible(!rssFeedsVisible)} />
                    <ThemeSwitchButton onClick={() => setThemeSwitcherVisible(!themeSwitcherVisible)} />
                </div>
            </header>

            <nav className={styles.mobileNav}>
                <Link href="/blog">Blog</Link>
                <Link href="/reading-logs">Reading Logs</Link>
                <Link href="/book-notes">Book Notes</Link>
                <Link aria-label="About" href="/about">About</Link>
                <Link aria-label="Uses" href="/uses">Uses</Link>
            </nav>

            <RssFeedSelectionBar
                visible={rssFeedsVisible}
            />
            <ThemeSwitcher
                onClose={() => setThemeSwitcherVisible(false)}
                visible={themeSwitcherVisible}
            />
            <SearchBar
                visible={searchBarVisible}
                toggleBar={() => setSearchBarVisible(!searchBarVisible)}
            />
        </>
    );
};

export default Header;
