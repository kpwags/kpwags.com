import { SettingOutlined } from '@ant-design/icons';
import styles from './ThemeSwitchButton.module.css';

type ThemeSwitchButtonProps = {
    onClick: () => void
}

const ThemeSwitchButton = ({
    onClick,
}: ThemeSwitchButtonProps): JSX.Element => (
    <SettingOutlined
        className={styles.settingsIcon}
        title="Change Theme Settings"
        onClick={onClick}
    />
);

export default ThemeSwitchButton;
