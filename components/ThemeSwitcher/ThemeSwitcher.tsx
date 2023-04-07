import { ColorTheme, FontTheme } from '@models/theme';
import styles from './ThemeSwitcher.module.css';

type ThemeSwitcherProps = {
    visible: boolean;
    onChangeColor: (color: ColorTheme) => void;
    onChangeFont: (font: FontTheme) => void;
}

const ThemeSwitcher = ({
    visible,
    onChangeColor,
    onChangeFont,
}: ThemeSwitcherProps): JSX.Element => (
    <div className={styles.bar} hidden={!visible}>
        <div className={styles.themeOptions}>
            <div className={styles.colorThemeBar}>
                <h3>Colors</h3>
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
            <div className={styles.fontThemeBar}>
                <h3 className={styles.heading}>Font</h3>
                <div className={styles.fontButtons}>
                    <button
                        type="button"
                        title="Chnage to a Monospace Font"
                        className={`${styles.fontStyle} ${styles.monospaced}`}
                        onClick={() => onChangeFont('mono')}
                    >
                        Monospace
                    </button>
                    <button
                        type="button"
                        title="Change to a Sans-Serif Font"
                        className={`${styles.fontStyle} ${styles.sansSerif}`}
                        onClick={() => onChangeFont('sans')}
                    >
                        Sans-Serif
                    </button>
                    <button
                        type="button"
                        title="Change to a Serif Font"
                        className={`${styles.fontStyle} ${styles.serif}`}
                        onClick={() => onChangeFont('serif')}
                    >
                        Serif
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default ThemeSwitcher;
