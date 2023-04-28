import styles from './SearchHeaderButton.module.css';

type SearchHeaderButtonProps = {
    onClick: () => void
}

const SearchHeaderButton = ({
    onClick,
}: SearchHeaderButtonProps): JSX.Element => (
    <svg
        className={styles.searchButton}
        onClick={() => onClick()}
        width="20px"
        height="20px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g id="search">
            <path
                id="Vector"
                d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </g>
    </svg>
);

export default SearchHeaderButton;
