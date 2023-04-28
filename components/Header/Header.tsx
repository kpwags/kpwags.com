/* eslint-disable max-len */
import Link from 'next/link';
import LightDarkSwitch from '@components/LightDarkSwitch';
import { useTheme } from '@hooks/useTheme';
import { useContext, useState } from 'react';
import { BlogContext } from '@contexts/BlogContext';
import SearchHeaderButton from '@components/SearchHeaderButton';
import SearchBar from '@components/SearchBar';
import ThemeSwitchButton from '@components/ThemeSwitchButton';
import ThemeSwitcher from '@components/ThemeSwitcher';
import { ColorTheme } from '@models/theme';

import RssFeedSelectionBar from '@components/RssFeedSelectionBar';
import RssFeedButton from '@components/RssFeedButton/RssFeedButton';
import styles from './Header.module.css';

const Header = (): JSX.Element => {
    const { getCurrentTheme } = useTheme();

    const [searchBarVisible, setSearchBarVisible] = useState<boolean>(false);
    const [themeSwitcherVisible, setThemeSwitcherVisible] = useState<boolean>(false);
    const [rssFeedsVisible, setRssFeedsVisible] = useState<boolean>(false);

    const { changeTheme, changeColorTheme } = useContext(BlogContext);

    const changeMode = () => {
        if (getCurrentTheme() === 'light') {
            changeTheme('dark');
        } else {
            changeTheme('light');
        }
    };

    const changeColor = (color: ColorTheme) => {
        changeColorTheme(color);
    };

    return (
        <>
            <header className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <img src="/images/logo.png" alt="Keith Wagner" />
                        <a href="/">Keith Wagner</a>
                    </div>
                    <nav className={styles.nav}>
                        <Link aria-label="Blog" href="/blog">Blog</Link>
                        <Link aria-label="Reading Logs" href="/reading-logs">Reading Logs</Link>
                        <Link aria-label="About" href="/about" className="hide-on-tablet">About</Link>
                    </nav>
                </div>
                <div className={styles.config}>
                    <ThemeSwitchButton onClick={() => setThemeSwitcherVisible(!themeSwitcherVisible)} />
                    <SearchHeaderButton onClick={() => setSearchBarVisible(!searchBarVisible)} />
                    <RssFeedButton onClick={() => setRssFeedsVisible(!rssFeedsVisible)} />
                    <LightDarkSwitch
                        onClick={() => changeMode()}
                    />
                </div>
            </header>

            <nav className={styles.mobileNav}>
                <a href="/blog">Blog</a>
                <a href="/reading-logs">Reading Logs</a>
                <a href="/reading-logs">Photography</a>
                <a href="/about">About</a>
            </nav>

            <RssFeedSelectionBar
                visible={rssFeedsVisible}
            />
            <ThemeSwitcher
                visible={themeSwitcherVisible}
                onChangeColor={(color) => changeColor(color)}
            />
            <SearchBar
                visible={searchBarVisible}
                toggleBar={() => setSearchBarVisible(!searchBarVisible)}
            />
        </>
    );
};

export default Header;
