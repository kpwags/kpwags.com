import { useEffect, useState } from 'react';
import Theme, { ColorTheme } from '@models/theme';
import styles from './SettingsDrawer.module.css';

type SettingsDrawerProps = {
    visible: boolean;
    onChangeMode: (mode: Theme) => void;
    onChangeColor: (color: ColorTheme) => void;
    onClose: () => void;
}

const SettingsDrawer = ({
    visible,
    onChangeMode,
    onChangeColor,
    onClose,
}: SettingsDrawerProps): JSX.Element => {
    const [isVisible, setIsVisible] = useState<boolean>(visible);

    useEffect(() => {
        setIsVisible(visible);
    }, [visible]);

    return (
        <div hidden={!isVisible} className={styles.settingsDrawer}>
            <div className={styles.closeLine}>
                <button type="button" className={styles.closeButton} onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        {/* eslint-disable-next-line max-len */}
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                    </svg>
                </button>
            </div>
            <div className={`${styles.themeSection} ${styles.modeSection}`}>
                <div className={styles.label}>Mode</div>
                <div className={styles.options}>
                    <button
                        type="button"
                        title="system"
                        data-mode="system"
                        onClick={() => onChangeMode('system')}
                        className={styles.modeButton}
                    >
                        System
                    </button>
                    <button
                        type="button"
                        title="light"
                        data-mode="light"
                        onClick={() => onChangeMode('light')}
                        className={styles.modeButton}
                    >
                        Light
                    </button>
                    <button
                        type="button"
                        title="dark"
                        data-mode="dark"
                        onClick={() => onChangeMode('dark')}
                        className={styles.modeButton}
                    >
                        Dark
                    </button>
                </div>
            </div>
            <div className={styles.themeSection}>
                <div className={styles.label}>Color</div>
                <div className={styles.options}>
                    <button
                        type="button"
                        title="red"
                        data-color="red"
                        onClick={() => onChangeColor('red')}
                        className={styles.colorButton}
                    >
                        &nbsp;
                    </button>
                    <button
                        type="button"
                        title="orange"
                        data-color="orange"
                        onClick={() => onChangeColor('orange')}
                        className={styles.colorButton}
                    >
                        &nbsp;
                    </button>
                    <button
                        type="button"
                        title="green"
                        data-color="green"
                        onClick={() => onChangeColor('green')}
                        className={styles.colorButton}
                    >
                        &nbsp;
                    </button>
                    <button
                        type="button"
                        title="blue"
                        data-color="blue"
                        onClick={() => onChangeColor('blue')}
                        className={styles.colorButton}
                    >
                        &nbsp;
                    </button>
                    <button
                        type="button"
                        title="purple"
                        data-color="purple"
                        onClick={() => onChangeColor('purple')}
                        className={styles.colorButton}
                    >
                        &nbsp;
                    </button>
                </div>
            </div>
        </div>
    );
};
export default SettingsDrawer;
