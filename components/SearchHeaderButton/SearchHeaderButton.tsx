import { SearchOutlined } from '@ant-design/icons';
import styles from './SearchHeaderButton.module.css';

type SearchHeaderButtonProps = {
    onClick: () => void
}

const SearchHeaderButton = ({
    onClick,
}: SearchHeaderButtonProps): JSX.Element => (
    <SearchOutlined
        className={styles.searchIcon}
        title="Open Search Bar"
        onClick={onClick}
    />
);

export default SearchHeaderButton;
