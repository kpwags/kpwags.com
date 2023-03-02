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
import { ColorTheme, FontTheme } from '@models/theme';

import RssFeedSelectionBar from '@components/RssFeedSelectionBar';
import RssFeedButton from '@components/RssFeedButton/RssFeedButton';
import styles from './Header.module.css';

const Header = (): JSX.Element => {
    const { getCurrentTheme } = useTheme();

    const [searchBarVisible, setSearchBarVisible] = useState<boolean>(false);
    const [themeSwitcherVisible, setThemeSwitcherVisible] = useState<boolean>(false);
    const [rssFeedsVisible, setRssFeedsVisible] = useState<boolean>(false);

    const { changeTheme, changeColorTheme, changeFontTheme } = useContext(BlogContext);

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

    const changeFont = (font: FontTheme) => {
        changeFontTheme(font);
    };

    return (
        <>
            <div className={styles.stickyToggle}>
                <LightDarkSwitch
                    onClick={() => {
                        changeMode();
                    }}
                />
            </div>
            <header className={styles.header}>
                <div className={styles.siteTitle}>
                    <Link aria-label="Home" href="/"><a>Keith Wagner</a></Link>
                </div>
                <nav className={styles.nav}>
                    <Link aria-label="Blog" href="/blog"><a>Blog</a></Link>
                    <Link aria-label="Photo Blog" href="/photoblog"><a>Photo Blog</a></Link>
                    <Link aria-label="Photography" href="/photography"><a>Photography</a></Link>
                    <Link aria-label="About" href="/about"><a className="hide-on-tablet">About</a></Link>
                    <ThemeSwitchButton onClick={() => setThemeSwitcherVisible(!themeSwitcherVisible)} />
                    <SearchHeaderButton onClick={() => setSearchBarVisible(!searchBarVisible)} />
                    <RssFeedButton onClick={() => setRssFeedsVisible(!rssFeedsVisible)} />
                    <span className={styles.normalToggle}>
                        <LightDarkSwitch
                            onClick={() => changeMode()}
                        />
                    </span>
                </nav>
            </header>
            <RssFeedSelectionBar
                visible={rssFeedsVisible}
            />
            <ThemeSwitcher
                visible={themeSwitcherVisible}
                onChangeColor={(color) => changeColor(color)}
                onChangeFont={(font) => changeFont(font)}
            />
            <SearchBar
                visible={searchBarVisible}
                toggleBar={() => setSearchBarVisible(!searchBarVisible)}
            />
        </>
    );
};

export default Header;
