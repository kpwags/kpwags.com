import { FormEvent } from 'react';
import styled from 'styled-components';

const SearchFormComponent = styled.form`
    input {
        padding: 10px;
        border-radius: 2px;
        width: 300px;
        border: 1px solid var(--black-3);
        margin-right: 15px;
    }

    button {
        background: var(--primary-color-1);
        color: #fefefe;
        border:none;
        padding: 10px 15px;
        font-weight: normal;
        cursor: pointer;

        &:hover {
            background: var(--primary-color-3);
        }
    }
`;

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
        <SearchFormComponent
            onSubmit={search}
        >
            <input
                id={id}
                name="keywords"
                type="text"
                placeholder="Search"
                aria-label="Search Keywords"
                required
            />
            <button type="submit">Search</button>
        </SearchFormComponent>
    );
};

export default SearchForm;
