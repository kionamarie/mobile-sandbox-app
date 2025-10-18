export const LightTheme = {
    id: 'light',
    name: 'Light',
    colors: {
        background: 'floralwhite',
        text: 'darkslategray',
        title: 'black',
    }
}

export const DarkTheme = {
    id: 'dark',
    name: 'Dark',
    colors: {
        background: 'black',
        text: 'floralwhite',
        title: 'white',
    }
}

export const GoldTheme = {
    id: 'gold',
    name: 'Gold',
    colors: {
        background: 'palegoldenrod',
        text: 'goldenrod',
        title: 'darkgoldenrod',
    }
}

export const THEMES = [LightTheme, DarkTheme, GoldTheme];
export const THEME_KEY = 'APP_THEME';