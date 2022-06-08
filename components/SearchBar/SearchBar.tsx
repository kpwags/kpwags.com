import SearchForm from '@components/SearchForm';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const Bar = styled.div`
    text-align: center;
    margin: 12px 0;
`;

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
        <Bar hidden={!visible}>
            <SearchForm
                id="search-bar"
                onSearch={handleSearch}
            />
        </Bar>
    );
};

export default SearchBar;
