/* eslint-disable max-len */
import { useTheme } from '@hooks/useTheme';
import styles from './ThemeSwitcher.module.css';

type ThemeSwitcherProps = {
    visible: boolean;
    onClose: () => void;
}

const ThemeSwitcher = ({
    visible,
    onClose,
}: ThemeSwitcherProps): JSX.Element => {
    const {
        changeColor,
        changeTheme,
        changeWidth,
    } = useTheme();

    return (
        <div className={styles.themeSelector} hidden={!visible}>
            <button
                type="button"
                title="Close the theme selector"
                className={styles.closeButton}
                onClick={() => onClose()}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <h3>Choose Theme</h3>
            <div className={styles.buttonRow}>
                <div className={styles.buttonContainer}>
                    <button
                        type="button"
                        title="Change theme to match system"
                        className={styles.svgButton}
                        onClick={() => changeTheme('system')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                        </svg>

                    </button>
                    Match System
                </div>
                <div className={styles.buttonContainer}>
                    <button
                        type="button"
                        title="Change theme to light"
                        className={styles.svgButton}
                        onClick={() => changeTheme('light')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                        </svg>
                    </button>
                    Light Mode
                </div>
                <div className={styles.buttonContainer}>
                    <button
                        type="button"
                        title="Change theme to dark"
                        className={styles.svgButton}
                        onClick={() => changeTheme('dark')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                        </svg>
                    </button>
                    Dark Mode
                </div>
            </div>
            <h3>Choose Color Theme</h3>
            <div className={styles.buttonRow}>
                <div className={styles.buttonContainer}>
                    <button
                        type="button"
                        title="Change the color theme to red"
                        className={`${styles.themeColor} ${styles.red}`}
                        onClick={() => changeColor('red')}
                    >
                        &nbsp;
                    </button>
                    Red
                </div>
                <div className={styles.buttonContainer}>
                    <button
                        type="button"
                        title="Change the color theme to orange"
                        className={`${styles.themeColor} ${styles.orange}`}
                        onClick={() => changeColor('orange')}
                    >
                        &nbsp;
                    </button>
                    Orange
                </div>
                <div className={styles.buttonContainer}>
                    <button
                        type="button"
                        title="Change the color theme to green"
                        className={`${styles.themeColor} ${styles.green}`}
                        onClick={() => changeColor('green')}
                    >
                        &nbsp;
                    </button>
                    Green
                </div>
                <div className={styles.buttonContainer}>
                    <button
                        type="button"
                        title="Change the color theme to blue"
                        className={`${styles.themeColor} ${styles.blue}`}
                        onClick={() => changeColor('blue')}
                    >
                        &nbsp;
                    </button>
                    Blue
                </div>
                <div className={styles.buttonContainer}>
                    <button
                        type="button"
                        title="Change the color theme to purple"
                        className={`${styles.themeColor} ${styles.purple}`}
                        onClick={() => changeColor('purple')}
                    >
                        &nbsp;
                    </button>
                    Purple
                </div>
            </div>
            <h3>Choose Width</h3>
            <div className={`${styles.buttonRow} ${styles.bottomButtonRow}`}>
                <div className={styles.buttonContainer}>
                    <button
                        type="button"
                        title="Change the width to be slim"
                        className={styles.svgButton}
                        onClick={() => changeWidth('slim')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
                        </svg>
                    </button>
                    Slim Width
                </div>
                <div className={styles.buttonContainer}>
                    <button
                        type="button"
                        title="Change the width to be the normal width"
                        className={styles.svgButton}
                        onClick={() => changeWidth('normal')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </button>
                    Normal Width
                </div>
                <div className={styles.buttonContainer}>
                    <button
                        type="button"
                        title="Change the width to be wide"
                        className={styles.svgButton}
                        onClick={() => changeWidth('wide')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                        </svg>
                    </button>
                    Wide Mode
                </div>
            </div>
        </div>
    );
};

export default ThemeSwitcher;
