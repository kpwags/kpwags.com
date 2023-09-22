import { useState } from 'react';
import SearchHeaderButton from '@components/SearchHeaderButton';
import SettingsButton from '@components/SettingsButton';
import RssFeedButton from '@components/RssFeedButton/RssFeedButton';

import styles from './Header.module.css';

interface HeaderProps {
    onSettingsButtonClicked: () => void;
}

const Header = ({
    onSettingsButtonClicked,
}: HeaderProps): JSX.Element => {
    const [searchBarVisible, setSearchBarVisible] = useState<boolean>(false);
    const [rssFeedsVisible, setRssFeedsVisible] = useState<boolean>(false);

    return (
        <header className={styles.header}>
            <SearchHeaderButton onClick={() => setSearchBarVisible(!searchBarVisible)} />
            <RssFeedButton onClick={() => setRssFeedsVisible(!rssFeedsVisible)} />
            <SettingsButton onClick={onSettingsButtonClicked} />
        </header>
    );
};

export default Header;
