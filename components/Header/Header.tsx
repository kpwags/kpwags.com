import { useState } from 'react';
import SearchHeaderButton from '@components/SearchHeaderButton';
import ThemeSwitchButton from '@components/ThemeSwitchButton';
import RssFeedButton from '@components/RssFeedButton/RssFeedButton';

import styles from './Header.module.css';

const Header = (): JSX.Element => {
    const [searchBarVisible, setSearchBarVisible] = useState<boolean>(false);
    const [themeSwitcherVisible, setThemeSwitcherVisible] = useState<boolean>(false);
    const [rssFeedsVisible, setRssFeedsVisible] = useState<boolean>(false);

    return (
        <header className={styles.header}>
            <SearchHeaderButton onClick={() => setSearchBarVisible(!searchBarVisible)} />
            <RssFeedButton onClick={() => setRssFeedsVisible(!rssFeedsVisible)} />
            <ThemeSwitchButton onClick={() => setThemeSwitcherVisible(!themeSwitcherVisible)} />
        </header>
    );
};

export default Header;
