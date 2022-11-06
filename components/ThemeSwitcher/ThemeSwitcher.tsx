import { ColorTheme, FontTheme } from '@models/theme';
import styled from 'styled-components';

const Bar = styled.div`
    text-align: center;
    margin: 12px 0;
`;

const ThemeOptions = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr;
`;

const ColorThemeBar = styled.div`
    text-align: left;

    h3 {
        margin-bottom: 0.3rem;
    }

    .buttons {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(75px, 1fr));
        grid-column-gap: 15px;

        button.theme-color {
            border-style: solid;
            cursor: pointer;

            &.red {
                border-color: var(--primary-color-red);
                background: var(--primary-color-red);
            }

            &.orange {
                border-color: var(--primary-color-orange);
                background: var(--primary-color-orange);
            }

            &.green {
                border-color: var(--primary-color-green);
                background: var(--primary-color-green);
            }

            &.blue {
                border-color: var(--primary-color-blue);
                background: var(--primary-color-blue);
            }

            &.purple {
                border-color: var(--primary-color-purple);
                background: var(--primary-color-purple);
            }
        }
    }
`;

const FontThemeBar = styled.div`
    text-align: left;

h3 {
    margin-bottom: 0.3rem;
}

.buttons {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-column-gap: 15px;

    button.font-style {
        border-style: solid;
        border-color: var(--primary-color-1);
        background: var(--grey-1);
        cursor: pointer;

        :hover {
            background: var(--primary-color-2);
        }

        &.sans-serif {
            font-family: var(--sans-serif);
        }

        &.serif {
            font-family: var(--serif);
        }

        &.monospaced {
            font-family: var(--monospaced);
        }
    }
}
`;

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
    <Bar hidden={!visible}>
        <ThemeOptions>
            <ColorThemeBar>
                <h3>Colors</h3>
                <div className="buttons">
                    <button
                        type="button"
                        title="red"
                        className="theme-color red"
                        onClick={() => onChangeColor('red')}
                    >
                        &nbsp;
                    </button>
                    <button
                        type="button"
                        title="orange"
                        className="theme-color orange"
                        onClick={() => onChangeColor('orange')}
                    >
                        &nbsp;
                    </button>
                    <button
                        type="button"
                        title="green"
                        className="theme-color green"
                        onClick={() => onChangeColor('green')}
                    >
                        &nbsp;
                    </button>
                    <button
                        type="button"
                        title="blue"
                        className="theme-color blue"
                        onClick={() => onChangeColor('blue')}
                    >
                        &nbsp;
                    </button>
                    <button
                        type="button"
                        title="purple"
                        className="theme-color purple"
                        onClick={() => onChangeColor('purple')}
                    >
                        &nbsp;
                    </button>
                </div>
            </ColorThemeBar>
            <FontThemeBar>
                <h3>Font</h3>
                <div className="buttons">
                    <button
                        type="button"
                        title="Change to a Sans-Serif Font"
                        className="font-style sans-serif"
                        onClick={() => onChangeFont('sans')}
                    >
                        Sans-Serif
                    </button>
                    <button
                        type="button"
                        title="Change to a Serif Font"
                        className="font-style serif"
                        onClick={() => onChangeFont('serif')}
                    >
                        Serif
                    </button>
                    <button
                        type="button"
                        title="Chnage to a Monospace Font"
                        className="font-style monospaced"
                        onClick={() => onChangeFont('mono')}
                    >
                        Monospace
                    </button>
                </div>
            </FontThemeBar>
        </ThemeOptions>
    </Bar>
);

export default ThemeSwitcher;
