import Link from 'next/link';
import styled from 'styled-components';

const SearchBlock = styled.div`
    margin: 25px 0;
`;

const SearchLink = (): JSX.Element => (
    <SearchBlock>
        <Link href="/search">
            <a>Search Posts</a>
        </Link>
    </SearchBlock>
);

export default SearchLink;
