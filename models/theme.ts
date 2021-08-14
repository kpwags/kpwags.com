export interface ThemeColors {
    background: string
    text: string
    link: string
    h1: string
    h2: string
    blue: string
    mediumBlue: string
    lightBlue: string
    darkGray: string
}

export interface Theme {
    id: string
    name: string
    colors: ThemeColors
    font: string
    boxShadow: string
}

export interface ThemeDefinition {
    light: Theme,
    dark: Theme
}

export interface ThemeData {
    data: ThemeDefinition
}
