export interface Theme {
    name: string,
    colors: {
        backgroundPrimary: string,
        backgroundSecondary: string,
        icon: string
    }
}

export interface Themes {
    [key: string]: Theme
}