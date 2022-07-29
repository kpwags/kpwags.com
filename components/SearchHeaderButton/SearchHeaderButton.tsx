/* eslint-disable max-len */
/* eslint-disable no-tabs */
import styled from 'styled-components';

const SearchButton = styled.svg`
    max-height: 1.2rem;
    max-width: 1.2rem;
    margin: 0 14px;
    vertical-align: middle;
    display: inline-block;
    cursor: pointer;

    path {
        fill: var(--green-1);
    }

    @media all and (max-width: 450px) {
        display: none;
    }
`;

type SearchHeaderButtonProps = {
    onClick: () => void
}

const SearchHeaderButton = ({
    onClick,
}: SearchHeaderButtonProps): JSX.Element => (
    <SearchButton
        id="search"
        x="0px"
        y="0px"
        viewBox="0 0 20.000001 19.999997"
        xmlSpace="preserve"
        onClick={onClick}
    >
        <g transform="matrix(0.04098781,0,0,0.04102143,0,-0.00820429)">
            <g>
                <path
                    d="M 481.8,453 341.8,312.9 C 369.4,279.8 386,237.5 386,191.3 386,85.9 299.5,0.2 193.1,0.2 86.7,0.2 0,86 0,191.4 c 0,105.4 86.5,191.1 192.9,191.1 45.2,0 86.8,-15.5 119.8,-41.4 l 140.5,140.5 c 8.2,8.2 20.4,8.2 28.6,0 8.2,-8.2 8.2,-20.4 0,-28.6 z M 41,191.4 c 0,-82.8 68.2,-150.1 151.9,-150.1 83.7,0 151.9,67.3 151.9,150.1 0,82.8 -68.2,150.1 -151.9,150.1 C 109.2,341.5 41,274.1 41,191.4 Z"
                    id="path2"
                />
            </g>
        </g>
    </SearchButton>
);

export default SearchHeaderButton;
