import { SettingOutlined } from '@ant-design/icons';

type ThemeSwitchButtonProps = {
    onClick: () => void
}

const ThemeSwitchButton = ({
    onClick,
}: ThemeSwitchButtonProps): JSX.Element => (
    <SettingOutlined
        className="search-icon"
        title="Change Theme Settings"
        onClick={onClick}
    />
);

export default ThemeSwitchButton;
