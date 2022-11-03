import styled from 'styled-components';

const Bar = styled.div`
    text-align: center;
    margin: 12px 0;
`;

type ThemeSwitcherProps = {
    visible: boolean
    toggleBar: () => void
}

const ThemeSwitcher = ({
    visible,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars-experimental
    toggleBar,
}: ThemeSwitcherProps): JSX.Element => (
    <Bar hidden={!visible}>
        <div>THEME SWITCHER</div>
    </Bar>
);

export default ThemeSwitcher;
