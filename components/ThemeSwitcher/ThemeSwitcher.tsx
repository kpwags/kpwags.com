import { ColorTheme } from '@models/theme';
import styles from './ThemeSwitcher.module.css';

type ThemeSwitcherProps = {
    visible: boolean;
    onChangeColor: (color: ColorTheme) => void;
}

const ThemeSwitcher = ({
    visible,
    onChangeColor,
}: ThemeSwitcherProps): JSX.Element => (
    <div className={styles.bar} hidden={!visible}>
        <h3>Choose Color</h3>
        <div className={styles.colorButtons}>
            <button
                type="button"
                title="red"
                className={`${styles.themeColor} ${styles.red}`}
                onClick={() => onChangeColor('red')}
            >
                &nbsp;
            </button>
            <button
                type="button"
                title="orange"
                className={`${styles.themeColor} ${styles.orange}`}
                onClick={() => onChangeColor('orange')}
            >
                &nbsp;
            </button>
            <button
                type="button"
                title="green"
                className={`${styles.themeColor} ${styles.green}`}
                onClick={() => onChangeColor('green')}
            >
                &nbsp;
            </button>
            <button
                type="button"
                title="blue"
                className={`${styles.themeColor} ${styles.blue}`}
                onClick={() => onChangeColor('blue')}
            >
                &nbsp;
            </button>
            <button
                type="button"
                title="purple"
                className={`${styles.themeColor} ${styles.purple}`}
                onClick={() => onChangeColor('purple')}
            >
                &nbsp;
            </button>
        </div>
    </div>
);

export default ThemeSwitcher;
