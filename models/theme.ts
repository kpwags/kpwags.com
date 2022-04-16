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
    photoListBackground: string
    photoListBackgroundHover: string
}

export interface Fonts {
    primary: string
    alternate: string
    header: string
}

export interface Theme {
    id: string
    name: string
    colors: ThemeColors
    fonts: Fonts
    boxShadow: string
}

export interface ThemeDefinition {
    light: Theme
    dark: Theme
    lightSerif: Theme
    darkSerif: Theme
    lightMono: Theme
    darkMono: Theme
}

export interface ThemeData {
    data: ThemeDefinition
}
