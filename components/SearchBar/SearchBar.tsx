import SearchForm from '@components/SearchForm';
import { useRouter } from 'next/router';

import styles from './SearchBar.module.css';

type SearchBarProps = {
    visible: boolean
    toggleBar: () => void
}

const SearchBar = ({
    visible,
    toggleBar,
}: SearchBarProps): JSX.Element => {
    const router = useRouter();

    const handleSearch = (keywords: string) => {
        const encodedSearchTerms = decodeURI(keywords);

        toggleBar();

        router.push({
            pathname: '/search',
            query: { q: encodedSearchTerms },
        });
    };

    return (
        <div className={styles.bar} hidden={!visible}>
            <SearchForm
                id="search-bar"
                onSearch={handleSearch}
            />
        </div>
    );
};

export default SearchBar;
