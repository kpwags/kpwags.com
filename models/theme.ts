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

export interface Fonts {
    primary: string
    serif: string
    secondary: string
    webSafe: string
}

export interface Theme {
    id: string
    name: string
    colors: ThemeColors
    fonts: Fonts
    boxShadow: string
}

export interface ThemeDefinition {
    light: Theme,
    dark: Theme
}

export interface ThemeData {
    data: ThemeDefinition
}
