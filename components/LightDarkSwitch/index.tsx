/* eslint-disable max-len */
import styled from 'styled-components';

const Switch = styled.svg`
    max-height: 1.2rem;
    vertical-align: middle;

    rect#togglebutton-rect {
        stroke: ${({ theme }) => theme.colors.blue};;
    }

    rect#togglebutton-rect {
        stroke: ${({ theme }) => theme.colors.mediumBlue};
    }

    circle#togglebutton-circle-lightmode,
    circle#togglebutton-circle-darkmode {
        fill: ${({ theme }) => theme.colors.blue};
    }

    &:hover circle#togglebutton-circle-lightmode,
    &:hover circle#togglebutton-circle-darkmode {
        fill: ${({ theme }) => theme.colors.mediumBlue};
    }

    #togglebutton-circle-lightmode {
        /* display: var(--svg-display-lightmode); */
        display: ${({ theme }) => (theme.id === 'light_theme' ? 'inline' : 'none')};
    }

    #togglebutton-circle-darkmode {
        display: ${({ theme }) => (theme.id === 'light_theme' ? 'none' : 'inline')};
    }

    #togglebutton-star {
        display: ${({ theme }) => (theme.id === 'light_theme' ? 'inline' : 'none')};
    }

    #togglebutton-sun-ellipse,
    #togglebutton-sun-star {
        fill: #fff700;
    }

    #togglebutton-moon {
        fill: #363636;
        display: ${({ theme }) => (theme.id === 'light_theme' ? 'none' : 'inline')};
    }
`;

interface LightDarkSwitchProps {
    onClick: () => void
}

const LightDarkSwitch = ({ onClick }: LightDarkSwitchProps): JSX.Element => (
    <Switch
        width="64"
        height="64"
        id="toggle-button"
        viewBox="0 0 16.933333 8.466667"
        onClick={onClick}
    >
        <g id="layer1">
            <rect
                id="togglebutton-rect"
                style={{
                    opacity: 1,
                    fill: 'none',
                    fillRule: 'evenodd',
                    strokeWidth: 0.505414,
                    strokeMiterlimit: 4,
                    strokeDasharray: 'none',
                    strokeOpacity: 1,
                }}
                width="16.427919"
                height="7.9612527"
                x="0.25116557"
                y="0.25323313"
                rx="4.1069798"
            />
            <circle
                id="togglebutton-circle-lightmode"
                style={{
                    fillOpacity: 1,
                    strokeWidth: 0.405981,
                }}
                cx="4.374023"
                cy="4.2373543"
                r="3.175"
            />
            <circle
                id="togglebutton-circle-darkmode"
                style={{
                    fillOpacity: 1,
                    strokeWidth: 0.405981,
                }}
                cx="12.658789"
                cy="4.2373543"
                r="3.175"
            />
            <g
                id="togglebutton-star"
                transform="matrix(1.4921861,0,0,1.4921861,-2.1293234,-1.8964798)"
            >
                <ellipse
                    id="togglebutton-sun-ellipse"
                    style={{
                        fillOpacity: 1,
                        stroke: 'none',
                        strokeWidth: 0.325431,
                        strokeMiterlimit: 4,
                        strokeDasharray: 'none',
                        strokeOpacity: 1,
                    }}
                    cx="4.306366"
                    cy="4.1159325"
                    rx="0.94877928"
                    ry="0.94877934"
                />
                <path
                    id="togglebutton-sun-star"
                    style={{
                        fillOpacity: 1,
                        stroke: 'none',
                        strokeWidth: 0.491941,
                        strokeMiterlimit: 4,
                        strokeDasharray: 'none',
                        strokeOpacity: 1,
                    }}
                    d="m -19.447479,-8.6303994 -0.512213,-0.1090496 0.291397,0.435134 -0.431492,-0.2967641 0.102698,0.5135244 -0.28508,-0.4392991 -0.101637,0.5137353 -0.09527,-0.5149547 -0.290499,0.4357346 0.10905,-0.5122131 -0.435134,0.2913973 0.296764,-0.4314917 -0.513524,0.1026974 0.439299,-0.2850796 -0.513735,-0.1016373 0.514954,-0.095267 -0.435734,-0.2904986 0.512213,0.1090496 -0.291398,-0.4351341 0.431492,0.2967642 -0.102697,-0.5135244 0.285079,0.4392991 0.101638,-0.5137355 0.09527,0.5149548 0.290499,-0.4357345 -0.10905,0.512213 0.435134,-0.2913972 -0.296764,0.4314916 0.513525,-0.1026973 -0.439299,0.2850796 0.513735,0.1016373 -0.514955,0.095267 z"
                />
            </g>
            <path
                id="togglebutton-moon"
                style={{
                    opacity: 1,
                    fillOpacity: 1,
                    stroke: 'none',
                    strokeWidth: 0.45341,
                    strokeMiterlimit: 4,
                    strokeDasharray: 'none',
                    strokeOpacity: 1,
                }}
                d="m 12.531035,1.951326 a 2.2245468,2.2245468 0 0 0 -0.510973,0.067303 2.2245468,2.2245468 0 0 1 1.492182,2.1005675 2.2245468,2.2245468 0 0 1 -1.681693,2.1572438 2.2245468,2.2245468 0 0 0 0.732365,0.1239795 2.2245468,2.2245468 0 0 0 2.224547,-2.2245471 2.2245468,2.2245468 0 0 0 -2.224547,-2.224547 2.2245468,2.2245468 0 0 0 -0.03187,0 z"
            />
        </g>
    </Switch>
);

export default LightDarkSwitch;
