import { Theme, Themes } from '../models/theme'
import { iconSun, iconMoon } from '../assets/images'

const light: Theme = {
    name: 'light',
    colors: {
        backgroundPrimary: '#4682b4',
        backgroundSecondary: 'rgb(237, 240, 241)',
        icon: `${iconMoon}`
    }
}

const dark: Theme = {
    name: 'dark',
    colors: {
        backgroundPrimary: '#222222',
        backgroundSecondary: '#141414',
        icon: `${iconSun}`
    }
}

export const themes: Themes = { light, dark }