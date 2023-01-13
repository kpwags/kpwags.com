import { FormEvent } from 'react';

import styles from './SearchForm.module.css';

type SearchFormProps = {
    id: string
    onSearch: (keywords: string) => void
}

const SearchForm = ({
    id,
    onSearch,
}: SearchFormProps): JSX.Element => {
    const search = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const keywordsField = document.getElementById(id) as HTMLInputElement;
        const keywords = keywordsField.value;

        onSearch(keywords);
    };

    return (
        <form
            onSubmit={search}
        >
            <input
                className={styles.searchField}
                id={id}
                name="keywords"
                type="text"
                placeholder="Search"
                aria-label="Search Keywords"
                required
            />
            <button type="submit" className={styles.searchButton}>Search</button>
        </form>
    );
};

export default SearchForm;
