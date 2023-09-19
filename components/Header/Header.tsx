import { useContext, useState } from 'react';
import SearchHeaderButton from '@components/SearchHeaderButton';
import SettingsButton from '@components/SettingsButton';
import RssFeedButton from '@components/RssFeedButton/RssFeedButton';
import SettingsDrawer from '@components/SettingsDrawer';
import { BlogContext } from '@contexts/BlogContext';

import styles from './Header.module.css';

const Header = (): JSX.Element => {
    const [searchBarVisible, setSearchBarVisible] = useState<boolean>(false);
    const [settingsDrawerOpen, setSettingsDrawerOpen] = useState<boolean>(false);
    const [rssFeedsVisible, setRssFeedsVisible] = useState<boolean>(false);

    const { changeTheme, changeColorTheme } = useContext(BlogContext);

    return (
        <header className={styles.header}>
            <SettingsDrawer
                visible={settingsDrawerOpen}
                onChangeColor={(color) => changeColorTheme(color)}
                onChangeMode={(mode) => changeTheme(mode)}
                onClose={() => setSettingsDrawerOpen(false)}
            />
            <SearchHeaderButton onClick={() => setSearchBarVisible(!searchBarVisible)} />
            <RssFeedButton onClick={() => setRssFeedsVisible(!rssFeedsVisible)} />
            <SettingsButton onClick={() => setSettingsDrawerOpen(!settingsDrawerOpen)} />
        </header>
    );
};

export default Header;
