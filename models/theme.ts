export interface ThemeColors {
    background: string,
    text: string,
    link: string,
    h1: string,
    h2: string,
    blue: string,
    mediumBlue: string,
}

export interface Theme {
    id: string,
    name: string,
    colors: ThemeColors,
    font: string
}

export interface ThemeDefinition {
    light: Theme,
    dark: Theme
}

export interface ThemeData {
    data: ThemeDefinition
}
